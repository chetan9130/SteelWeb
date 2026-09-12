export interface BuildingModel {
  id: string;
  slug: string;
  name: string;
  series: string;
  category: "Cabins" | "Tiny Homes" | "Steel Buildings" | "Barndominiums" | "Sheds & More" | "Building Kits";
  tagline: string;
  description: string;
  sqft: number;
  bedrooms: number;
  bathrooms: number;
  stories: number;
  startingPrice: number;
  dimensions: string;
  frameType: string;
  roofPitch: string;
  windRating: string;
  snowLoad: string;
  warranty: string;
  primaryImage: string;
  image?: string;
  gallery: string[];
  floorPlanImage: string;
  floorPlan?: string;
  videoDuration?: string;
  videoTitle?: string;
  video?: string;
  features: string[];
  specs: {
    label: string;
    value: string;
  }[];
  customizableOptions: {
    id: string;
    name: string;
    price: number;
    description: string;
  }[];
}

export const CATEGORIES = [
  {
    id: "Cabins",
    title: "Cabins",
    tagline: "Classic, comfortable and timeless.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
    count: 6,
    href: "/models?category=Cabins",
  },
  {
    id: "Tiny Homes",
    title: "Tiny Homes",
    tagline: "Efficient, stylish and versatile living.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
    count: 4,
    href: "/models?category=Tiny+Homes",
  },
  {
    id: "Steel Buildings",
    title: "Steel Buildings",
    tagline: "Commercial-grade strength and clear-span designs.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    count: 8,
    href: "/models?category=Steel+Buildings",
  },
  {
    id: "Barndominiums",
    title: "Barndominiums",
    tagline: "Spacious modern ranch living engineered to last.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    count: 5,
    href: "/models?category=Barndominiums",
  },
  {
    id: "Sheds & More",
    title: "Sheds & More",
    tagline: "Practical storage and multipurpose workshop spaces.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    count: 7,
    href: "/models?category=Sheds+%26+More",
  },
] as const;

