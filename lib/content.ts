// Structured content for the Abhinandan Group website.
// Copy sourced from the client brief (Abhinandan.pdf).

export type HeroSlide = {
  image: string;
  title: string;
  subtitle: string;
};

export const heroSlides: HeroSlide[] = [
  {
    image: "/images/hero/slide-1.jpg",
    title: "Three Decades of Manufacturing Excellence",
    subtitle:
      "Delivering reliable, high-quality industrial solutions through experience, precision and a commitment to continuous improvement.",
  },
  {
    image: "/images/hero/slide-2.jpg",
    title: "Diversified Businesses. One Strong Foundation.",
    subtitle:
      "Expanding beyond packaging into multiple industries, driven by innovation, strategic growth and a shared commitment to excellence.",
  },
  {
    image: "/images/hero/slide-3.jpg",
    title: "Built for Scale. Driven by Technology.",
    subtitle:
      "Equipped with advanced machinery and integrated manufacturing infrastructure to deliver efficiency, consistency and production excellence.",
  },
  {
    image: "/images/hero/slide-4.jpg",
    title: "Quality That Builds Trust",
    subtitle:
      "Committed to delivering consistent quality, dependable solutions and lasting customer relationships across industries.",
  },
];

export type Highlight = { icon: IconKey; title: string };

export const highlights: Highlight[] = [
  { icon: "award", title: "30+ Years of Excellence" },
  { icon: "factory", title: "High-Capacity Manufacturing" },
  { icon: "grid", title: "Diversified Businesses" },
  { icon: "spark", title: "Quality & Innovation" },
  { icon: "handshake", title: "Trusted Partnerships" },
];

export type Stat = { value: number; suffix: string; label: string };

export const stats: Stat[] = [
  { value: 300, suffix: "+", label: "Team Members" },
  { value: 30, suffix: "+", label: "Years of Experience" },
  { value: 7000, suffix: " MT", label: "Annual Capacity" },
];

export type Division = {
  slug: string;
  name: string;
  image: string;
  summary: string; // short, for carousel / cards
  body: string[]; // full paragraphs, for divisions page
  link?: { label: string; href: string };
};

