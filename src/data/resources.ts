export interface ResourceArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
  date: string;
}

export const RESOURCE_ARTICLES: ResourceArticle[] = [
  {
    id: "res-1",
    slug: "what-is-a-modular-home",
    title: "What Is a Modular Home? A Complete Guide to Factory-Built Housing",
    category: "Modular Basics",
    readTime: "5 min read",
    excerpt: "Learn how modular homes are constructed in climate-controlled factories, transported in sections, and permanently installed on an engineered foundation.",
    content: [
      "Modular homes are high-performance residences constructed in state-of-the-art, climate-controlled manufacturing facilities. Built in precision modules, these homes adhere to the exact same International Residential Code (IRC) and local building regulations as traditional site-built structures.",
      "Unlike manufactured or mobile homes, modular homes are installed permanently on engineered concrete foundations, gain equity over time, and qualify for standard residential mortgage financing."
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    date: "2026-09-10",
  },
  {
    id: "res-2",
    slug: "modular-vs-traditional-construction",
    title: "Modular vs. Traditional Site-Built Construction: Which Is Right for You?",
    category: "Comparison",
    readTime: "6 min read",
    excerpt: "Compare construction timelines, material quality, weather protection, cost predictability, and energy efficiency between factory modular and traditional building.",
    content: [
      "When comparing modular construction with traditional stick-building, the most significant advantages are speed, quality control, and weather protection. Because 80% to 90% of modular construction takes place indoors, materials are never exposed to rain, mold, or UV warping.",
      "Additionally, while your home is being built in the factory, site grading and foundation work can occur simultaneously, cutting overall construction time by up to 50%."
    ],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    date: "2026-09-08",
  },
  {
    id: "res-3",
    slug: "how-much-does-a-modular-home-cost",
    title: "How Much Does a Modular Home Cost? Breakdown of Pricing & Expenses",
    category: "Pricing & Budget",
    readTime: "7 min read",
    excerpt: "Understand the total cost structure of building a modular home—from base shell pricing and customization options to site preparation, foundation, and utilities.",
    content: [
      "Modular home pricing is typically transparent and itemized into distinct phases. The base modular shell covers the engineered structural modules, framing, windows, and factory finishes.",
      "Additional site-specific costs include property acquisition, land excavation, foundation installation, utility connections (well/septic or city hookups), and local permit fees."
    ],
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
    date: "2026-09-05",
  },
  {
    id: "res-4",
    slug: "how-long-does-modular-construction-take",
    title: "How Long Does Modular Construction Take from Order to Move-In?",
    category: "Timeline & Process",
    readTime: "4 min read",
    excerpt: "Discover the step-by-step timeline of building a modular home, including engineering design, factory fabrication, freight delivery, and final set-up.",
    content: [
      "From final blueprint sign-off to handing over your keys, most modular home projects take between 3 to 5 months—compared to 10 to 14 months for traditional custom builds.",
      "Factory fabrication typically requires 3 to 6 weeks, followed by 1 to 2 weeks for module delivery and crane placement, and 4 to 6 weeks for interior/exterior button-up finishes."
    ],
    image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&w=1200&q=80",
    date: "2026-09-01",
  },
  {
    id: "res-5",
    slug: "can-modular-homes-be-customized",
    title: "Can Modular Homes Be Customized? Layouts, Finishes & Options Explored",
    category: "Design & Customization",
    readTime: "5 min read",
    excerpt: "Explore the vast customization possibilities available in modern modular housing—from open floor plans and custom kitchens to porch additions and siding.",
    content: [
      "Modern modular homes offer near unlimited customization flexibility. Homeowners can modify room dimensions, reconfigure kitchen layouts, add primary suite walk-in closets, adjust window placement, and select from dozens of exterior siding styles.",
      "Whether you desire rustic log accents, modern farmhouse board-and-batten, or contemporary glass facades, modular engineering accommodates your aesthetic vision."
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    date: "2026-08-28",
  },
  {
    id: "res-6",
    slug: "what-is-a-barndominium",
    title: "What Is a Barndominium? Steel & Timber Hybrid Living Explained",
    category: "Home Styles",
    readTime: "6 min read",
    excerpt: "Learn why barndominiums have become one of America's fastest growing housing trends, combining spacious open living areas with rigid structural frames.",
    content: [
      "A barndominium combines traditional barn architecture with modern residential living space. Featuring clear-span steel or timber framing, barndominiums eliminate the need for interior load-bearing walls.",
      "This structural freedom allows homeowners to create soaring cathedral ceilings, massive multi-car garage/shop bays, and open-concept great rooms."
    ],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    date: "2026-08-24",
  },
  {
    id: "res-7",
    slug: "modular-home-financing-guide",
    title: "Modular Home Financing Guide: Construction Loans & Mortgages",
    category: "Financing",
    readTime: "6 min read",
    excerpt: "Everything you need to know about securing a single-close construction loan or standard mortgage for your modular home project.",
    content: [
      "Because modular homes are real property installed on permanent foundations, they qualify for standard conventional (Fannie Mae/Freddie Mac), FHA, VA, and USDA residential mortgages.",
      "Many lenders offer single-close construction-to-permanent loans, which fund site preparation and factory manufacturing with one closing transaction."
    ],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    date: "2026-08-20",
  },
  {
    id: "res-8",
    slug: "understanding-floor-plans",
    title: "Understanding Floor Plans: How to Choose the Right Layout for Your Land",
    category: "Floor Plans",
    readTime: "5 min read",
    excerpt: "Tips for reading floor plan schematics, matching home footprints to property dimensions, and optimizing natural lighting and traffic flow.",
    content: [
      "Choosing the right floor plan requires evaluating your lifestyle, family size, and natural land topography. Consider sun orientation, views, drive approach, and future expansion possibilities.",
      "Pay attention to traffic flow between bedrooms, primary living areas, and mudrooms or outdoor porch entrances."
    ],
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    date: "2026-08-15",
  },
  {
    id: "res-9",
    slug: "preparing-your-land-for-a-modular-home",
    title: "Preparing Your Land for a Modular Home: Site Grading & Utilities",
    category: "Land Preparation",
    readTime: "7 min read",
    excerpt: "A practical checklist for land excavation, soil testing, foundation selection, and utility rough-ins prior to home delivery.",
    content: [
      "Proper land preparation ensures a seamless delivery and long-term structural stability. Key steps include clearing trees, grading the building pad, conducting soil load tests, and pouring an engineered foundation.",
      "Utility rough-ins for electric, water, sewer/septic, and gas should be positioned according to your modular engineering blueprints prior to set day."
    ],
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    date: "2026-08-10",
  },
  {
    id: "res-10",
    slug: "modular-home-delivery-and-installation",
    title: "Modular Home Delivery & Installation: What Happens on Set Day?",
    category: "Delivery & Setup",
    readTime: "5 min read",
    excerpt: "Step inside the excitement of set day—how heavy cranes position modular home sections onto your foundation with precision millimeter accuracy.",
    content: [
      "Set day is one of the most exciting phases of modular construction. Specialized transport rigs deliver the modules, and a heavy hydraulic crane lifts each module into place on the foundation.",
      "Within a single day, the weather-tight structural shell of your home is set, roofed, and secured."
    ],
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    date: "2026-08-05",
  },
];
