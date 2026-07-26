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
    cover: "https://cdn.sanity.io/images/72qij255/production/68b09cf1d0f3bf398999205a817907072f258909-2377x1351.jpg",
    gallery: [
      "https://cdn.sanity.io/images/72qij255/production/68b09cf1d0f3bf398999205a817907072f258909-2377x1351.jpg",
      "https://cdn.sanity.io/images/72qij255/production/041e95c9767290c4d27a23b022c4783a7ca672ac-2377x1351.jpg",
      "https://cdn.sanity.io/images/72qij255/production/6c48b68cce762d7bb5065d7e14b731a307dae2f0-2377x1351.jpg",
      "https://cdn.sanity.io/images/72qij255/production/c8faeff845ac36e0d3fb3e746874d9d20bc6fed1-2377x1351.jpg"
    ],
    description:
      "A maverick residential project featuring five iconic towers, private foyers, and a comprehensive clubhouse — built for the modern royals.",
    highlights: ["5 Iconic Towers", "Private Foyer Per Unit", "60+ Amenities", "2 Cars Per Apartment"],
    brochure: "/brochures/hastinapur.pdf",
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
    cover: "https://cdn.sanity.io/images/72qij255/production/7e4c6d81b064cb56d958e98b0e752771b3cbebf7-2846x2058.jpg",
    gallery: [
      "https://cdn.sanity.io/images/72qij255/production/7e4c6d81b064cb56d958e98b0e752771b3cbebf7-2846x2058.jpg",
      "https://cdn.sanity.io/images/72qij255/production/75c9d9c4ebd0d8ac7e3d85b85719da92e417ad82-2846x2058.jpg"
    ],
    description:
      "A spectacular glass-and-greenery business landmark in Prahladnagar — high-end showrooms, private garden offices, and a grand foyer that exudes prestige.",
    highlights: ["Glass Façade with Sky Gardens", "Private Garden Offices", "High-End Showrooms", "Grand Entrance Foyer"],
    brochure: "/brochures/ratnanjali-square.pdf",
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
    cover: "https://cdn.sanity.io/images/72qij255/production/34c84b125a514a176a5a81b67c65dfa27305354c-1667x1210.jpg",
    gallery: [
      "https://cdn.sanity.io/images/72qij255/production/34c84b125a514a176a5a81b67c65dfa27305354c-1667x1210.jpg",
      "https://cdn.sanity.io/images/72qij255/production/04c59c86a8025cfc424cee2579d44411f28c454b-1667x1210.jpg"
    ],
    description:
      "A swanky new-age business complex at the PDR crossroads — a signature edifice with hanging office spaces, spacious balconies, and green pockets throughout.",
    highlights: ["Hanging Architect Office", "Maximum Visibility", "Strategic PDR Location", "Multi-Format Retail"],
    brochure: "/brochures/ratnanjali-solitaire.pdf",
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
    cover: "https://cdn.sanity.io/images/72qij255/production/3aa8c4287073105800bfaf83324d820fd8a9a7af-1400x904.jpg",
    gallery: [
      "https://cdn.sanity.io/images/72qij255/production/3aa8c4287073105800bfaf83324d820fd8a9a7af-1400x904.jpg",
      "https://cdn.sanity.io/images/72qij255/production/156845d757ed90274f8579fad93d5584a06003d9-604x639.jpg"
    ],
    description:
      "A one-of-a-kind sustainable weekend estate — heritage pool villas, a 60,000 sq.ft. clubhouse, lake lagoon, Nakshatra Van, and an organic, vehicle-free township.",
    highlights: ["Heritage Pool Villas", "60,000 sq.ft. Clubhouse", "Lake Lagoon & Nakshatra Van", "Vehicle-Free Township"],
    brochure: "/brochures/ayodhya.pdf",
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
    cover: "https://cdn.sanity.io/images/72qij255/production/985e4e9533a44ff92e7ea52091db7274caba847d-843x582.png",
    gallery: ["https://cdn.sanity.io/images/72qij255/production/985e4e9533a44ff92e7ea52091db7274caba847d-843x582.png"],
    description:
      "Premium riverside apartments in Paldi — modern, spacious and exquisite homes a short walk from the Sabarmati Riverfront.",
    highlights: ["Walk to Riverfront", "Earthquake-Resistant", "Designed Main Gate", "Pollution-Free Zone"],
    brochure: "/brochures/ratnaruchi-vatika.pdf",
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
    cover: "https://cdn.sanity.io/images/72qij255/production/d7850374e8734ce7a896cf6d6243cdac37c756c4-1191x796.png",
    gallery: [
      "https://cdn.sanity.io/images/72qij255/production/d7850374e8734ce7a896cf6d6243cdac37c756c4-1191x796.png",
      "https://cdn.sanity.io/images/72qij255/production/cc901a56adf9f659518cd86e7d857607cb644dc7-1189x553.png",
      "https://cdn.sanity.io/images/72qij255/production/8c08bb7b9879d006068cdf3acc2bbeb8723fd200-1146x771.png",
      "https://cdn.sanity.io/images/72qij255/production/df97324bf4b7875133996be3fb05ca7411dcffc7-1189x661.png",
      "https://cdn.sanity.io/images/72qij255/production/15bb8fa6bb5f41bed973b64b9f6c225eb585f6b7-1155x808.png"
    ],
    description:
      "A premium residential redevelopment project designed for modern urban living, featuring high-end 3 BHK layouts, mechanical parking, private balconies, and exceptional specifications in the heart of Ahmedabad.",
    highlights: ["Premium 3 BHK Layouts", "Modern Redevelopment", "Mechanical Parking", "Spacious Balconies"],
    brochure: "/SHEFALI 2.0_ELEVATION DEVELOPMENT.pdf",
  },
];

export const getProjectsByCategory = (cat?: ProjectCategory) =>
  cat ? projects.filter((p) => p.category === cat) : projects;

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
