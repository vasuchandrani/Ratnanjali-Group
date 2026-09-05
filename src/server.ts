import fs from "node:fs";
import path from "node:path";
import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

const MIME_TYPES: Record<string, string> = {
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".txt": "text/plain; charset=utf-8",
};

function tryServeStatic(urlStr: string): Response | null {
  try {
    const url = new URL(urlStr);
    const pathname = decodeURIComponent(url.pathname);
    const ext = path.extname(pathname).toLowerCase();
    if (!ext || !MIME_TYPES[ext]) return null;

    const relPath = pathname.startsWith("/") ? pathname.slice(1) : pathname;

    // Search in all possible build & public directories
    const searchDirs = [
      path.resolve(process.cwd(), ".output/public"),
      path.resolve(process.cwd(), "public"),
      path.resolve(process.cwd(), "public_html"),
      path.resolve(process.cwd(), ".vercel/output/static"),
      path.resolve(process.cwd(), "dist"),
    ];

    for (const dir of searchDirs) {
      const fullPath = path.join(dir, relPath);
      if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
        const fileContent = fs.readFileSync(fullPath);
        return new Response(fileContent, {
          status: 200,
          headers: {
            "content-type": MIME_TYPES[ext],
            "cache-control": ext === ".html" ? "no-cache" : "public, max-age=31536000, immutable",
          },
        });
      }
    }
  } catch (err) {
    // If static file reading fails, continue to SSR handler
  }
  return null;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const staticResponse = tryServeStatic(request.url);
    if (staticResponse) {
      return staticResponse;
    }

    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
