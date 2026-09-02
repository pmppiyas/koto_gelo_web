import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - ${siteConfig.banglaName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  publisher: siteConfig.name,
  applicationName: siteConfig.name,
  category: "Finance",
  classification: "Personal Finance, Expense Tracker, Mess Management, Bill Splitter",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/favicon.ico", "/favicon.svg"],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: `${siteConfig.name} (${siteConfig.banglaName}) - ${siteConfig.tagline}`,
    description: siteConfig.fullDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/logo.png`,
        secureUrl: `${siteConfig.url}/logo.png`,
        width: 512,
        height: 512,
        type: "image/png",
        alt: `${siteConfig.name} Logo`,
      },
    ],
    locale: "bn_BD",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} (${siteConfig.banglaName}) - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/logo.png`],
    creator: "@kotogelo",
    site: "@kotogelo",
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "bn-BD": siteConfig.url,
      "en-US": siteConfig.url,
    },
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "KotoGelo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data (JSON-LD) for SoftwareApplication & Organization
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${siteConfig.url}/#software`,
        name: siteConfig.name,
        alternateName: siteConfig.banglaName,
        headline: siteConfig.tagline,
        description: siteConfig.fullDescription,
        applicationCategory: "FinanceApplication",
        operatingSystem: "Android, Web, iOS",
        url: siteConfig.url,
        downloadUrl: siteConfig.links.apkDirect,
        installUrl: siteConfig.links.playstore,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "BDT",
          availability: "https://schema.org/InStock",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          ratingCount: "1250",
          bestRating: "5",
          worstRating: "1",
        },
        featureList: [
          "Instant <1s Expense Logging",
          "Mess Meal & Shared Bill Splitter",
          "Tour Cost Breakdown",
          "100% Offline-first & Private",
          "Visual Spending Categories & Analytics",
          "Debt & Credit Settlement Tracking",
        ],
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`,
        sameAs: [
          siteConfig.links.github,
          siteConfig.links.playstore,
          siteConfig.links.twitter,
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        alternateName: siteConfig.banglaName,
        description: siteConfig.description,
        inLanguage: ["bn-BD", "en-US"],
      },
    ],
  };

  return (
    <html lang="bn" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:image" content={`${siteConfig.url}/logo.png`} />
        <meta property="og:image:secure_url" content={`${siteConfig.url}/logo.png`} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content="KotoGelo" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.className} ${inter.variable} min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-primary-500 selection:text-white`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
