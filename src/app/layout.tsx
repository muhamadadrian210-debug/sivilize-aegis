import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sivilize Aegis | Next-Gen Security Ecosystem & Reverse Proxy",
  description: "Perlindungan website & aplikasi sekelas perbankan tanpa ubah kode. Integrasi mudah via DNS Proxy (Aegis Shield) atau JavaScript SDK (Aegis Core).",
  keywords: ["Sivilize Aegis", "Security SaaS Indonesia", "Web Application Firewall", "Reverse Proxy DNS", "Protection SDK", "UU PDP Compliance"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <body className="bg-[#07090e] text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
