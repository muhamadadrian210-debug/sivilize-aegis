"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function HargaPage() {
  const [cycle, setCycle] = useState<"monthly" | "sixMonth" | "yearly">("monthly");

  const packages = [
    {
      name: "Basic Protection",
      priceMonthly: "Mulai dari Rp 1.500.000 / bln",
      priceSixMonth: "Mulai dari Rp 8.100.000 / 6 bln",
      priceYearly: "Mulai dari Rp 15.000.000 / thn",
      desc: "Perlindungan perimeter standar untuk website profil perusahaan, portal informasi, atau aplikasi tunggal.",
      features: [
        "WAF Layer 7 Basic Rules",
        "DDoS Mitigation (Up to 10 Gbps)",
        "DNS Proxy Protection (Metode 1)",
        "Vulnerability Scanning Bulanan",
        "SSL Enkripsi & HSTS",
        "Support Email & WhatsApp SLA 24 Jam"
      ]
    },
    {
      name: "Business Protection",
      priceMonthly: "Mulai dari Rp 4.500.000 / bln",
      priceSixMonth: "Mulai dari Rp 24.300.000 / 6 bln",
      priceYearly: "Mulai dari Rp 45.000.000 / thn",
      desc: "Perlindungan komprehensif untuk aplikasi web aktif, toko online, SIMRS klinik, & portal kampus.",
      features: [
        "Semua Fitur Paket Basic",
        "Custom WAF Rate-Limiting",
        "API Security & Token Review",
        "Audit Logging & Bot Management",
        "Server OS Hardening (Metode 2)",
        "Support WhatsApp SLA Prioritas < 2 Jam"
      ]
    },
    {
      name: "Enterprise Custom SLA",
      priceMonthly: "Hubungi Tim Eksekutif Kami",
      priceSixMonth: "Hubungi Tim Eksekutif Kami",
      priceYearly: "Hubungi Tim Eksekutif Kami",
      desc: "Solusi pengamanan khusus berskala besar untuk Rumah Sakit RSUD, Instansi Pemerintah, BUMN, & SaaS Multi-tenant.",
      features: [
        "Full Source Code Audit & DevSecOps",
        "Dedicated Incident Response Team",
        "Multi-factor Auth & Face Verification",
        "Disaster Recovery & Ransomware Shield",
        "Perjanjian NDA Legal & SLA 99.99%",
        "Direct Line COO Briand Jivencha Therik"
      ]
    }
  ];

  return (
    <div className="page-wrapper min-h-screen flex flex-col font-sans bg-[#090d16] text-slate-300">
      <Navbar />

      <main className="flex-1 pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-blue-400 text-xs font-mono tracking-widest uppercase block mb-2">// PRICING_TIERS</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">Paket & Investasi Keamanan</h1>
            <p className="text-slate-400 text-sm mt-4">
              Pilihan perlindungan terstruktur dengan penawaran transparan sesuai skala infrastruktur Anda.
            </p>
          </div>

          {/* CYCLE TOGGLE */}
          <div className="flex items-center justify-center gap-3 mb-16">
            <button
              onClick={() => setCycle("monthly")}
              className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${cycle === "monthly" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" : "bg-slate-900 border border-slate-800 text-slate-400"}`}
            >
              Per Bulan
            </button>
            <button
              onClick={() => setCycle("sixMonth")}
              className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${cycle === "sixMonth" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" : "bg-slate-900 border border-slate-800 text-slate-400"}`}
            >
              6 Bulan (Hemat 10%)
            </button>
            <button
              onClick={() => setCycle("yearly")}
              className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${cycle === "yearly" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" : "bg-slate-900 border border-slate-800 text-slate-400"}`}
            >
              1 Tahun (Hemat 20%)
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div key={idx} className={`p-8 rounded-2xl bg-slate-900 border ${idx === 1 ? "border-blue-500/60 shadow-2xl relative" : "border-slate-800"} flex flex-col justify-between`}>
                {idx === 1 && (
                  <span className="bg-blue-600 text-white text-[10px] font-mono font-extrabold px-3 py-1 rounded-full uppercase tracking-wider absolute -top-3 left-8">
                    MOST RECOMMENDED
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-bold text-white uppercase mb-2">{pkg.name}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">{pkg.desc}</p>
                  
                  <div className="p-4 rounded-xl bg-[#070b12] border border-slate-800 mb-6 font-mono">
                    <strong className="text-blue-400 text-sm block">
                      {cycle === "monthly" && pkg.priceMonthly}
                      {cycle === "sixMonth" && pkg.priceSixMonth}
                      {cycle === "yearly" && pkg.priceYearly}
                    </strong>
                  </div>

                  <ul className="space-y-3 text-xs text-slate-300 mb-8 font-mono">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-400 font-bold">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/6285137743321?text=${encodeURIComponent(`Halo Pak Briand (COO Sivilize Aegis),\nSaya tertarik dengan paket *${pkg.name}* untuk kebutuhan perusahaan kami.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3.5 rounded-xl text-xs font-extrabold transition-all ${idx === 1 ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30" : "bg-slate-800 hover:bg-slate-700 text-white"}`}
                >
                  💬 Hubungi Tim Kami (COO WA)
                </a>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
