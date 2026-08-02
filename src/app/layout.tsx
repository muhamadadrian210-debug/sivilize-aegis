import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aegis.sivilize.com"),
  title: "Sivilize Aegis — Enterprise Cybersecurity & Infrastructure Hardening",
  description: "Divisi Keamanan Siber Resmi PT Sivilize Corp Indonesia. Spesialis WAF, DDoS Mitigation, API Security, Cloud Hardening, & Penetration Testing. Executive COO WA: +62 851-3774-3321.",
  keywords: [
    "Sivilize Aegis",
    "Enterprise Cybersecurity Indonesia",
    "WAF DDoS Mitigation",
    "API Security Protection",
    "Server Hardening PT Sivilize Corp",
    "Security Assessment Audit",
    "BSrE BSSN Digital Certificate",
  ],
  authors: [{ name: "PT Sivilize Corp Indonesia" }],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Sivilize Aegis — Enterprise Cybersecurity & Infrastructure Hardening",
    description: "Enterprise Cybersecurity That Protects Your Business Before Threats Become Incidents. PT Sivilize Corp Indonesia (NIB 0207260103661).",
    url: "https://aegis.sivilize.com",
    siteName: "Sivilize Aegis",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sivilize Aegis Cybersecurity Banner",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sivilize Aegis — Enterprise Cybersecurity",
    description: "WAF, DDoS Mitigation, API Security, & Server Hardening.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SecurityService",
    "name": "Sivilize Aegis",
    "legalName": "PT SIVILIZE CORP INDONESIA",
    "url": "https://aegis.sivilize.com",
    "logo": "https://aegis.sivilize.com/icon.svg",
    "image": "https://aegis.sivilize.com/og-image.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-851-3774-3321",
      "contactType": "Chief Operating Officer",
      "contactOption": "TollFree",
      "areaServed": "ID",
      "availableLanguage": ["Indonesian", "English"]
    },
    "sameAs": [
      "https://github.com/muhamadadrian210-debug"
    ]
  };

  return (
    <html lang="id" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <meta property="og:image" content="https://aegis.sivilize.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#090d16] text-slate-300 font-sans">{children}</body>
    </html>
  );
}
