import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lindsey Bourne Coaching | Relationship Coaching",
    template: "%s | Lindsey Bourne Coaching",
  },
  description:
    "Lindsey Bourne is a trauma-informed relationship coach specializing in somatic attachment coaching, subconscious rewiring, and nervous system healing. Based in the Bay Area, offering virtual 1:1 coaching to help you break free from repetitive relationship patterns and step into secure, aligned connection.",
  metadataBase: new URL("https://www.lindseybournecoaching.com"),
  keywords: [
    "relationship coaching",
    "somatic attachment coaching",
    "nervous system healing",
    "subconscious rewiring",
    "trauma-informed coaching",
    "attachment repair",
    "inner child work",
    "parts work",
    "Bay Area relationship coach",
  ],
  authors: [{ name: "Lindsey Bourne" }],
  creator: "Lindsey Bourne Coaching",
  openGraph: {
    title: "Lindsey Bourne Coaching | Relationship Coaching",
    description:
      "Trauma-informed relationship coach specializing in somatic attachment coaching, subconscious rewiring, and nervous system healing.",
    url: "https://www.lindseybournecoaching.com",
    siteName: "Lindsey Bourne Coaching",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lindsey Bourne Coaching | Relationship Coaching",
    description:
      "Somatic attachment coaching, subconscious rewiring, and nervous system healing.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Lindsey Bourne Coaching",
    description:
      "Lindsey Bourne is a trauma-informed relationship coach specializing in somatic attachment coaching, subconscious rewiring, and nervous system healing.",
    url: "https://www.lindseybournecoaching.com",
    areaServed: "Worldwide",
    serviceType: "Relationship Coaching",
    founder: {
      "@type": "Person",
      name: "Lindsey Bourne",
      jobTitle: "Trauma-Informed Relationship Coach",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "California Institute of Integral Studies",
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Masters Degree",
          name: "M.A. in Integral Counseling Psychology",
        },
      ],
      knowsAbout: [
        "Somatic Attachment Coaching",
        "Subconscious Rewiring",
        "Nervous System Healing",
        "Inner Child Work",
        "Parts Work (IFS)",
        "Attachment Repair",
      ],
    },
    sameAs: ["https://www.instagram.com/lindseybournecoaching/"],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${cormorant.variable} ${montserrat.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