export const divisions: Division[] = [
  {
    slug: "abhinandan-petro-pack",
    name: "Abhinandan Petro Pack",
    image: "/images/divisions/petro-pack.jpg",
    summary:
      "Established manufacturer of industrial packaging — PP/HDPE woven sacks, BOPP laminated woven bags and customised packaging.",
    body: [
      "Abhinandan Petro Pack Pvt. Ltd. is an established manufacturer of industrial packaging solutions, specialising in high-quality PP/HDPE woven sacks, BOPP laminated woven bags and customised packaging products. With decades of manufacturing experience, the company delivers durable, reliable and cost-effective packaging solutions to customers across diverse industries.",
      "Supported by advanced machinery and integrated production infrastructure, Abhinandan Petro Pack has an annual manufacturing capacity of 7,000 metric tonnes, enabling it to cater to large-scale industrial requirements while maintaining consistent quality and production efficiency.",
      "With a customer-focused approach, the company emphasises product reliability, timely delivery and long-term partnerships, while continuously investing in technology and process improvements to strengthen its manufacturing capabilities.",
    ],
  },
  {
    slug: "abhinandan-plastics",
    name: "Abhinandan Plastics",
    image: "/images/divisions/plastics.jpg",
    summary:
      "Incorporated in 2012, strengthening the Group's woven-sack manufacturing for large-scale FMCG clients including Hindustan Unilever.",
    body: [
      "Incorporated in 2012 as a sister concern to Abhinandan Petro Pack Pvt. Ltd., Abhinandan Plastic was established to further strengthen the Group's footprint in woven sack manufacturing. The company plays a key role in supporting the Group's expanding production capabilities and meeting the growing demands of large-scale FMCG clients.",
      "Under the leadership of Mr. Yeshwant Bothra, Managing Director, and Mr. Rishi Fogla, Director, Abhinandan Plastic operates with a strong focus on quality, consistency and timely delivery.",
      "With an annual production capacity of 1,000 metric tonnes, the company supplies high-quality woven sacks to world-renowned brands, including Hindustan Unilever, as well as several other leading FMCG players.",
    ],
  },
  {
    slug: "abhinandan-aluminium",
    name: "Abhinandan Aluminium",
    image: "/images/divisions/aluminium.jpg",
    summary:
      "Established 2017 — one of South India's largest manufacturers of secondary aluminium wire rods for electrical and semiconductor industries.",
    body: [
      "Established in 2017, Abhinandan Aluminium was founded with the objective of addressing the growing demand for high-quality secondary aluminium wire rods, primarily serving the electrical and semiconductor industries. Over the years, production capacity has scaled significantly from 600 metric tonnes to 4,000 metric tonnes annually, supported by continuous investment in infrastructure and process optimisation.",
      "Today, the facility operates with a total installed capacity of 6,000 metric tonnes per annum, enabling it to meet expanding market requirements. As a result, Abhinandan Aluminium has emerged as one of the largest manufacturers and suppliers of secondary aluminium wire rods in South India, trusted by a wide range of industrial clients for its performance, reliability and long-term partnership approach.",
    ],
  },
  {
    slug: "greenplast",
    name: "Greenplast",
    image: "/images/divisions/greenplast.jpg",
    summary:
      "Agricultural plastics and water-management solutions — HDPE geomembranes, pond liners, mulching and greenhouse films.",
    body: [
      "Greenplast is the agricultural plastics and water-management solutions division of Abhinandan Group, specialising in HDPE geomembranes, pond liners and a range of agricultural plastic products.",
      "Its portfolio includes HDPE geomembrane liners, mulching films, greenhouse films, shade nets, insect nets and greenhouse accessories designed to support efficient cultivation and water conservation.",
      "With a focus on product durability, quality and practical applications, Greenplast provides reliable solutions for agricultural, industrial and water-management requirements, contributing to improved resource efficiency and sustainable practices.",
    ],
  },
  {
    slug: "outdoor-space-studio",
    name: "Outdoor Space Studio",
    image: "/images/divisions/outdoor-space-studio.jpg",
    summary:
      "Premium outdoor aluminium furniture combining contemporary design, durability and functionality.",
    body: [
      "Outer Space Studio specialises in premium outdoor aluminium furniture, combining contemporary design, durability and functionality to create sophisticated outdoor living solutions.",
      "With an emphasis on quality craftsmanship, weather-resistant materials and thoughtful design, the brand offers furniture suited to residential, hospitality and commercial spaces.",
      "By bringing together aesthetics, comfort and long-lasting performance, Outer Space Studio creates outdoor furnishings designed to enhance modern living environments.",
    ],
    link: {
      label: "Follow on Instagram",
      href: "https://www.instagram.com/outerspacepatio?xtok=MW91ZWh3M2pyMXN5Mw==",
    },
  },
  {
    slug: "abhinandan-farms",
    name: "Abhinandan Farms",
    image: "/images/divisions/farms.jpg",
    summary:
      "Established 2024 — the Group's entry into agriculture and protected cultivation of fruits and vegetables.",
    body: [
      "Established in 2024, Abhinandan Farms marks the Group's strategic entry into agriculture and protected cultivation, expanding its portfolio into sustainable and future-focused food production. The venture is centred on the high-quality cultivation and processing of fruits and vegetables, driven by environmentally responsible and health-conscious agricultural practices.",
      "Currently, Abhinandan Farms cultivates a diverse range of crops, including Japanese guava, bell peppers (red, yellow and green capsicum), pomegranates, supari (areca nut), bamboo and coconut, ensuring crop diversity and long-term sustainability.",
    ],
    link: {
      label: "Follow on Instagram",
      href: "https://www.instagram.com/abhinandan_farms?cplk=ZnNxOWZsNXpweXhr",
    },
  },
  {
    slug: "alvara-spirulina",
    name: "Alvara Spirulina",
    image: "/images/divisions/alvara-spirulina.jpg",
    summary:
      "The Group's expansion into biotechnology and nutraceutical ingredients — premium spirulina cultivation in Sira, Karnataka.",
    body: [
      "Alvara Spirulina represents the Abhinandan Group's expansion into the biotechnology and nutraceutical ingredients sector. Located in Sira, Karnataka, the facility spans approximately 5 acres and comprises 16 raceway cultivation ponds dedicated to the production of premium-quality spirulina (Arthrospira platensis).",
      "The operation integrates controlled cultivation, harvesting, low-temperature drying, processing and quality testing to produce nutrient-rich spirulina powder for domestic and international markets.",
      "With a focus on sustainable production, advanced cultivation techniques and stringent quality standards, Alvara Spirulina caters to the growing demand from the nutraceutical, functional food, health supplement and wellness industries.",
    ],
  },
];

