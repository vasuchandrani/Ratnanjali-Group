export type ProjectCategory =
  | "residential"
  | "commercial"
  | "hospitality"
  | "mixed-use"
  | "land";

export type ProjectStatus = "completed" | "ongoing" | "upcoming";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  category: ProjectCategory;
  categoryLabel: string;
  status: ProjectStatus;
  location: string;
  year: string;
  configuration: string;
  cover: string;
  gallery: string[];
  description: string;
  highlights: string[];
  brochure?: string;
  mapLink?: string;
}

export const projects: Project[] = [
  {
    slug: "hastinapur",
    name: "Hastinapur",
    tagline: "The Royal Legacy",
    category: "residential",
    categoryLabel: "Residential",
    status: "ongoing",
    location: "Prahladnagar, Ahmedabad",
    year: "2024",
    configuration: "3 & 4 BHK · 5 Towers",
    cover: "/projects/hastinapur/cover.jpg",
    gallery: [
      "/projects/hastinapur/cover.jpg",
      "/projects/hastinapur/gallery-1.jpg",
      "/projects/hastinapur/gallery-2.jpg",
      "/projects/hastinapur/gallery-3.jpg"
    ],
    description:
      "A maverick residential project built for modern royals, featuring five iconic towers, private foyers, and a comprehensive clubhouse.",
    highlights: ["5 Iconic Towers", "Private Foyer Per Unit", "60+ Amenities", "2 Cars Per Apartment"],
    brochure: "/brochures/hastinapur.pdf",
    mapLink: "https://share.google/08uBK62OhfcJWAEHN",
  },
  {
    slug: "ratnanjali-square",
    name: "Ratnanjali Square",
    tagline: "The New Address of Success",
    category: "commercial",
    categoryLabel: "Commercial",
    status: "completed",
    location: "Prahladnagar, Ahmedabad",
    year: "2022",
    configuration: "Showrooms · Offices · Garden Suites",
    cover: "/projects/ratnanjali-square/cover.jpg",
    gallery: [
      "/projects/ratnanjali-square/cover.jpg",
      "/projects/ratnanjali-square/gallery-1.jpg"
    ],
    description:
      "A spectacular glass-and-greenery business landmark in Prahladnagar, featuring high-end showrooms, private garden offices, and a grand foyer that exudes prestige.",
    highlights: ["Glass Façade with Sky Gardens", "Private Garden Offices", "High-End Showrooms", "Grand Entrance Foyer"],
    brochure: "/brochures/ratnanjali-square.pdf",
    mapLink: "https://share.google/qo9C7Iq6K96n2mMFG",
  },
  {
    slug: "ratnanjali-solitaire",
    name: "Ratnanjali Solitaire",
    tagline: "Defining the Enterprises of the Future",
    category: "commercial",
    categoryLabel: "Commercial",
    status: "ongoing",
    location: "Prernatirth Derasar Road, Ahmedabad",
    year: "2025",
    configuration: "Retail · Workspaces · Hanging Offices",
    cover: "/projects/ratnanjali-solitaire/cover.jpg",
    gallery: [
      "/projects/ratnanjali-solitaire/cover.jpg",
      "/projects/ratnanjali-solitaire/gallery-1.jpg"
    ],
    description:
      "A swanky new-age business complex at the PDR crossroads, highlighting a signature edifice with hanging office spaces, spacious balconies, and green pockets throughout.",
    highlights: ["Hanging Architect Office", "Maximum Visibility", "Strategic PDR Location", "Multi-Format Retail"],
    brochure: "/brochures/ratnanjali-solitaire.pdf",
    mapLink: "https://share.google/VQPywd7Sg0he7Xwwr",
  },
  {
    slug: "ayodhya",
    name: "Ayodhya",
    tagline: "Soil to Soul · Exquisite Weekend Homes",
    category: "mixed-use",
    categoryLabel: "Weekend Estate",
    status: "ongoing",
    location: "Thol — Medha, Ahmedabad",
    year: "2025",
    configuration: "Heritage 2 BHK Pool Villas",
    cover: "/projects/ayodhya/cover.jpg",
    gallery: [
      "/projects/ayodhya/cover.jpg",
      "/projects/ayodhya/gallery-1.jpg"
    ],
    description:
      "A one-of-a-kind sustainable weekend estate featuring heritage pool villas, a 60,000 sq.ft. clubhouse, lake lagoon, Nakshatra Van, and an organic, vehicle free township.",
    highlights: ["Heritage Pool Villas", "60,000 sq.ft. Clubhouse", "Lake Lagoon & Nakshatra Van", "Vehicle Free Township"],
    brochure: "/brochures/ayodhya.pdf",
    mapLink: "https://share.google/KEp86LiBjf61yg93m",
  },
  {
    slug: "ratnaruchi-vatika",
    name: "Ratnaruchi Vatika",
    tagline: "Where Life is a Celebration",
    category: "residential",
    categoryLabel: "Residential",
    status: "completed",
    location: "Paldi, Ahmedabad",
    year: "2019",
    configuration: "Riverside 1 & 2 BHK",
    cover: "/projects/ratnaruchi-vatika/cover.png",
    gallery: ["/projects/ratnaruchi-vatika/cover.png"],
    description:
      "Premium riverside apartments in Paldi, offering modern, spacious, and exquisite homes just a short walk from the Sabarmati Riverfront.",
    highlights: ["Walk to Riverfront", "Earthquake-Resistant", "Designed Main Gate", "Pollution-Free Zone"],
    brochure: "/brochures/ratnaruchi-vatika.pdf",
    mapLink: "https://share.google/F9LL1wReFHZXll2zt",
  },
  {
    slug: "shefali-2",
    name: "Shefali 2.0",
    tagline: "A Premium Redevelopment Landmark",
    category: "residential",
    categoryLabel: "Redevelopment",
    status: "upcoming",
    location: "Ahmedabad",
    year: "2026",
    configuration: "3 BHK Premium Apartments",
    cover: "/projects/shefali-2/cover.png",
    gallery: [
      "/projects/shefali-2/cover.png",
      "/projects/shefali-2/gallery-1.png",
      "/projects/shefali-2/gallery-2.png",
      "/projects/shefali-2/gallery-3.png",
      "/projects/shefali-2/gallery-4.png"
    ],
    description:
      "A premium residential redevelopment project designed for modern urban living, featuring high-end 3 BHK layouts, mechanical parking, private balconies, and exceptional specifications in the heart of Ahmedabad.",
    highlights: ["Premium 3 BHK Layouts", "Modern Redevelopment", "Mechanical Parking", "Spacious Balconies"],
    brochure: "/SHEFALI 2.0_ELEVATION DEVELOPMENT.pdf",
    mapLink: "https://share.google/ESCdNJ5HJuQOrO5P0",
  },
  {
    slug: "ratnanjali-elysium",
    name: "Ratnanjali Elysium",
    tagline: "Beyond Living, Into Paradise",
    category: "residential",
    categoryLabel: "Residential",
    status: "ongoing",
    location: "Motera, Ahmedabad",
    year: "2026",
    configuration: "3 & 4 BHK Premium Homes",
    cover: "/projects/ratnanjali-elysium/cover.png",
    gallery: [
      "/projects/ratnanjali-elysium/cover.png",
      "/projects/ratnanjali-elysium/gallery-1.png",
      "/projects/ratnanjali-elysium/gallery-2.png",
      "/projects/ratnanjali-elysium/gallery-3.png"
    ],
    description:
      "A premium 100% vegetarian residential community featuring spacious 3 & 4 BHK homes, Vaastu compliant layouts, central garden, gazebo, children's play area, and banquet hall in the rapidly growing hub of Motera, Ahmedabad.",
    highlights: ["Spacious 3 & 4 BHK Homes", "Jain Derasar & Upashray", "100% Vegetarian Community", "Vaastu Compliant Design"],
    brochure: "/Ratnanjali_Elysium.pdf",
    mapLink: "https://share.google/ESCdNJ5HJuQOrO5P0",
  },
];

export const getProjectsByCategory = (cat?: ProjectCategory) =>
  cat ? projects.filter((p) => p.category === cat) : projects;

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
