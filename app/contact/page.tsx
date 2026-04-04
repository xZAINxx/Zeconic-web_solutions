import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Contact | Zeconic Web Solutions" },
  description:
    "Get in touch with Zeconic Web Solutions. Book a free discovery call or send us a message about your project.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}
