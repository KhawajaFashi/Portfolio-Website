import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./_components/Nav";
import CustomCursor from "./_components/CustomCursor";

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
  title: "Khawaja Fashi | Backend & Security",
  description: "Personal portfolio of Khawaja Fashi Ud Din Abdullah, Backend Developer & Cybersecurity Engineer.",
  authors: [{ name: "Khawaja Fashi Ud Din Abdullah" }],
  keywords: [
    "Backend Developer",
    "Node.js",
    "Cybersecurity",
    "REST API",
    "PostgreSQL",
    "JWT",
    "RBAC",
    "FAST NUCES",
  ],
  openGraph: {
    title: "Khawaja Fashi Ud Din Abdullah",
    description:
      "Backend Developer · Node.js · Security Engineering · FAST NUCES Islamabad",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${geistSans.variable} ${geistMono.variable}`}>
        <CustomCursor />
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
