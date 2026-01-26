import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  ),

  title: {
    default: "Anurag | Software Engineer",
    template: "%s · Anurag",
  },

  description:
    "Software Engineer focused on backend systems, distributed architecture, and building reliable products. Exploring tech, shipping projects, and contributing to open source.",

  keywords: [
    "Software Engineer",
    "Backend Developer",
    "Node.js",
    "TypeScript",
    "NestJS",
    "Next.js",
    "System Design",
    "Open Source",
    "Portfolio",
  ],

  authors: [{ name: "Anurag" }],
  creator: "Anurag",

  openGraph: {
    title: "Anurag | Software Engineer",
    description:
      "Backend-focused software engineer building scalable systems, exploring new tech, and shipping meaningful projects.",
    url: "https://yourdomain.dev",
    siteName: "Anurag Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Anurag – Software Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Anurag | Software Engineer",
    description:
      "Backend engineer exploring systems, building products, and contributing to open source.",
    images: ["/og.png"],
    creator: "@yourhandle",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
