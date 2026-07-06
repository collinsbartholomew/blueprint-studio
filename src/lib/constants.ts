export interface SiteConfig {
  name: string;
  tagline?: string;
  description?: string;
  email: string;
  phone: string;
  phoneHref: string;
  address?: string;
  googleRating?: string | number;
  googleReviews?: string | number;
  logo?: string;
  ogImage?: string;
  social?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
    pinterest?: string;
    etsy?: string;
    tripadvisor?: string;
    yelp?: string;
    houzz?: string;
    google?: string;
    github?: string;
    x?: string;
  };
  hours?: string;
  weekday?: string;
  weekend?: string;
  trustpilot?: string;
  storeAddress?: string;
  [key: string]: unknown;
}

export const siteConfig: SiteConfig = {
  name: "Blueprint Studio",
  tagline: "Architecture & Interior Design",
  description: "Blueprint Studio creates innovative residential, commercial, and interior designs that balance form, function, and sustainability — with a signature modern aesthetic.",
  email: "info@blueprint.com",
  phone: "+1 2030 4050 10",
  phoneHref: "+112030405010",
  address: "New York, Seventh Ave, 20th Floor, NY 10018",
  social: {
    instagram: "https://www.instagram.com/minnaro.vamtam/",
    facebook: "https://www.facebook.com/",
    houzz: "https://www.houzz.com/",
    pinterest: "https://www.pinterest.com/",
  },
  ogImage: "https://minnaro.vamtam.com/wp-content/uploads/2025/06/01_Preview.jpg",
};

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    label: "H.",
    href: "/",
    children: [
      { label: "H. Interiors", href: "/" },
      { label: "H. Architects", href: "/h-architects" },
    ],
  },
  {
    label: "Studio",
    href: "/studio",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Interior design", href: "/services/interior-design" },
      { label: "Lighting design", href: "/services/lighting-design" },
      { label: "Bespoke furnishings", href: "/services/bespoke-furnishings" },
      { label: "Construction", href: "/services/construction" },
    ],
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Reviews",
    href: "/reviews",
  },
  {
    label: "Journal",
    href: "/journal",
  },
];

export const services = [
  {
    slug: "interior-design",
    name: "Blueprint Studio",
    tagline: "Architecture tagline: Detail – Attention – Harmony Interior Design",
    description: "From concept to completion, we craft interiors that reflect your personality and lifestyle. Every material, color, and layout is chosen with intention.",
    image: "https://minnaro.vamtam.com/wp-content/uploads/2025/05/shivani-chougula-IBzfpFgUNuw-unsplash-682x1024.jpg",
    href: "/services/interior-design",
  },
  {
    slug: "lighting-design",
    name: "Blueprint Studio",
    tagline: "Architecture tagline: "Atmosphere – Focus – Harmony" Interior Design",
    description: "Light shapes how we feel in a space. We design lighting schemes that enhance mood, highlight architecture, and bring warmth to every room.",
    image: "https://minnaro.vamtam.com/wp-content/uploads/2025/05/anton-sobotyak-8og8EDtnc9w-unsplash-682x1024.jpg",
    href: "/services/lighting-design",
  },
  {
    slug: "bespoke-furnishings",
    name: "Blueprint Studio",
    tagline: "Architecture tagline: "Essence - Attention - Mood" Interior Design",
    description: "We design and source custom furniture, textiles, and objects that perfectly suit your space — pieces that feel made for you, because they are.",
    image: "https://minnaro.vamtam.com/wp-content/uploads/2025/05/GettyImages-1353481343-682x1024.jpg",
    href: "/services/bespoke-furnishings",
  },
  {
    slug: "construction",
    name: "Blueprint Studio",
    tagline: "Architecture tagline: "Mood – Clarity – Ambience" Interior Design",
    description: "We manage every phase of the build process, coordinating trades, overseeing quality, and ensuring the design vision is executed flawlessly.",
    image: "https://minnaro.vamtam.com/wp-content/uploads/2025/05/GettyImages-1360691299-682x1024.jpg",
    href: "/services/construction",
  },
];

export const portfolioProjects = [
  {
    slug: "hilton-forest-colonial",
    name: "Blueprint Studio",
    category: "Lighting design",
    image: "https://minnaro.vamtam.com/wp-content/uploads/2025/05/GettyImages-1306386642-738x1024.jpg",
    href: "/portfolio/hilton-forest-colonial",
  },
  {
    slug: "the-ny-apartment",
    name: "Blueprint Studio",
    category: "Lighting design",
    image: "https://minnaro.vamtam.com/wp-content/uploads/2025/05/michael-proctor-SOvNDTnGD3w-unsplash-1024x694.jpg",
    href: "/portfolio/the-ny-apartment",
  },
  {
    slug: "quebec-mountain-view",
    name: "Blueprint Studio",
    category: "Interior design",
    image: "https://minnaro.vamtam.com/wp-content/uploads/2025/05/oleksii-piekhov-00wT_m3T3C8-unsplash-738x1024.jpg",
    href: "/portfolio/quebec-mountain-view",
  },
  {
    slug: "station-house",
    name: "Blueprint Studio",
    category: "Interior design",
    image: "https://minnaro.vamtam.com/wp-content/uploads/2025/05/GettyImages-1729487510-1024x693.jpg",
    href: "/portfolio/station-house",
  },
  {
    slug: "rolling-apartment",
    name: "Blueprint Studio",
    category: "Bespoke furnishings",
    image: "https://minnaro.vamtam.com/wp-content/uploads/2025/05/shivani-chougula-hILnbSbLMc8-unsplash-738x1024.jpg",
    href: "/portfolio/rolling-apartment",
  },
  {
    slug: "somersby-villa",
    name: "Blueprint Studio",
    category: "Interior design",
    image: "https://minnaro.vamtam.com/wp-content/uploads/2025/05/poojan-thanekar-n8NjN_3Qywo-unsplash-1024x693.jpg",
    href: "/portfolio/somersby-villa",
  },
];

