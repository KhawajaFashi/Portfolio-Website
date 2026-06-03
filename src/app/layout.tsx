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
    default: "Khawaja Fashi Ud Din Abdullah | Backend Engineer",
    template: "%s | Khawaja Fashi",
  },
  description:
    "Khawaja Fashi Ud Din Abdullah is a Backend Engineer (Remote, Full-Time) specialising in Node.js (Express), Python, PostgreSQL, Redis, Prisma ORM, JWT/RBAC, and REST API design. Slashed API latency 73% and cut DB read load 45% at Quem Systems International.",
  authors: [{ name: "Khawaja Fashi Ud Din Abdullah", url: "https://khfa.dev" }],
  creator: "Khawaja Fashi Ud Din Abdullah",
  keywords: [
    "Backend Engineer",
    "Node.js",
    "Express.js",
    "Python",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Prisma ORM",
    "REST API",
    "JWT",
    "RBAC",
    "Docker",
    "WebSocket",
    "Async Remote Engineer",
    "FAST NUCES",
    "Khawaja Fashi",
    "Khawaja Fashi Ud Din Abdullah",
    "khfa.dev",
    "Backend Developer Pakistan",
    "Quem Systems International",
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
    title: "Khawaja Fashi Ud Din Abdullah | Backend Engineer",
    description:
      "Backend Engineer specialising in Node.js, Python, PostgreSQL, Redis, and JWT/RBAC security. Shipped 73% API latency reduction and 45% DB read load cut at Quem Systems International.",
    url: "https://khfa.dev",
    siteName: "Khawaja Fashi Portfolio",
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khawaja Fashi Ud Din Abdullah | Backend Engineer",
    description:
      "Backend Engineer — Node.js, Python, PostgreSQL, Redis, JWT/RBAC. 73% API latency reduction. Async remote, zero micro-management.",
    creator: "@KhawajaFashi",
  },
  verification: {
    google: "placeholder-google-site-verification",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://khfa.dev/#profilepage",
      url: "https://khfa.dev",
      name: "Khawaja Fashi Ud Din Abdullah — Backend Engineer Portfolio",
      description:
        "Professional portfolio of Khawaja Fashi Ud Din Abdullah, a Backend Engineer with 2+ years of experience in Node.js, Python, PostgreSQL, Redis, and JWT/RBAC security systems. Available for remote full-time roles.",
      mainEntity: { "@id": "https://khfa.dev/#person" },
      dateModified: new Date().toISOString().split("T")[0],
    },
    {
      "@type": "Person",
      "@id": "https://khfa.dev/#person",
      name: "Khawaja Fashi Ud Din Abdullah",
      alternateName: ["Khawaja Fashi", "kfa"],
      url: "https://khfa.dev",
      email: "fashi449623@gmail.com",
      image: {
        "@type": "ImageObject",
        url: "https://khfa.dev/avatar_optimized.jpg",
        width: 400,
        height: 400,
      },
      jobTitle: "Backend Engineer",
      description:
        "Backend Engineer (Remote, Full-Time) with 2+ years of hands-on experience in Node.js, Python, and PostgreSQL, operating with full autonomy across remote and asynchronous environments. Proven track record of independent project ownership: slashed API response time by 73%, built live ML threat pipelines, and cut DB read load by 45% with zero micro-management.",
      sameAs: [
        "https://github.com/KhawajaFashi",
        "https://www.linkedin.com/in/khawaja-fashi-ud-din-abdullah-859b7a23b/",
        "https://x.com/KhawajaFashi",
        "https://khfa.dev",
      ],
      knowsAbout: [
        "Backend Engineering",
        "Node.js",
        "Express.js",
        "Python",
        "SQL",
        "PostgreSQL",
        "MySQL",
        "Redis",
        "Prisma ORM",
        "REST API Design",
        "JWT Authentication",
        "RBAC Authorization",
        "Docker",
        "WebSocket",
        "Microservices Architecture",
        "Asynchronous Remote Work",
        "Cybersecurity",
        "IoT Systems",
        "Machine Learning Integration",
        "MQTT Protocol",
        "Scikit-learn",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Backend Engineer",
        occupationLocation: { "@type": "Country", name: "Remote" },
        employmentType: "Full-time",
        responsibilities: [
          "Architected a Redis-based caching layer independently, reducing database read load by 45% and cutting p95 response times by 160ms.",
          "Slashed backend API response time from ~450ms to under 120ms (73% reduction) by rewriting legacy N+1 MySQL queries and generating optimal composite indexes via Prisma ORM independently.",
          "Engineered a 4-tier security framework (HS256 JWT) securing 113 routes across user, admin, and subscription roles with bulletproof cookie isolation and account-state verification.",
          "Extended RBAC middleware to enforce subscription guards on 42 endpoints, independently fixing a critical privilege gap.",
          "Containerised all backend microservices using Docker, reducing onboarding setup time from 4 hours to 10 minutes.",
          "Delivered 14+ high-priority features across 4 development sprints entirely async across PKT and EST time zones.",
        ],
      },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Bachelor of Cybersecurity",
        recognizedBy: {
          "@type": "EducationalOrganization",
          name: "National University of Computer and Emerging Sciences (FAST NUCES)",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Islamabad",
            addressCountry: "PK",
          },
        },
        temporalCoverage: "2023/2027",
      },
      worksFor: {
        "@type": "Organization",
        name: "Quem Systems International",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Islamabad",
          addressCountry: "PK",
        },
      },
    },
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
        {/* JSON-LD must use beforeInteractive so it is baked into SSR HTML —
            afterInteractive injects via JS after hydration, making it invisible
            to crawlers that don't execute JavaScript. */}
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
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
