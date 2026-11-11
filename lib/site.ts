// Global site configuration: brand, navigation, contact details.

export const site = {
  name: "Abhinandan Group",
  shortName: "Abhinandan",
  tagline: "Three Decades of Manufacturing Excellence",
  description:
    "Abhinandan Group is a diversified, manufacturing-led business group with a legacy spanning over three decades across industrial packaging, plastics, secondary aluminium, agri-solutions, outdoor furniture, farming and spirulina.",
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
      { label: "About Overview", href: "/about" },
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
  // Placeholder — replace with the official Alvara Spirulina website URL.
  alvaraWebsite: "#",
};
