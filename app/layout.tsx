import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CompanyHeader from "@/components/navbar/header";
import Footer from "@/components/navbar/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Life Tech Nepal | Web & IT Solutions",
  description:
    "Life Tech Nepal provides professional web development, software solutions, and IT services in Nepal. We build fast, secure, and scalable digital solutions for your business.",
  keywords: [
    "life tech",
    "life tech pvt ltd",
    "Life Tech Nepal",
    "Web Development Nepal",
    "IT Services Nepal",
    "Software Development",
    "Digital Solutions",
    "Tech Company Nepal",
  ],
  authors: [{ name: "Life Tech Nepal" }],
  creator: "Life Tech Nepal",
  publisher: "Life Tech Nepal",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.lifetech.com.np",
  },
  openGraph: {
    title: "Life Tech Nepal | Web & IT Solutions",
    description:
      "Professional web development and IT services in Nepal. Build fast, secure, and scalable digital solutions with Life Tech Nepal.",
    url: "https://www.lifetech.com.np",
    siteName: "Life Tech Nepal",
    images: [
      {
        url: "/logo.png", // 1200x630 recommended
        width: 1200,
        height: 630,
        alt: "Life Tech Nepal Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Life Tech Nepal | Web & IT Solutions",
    description:
      "Professional IT services and web development company in Nepal.",
    images: ["/logo.png"],
    creator: "@lifetechnepal", // update if you have Twitter handle
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
        <CompanyHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
