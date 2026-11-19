// Global site configuration: brand, navigation, contact details.

export const site = {
  name: "Abhinandan Group",
  shortName: "Abhinandan",
  tagline: "Three Decades of Manufacturing Excellence",
  description:
    "Established on a foundation of trust, quality and manufacturing excellence, Abhinandan Group has evolved into a diversified business enterprise with a legacy spanning nearly four decades. Driven by innovation and a commitment to continuous growth, we continue to expand our capabilities across industries while creating lasting value for our customers and partners.",
  // Placeholder domain — update when live.
  url: "https://abhinandangroup.com",
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Management", href: "/about#management" },
      { label: "Our Philosophy", href: "/about#philosophy" },
      { label: "Infrastructure & Machinery", href: "/infrastructure" },
    ],
  },
  { label: "Divisions", href: "/divisions" },
  { label: "Quality", href: "/quality" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact" },
];

export const contact = {
  address:
    "27/1A, Vadera Manchena Halli, Kallu Ballu Post, Jigani Hobli, Anekal Taluk, Bengaluru.",
  mapUrl: "https://share.google/w1MvJyTqBZ4NGrk5k",
  people: [
    { name: "Abhishek Sipani", phone: "+91 96326 00449", phoneHref: "+919632600449" },
    { name: "Yeshwant Bothra", phone: "+91 98458 44449", phoneHref: "+919845844449" },
  ],
  email: "abhinandanppl@gmail.com",
  alvaraWebsite: "https://www.alvaraspirulina.com/",
};
