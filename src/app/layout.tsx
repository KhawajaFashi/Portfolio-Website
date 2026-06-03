import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display, Geist } from "next/font/google";
import "./globals.css";
import Nav from "./_components/Nav";
import CustomCursor from "./_components/CustomCursor";
import Preloader from "./_components/Preloader";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://khfa.dev"),
  title: {
    default: "Khawaja Fashi | Backend & Security",
    template: "%s | Khawaja Fashi",
  },
  description:
    "Portfolio of Khawaja Fashi, Backend Developer & Cybersecurity Specialist. Expert in Node.js, Python, PostgreSQL, and secure API architecture.",
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '96x96' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
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
      "Portfolio of Khawaja Fashi, Backend Developer & Cybersecurity Specialist. Expert in Node.js, Python, PostgreSQL, and secure API architecture.",
    url: "https://khfa.dev",
    siteName: "Khawaja Fashi Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khawaja Fashi Ud Din Abdullah | Backend & Security",
    description:
      "Portfolio of Khawaja Fashi, Backend Developer & Cybersecurity Specialist. Expert in Node.js, Python, PostgreSQL, and secure API architecture.",
    creator: "@KhawajaFashi",
  },
  verification: {
    // TODO: Replace with real token
    google: "placeholder-google-site-verification",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Khawaja Fashi Ud Din Abdullah",
  alternateName: "Khawaja Fashi",
  url: "https://khfa.dev",
  image: "https://khfa.dev/avatar_optimized.jpg",
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
    "https://www.linkedin.com/in/khawaja-fashi-ud-din-abdullah-859b7a23b/",
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
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} ${geist.variable}`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6HXPF5C6P5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-6HXPF5C6P5');
          `}
        </Script>
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CustomCursor />
        <Preloader />
        <Nav />
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
