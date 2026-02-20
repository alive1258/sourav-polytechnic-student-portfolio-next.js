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

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://sabbirhossain.dev"), // Replace with your actual domain
  title: {
    default: "Sabbir Hossain - Electronics Engineering Student & Programmer",
    template: "%s | Sabbir Hossain",
  },
  description:
    "Electronics Engineering student at Tangail Polytechnic Institute, passionate about embedded systems, IoT, PCB design, and programming. Explore projects in Arduino, ESP32, and robotics.",
  keywords: [
    "Sabbir Hossain",
    "Sourav",
    "Electronics Engineering",
    "Embedded Systems",
    "IoT Developer",
    "PCB Design",
    "Arduino",
    "ESP32",
    "Robotics",
    "C/C++ Programmer",
    "Python Developer",
    "Tangail Polytechnic Institute",
    "Bangladesh",
    "Hardware Engineer",
    "Embedded C",
  ],
  authors: [{ name: "Sabbir Hossain Sourav" }],
  creator: "Sabbir Hossain Sourav",
  publisher: "Sabbir Hossain Sourav",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Open Graph for social media
  openGraph: {
    title: "Sabbir Hossain - Programmer & Electronics Engineering Student  ",
    description:
      "Electronics Engineering student specializing in embedded systems, IoT, and PCB design. Building innovative hardware and software solutions.",
    url: "https://sabbirhossain.dev",
    siteName: "Sabbir Hossain Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: "Sabbir Hossain - Electronics Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Sabbir Hossain - Electronics Engineering Student & Programmer",
    description:
      "Electronics Engineering student specializing in embedded systems, IoT, and PCB design.",
    creator: "@sabbirhossain", // Add your Twitter handle
    images: ["/twitter-image.jpg"], // Add your Twitter image
  },

  // Robots
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

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },

  // Manifest
  manifest: "/site.webmanifest",

  // Verification for search consoles
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console code
    yandex: "your-yandex-verification-code", // Add your Yandex verification
  },

  // Alternate links
  alternates: {
    canonical: "https://sabbirhossain.dev",
    languages: {
      "en-US": "https://sabbirhossain.dev/en-US",
      "bn-BD": "https://sabbirhossain.dev/bn-BD",
    },
  },

  // Category
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Theme color for browser */}
        <meta name="theme-color" content="#0F172A" />
        <meta name="msapplication-TileColor" content="#0F172A" />

        {/* Viewport for responsive design */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0F172A] text-white min-h-screen`}
      >
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>

        {/* Main content */}
        <main id="main-content">{children}</main>

        {/* JSON-LD structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sabbir Hossain Sourav",
              alternateName: "Sourav",
              url: "https://sabbirhossain.dev",
              sameAs: [
                "https://github.com/sabbirhossain",
                "https://linkedin.com/in/sabbirhossain",
                "https://facebook.com/sabbirhossain",
                "https://twitter.com/sabbirhossain",
              ],
              jobTitle: "Electronics Engineering Student",
              worksFor: {
                "@type": "CollegeOrUniversity",
                name: "Tangail Polytechnic Institute",
              },
              knowsAbout: [
                "Embedded Systems",
                "IoT",
                "PCB Design",
                "Arduino",
                "ESP32",
                "C/C++",
                "Python",
                "Robotics",
              ],
              description:
                "Electronics Engineering student passionate about embedded systems, IoT, and hardware design.",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Tangail Polytechnic Institute",
              },
              birthPlace: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Sirajganj",
                  addressRegion: "Rajshahi",
                  addressCountry: "Bangladesh",
                },
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
