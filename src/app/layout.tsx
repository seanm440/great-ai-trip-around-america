import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TripAssistant } from "@/components/chat/TripAssistant";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const siteUrl = "https://greataitrip.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Great AI Trip Around America",
    template: "%s | The Great AI Trip Around America",
  },
  description:
    "One bus. Thousands of miles. Countless conversations about the future of AI. A nationwide road trip visiting the founders, engineers, and communities building America's AI future.",
  keywords: [
    "AI road trip",
    "artificial intelligence",
    "AI startups",
    "AI documentary",
    "American innovation",
  ],
  openGraph: {
    title: "The Great AI Trip Around America",
    description:
      "One bus. Thousands of miles. Countless conversations about the future of AI.",
    url: siteUrl,
    siteName: "The Great AI Trip Around America",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Great AI Trip Around America",
    description:
      "One bus. Thousands of miles. Countless conversations about the future of AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-void text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-void"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <TripAssistant />
      </body>
    </html>
  );
}
