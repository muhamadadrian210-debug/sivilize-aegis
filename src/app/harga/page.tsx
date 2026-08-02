"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function HargaPage() {
  const [methodCategory, setMethodCategory] = useState<"dns" | "sourceCode">("dns");
  const [cycle, setCycle] = useState<"monthly" | "sixMonth" | "yearly">("monthly");

  const dnsPackages = [
    {
      name: "Starter Protection",
      priceMonthly: "Rp 199.000 / bulan",
      priceSixMonth: "Rp 999.000 / 6 bulan",
      priceYearly: "Rp 1.899.000 / tahun",
      desc: "Perlindungan perimeter dasar via DNS & Proxy untuk website profil usaha, portal berita, atau blog.",
      features: [
        "Tidak Membutuhkan Source Code",
        "WAF Layer 7 Perimeter Defense",
        "DDoS Protection (Up to 10 Gbps)",
        "Bot Protection & Traffic Filtering",
        "SSL Security & Rate Limiting",
        "Downtime Minimal / Zero Impact",
        "Support WA SLA < 24 Jam"
      ]
    },
    {
      name: "Business Protection",
      priceMonthly: "Rp 499.000 / bulan",
      priceSixMonth: "Rp 2.699.000 / 6 bulan",
      priceYearly: "Rp 4.999.000 / tahun",
      desc: "Perlindungan perimeter lanjutan untuk toko online, portal kampus, SIMRS klinik, & aplikasi bisnis aktif.",
      features: [
        "Semua Fitur Starter DNS",
        "Custom WAF Rate Limiting",
        "Advanced Bot Mitigation",
        "Vulnerability Scan Bulanan",
        "Cloud Firewall Configuration",
        "Support WA SLA < 2 Jam"
      ]
    },
    {
      name: "Enterprise Custom SLA",
      priceMonthly: "Mulai Rp 2.500.000 / bulan",
      priceSixMonth: "Custom Proposal",
      priceYearly: "Custom Proposal",
      desc: "Solusi pengamanan perimeter khusus untuk Rumah Sakit RSUD, Instansi Pemerintah, BUMN, & SaaS Multi-tenant.",
      features: [
        "Dedicated Perimeter WAF Cluster",
        "Unlimited DDoS Mitigation",
        "Disaster Recovery & Ransomware Shield",
        "Perjanjian NDA Legal & SLA 99.99%",
        "Direct Line COO Briand Jivencha Therik"
      ]
    }
  ];

  const sourceCodePackages = [
    {
      name: "Starter Protection",
      priceMonthly: "Rp 499.000 / bulan",
      priceSixMonth: "Rp 2.499.000 / 6 bulan",
      priceYearly: "Rp 4.799.000 / tahun",
      desc: "Audit & penguatan keamanan langsung pada level source code untuk aplikasi web tunggal.",
      features: [
        "Source Code Review",
        "Authentication Review",
        "Authorization Review",
        "Patch Recommendation",
        "Dependency & Config Review",
        "Support WA SLA < 12 Jam"
      ]
    },
    {
      name: "Business Protection",
      priceMonthly: "Rp 999.000 / bulan",
      priceSixMonth: "Rp 5.499.000 / 6 bulan",
      priceYearly: "Rp 9.999.000 / tahun",
      desc: "Penguatan keamanan mendalam untuk aplikasi skala menengah, API endpoint, & database perusahaan.",
      features: [
        "Semua Fitur Starter Code",
        "API Security Review",
        "Identity & RBAC Review",
        "Server OS Hardening",
        "Audit Logging Configuration",
        "Support WA SLA < 2 Jam"
      ]
    },
    {
      name: "Enterprise Custom SLA",
      priceMonthly: "Mulai Rp 5.000.000 / bulan",
      priceSixMonth: "Custom Proposal",
      priceYearly: "Custom Proposal",
      desc: "Solusi audit & penguatan mendalam untuk ekosistem software korporasi, BUMN, & E-Gov.",
      features: [
        "Full DevSecOps Pipeline Review",
        "Face Auth & Biometric Integration",
        "Container & Docker Security Review",
        "Dedicated Incident Response Team",
        "Perjanjian NDA Legal & SLA 99.99%",
        "Direct Line COO Briand Jivencha Therik"
      ]
    }
  ];

  const currentPackages = methodCategory === "dns" ? dnsPackages : sourceCodePackages;

  return (
    <div className="page-wrapper min-h-screen flex flex-col font-sans bg-[#090d16] text-slate-300">
      <Navbar />

      <main className="flex-1 pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* EARLY ADOPTER ANNOUNCEMENT BANNER */}
          <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-blue-950/40 border border-blue-500/40 text-center">
            <span className="bg-blue-600 text-white text-[10px] font-mono font-extrabold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
              PROGRAM EARLY ADOPTER
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white uppercase mb-2">
              Bergabunglah Dalam Program Early Adopter Sivilize Aegis
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-3xl mx-auto leading-relaxed font-sans">
              Karena Sivilize Aegis masih dalam tahap awal pengembangan layanan, kami membuka Program Early Adopter dengan harga khusus bagi klien yang ingin menjadi bagian dari perjalanan kami. Program ini memberikan harga lebih terjangkau tanpa mengurangi komitmen kami dalam memberikan layanan terbaik.
            </p>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-blue-400 text-xs font-mono tracking-widest uppercase block mb-2">// PRICING_TIERS</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">Paket Layanan Keamanan</h1>
            <p className="text-slate-400 text-sm mt-3">
              Pilih metode perlindungan yang paling sesuai dengan ketersediaan source code & arsitektur sistem Anda.
            </p>
          </div>

          {/* METHOD TABS */}
          <div className="flex justify-center mb-8">
            <div className="p-1.5 rounded-2xl bg-slate-900 border border-slate-800 flex gap-2">
              <button
                onClick={() => setMethodCategory("dns")}
                className={`px-6 py-3 rounded-xl font-mono text-xs font-bold transition-all ${methodCategory === "dns" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" : "text-slate-400 hover:text-white"}`}
              >
                🛡️ DNS Protection (Tanpa Source Code)
              </button>
              <button
                onClick={() => setMethodCategory("sourceCode")}
                className={`px-6 py-3 rounded-xl font-mono text-xs font-bold transition-all ${methodCategory === "sourceCode" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" : "text-slate-400 hover:text-white"}`}
              >
                🔒 Full Source Code Protection
              </button>
            </div>
          </div>

          {/* BILLING CYCLE TOGGLE */}
          <div className="flex items-center justify-center gap-3 mb-16 font-mono text-xs">
            <button
              onClick={() => setCycle("monthly")}
              className={`px-4 py-2 rounded-lg font-bold transition-all ${cycle === "monthly" ? "bg-slate-800 text-white border border-blue-500/40" : "bg-slate-900/60 text-slate-400"}`}
            >
              Per Bulan
            </button>
            <button
              onClick={() => setCycle("sixMonth")}
              className={`px-4 py-2 rounded-lg font-bold transition-all ${cycle === "sixMonth" ? "bg-slate-800 text-white border border-blue-500/40" : "bg-slate-900/60 text-slate-400"}`}
            >
              6 Bulan (Hemat Khusus)
            </button>
            <button
              onClick={() => setCycle("yearly")}
              className={`px-4 py-2 rounded-lg font-bold transition-all ${cycle === "yearly" ? "bg-slate-800 text-white border border-blue-500/40" : "bg-slate-900/60 text-slate-400"}`}
            >
              1 Tahun (Hemat Maksimal)
            </button>
          </div>

          {/* PACKAGES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {currentPackages.map((pkg, idx) => (
              <div key={idx} className={`p-8 rounded-2xl bg-slate-900 border ${idx === 1 ? "border-blue-500/60 shadow-2xl relative" : "border-slate-800"} flex flex-col justify-between`}>
                {idx === 1 && (
                  <span className="bg-blue-600 text-white text-[10px] font-mono font-extrabold px-3 py-1 rounded-full uppercase tracking-wider absolute -top-3 left-8">
                    EARLY ADOPTER CHOICE
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-bold text-white uppercase mb-2">{pkg.name}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">{pkg.desc}</p>
                  
                  <div className="p-4 rounded-xl bg-[#070b12] border border-slate-800 mb-6 font-mono">
                    <strong className="text-blue-400 text-sm sm:text-base block">
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
                  href={`https://wa.me/6285137743321?text=${encodeURIComponent(`Halo Pak Briand (COO Sivilize Aegis),\nSaya bermaksud mendaftar Program Early Adopter untuk paket *${pkg.name} (${methodCategory === "dns" ? "DNS Protection" : "Full Source Code Protection"})*.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3.5 rounded-xl text-xs font-extrabold transition-all ${idx === 1 ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30" : "bg-slate-800 hover:bg-slate-700 text-white"}`}
                >
                  💬 Daftar Early Adopter (COO WA)
                </a>
              </div>
            ))}
          </div>

          {/* COMPARISON MATRIX TABLE */}
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
            <h2 className="text-2xl font-bold text-white uppercase mb-6 text-center">Perbandingan Metode Protection</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400">
                    <th className="p-4 uppercase">Kriteria & Fitur</th>
                    <th className="p-4 uppercase text-blue-400">DNS Protection</th>
                    <th className="p-4 uppercase text-emerald-400">Full Source Code Protection</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 text-slate-300">
                  <tr>
                    <td className="p-4 font-bold text-white">Membutuhkan Source Code</td>
                    <td className="p-4 text-red-400">✖ Tidak Membutuhkan</td>
                    <td className="p-4 text-emerald-400">✔ Membutuhkan Akses</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">Kecepatan Implementasi</td>
                    <td className="p-4 text-blue-400">✔ Cepat (Hitungan Jam)</td>
                    <td className="p-4 text-slate-400">Audit Bertahap</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">Downtime Impact</td>
                    <td className="p-4 text-emerald-400">✔ Zero Downtime / Minim</td>
                    <td className="p-4 text-slate-400">Scheduled Maintenance</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">Cocok Untuk Website Berjalan</td>
                    <td className="p-4 text-emerald-400">✔ Sangat Cocok</td>
                    <td className="p-4 text-slate-400">Memerlukan Testing Staging</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">Perlindungan WAF & DDoS</td>
                    <td className="p-4 text-emerald-400">✔ Ya (Layer 7 Perimeter)</td>
                    <td className="p-4 text-emerald-400">✔ Ya</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">Audit Kodingan & Aplikasi</td>
                    <td className="p-4 text-red-400">✖ Tidak</td>
                    <td className="p-4 text-emerald-400">✔ Deep Code Review</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">Review Autentikasi & RBAC</td>
                    <td className="p-4 text-red-400">✖ Tidak</td>
                    <td className="p-4 text-emerald-400">✔ Audit Login & Role</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">Review API & Dependency</td>
                    <td className="p-4 text-slate-400">Perimeter Filtering Only</td>
                    <td className="p-4 text-emerald-400">✔ Deep API Review</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
