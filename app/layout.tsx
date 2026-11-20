import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
})

const SITE_URL = "https://www.aldidiscounts.com"
const SITE_NAME = "ALDI Discounts"
const TITLE = "The ALDI Discounts They Don't Advertise"
const DESCRIPTION =
  "Discover how shoppers are unlocking hidden ALDI discounts this Thanksgiving — on turkey and dinner groceries, pies and baking staples, fresh produce, and ALDI Finds. Complete 5+ deals in five simple steps and get your discount delivered straight to your inbox."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "ALDI discount code",
    "ALDI coupon",
    "ALDI promo code",
    "ALDI Thanksgiving",
    "ALDI Thanksgiving deals",
    "ALDI turkey",
    "ALDI Thanksgiving dinner",
    "ALDI pies",
    "ALDI holiday baking",
    "ALDI produce",
    "ALDI Finds",
    "ALDI grocery savings",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "shopping",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1376,
        height: 768,
        alt: "Thanksgiving grocery flat-lay of a whole turkey, pumpkin pie, cranberries, sweet potatoes, green beans, small pumpkins, flour, and a grocery tote with autumn leaves on a navy blue surface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  other: {
    "apple-mobile-web-app-title": SITE_NAME,
  },
}

export const viewport: Viewport = {
  themeColor: "#00205B",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
