import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import PageTransition from "@/components/ui/PageTransition";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { dmSans, syne } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Zeconic Web Solutions",
    template: "%s | Zeconic Web Solutions",
  },
  description:
    "Custom websites and AI chatbots for small businesses across the US. Built with React and Next.js.",
  metadataBase: new URL("https://websolutions.zeconic.com"),
  openGraph: {
    title: "Zeconic Web Solutions",
    description:
      "Custom websites and AI chatbots for small businesses across the US.",
    url: "https://websolutions.zeconic.com",
    siteName: "Zeconic Web Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeconic Web Solutions",
    description:
      "Custom websites and AI chatbots for small businesses across the US.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${dmSans.variable} min-h-screen bg-background font-body text-textPrimary antialiased`}
      >
        <Navbar />
        <main className="min-h-screen pt-16 md:pt-[4.25rem]">
          <ScrollToTop />
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
