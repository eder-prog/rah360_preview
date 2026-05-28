import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RAH360 · Custom kitchens, baths & remodels · SC Midlands",
  description:
    "Owner-led custom kitchen, bath, and home remodels in the South Carolina Midlands. Free in-person estimate. Joel comes out personally.",
  openGraph: {
    type: "website",
    title: "RAH360 · Custom kitchens, baths & remodels",
    description: "Owner-led custom remodels in the SC Midlands. Free in-person estimate, no pressure.",
    images: [{ url: "/assets/og-source.png", alt: "Custom kitchens, baths & remodels. Done right, here in the Midlands." }],
    url: "https://rah360.com/",
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/assets/logo/logo-icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=Fraunces:ital,wght@1,400;1,500&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#hero" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