export const BUILDING_MODELS: BuildingModel[] = [
  {
    id: "mod-homestead",
    slug: "the-homestead-cabin",
    name: "The Homestead Cabin",
    series: "Signature Heritage Series",
    category: "Cabins",
    tagline: "Classic, comfortable and timeless cabin with cathedral timber trusses and heavy steel frame.",
    description: "The Homestead Cabin is our hallmark residential cabin design. Blending authentic architectural timber details with a structural commercial steel skeleton, it offers 1,200 sq ft of open living, a full loft, and a generous covered cedar porch for scenic mountain or lakeside retreats.",
    sqft: 1200,
    bedrooms: 2,
    bathrooms: 1.5,
    stories: 1.5,
    startingPrice: 49900,
    dimensions: "30' x 40' x 18'",
    frameType: "Structural Red Iron Rigid Frame",
    roofPitch: "6:12 Standing Seam Metal",
    windRating: "150 MPH Certified",
    snowLoad: "60 PSF Alpine Rating",
    warranty: "40-Year Structural Guarantee",
    primaryImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    ],
    floorPlanImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    floorPlan: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    videoDuration: "3:45 min",
    videoTitle: "The Homestead Cabin Full Walkthrough Tour",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    features: [
      "Heavy gauge steel structural core with rustic exterior cladding",
      "Expansive 200 sq ft covered wraparound cedar front porch",
      "Vaulted 18-ft ceiling with structural steel collar ties",
      "Energy-efficient insulated commercial window package",
      "All 50 states stamped engineering blueprints included",
    ],
    specs: [
      { label: "Footprint", value: "30' W x 40' L x 18' Ridge" },
      { label: "Living Space", value: "1,200 sq ft" },
      { label: "Porch Area", value: "240 sq ft" },
      { label: "Assembly Time", value: "2 to 3 weeks on pre-poured slab" },
    ],
    customizableOptions: [
      { id: "opt-porch-screen", name: "Screened Porch Package", price: 3400, description: "Heavy-duty mesh screens and weather-resistant screen door" },
      { id: "opt-hearth", name: "Stone Fireplace Steel Reinforcement", price: 2100, description: "Foundation & roof flashing support for masonry or wood stove" },
    ],
  },
  {
    id: "mod-lancaster",
    slug: "the-lancaster",
    name: "The Lancaster",
    series: "Prairie Estate Series",
    category: "Barndominiums",
    tagline: "Striking 2,200 sq ft modern barndominium with dual gables and clear-span great room.",
    description: "The Lancaster reimagines traditional American barn architecture for the modern family. Featuring wide open clear-span interiors, high ceilings, 3 spacious bedrooms, and an integrated 2-car drive-through workshop bay.",
    sqft: 2200,
    bedrooms: 3,
    bathrooms: 2,
    stories: 1,
    startingPrice: 64500,
    dimensions: "40' x 55' x 16'",
    frameType: "ASTM A572 Grade 50 Red Iron",
    roofPitch: "4:12 Standing Seam",
    windRating: "160 MPH Certified",
    snowLoad: "45 PSF Rating",
    warranty: "40-Year Structural Guarantee",
    primaryImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    ],
    floorPlanImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    floorPlan: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    videoDuration: "4:10 min",
    videoTitle: "The Lancaster Architectural Showcase",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    features: [
      "100% column-free interior floor plan flexibility",
      "Dual covered breezeway entries with matte black hardware",
      "Commercial-grade rigid frame with non-combustible steel framing",
      "Includes complete bolt-together kit and illustrated instruction manual",
    ],
    specs: [
      { label: "Dimensions", value: "40' W x 55' L x 16' Eave" },
      { label: "Living Area", value: "2,200 sq ft" },
      { label: "Garage Bay", value: "500 sq ft included" },
    ],
    customizableOptions: [
      { id: "opt-glass-overhead", name: "Full-View Glass Garage Doors", price: 4500, description: "Black anodized aluminum with insulated clear safety glass" },
      { id: "opt-cupola", name: "Architectural Roof Cupola & Weathervane", price: 1850, description: "Decorative steel cupola with functional ventilation louver" },
    ],
  },
  {
    id: "mod-retreat",
    slug: "the-retreat",
    name: "The Retreat",
    series: "Micro-Living Series",
    category: "Tiny Homes",
    tagline: "Compact 650 sq ft luxury tiny home built for fast nationwide delivery and turnkey setup.",
    description: "The Retreat delivers high-efficiency architectural luxury in a smart 650 sq ft footprint. Engineered with ultra-strong cold-formed steel and premium insulation, it is ideal for guest homes, vacation cabins, or creative home studios.",
    sqft: 650,
    bedrooms: 1,
    bathrooms: 1,
    stories: 1,
    startingPrice: 39900,
    dimensions: "18' x 36' x 12'",
    frameType: "Heavy Cold-Formed High-Tensile Steel",
    roofPitch: "3:12 Mono-Slope",
    windRating: "140 MPH",
    snowLoad: "50 PSF",
    warranty: "30-Year Warranty",
    primaryImage: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=80",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1600&q=80",
    ],
    floorPlanImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    floorPlan: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    videoDuration: "2:50 min",
    videoTitle: "The Retreat Tiny Home Tour & Setup",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    features: [
      "Delivered flat-packed or pre-assembled in modular sections",
      "Full bath and kitchenette plumbing rough-ins pre-punched",
      "Panoramic picture window frame wall for spectacular views",
      "Zero rot, mold, or termite vulnerabilities",
    ],
    specs: [
      { label: "Footprint", value: "18' W x 36' L x 12' H" },
      { label: "Interior Area", value: "650 sq ft" },
      { label: "Foundation", value: "Piers, Runners, or Concrete Slab" },
    ],
    customizableOptions: [
      { id: "opt-solar-kit", name: "Off-Grid Roof Solar Integration Prep", price: 2900, description: "Pre-wired conduits and reinforced roof purlins for solar arrays" },
    ],
  },
  {
    id: "mod-yellowstone",
    slug: "the-yellowstone",
    name: "The Yellowstone",
    series: "Timber & Iron Alpine Series",
    category: "Cabins",
    tagline: "Expansive 2,800 sq ft luxury ranch cabin with soaring 22-ft timber-accented great hall.",
    description: "Built for grand ranch properties and harsh alpine winters, The Yellowstone combines commercial structural steel rigidity with dramatic cathedral ceilings, floor-to-ceiling glass wall gables, and 4 luxurious bedroom suites.",
    sqft: 2800,
    bedrooms: 4,
    bathrooms: 3.5,
    stories: 2,
    startingPrice: 78000,
    dimensions: "45' x 65' x 24'",
    frameType: "Commercial Rigid Frame Red Iron",
    roofPitch: "6:12 Alpine Pitch",
    windRating: "165 MPH Engineered",
    snowLoad: "80 PSF Extreme Snow",
    warranty: "50-Year Structural Guarantee",
    primaryImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    ],
    floorPlanImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    floorPlan: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    videoDuration: "5:20 min",
    videoTitle: "The Yellowstone Mountain Ranch Walkthrough",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    features: [
      "Dramatic 24-foot soaring steel gable with glass window curtain",
      "Dual primary master suites with walk-in stone showers",
      "Second-floor open loft overlooking scenic property grounds",
      "Engineered for heavy alpine snow loads and severe mountain winds",
    ],
    specs: [
      { label: "Dimensions", value: "45' W x 65' L x 24' H" },
      { label: "Living Area", value: "2,800 sq ft" },
      { label: "Upper Loft", value: "600 sq ft" },
    ],
    customizableOptions: [
      { id: "opt-timber-wrap", name: "Heavy Douglas Fir Structural Post Wraps", price: 4200, description: "Authentic rough-sawn solid timber interior post wraps" },
    ],
  },
  {
    id: "mod-1",
    slug: "the-hawthorne",
    name: "The Hawthorne",
    series: "Modern Prairie Series",
    category: "Barndominiums",
    tagline: "Sprawling 2,400 sq ft modern architectural barndominium with wraparound porch.",
    description: "The Hawthorne combines clean Scandinavian architectural aesthetics with structural 26-gauge steel construction. Featuring high 18-foot vaulted ceilings in the great room, an open chef's kitchen, and a dedicated 2-car insulated garage bay.",
    sqft: 2400,
    bedrooms: 3,
    bathrooms: 2.5,
    stories: 1,
    startingPrice: 168000,
    dimensions: "40' x 60' x 16'",
    frameType: "Structural Red Iron Rigid Frame",
    roofPitch: "4:12 Standing Seam Galvalume",
    windRating: "Up to 145 MPH Engineered",
    snowLoad: "45 PSF Ground Snow Rating",
    warranty: "40-Year Structural & Paint Warranty",
    primaryImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    ],
    floorPlanImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    floorPlan: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    videoDuration: "4:15 min",
    videoTitle: "The Hawthorne Walkthrough & Steel Frame Assembly",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    features: [
      "Vaulted 18-ft cathedral great room ceiling",
      "100% clear-span structural design with no load-bearing interior walls",
      "Engineered for hurricane-zone 145 MPH wind gusts",
      "Pre-drilled heavy cold-rolled purlins and girts for speedy assembly",
    ],
    specs: [
      { label: "Building Footprint", value: "40' W x 60' L x 16' Eave" },
      { label: "Living Area", value: "2,400 sq ft" },
      { label: "Garage Space", value: "2 Bays (600 sq ft)" },
    ],
    customizableOptions: [
      { id: "opt-1", name: "Full-Length 10' Lean-To Wraparound Porch", price: 14500, description: "Adds 600 sq ft of shaded outdoor living with integrated soffit LED channels" },
    ],
  },
  {
    id: "mod-timberline",
    slug: "the-timberline-workshop",
    name: "The Timberline Workshop",
    series: "Pro Clear-Span Series",
    category: "Steel Buildings",
    tagline: "3,000 sq ft commercial-grade steel building with 18-ft eave clearance.",
    description: "Designed for serious builders, craftsmen, and vehicle collectors. Zero interior columns give you completely unobstructed floor space for heavy machinery, vehicle lifts, or custom mezzanine additions.",
    sqft: 3000,
    bedrooms: 0,
    bathrooms: 1,
    stories: 1,
    startingPrice: 52000,
    dimensions: "50' x 60' x 18'",
    frameType: "Solid I-Beam Structural Steel",
    roofPitch: "2:12 Commercial Pitch",
    windRating: "160 MPH Rated",
    snowLoad: "50 PSF",
    warranty: "50-Year Structural Guarantee",
    primaryImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    ],
    floorPlanImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    floorPlan: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    videoDuration: "3:15 min",
    videoTitle: "Timberline Commercial Shop Erection Time Lapse",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    features: [
      "Full 18-foot interior clearance accepts commercial vehicle lifts",
      "Two 14'x14' heavy duty overhead door frame openings",
      "Class A non-combustible building materials throughout",
    ],
    specs: [
      { label: "Dimensions", value: "50' W x 60' L x 18' H" },
      { label: "Usable Space", value: "3,000 sq ft clear-span" },
    ],
    customizableOptions: [
      { id: "opt-lift", name: "10-Ton Overhead Bridge Crane Bracket Prep", price: 5800, description: "Reinforced column haunches ready for bridge crane runaway beams" },
    ],
  },
  {
    id: "mod-shed-pro",
    slug: "the-artisan-shed",
    name: "The Artisan Shed & Studio",
    series: "Multipurpose Utility Series",
    category: "Sheds & More",
    tagline: "480 sq ft heavy-duty steel utility shed and creative studio space.",
    description: "More than just storage. The Artisan Shed provides indestructible galvanized steel framing, residential siding options, and rapid single-day installation for hobbyists, artists, or property equipment storage.",
    sqft: 480,
    bedrooms: 0,
    bathrooms: 0,
    stories: 1,
    startingPrice: 19800,
    dimensions: "16' x 30' x 10'",
    frameType: "Pre-Punched Cold Formed Galvanized Steel",
    roofPitch: "4:12 Gable",
    windRating: "135 MPH",
    snowLoad: "40 PSF",
    warranty: "25-Year Warranty",
    primaryImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
    ],
    floorPlanImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    floorPlan: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    videoDuration: "2:10 min",
    videoTitle: "Artisan Studio Shed 1-Day Assembly",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    features: [
      "Bolt-together DIY friendly kit delivered in a single crate",
      "Reinforced heavy steel base rail anchors directly to skids or concrete",
      "Double steel walk doors with commercial lever hardware",
    ],
    specs: [
      { label: "Dimensions", value: "16' W x 30' L x 10' H" },
      { label: "Usable Space", value: "480 sq ft" },
    ],
    customizableOptions: [
      { id: "opt-workbench", name: "Integrated Steel Workbench & Pegboard", price: 1200, description: "Heavy welded frame bolted to structure wall studs" },
    ],
  },
  {
    id: "mod-monolith",
    slug: "the-monolith",
    name: "The Monolith",
    series: "Architectural Ultra Series",
    category: "Barndominiums",
    tagline: "3,500 sq ft luxury modern steel estate with 12-ft cantilevered second floor.",
    description: "An architectural masterpiece pushing the boundary of residential steel construction. Featuring cantilevered second-story balconies, dramatic commercial curtain-wall glass, and 4 opulent bedroom suites.",
    sqft: 3500,
    bedrooms: 4,
    bathrooms: 4,
    stories: 2,
    startingPrice: 195000,
    dimensions: "45' x 85' x 22'",
    frameType: "Structural Tube & Red Iron Hybrid",
    roofPitch: "Mono-Slope 2:12 Modern",
    windRating: "155 MPH",
    snowLoad: "45 PSF",
    warranty: "50-Year Structural Guarantee",
    primaryImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
    image: "https://images.unsplash.com/photo-160058515526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    ],
    floorPlanImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    floorPlan: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    videoDuration: "5:12 min",
    videoTitle: "The Monolith: Extreme Modern Architecture With Steel",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    features: [
      "Dramatic 12-foot cantilevered upper master suite balcony",
      "Commercial curtain-wall glass engineered for severe storms",
      "Hidden gutter system built seamlessly into the roofline",
    ],
    specs: [
      { label: "Dimensions", value: "45' W x 85' L x 22' H" },
      { label: "Living Area", value: "3,500 sq ft" },
    ],
    customizableOptions: [
      { id: "opt-glass-rail", name: "Tempered Structural Glass Balcony Railing", price: 8500, description: "Frameless ultra-clear glass railing for unobstructed panoramic views" },
    ],
  },
];
