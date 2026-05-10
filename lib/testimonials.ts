export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  business: string;
  initial: string;
  accent: "primary" | "accent" | "magenta";
};

export const testimonials: Testimonial[] = [
  {
    id: "atif",
    quote:
      "Zeconic rebuilt our site in under two weeks and it actually loads instantly. We started getting lead form fills the same week it launched.",
    name: "Atif R.",
    role: "Owner",
    business: "Atif Solutions",
    initial: "A",
    accent: "primary",
  },
  {
    id: "whjitti",
    quote:
      "I gave them a half-formed idea and they came back with a site that felt premium. Clear pricing, no nonsense, fast turnaround.",
    name: "Hassan M.",
    role: "Founder",
    business: "Whjitti",
    initial: "H",
    accent: "accent",
  },
  {
    id: "walicont",
    quote:
      "Best money we've spent on the business. The AI chatbot books appointments while we sleep — easily paid for itself in the first month.",
    name: "Walid K.",
    role: "Operations",
    business: "Walicont",
    initial: "W",
    accent: "magenta",
  },
  {
    id: "local-1",
    quote:
      "Our old WordPress site was a disaster. The new one is fast, looks expensive, and is actually easy for us to update ourselves.",
    name: "Maria S.",
    role: "Owner",
    business: "Bayview HVAC",
    initial: "M",
    accent: "primary",
  },
  {
    id: "local-2",
    quote:
      "Communication was excellent the entire time. They explained things clearly, hit every deadline, and the site is genuinely beautiful.",
    name: "Jordan T.",
    role: "Director",
    business: "Crestline Salon",
    initial: "J",
    accent: "accent",
  },
];
