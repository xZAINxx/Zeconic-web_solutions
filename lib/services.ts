export type Service = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  accentColor: string;
  features: { title: string; description: string }[];
  idealFor: string[];
  process: string[];
};

export const services: Service[] = [
  {
    id: "web-development",
    number: "01",
    title: "Web Development",
    tagline: "Your website should work as hard as you do.",
    description:
      "We build custom websites and web applications using React and Next.js — the same technology stack used by the world's fastest websites. No drag-and-drop builders, no WordPress themes. Just clean, fast, custom code built around your business.",
    accentColor: "#00E5FF",
    features: [
      {
        title: "Business websites",
        description:
          "Multi-page sites for service businesses — built for SEO, speed, and conversions.",
      },
      {
        title: "Landing pages",
        description:
          "Single-purpose pages designed to capture leads or promote a specific offer.",
      },
      {
        title: "Full-stack web apps",
        description:
          "Custom applications with databases, user auth, dashboards, and more.",
      },
      {
        title: "Mobile-first design",
        description:
          "Every site looks and works perfectly on phones, tablets, and desktops.",
      },
    ],
    idealFor: [
      "Landscapers & contractors",
      "HVAC & plumbing companies",
      "Salons & spas",
      "Restaurants & food businesses",
      "Real estate agents",
      "Any local service business",
    ],
    process: [
      "Discovery & planning",
      "Design mockups",
      "Development",
      "Revisions",
      "Launch",
    ],
  },
  {
    id: "ai-chatbots",
    number: "02",
    title: "AI Chatbots",
    tagline:
      "Answer questions, capture leads, and book appointments — automatically.",
    description:
      "We build custom AI chatbots and embed them directly on your website. Your customers get instant answers 24/7. You get qualified leads and booked appointments without lifting a finger.",
    accentColor: "#7B61FF",
    features: [
      {
        title: "Lead capture",
        description:
          "Chatbot qualifies visitors and collects their info before passing them to you.",
      },
      {
        title: "FAQ automation",
        description:
          "Handles your most common questions so your team doesn't have to.",
      },
      {
        title: "Appointment booking",
        description:
          "Integrated scheduling so customers can book directly through the chat.",
      },
      {
        title: "Custom trained",
        description:
          "Trained on your business — your services, your prices, your tone.",
      },
    ],
    idealFor: [
      "Any business that gets repetitive inquiries",
      "Service businesses with appointment scheduling",
      "E-commerce stores",
      "Businesses open outside 9-5",
    ],
    process: [
      "Define use cases",
      "Train on your content",
      "Build & embed",
      "Test & tune",
      "Monitor & improve",
    ],
  },
  {
    id: "social-media",
    number: "03",
    title: "Social Media Setup",
    tagline: "Show up professionally on every platform from day one.",
    description:
      "We handle the setup, branding, and launch of your social media presence so you can focus on running your business. Whether you're starting from scratch or rebranding, we build profiles that make a strong first impression.",
    accentColor: "#00E5FF",
    features: [
      {
        title: "Profile creation",
        description:
          "Instagram, Facebook, and TikTok pages set up and fully configured.",
      },
      {
        title: "Brand consistency",
        description:
          "Profile photos, cover images, and bios that match your website brand.",
      },
      {
        title: "Content kickoff",
        description:
          "First batch of posts to launch your page with real content.",
      },
      {
        title: "Strategy brief",
        description:
          "A simple content plan so you know what to post and how often.",
      },
    ],
    idealFor: [
      "New businesses launching their presence",
      "Existing businesses rebranding",
      "Businesses with no social presence",
      "Anyone who wants to look professional online",
    ],
    process: [
      "Brand intake",
      "Profile setup",
      "Visual branding",
      "Content creation",
      "Launch",
    ],
  },
];
