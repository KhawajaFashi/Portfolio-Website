import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./_components/Nav";
import CustomCursor from "./_components/CustomCursor";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://khfa.dev"),
  title: {
    default: "Khawaja Fashi | Backend & Security",
    template: "%s | Khawaja Fashi",
  },
  description:
    "Personal portfolio of Khawaja Fashi Ud Din Abdullah, Backend Developer & Cybersecurity Engineer. Specializing in Node.js, Python, PostgreSQL, and secure API architecture.",
  authors: [{ name: "Khawaja Fashi Ud Din Abdullah", url: "https://khfa.dev" }],
  creator: "Khawaja Fashi Ud Din Abdullah",
  keywords: [
    "Backend Developer",
    "Node.js",
    "Cybersecurity",
    "REST API",
    "PostgreSQL",
    "JWT",
    "RBAC",
    "FAST NUCES",
    "Khawaja Fashi",
    "khfa.dev",
    "Security Engineer",
  ],
  alternates: {
    canonical: "https://khfa.dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Khawaja Fashi Ud Din Abdullah | Backend & Security",
    description:
      "Backend Developer · Node.js · Security Engineering · FAST NUCES Islamabad. Specializing in performance architecture, authorization validation protocols, and reliable real-time analytics pipelines.",
    url: "https://khfa.dev",
    siteName: "Khawaja Fashi Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khawaja Fashi Ud Din Abdullah | Backend & Security",
    description:
      "Backend Developer · Node.js · Security Engineering · FAST NUCES Islamabad",
    creator: "@KhawajaFashi",
  },
  verification: {
    google: "placeholder-google-site-verification",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Khawaja Fashi Ud Din Abdullah",
  alternateName: "Khawaja Fashi",
  url: "https://khfa.dev",
  image: "https://khfa.dev/DSC_9812.jpg",
  jobTitle: "Backend Engineer & Cybersecurity Specialist",
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "National University of Computer and Emerging Sciences (FAST NUCES)",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "Pakistan",
    },
  },
  sameAs: [
    "https://github.com/KhawajaFashi",
    "https://linkedin.com/in/KhawajaFashi",
    "https://x.com/KhawajaFashi",
  ],
  knowsAbout: [
    "Backend Engineering",
    "Cybersecurity",
    "Node.js",
    "Python",
    "PostgreSQL",
    "REST APIs",
    "JWT",
    "RBAC",
    "Docker",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${geistSans.variable} ${geistMono.variable}`}>
        <CustomCursor />
        <Nav />
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
