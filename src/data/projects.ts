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
    cover: "https://cdn.sanity.io/images/e4hmmdtc/production/da5746e1623abb61138c09d06c283752a5ef1cb3-2377x1351.jpg",
    gallery: [
      "https://cdn.sanity.io/images/e4hmmdtc/production/da5746e1623abb61138c09d06c283752a5ef1cb3-2377x1351.jpg",
      "https://cdn.sanity.io/images/e4hmmdtc/production/0e57799a4108ad3cf6d760a03856e25e1ec8065d-2377x1351.jpg",
      "https://cdn.sanity.io/images/e4hmmdtc/production/20f7fb89900219a48a24177ea9be0a72a6a244a6-2377x1351.jpg",
      "https://cdn.sanity.io/images/e4hmmdtc/production/908d5aa4a7318e94fd4bad4baacc45b4260b9c30-2377x1351.jpg"
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
    cover: "https://cdn.sanity.io/images/e4hmmdtc/production/7e4c6d81b064cb56d958e98b0e752771b3cbebf7-2846x2058.jpg",
    gallery: [
      "https://cdn.sanity.io/images/e4hmmdtc/production/7e4c6d81b064cb56d958e98b0e752771b3cbebf7-2846x2058.jpg",
      "https://cdn.sanity.io/images/e4hmmdtc/production/75c9d9c4ebd0d8ac7e3d85b85719da92e417ad82-2846x2058.jpg"
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
    cover: "https://cdn.sanity.io/images/e4hmmdtc/production/8fe4db1325bff5bbb86e09427deb89ee32fbd419-1667x1210.jpg",
    gallery: [
      "https://cdn.sanity.io/images/e4hmmdtc/production/8fe4db1325bff5bbb86e09427deb89ee32fbd419-1667x1210.jpg",
      "https://cdn.sanity.io/images/e4hmmdtc/production/622ca6b4fc27ae75f74afd5b0a7fdd682b5ae762-1667x1210.jpg"
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
    cover: "https://cdn.sanity.io/images/e4hmmdtc/production/8c466838e2b8a4dc9fd3936637bc443726679853-1600x1066.jpg",
    gallery: [
      "https://cdn.sanity.io/images/e4hmmdtc/production/8c466838e2b8a4dc9fd3936637bc443726679853-1600x1066.jpg",
      "https://cdn.sanity.io/images/e4hmmdtc/production/597288a9578ffe45fd266ceb2fefabecdebbb6cc-1600x1066.jpg",
      "https://cdn.sanity.io/images/e4hmmdtc/production/e95203bdf2dd1511e64044a50b34cb6bba3899ad-1600x1066.jpg",
      "https://cdn.sanity.io/images/e4hmmdtc/production/dab5484680d02327534fb0b255ab2a0f7bdc31eb-1600x1066.jpg",
      "https://cdn.sanity.io/images/e4hmmdtc/production/3a420b80dcb22059392e0f2c5287206d81fafa0c-1600x1066.jpg",
      "https://cdn.sanity.io/images/e4hmmdtc/production/2965cfbc2796111d9a0be49b72731aac3cc3f3c4-1600x1066.jpg",
      "https://cdn.sanity.io/images/e4hmmdtc/production/f4f00b0d5824ea0deee854b43e0148d964d9d6e6-1600x1066.jpg",
      "https://cdn.sanity.io/images/e4hmmdtc/production/83c0ce5989134ff2759252668f3ba29ca1f08b59-1600x1066.jpg",
      "https://cdn.sanity.io/images/e4hmmdtc/production/d494b19382215d9162006fc4672e92a6d5fb3f7b-1600x1066.jpg",
      "https://cdn.sanity.io/images/e4hmmdtc/production/3bae49b8751f55f3deed9a0ff733865754fe44e7-1600x1066.jpg",
      "https://cdn.sanity.io/images/e4hmmdtc/production/5c62e3daaec276174ad7079df31c69b4a68f6c5b-1600x1066.jpg",
      "https://cdn.sanity.io/images/e4hmmdtc/production/29a6f741461ae4b1d6afe2fb74b4c41be9ac76b3-1600x1066.jpg"
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
    cover: "https://cdn.sanity.io/images/e4hmmdtc/production/985e4e9533a44ff92e7ea52091db7274caba847d-843x582.png",
    gallery: ["https://cdn.sanity.io/images/e4hmmdtc/production/985e4e9533a44ff92e7ea52091db7274caba847d-843x582.png"],
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
    cover: "https://cdn.sanity.io/images/e4hmmdtc/production/d7850374e8734ce7a896cf6d6243cdac37c756c4-1191x796.png",
    gallery: [
      "https://cdn.sanity.io/images/e4hmmdtc/production/d7850374e8734ce7a896cf6d6243cdac37c756c4-1191x796.png",
      "https://cdn.sanity.io/images/e4hmmdtc/production/cc901a56adf9f659518cd86e7d857607cb644dc7-1189x553.png",
      "https://cdn.sanity.io/images/e4hmmdtc/production/865bd75af2d81404c9daa9605520373f1e4a8fdc-1146x771.png",
      "https://cdn.sanity.io/images/e4hmmdtc/production/df97324bf4b7875133996be3fb05ca7411dcffc7-1189x661.png",
      "https://cdn.sanity.io/images/e4hmmdtc/production/f79933a986211c955d0a0739433b5892cd85b35d-1155x808.png"
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
    cover: "https://cdn.sanity.io/images/e4hmmdtc/production/bd8c61e4d49482040923ae805c8dda72fa09cbe9-592x414.png",
    gallery: [
      "https://cdn.sanity.io/images/e4hmmdtc/production/bd8c61e4d49482040923ae805c8dda72fa09cbe9-592x414.png",
      "https://cdn.sanity.io/images/e4hmmdtc/production/6623dbda287f97d16215a2154595d005246d2873-592x417.png",
      "https://cdn.sanity.io/images/e4hmmdtc/production/1d264242a687d4d046d5b29c95a9d8e80176b144-634x428.png",
      "https://cdn.sanity.io/images/e4hmmdtc/production/360f24fca9df7812125ee90aa3b4c4b18f5bd8b6-865x418.png"
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