export const testimonials = [
  {
    name: "Blueprint Studio",
    text: "Working with Minnaro was an absolute dream. From our first consultation to the final reveal, their team listened to our vision and transformed our house into a true sanctuary. Every detail was thoughtful, every finish was flawless. They didn't just design our space — they elevated our lifestyle. We get compliments every time someone walks through the door!",
    image: "https://minnaro.vamtam.com/wp-content/uploads/2025/05/GettyImages-1994347902.jpg",
  },
  {
    name: "Blueprint Studio",
    text: "Partnering with Minnaro was the best decision we made for our home. Their team truly understood what we were looking for — and then went above and beyond. The transformation was stunning, but what really stood out was the care and passion they brought to every step. It's more than a design; it's a reflection of who we are.",
    image: "https://minnaro.vamtam.com/wp-content/uploads/2025/05/mathilde-langevin-LdPzzJcrPLM-unsplash.jpg",
  },
  {
    name: "Blueprint Studio",
    text: "Minnaro took our scattered ideas and turned them into something extraordinary. Their eye for detail, their professionalism, and their ability to bring warmth into every room is unmatched. We don't just love how our home looks — we love how it makes us feel.",
    image: "https://minnaro.vamtam.com/wp-content/uploads/2025/05/prydumano-design-OPiEIr8xOo0-unsplash.jpg",
  },
];

export const journalPosts = [
  {
    slug: "the-beauty-of-restraint",
    title: "The beauty of restraint",
    category: "Interior",
    image: "https://minnaro.vamtam.com/wp-content/uploads/2025/05/GettyImages-1699468388.jpg",
    excerpt: "Exploring how less can say more — and why we believe simplicity is the highest form of elegance.",
  },
  {
    slug: "designing-for-real-life",
    title: "Designing for real life",
    category: "Interior",
    image: "https://minnaro.vamtam.com/wp-content/uploads/2025/05/GettyImages-1482562111.jpg",
    excerpt: "Creating spaces that don't just photograph well, but feel good to live in — day after day.",
  },
  {
    slug: "from-mood-to-matter",
    title: "From mood to matter",
    category: "Interior",
    image: "https://minnaro.vamtam.com/wp-content/uploads/2025/05/GettyImages-2190879712.jpg",
    excerpt: "How our design process transforms feeling into form — from early inspiration to final material choices.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Research",
    description: "We take time to understand your lifestyle, values, and aspirations — gathering insights that guide every decision ahead. Through conversations, site visits, and contextual studies, we build a clear foundation for a space that reflects not just how you live, but how you want to feel in your home.",
  },
  {
    number: "02",
    title: "Plan",
    description: "As construction nears completion, Casa reviews the details to ensure everything aligns with our design vision. We then install furnishings and finishes—bringing your dream space to life.",
  },
  {
    number: "03",
    title: "Design",
    description: "In this creative phase, Casa Interiors develops floor plans, layouts, custom furnishings, and material suggestions. We present finishes, millwork details, and 3D visuals—collaborating closely to finalize every selection.",
  },
  {
    number: "04",
    title: "Realize",
    description: "As construction nears completion, Casa conducts a final walkthrough with you to ensure every detail aligns with our design vision. We then install furnishings and finishing touches, transforming the space into your dream home.",
  },
];

export const footerNav = {
  studio: [
    { label: "Studio", href: "/studio" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Reviews", href: "/reviews" },
    { label: "Journal", href: "/journal" },
  ],
  social: [
    { label: "Instagram", href: "https://www.instagram.com/minnaro.vamtam/", icon: "instagram" },
    { label: "Houzz", href: "https://www.houzz.com/", icon: "houzz" },
    { label: "Facebook", href: "https://www.facebook.com/", icon: "facebook" },
    { label: "Pinterest", href: "https://www.pinterest.com/", icon: "pinterest" },
  ],
};

export const featuredIn = [
  { name: "Blueprint Studio", logo: "https://minnaro.vamtam.com/wp-content/uploads/2025/05/Dezeen.svg" },
  { name: "Blueprint Studio", logo: "https://minnaro.vamtam.com/wp-content/uploads/2025/05/Forbbes-Homes.svg" },
  { name: "Blueprint Studio", logo: "https://minnaro.vamtam.com/wp-content/uploads/2025/05/Wallpapeer_.svg" },
  { name: "Blueprint Studio", logo: "https://minnaro.vamtam.com/wp-content/uploads/2025/05/Harppar-Bazar.svg" },
  { name: "Blueprint Studio", logo: "https://minnaro.vamtam.com/wp-content/uploads/2025/05/home-garden.svg" },
];
