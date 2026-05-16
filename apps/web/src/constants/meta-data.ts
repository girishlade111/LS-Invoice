import { Metadata, Viewport } from "next";

const SITE_URL = "https://invoicely.gg";
const SITE_NAME = "Invoicely";
const DEFAULT_TITLE = "Invoicely - Create Beautiful & Professional Invoices | Free Invoice Generator";
const DEFAULT_DESCRIPTION =
  "Invoicely is a free, open-source invoice generator that allows you to create unlimited beautiful and professional invoices in minutes. Download as PDF, no signup required. Backed by Cloudflare OSS.";

export const defaultWebsiteViewport: Viewport = {
  themeColor: "#09090B",
  maximumScale: 1,
  initialScale: 1,
  width: "device-width",
  userScalable: false,
};

export const defaultWebsiteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
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
    icon: "/official/invoicely-logo.png",
    shortcut: "/official/invoicely-logo.png",
    apple: "/official/invoicely-logo.png",
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/official/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Invoicely - Free Invoice Generator",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/official/og-banner.png"],
    site: "@invoicely",
    creator: "@invoicely",
  },
  keywords: [
    "generate invoice",
    "invoice generator",
    "invoice",
    "invoicely",
    "invoicely.gg",
    "generate beautiful invoices",
    "create invoice",
    "create beautiful invoices",
    "create professional invoices",
    "create invoices",
    "create invoice online",
    "create invoice online free",
    "create invoice online for free",
    // Free invoice keywords
    "free invoice generator",
    "free invoice maker",
    "free invoice template",
    "free invoice creator",
    "free online invoice generator",
    "free professional invoice generator",
    "no signup invoice generator",
    "instant invoice generator",
    // Business & freelancing keywords
    "freelancer invoice generator",
    "small business invoice generator",
    "contractor invoice generator",
    "consultant invoice generator",
    "business invoice maker",
    "startup invoice generator",
    // Template & design keywords
    "invoice template generator",
    "custom invoice generator",
    "professional invoice template",
    "modern invoice generator",
    "elegant invoice maker",
    "customizable invoice generator",
    "invoice design tool",
    "branded invoice generator",
    // Feature-specific keywords
    "pdf invoice generator",
    "downloadable invoice generator",
    "printable invoice generator",
    "invoice generator with logo",
    "invoice maker with tax calculation",
    "multi-currency invoice generator",
    "recurring invoice generator",
    // Industry-specific keywords
    "service invoice generator",
    "product invoice generator",
    "hourly rate invoice generator",
    "project invoice generator",
    "photography invoice generator",
    "web design invoice generator",
    // Alternative terms
    "bill generator",
    "billing software free",
    "invoice software online",
    "invoicing tool free",
    "receipt generator",
    "quote generator",
    "estimate generator",
    // Long-tail SEO keywords
    "how to create professional invoice",
    "best free invoice generator",
    "simple invoice generator online",
    "quick invoice maker",
    "easy invoice creator",
    "online invoice builder",
    "invoice generator no registration",
    "generate invoice in minutes",
    // Popular search terms
    "invoice generator",
    "online invoice generator",
    "free invoice generator",
    "invoice generator online",
    "invoice generator free",
    "online invoice generator free",
    "zoho invoice generator",
    "gst invoice generator",
    "free invoice generator online",
    "invoice generator online free",
    "best free invoice generator",
    "free gst invoice generator",
    // AI-related keywords
    "ai invoice generator",
    "ai powered invoice generator",
    "intelligent invoice generator",
    "automated invoice generator",
    // Payment-specific keywords
    "paypal invoice generator",
    "payment invoice generator",
    "secure invoice generator",
    // Additional popular search terms
    "invoice generator online free",
    "free online invoice generator",
    "free invoice generator online",
  ],
};

export interface IGenerateWebsiteMetadata {
  title: string;
  description?: string;
  image?: string;
  keywords?: string[];
}

export const generateWebsiteMetadata = ({
  title,
  description,
  image,
  keywords,
}: IGenerateWebsiteMetadata): Metadata => {
  return {
    ...defaultWebsiteMetadata,
    keywords: [...(defaultWebsiteMetadata.keywords || []), ...(keywords || [])],
    title: title || defaultWebsiteMetadata.title,
    description: description || defaultWebsiteMetadata.description,
    openGraph: {
      images: image || defaultWebsiteMetadata.openGraph?.images,
    },
  };
};