// `fill: true` = a full-scene photo that should cover the tile edge-to-edge.
// Otherwise the image is a cut-out (transparent) that floats, contained, on the tile.
export type Product = { name: string; image: string; fill?: boolean };

export const products: Product[] = [
  { name: "PP Woven Pinch Bottom Bags", image: "/images/products/pp-woven-pinch-bottom-bags-cutout.png" },
  { name: "BOPP Laminated Sacks", image: "/images/products/bopp-laminated-sacks-cutout.png" },
  { name: "HDPE / PP Woven Sacks", image: "/images/products/hdpe-pp-woven-sacks.jpg", fill: true },
  { name: "Woven Shopping Bags", image: "/images/products/woven-shopping-bags-cutout.png" },
  { name: "Secondary Aluminium Wire Rod", image: "/images/products/secondary-aluminium-wire-rod.jpg", fill: true },
  { name: "HDPE Geomembrane Pondliner", image: "/images/products/hdpe-geomembrane-pondliner.jpg", fill: true },
  { name: "HDPE / PP Woven Fabric", image: "/images/products/hdpe-pp-woven-fabric.jpg", fill: true },
];

export type Leader = { name: string; role: string; image: string };

export const leaders: Leader[] = [
  { name: "Kamal Sipani", role: "Chairman", image: "/images/leadership/kamal-sipani-cutout.png" },
  { name: "Yeshwant Bothra", role: "Managing Director", image: "/images/leadership/yeshwant-bothra-cutout.png" },
  { name: "Abhishek Sipani", role: "Director", image: "/images/leadership/abhishek-sipani-cutout.png" },
];

export type Machine = {
  name: string;
  image: string;
  specs: string[];
  machines: string;
  monthly: string;
};

export const machinery: Machine[] = [
  {
    name: "Lohia Lorex Tape Extrusion Line",
    image: "/images/machinery/lohia-lorex-tape-extrusion.jpg",
    specs: ["1400 Lorex – 450 kg/hour", "1400 Lorex – 600 kg/hour with Auto-Die"],
    machines: "2",
    monthly: "700 MT",
  },
  {
    name: "Circular Lohia Nova 6 Looms",
    image: "/images/machinery/circular-lohia-nova-looms.jpg",
    specs: ["6 Shuttle Looms"],
    machines: "120",
    monthly: "700 MT",
  },
  {
    name: "JP 6 Colour Flexo Printing",
    image: "/images/machinery/jp-6-colour-flexo-printing.jpg",
    specs: ["760 mm six-colour flexographic printing station"],
    machines: "3",
    monthly: "30 Lakh Bags",
  },
  {
    name: "Lohia Valvomatic 40",
    image: "/images/machinery/lohia-valvomatic-40.jpg",
    specs: ["Production speed – 40 bags/min"],
    machines: "2",
    monthly: "20 Lakh Bags",
  },
  {
    name: "Bag Cutting & Stitching Machine",
    image: "/images/machinery/bag-cutting-stitching.jpg",
    specs: ["RT 35 BCS Machine"],
    machines: "2",
    monthly: "12 Lakh Bags",
  },
  {
    name: "Navrang Lamination Plant",
    image: "/images/machinery/navrang-lamination-plant.jpg",
    specs: [],
    machines: "1",
    monthly: "60 MT",
  },
];

export type Value = { icon: IconKey; title: string };

// "Empowering Growth For The Future" — four pillars.
export const pillars: Value[] = [
  { icon: "compass", title: "Visionary Leadership" },
  { icon: "factory", title: "Diversified Manufacturing Expertise" },
  { icon: "shield", title: "Commitment to Quality & Integrity" },
  { icon: "spark", title: "Innovation-driven Approach" },
];

