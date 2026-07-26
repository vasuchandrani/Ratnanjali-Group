import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-basalt px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display-decorative text-7xl font-bold gold-gradient-text">404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold text-gold-soft">Page not found</h2>
        <p className="mt-2 font-body text-sm text-sandstone">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-gold/40 bg-transparent px-6 py-3 font-label text-sm uppercase tracking-[0.2em] text-gold-soft transition-all hover:bg-gold/10 hover:border-gold"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-basalt px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold tracking-tight text-gold-soft">
          This page didn't load
        </h1>
        <p className="mt-2 font-body text-sm text-sandstone">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center border border-gold/40 bg-transparent px-5 py-2.5 font-label text-sm uppercase tracking-[0.2em] text-gold-soft transition-all hover:bg-gold/10"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-gold/20 bg-transparent px-5 py-2.5 font-label text-sm uppercase tracking-[0.2em] text-sandstone transition-all hover:border-gold/40 hover:text-gold-soft"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          title: "Ratnanjali Group — Building Landmarks. Creating Value.",
        },
        {
          name: "description",
          content:
            "Ratnanjali Group is an Ahmedabad-based real estate developer crafting landmark residential, commercial, hospitality and mixed-use developments.",
        },
        { name: "author", content: "Ratnanjali Group" },
        {
          property: "og:title",
          content: "Ratnanjali Group — Building Landmarks. Creating Value.",
        },
        {
          property: "og:description",
          content:
            "Ratnanjali Group is an Ahmedabad-based real estate developer crafting landmark residential, commercial, hospitality and mixed-use developments.",
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Ratnanjali Group — Building Landmarks. Creating Value.",
        },
        {
          name: "twitter:description",
          content:
            "Ratnanjali Group is an Ahmedabad-based real estate developer crafting landmark residential, commercial, hospitality and mixed-use developments.",
        },
        {
          property: "og:image",
          content:
            "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6c8eaec9-3140-47f9-b878-4ba999f37827/id-preview-b385cd98--10d7a54c-14b9-41c4-aa4a-c6b30b1c234c.lovable.app-1781714894466.png",
        },
        {
          name: "twitter:image",
          content:
            "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6c8eaec9-3140-47f9-b878-4ba999f37827/id-preview-b385cd98--10d7a54c-14b9-41c4-aa4a-c6b30b1c234c.lovable.app-1781714894466.png",
        },
      ],
      links: [
        {
          rel: "icon",
          type: "image/png",
          href: "https://cdn.sanity.io/images/72qij255/production/f3df5dc047d270fb01688f4c54086940725f8b35-1600x800.png",
        },
        {
          rel: "apple-touch-icon",
          href: "https://cdn.sanity.io/images/72qij255/production/f3df5dc047d270fb01688f4c54086940725f8b35-1600x800.png",
        },

        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Cinzel+Decorative:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Marcellus&display=swap",
        },
        { rel: "stylesheet", href: appCss },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
