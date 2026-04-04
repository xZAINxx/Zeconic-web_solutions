export type Project = {
  id: string;
  name: string;
  url: string;
  displayUrl: string;
  description: string;
  tags: string[];
  screenshotPath: string | null;
  isPlaceholder?: boolean;
};

export const projects: Project[] = [
  {
    id: "atif-solutions",
    name: "Atif Solutions",
    url: "https://atifsolutionsca.com",
    displayUrl: "atifsolutionsca.com",
    description:
      "Professional business website for a Canadian solutions company. Clean, conversion-focused layout with clear service presentation.",
    tags: ["Business website", "React", "Responsive"],
    screenshotPath: "/screenshots/atifsolutions.png",
  },
  {
    id: "whjitti",
    name: "Whjitti",
    url: "https://whjitti.com",
    displayUrl: "whjitti.com",
    description:
      "Modern web presence built for performance and clarity. Mobile-first design optimized for lead generation.",
    tags: ["Business website", "Next.js", "Mobile-first"],
    screenshotPath: "/screenshots/whjitti.png",
  },
  {
    id: "walicont",
    name: "Walicont",
    url: "https://walicont.com",
    displayUrl: "walicont.com",
    description:
      "Clean, professional site designed to establish credibility and drive client inquiries for a growing business.",
    tags: ["Business website", "React", "SEO-optimized"],
    screenshotPath: "/screenshots/walicont.png",
  },
  {
    id: "coming-soon",
    name: "Your business?",
    url: "/contact",
    displayUrl: "Next project",
    description:
      "We're always looking for the next great project. If you're a small business ready to grow online, let's talk.",
    tags: ["Available now"],
    screenshotPath: null,
    isPlaceholder: true,
  },
];