export type Principle = { no: string; title: string; body: string };

// "What Defines Us"
export const principles: Principle[] = [
  {
    no: "01",
    title: "Integrity in Every Action",
    body: "We believe in conducting business with honesty, accountability and respect, building relationships founded on transparency, reliability and mutual trust.",
  },
  {
    no: "02",
    title: "Excellence as a Mindset",
    body: "We strive for consistency, precision and continuous improvement across our products, processes and operations, maintaining high standards in everything we undertake.",
  },
  {
    no: "03",
    title: "Progress Through Innovation",
    body: "We embrace evolving technologies, fresh perspectives and new opportunities to strengthen our capabilities and adapt to the changing needs of industries.",
  },
  {
    no: "04",
    title: "Growth with Responsibility",
    body: "We believe that meaningful progress comes from balancing business ambitions with responsible practices, efficient resource utilisation and long-term value creation.",
  },
];

// ---- Our Journey (from the "Building Trust in Packaging Since 1995" timeline) ----
export type Milestone = {
  year: string;
  tag: string;
  title: string;
  body: string;
  board?: string[];
};

export const journeyMilestones: Milestone[] = [
  {
    year: "1995",
    tag: "The Foundation",
    title: "1995 — The Foundation",
    body: "Abhinandan Petro Pack Pvt. Ltd. was founded by Mr. Kamal Sipani & Mrs. Vimala Sipani, with a vision to deliver reliable, high-quality packaging solutions.",
  },
  {
    year: "1997",
    tag: "Strategic Merger",
    title: "1997 — Strategic Merger",
    body: "Abhinandan Petro Pack Pvt. Ltd. merged with Shanti Polypack, strengthening leadership, scale, and operational capability.",
    board: [
      "Mr. Kamal Sipani — Chairman & Director",
      "Mr. Yeshwant Bothra — Managing Director",
      "Mrs. Kavita Bothra — Director",
      "Mrs. Vimala Sipani — Director",
    ],
  },
  {
    year: "2025",
    tag: "Growth & Expansion",
    title: "2025 — Growth & Expansion",
    body: "Rapid capacity growth from 600 MT to a projected 7,000 MT by 2025.",
  },
];

export const capacityGrowth: { year: string; mt: number }[] = [
  { year: "1997", mt: 600 },
  { year: "2002", mt: 1800 },
  { year: "2009", mt: 3600 },
  { year: "2017", mt: 4800 },
  { year: "2025", mt: 7000 },
];

export const trustedBrands = ["Dalmia Cement", "RAMCO", "ACC", "UltraTech", "CCI Cement"];

export const journeyStats: { value: string; label: string }[] = [
  { value: "30+", label: "Years of Excellence" },
  { value: "7,000 MT", label: "Annual Capacity" },
  { value: "100+", label: "Industrial Clients" },
];

export type Client = { name: string; logo: string };

// The Group's 13 clients (official logos supplied by the client).
export const clients: Client[] = [
  { name: "Hindustan Unilever", logo: "/images/clients/hindustan-unilever.png" },
  { name: "Ramco Cements", logo: "/images/clients/ramco.png" },
  { name: "UltraTech Cement", logo: "/images/clients/ultratech.png" },
  { name: "ACC Cement", logo: "/images/clients/acc.png" },
  { name: "CCI Cement", logo: "/images/clients/cci.png" },
  { name: "Duroflex", logo: "/images/clients/duroflex.png" },
  { name: "Kurl-on", logo: "/images/clients/kurl-on.png" },
  { name: "Jindal Aluminium", logo: "/images/clients/jindal-aluminium.png" },
  { name: "Wakefit", logo: "/images/clients/wakefit.png" },
  { name: "Ashirvad Pipes", logo: "/images/clients/ashirvad-pipes.png" },
  { name: "Buildmet Fibres", logo: "/images/clients/buildmet-fibres.png" },
  { name: "Avonplast", logo: "/images/clients/avonplast.png" },
  { name: "Sanmar", logo: "/images/clients/sanmar.png" },
];

export type IconKey =
  | "award"
  | "factory"
  | "grid"
  | "spark"
  | "handshake"
  | "compass"
  | "shield"
  | "leaf"
  | "cog";
