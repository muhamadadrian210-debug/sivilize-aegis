"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const articles = [
  {
    title: "Cara Mencegah Serangan DDoS Pada Server Perusahaan",
    desc: "Panduan teknis dan strategi mitigasi rate-limiting untuk mencegah kelumpuhan server dari banjir trafik jahat.",
    category: "NETWORK SECURITY"
  },
  {
    title: "Apa Itu Ransomware Dan Cara Melindungi Data Sensitif Bisnis",
    desc: "Langkah-langkah pencegahan enkripsi massal dan penyusunan strategi backup otomatis off-site yang aman.",
    category: "DATA PROTECTION"
  },
  {
    title: "Cara Memilih Web Application Firewall (WAF) Yang Tepat",
    desc: "Perbandingan aturan WAF cloud vs on-premise untuk perlindungan layer 7 pada aplikasi skala besar.",
    category: "WAF & PROXY"
  },
  {
    title: "Strategi Amankan REST & GraphQL API Dari Kebocoran Data",
    desc: "Penanganan celah BOLA/IDOR dan otorisasi token JWT pada titik akses API perusahaan.",
    category: "API SECURITY"
  },
  {
    title: "Checklist Hardening Server Linux Untuk Infrastruktur Kritis",
    desc: "Daftar konfigurasi wajib SSH, UFW firewall, fail2ban, dan penutupan port sensitif di Linux.",
    category: "SERVER HARDENING"
  },
  {
    title: "Cara Mengurangi Risiko Serangan SQL Injection Pada Aplikasi Web",
    desc: "Penerapan prepared statements, ORM, dan sanitasi input form untuk mengamankan database utama.",
    category: "APP SECURITY"
  },
  {
    title: "Checklist Cybersecurity Wajib Bagi UMKM & Startup",
    desc: "Panduan keamanan siber tingkat dasar hingga menengah untuk melindungi bisnis berkembang dari peretasan.",
    category: "SECURITY CHECKLIST"
  }
];

export default function BlogPage() {
  return (
    <div className="page-wrapper min-h-screen flex flex-col font-sans bg-[#090d16] text-slate-300">
      <Navbar />

      <main className="flex-1 pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-400 text-xs font-mono tracking-widest uppercase block mb-2">// SECURITY_ARTICLES</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">Artikel & Edukasi Keamanan Siber</h1>
            <p className="text-slate-400 text-sm mt-4">
              Wawasan teknis dan panduan mitigasi risiko siber untuk tim IT dan pemilik keputusan bisnis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((art, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-blue-400 block mb-2">[ {art.category} ]</span>
                  <h3 className="text-lg font-bold text-white mb-3 uppercase leading-snug">{art.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">{art.desc}</p>
                </div>
                <span className="text-blue-400 font-mono text-xs font-bold hover:underline cursor-pointer">
                  Baca Artikel Lengkap &rarr;
                </span>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
