"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle2, ArrowRight, Smartphone, Shield, HelpCircle } from "lucide-react";

export default function HargaPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "sixMonth" | "yearly">("sixMonth");

  const getPrice = (monthlyBase: number) => {
    if (billingCycle === "monthly") return `Rp ${monthlyBase.toLocaleString("id-ID")}`;
    if (billingCycle === "sixMonth") {
      const discounted = Math.round(monthlyBase * 0.85);
      return `Rp ${discounted.toLocaleString("id-ID")}`;
    }
    const discounted = Math.round(monthlyBase * 0.70);
    return `Rp ${discounted.toLocaleString("id-ID")}`;
  };

  return (
    <div className="min-h-screen bg-[#05070c] text-slate-100 bg-grid-cyber relative overflow-hidden font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
            SUBSCRIPTION PRICING
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            Skema Harga Transparan & Hemat
          </h1>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
            Pilih paket perlindungan yang sesuai dengan kebutuhan dan skala bisnis Anda. Tanpa biaya tersembunyi.
          </p>

          {/* Billing Cycle Selector */}
          <div className="inline-flex p-1.5 bg-slate-900 border border-slate-800 rounded-2xl gap-1 mt-4">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                billingCycle === "monthly" ? "bg-cyan-500 text-black shadow-lg" : "text-slate-400 hover:text-white"
              }`}
            >
              Bulanan
            </button>
            <button
              onClick={() => setBillingCycle("sixMonth")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1 ${
                billingCycle === "sixMonth" ? "bg-cyan-500 text-black shadow-lg" : "text-slate-400 hover:text-white"
              }`}
            >
              6 Bulan <span className="bg-black/30 text-[10px] px-1.5 py-0.5 rounded-full">Diskon 15%</span>
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1 ${
                billingCycle === "yearly" ? "bg-cyan-500 text-black shadow-lg" : "text-slate-400 hover:text-white"
              }`}
            >
              1 Tahun <span className="bg-purple-950 text-purple-300 border border-purple-500/30 text-[10px] px-1.5 py-0.5 rounded-full">Hemat 30%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Starter */}
          <div className="bg-[#0a0e17] border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-slate-700 transition">
            <div className="space-y-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">AEGIS STARTER</span>
              <div>
                <span className="text-3xl font-black text-white">{getPrice(99000)}</span>
                <span className="text-xs text-slate-400 block mt-1">/ bulan per domain</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">Cocok untuk landing page UMKM atau blog pribadi yang butuh proteksi dasar.</p>
              
              <hr className="border-slate-800" />

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Mode Aegis Shield (DNS Proxy)</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Anti-DDoS Dasar & Rate Limiting</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> SSL Certificate Auto-Renew</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Kuota 50.000 Request / bulan</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Dashboard Analytics Standar</div>
              </div>
            </div>

            <a
              href="https://wa.me/6281234567890?text=Saya%20tertarik%20Paket%20Aegis%20Starter"
              target="_blank"
              rel="noreferrer"
              className="mt-8 w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition text-center block"
            >
              Langganan Starter
            </a>
          </div>

          {/* Pro Plan */}
          <div className="bg-[#0c1220] border-2 border-cyan-500 rounded-2xl p-8 flex flex-col justify-between relative shadow-2xl shadow-cyan-500/15 scale-105">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-cyan-400 text-black text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow">
              PALING POPULER
            </div>

            <div className="space-y-4">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">AEGIS PRO</span>
              <div>
                <span className="text-4xl font-black text-white">{getPrice(299000)}</span>
                <span className="text-xs text-slate-400 block mt-1">/ bulan per domain</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">Pilihan terbaik untuk toko online, portal akademik, & aplikasi bisnis yang membutuhkan keamanan aktif.</p>

              <hr className="border-slate-800" />

              <div className="space-y-2.5 text-xs text-slate-200 font-medium">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Semua Fitur Paket Starter</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Mode Aegis Core (JS SDK Integration)</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Notifikasi Alert WhatsApp Real-Time</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Anti Brute-Force Form Login</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Audit Log Interaksi Pengguna</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Kuota 300.000 Request / bulan</div>
              </div>
            </div>

            <a
              href="https://wa.me/6281234567890?text=Saya%20tertarik%20Paket%20Aegis%20Pro"
              target="_blank"
              rel="noreferrer"
              className="mt-8 w-full py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-xs transition text-center block shadow-lg shadow-cyan-500/20"
            >
              Mulai Langganan Pro
            </a>
          </div>

          {/* Enterprise */}
          <div className="bg-[#0a0e17] border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-slate-700 transition">
            <div className="space-y-4">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block">AEGIS ENTERPRISE</span>
              <div>
                <span className="text-3xl font-black text-white">Custom</span>
                <span className="text-xs text-slate-400 block mt-1">SLA khusus & Invoice Resmi PT</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">Didesain untuk instansi pemerintah, sekolah besar, & korporasi dengan kebutuhan regulasi UU PDP.</p>

              <hr className="border-slate-800" />

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Dedicated Proxy Instance Server</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Sertifikat Compliance UU PDP No.27/2022</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Dokumen Kontrak SLA 99.9% & MoU Resmi</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Unlimited Request & Custom Rules WAF</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Dedicated Support 24/7 via WhatsApp / Phone</div>
              </div>
            </div>

            <a
              href="https://wa.me/6281234567890?text=Halo%20Sivilize%20Aegis,%20kami%20butuh%20Paket%20Enterprise%20dan%20MoU%20Resmi"
              target="_blank"
              rel="noreferrer"
              className="mt-8 w-full py-3.5 rounded-xl bg-purple-950 hover:bg-purple-900 border border-purple-500/40 text-purple-200 font-bold text-xs transition text-center block"
            >
              Hubungi Tim Enterprise
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
