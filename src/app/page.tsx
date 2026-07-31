"use client";

import React, { useState } from "react";
import { 
  Shield, ShieldCheck, Zap, Lock, Globe, Server, CheckCircle2, 
  ArrowRight, Code, FileText, Smartphone, AlertTriangle, ChevronRight, 
  Copy, ExternalLink, HelpCircle, Layers, Cpu, Eye, Scale, Users
} from "lucide-react";
import { AegisSimulator } from "@/components/AegisSimulator";
import { DashboardPreview } from "@/components/DashboardPreview";

export default function AegisLandingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "sixMonth" | "yearly">("sixMonth");
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const sdkCode = `<script src="https://aegis.sivilize.id/sdk.js" data-key="YOUR_AEGIS_API_KEY" async></script>`;

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(sdkCode);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  // Pricing calculations
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
    <div className="min-h-screen bg-[#06080d] text-slate-100 bg-grid-pattern relative overflow-hidden">
      {/* Glow Ambient Highlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-cyan-500/15 via-blue-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Top Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#06080d]/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-[#0a0e17] rounded-[11px] flex items-center justify-center text-cyan-400">
                <Shield className="w-5 h-5 fill-cyan-400/20" />
              </div>
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-white flex items-center gap-1">
                SIVILIZE <span className="text-cyan-400">AEGIS</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono block -mt-1">By Sivilize Corp Ecosystem</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-300">
            <a href="#simulator" className="hover:text-cyan-400 transition">Simulasi Live</a>
            <a href="#mode" className="hover:text-cyan-400 transition">Mode Integrasi</a>
            <a href="#features" className="hover:text-cyan-400 transition">Fitur Keamanan</a>
            <a href="#pricing" className="hover:text-cyan-400 transition">Harga & Paket</a>
            <a href="#compliance" className="hover:text-cyan-400 transition">SLA & Legal</a>
            <a href="#faq" className="hover:text-cyan-400 transition">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Sivilize%20Aegis,%20saya%20tertarik%20konsultasi%20keamanan%20website"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-bold transition flex items-center gap-2"
            >
              <Smartphone className="w-4 h-4" /> Konsultasi WA
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 md:pt-24 pb-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono shadow-inner">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>UU PDP No. 27/2022 Ready • Zero-Downtime Security Integration</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
            Amankan Website & Sistem Bisnis Anda <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
              Sekelas Perbankan Tanpa Bikin Ulang
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Sivilize Aegis memberikan perlindungan komprehensif untuk website UMKM, e-commerce, hingga instansi. Cukup ubah DNS atau tempel 1 baris kode script — tanpa bongkar source code lama.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-black font-extrabold text-sm hover:brightness-110 transition shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2"
            >
              Pilih Paket Langganan <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#simulator"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-sm transition flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 text-cyan-400" /> Uji Coba Simulasi Live
            </a>
          </div>

          {/* Highlight Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 text-left border-t border-slate-800/80 max-w-3xl mx-auto">
            <div>
              <span className="text-2xl md:text-3xl font-black text-white font-mono">99.9%</span>
              <span className="text-xs text-slate-400 block mt-0.5">SLA Uptime Target</span>
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-black text-cyan-400 font-mono">&lt; 15 ms</span>
              <span className="text-xs text-slate-400 block mt-0.5">Proxy Response Latency</span>
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-black text-purple-400 font-mono">100%</span>
              <span className="text-xs text-slate-400 block mt-0.5">Compliant UU PDP 2022</span>
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-black text-emerald-400 font-mono">2 Opsional</span>
              <span className="text-xs text-slate-400 block mt-0.5">DNS Proxy & JS SDK</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Simulator Section */}
      <section id="simulator" className="py-16 bg-[#080b12] border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Sistem Proteksi Otomatis Teruji</h2>
            <p className="text-sm text-slate-400">Cobalah simulasi serangan di bawah ini untuk melihat kecepatan tanggap Aegis dalam mengamankan server Anda.</p>
          </div>

          <AegisSimulator />
        </div>
      </section>

      {/* Dual Integration Mode Section */}
      <section id="mode" className="py-20 max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
            INTEGRATION ARCHITECTURE
          </span>
          <h2 className="text-3xl font-extrabold text-white">Solusi Untuk Segala Jenis Website & Aplikasi</h2>
          <p className="text-sm text-slate-400">Baik Anda memiliki akses source code maupun tidak, Aegis dapat langsung dipasang tanpa risiko downtime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mode 1: Aegis Shield (DNS Proxy) */}
          <div className="bg-[#0b0f19] border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition glow-cyan flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-3 py-1 rounded-full">MODE 1: NO CODE NEEDED</span>
              </div>

              <h3 className="text-2xl font-bold text-white">Aegis Shield (DNS Reverse Proxy)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Cocok bagi bisnis yang tidak memegang source code, menggunakan WordPress/hosting cPanel, atau dibuat oleh vendor lama yang tidak kooperatif. Cukup ubah DNS / Nameserver domain Anda ke Sivilize Aegis.
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Tanpa sentuh kodingan atau instalasi software</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Otomatis menangkal serangan DDoS, Bot Spam, & IP Jahat</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> SSL Certificate Otomatis Grade A+</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Migrasi Zero-Downtime (Website tetap dapat diakses)</div>
              </div>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800/90 text-xs font-mono text-slate-400">
              <span className="text-cyan-400 font-bold block mb-1">Cara Pasang:</span>
              Ubah A Record domain Anda ke IP Aegis: <code className="text-white bg-slate-800 px-2 py-0.5 rounded">103.18.24.89</code>
            </div>
          </div>

          {/* Mode 2: Aegis Core (JS SDK / Script) */}
          <div className="bg-[#0b0f19] border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition glow-blue flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Code className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono bg-purple-500/20 text-purple-300 border border-purple-500/40 px-3 py-1 rounded-full">MODE 2: DEEP INTEGRATION</span>
              </div>

              <h3 className="text-2xl font-bold text-white">Aegis Core (JavaScript SDK)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Cocok bagi pengembang web atau aplikasi bisnis modern (React, Next.js, Laravel, PHP). Cukup tempel 1 baris kode script untuk mengaktifkan audit log interaksi user, login 2FA, dan notifikasi keamanan WhatsApp.
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Perlindungan brute-force form login & register</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Audit Log lengkap per aktivitas pengguna (Siapa & Kapan)</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Peringatan Keamanan Instan via WhatsApp ke Admin</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Dashboard Analytics Aktivitas Pengguna</div>
              </div>
            </div>

            {/* SDK Code Box */}
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800/90 text-xs font-mono relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-purple-400 font-bold">1-Line Embed Code:</span>
                <button 
                  onClick={handleCopySnippet}
                  className="text-[10px] text-slate-400 hover:text-white bg-slate-800 px-2 py-0.5 rounded transition flex items-center gap-1"
                >
                  <Copy className="w-3 h-3" /> {copiedSnippet ? "Copied!" : "Copy"}
                </button>
              </div>
              <div className="text-slate-300 overflow-x-auto text-[11px] leading-relaxed">
                {sdkCode}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Client Portal Preview Section */}
      <section className="py-16 bg-[#080b12] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Dashboard Monitoring Terpusat</h2>
            <p className="text-sm text-slate-400">Pantau seluruh traffic, ancaman yang dicegah, dan status kepatuhan UU PDP dalam satu tampilan yang bersih.</p>
          </div>

          <DashboardPreview />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
            SUBSCRIPTION PRICING
          </span>
          <h2 className="text-3xl font-extrabold text-white">Investasi Keamanan Hemat & Fleksibel</h2>
          <p className="text-sm text-slate-400">Pilih paket perlindungan yang sesuai dengan skala usaha Anda. Bebas tentukan durasi langganan.</p>

          {/* Billing Cycle Selector Buttons */}
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
          {/* Starter Plan */}
          <div className="bg-[#0a0e17] border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-slate-700 transition">
            <div className="space-y-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">AEGIS STARTER</span>
              <div>
                <span className="text-3xl font-black text-white">{getPrice(99000)}</span>
                <span className="text-xs text-slate-400 block mt-1">/ bulan per domain</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">Cocok untuk website landing page UMKM atau blog pribadi yang butuh proteksi dasar.</p>
              
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

          {/* Pro Plan - HIGHLIGHTED */}
          <div className="bg-gradient-to-b from-[#0f172a] to-[#0a0e17] border-2 border-cyan-500 rounded-2xl p-8 flex flex-col justify-between relative shadow-2xl shadow-cyan-500/20 scale-105">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow">
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
              className="mt-8 w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-extrabold text-xs hover:brightness-110 transition text-center block shadow-lg shadow-cyan-500/30"
            >
              Mulai Langganan Pro
            </a>
          </div>

          {/* Enterprise Custom Plan */}
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
      </section>

      {/* Compliance & SLA Guarantee Section */}
      <section id="compliance" className="py-16 bg-[#080b12] border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <Scale className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">UU PDP No. 27/2022 Ready</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Membantu bisnis Anda mematuhi standar hukum perlindungan data pribadi di Indonesia dengan enkripsi ketat.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">Kontrak Legal & SLA Resmi</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Dilengkapi Service Level Agreement (SLA 99.9%) dan opsi MoU formal di bawah PT Sivilize Corp Indonesia.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">Dukungan Tim Teknis Lokal</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Tim ahli keamanan Sivilize siap mendampingi proses migrasi DNS atau setup SDK Bahasa Indonesia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 max-w-5xl mx-auto px-4 md:px-8 space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-white">Pertanyaan Sering Diajukan (FAQ)</h2>
          <p className="text-sm text-slate-400">Segala yang perlu Anda ketahui mengenai Sivilize Aegis.</p>
        </div>

        <div className="space-y-4">
          <div className="p-6 bg-[#0a0e17] border border-slate-800 rounded-xl space-y-2">
            <h4 className="text-base font-bold text-white">Apakah saya harus membongkar atau membuat ulang website lama saya?</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sama sekali tidak. Aegis dirancang untuk melindungi website yang sudah berjalan (WordPress, Laravel, Custom PHP, Node.js). Cukup ubah DNS (Aegis Shield) atau tempel 1 baris kode script (Aegis Core).
            </p>
          </div>

          <div className="p-6 bg-[#0a0e17] border border-slate-800 rounded-xl space-y-2">
            <h4 className="text-base font-bold text-white">Bagaimana jika vendor pembuatan website lama memegang source code kami?</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Anda tetap dapat menggunakan Aegis Mode 1 (Aegis Shield DNS Proxy). Anda hanya perlu mengubah DNS Record di panel registrar domain Anda tanpa membutuhkan izin atau akses source code dari vendor lama.
            </p>
          </div>

          <div className="p-6 bg-[#0a0e17] border border-slate-800 rounded-xl space-y-2">
            <h4 className="text-base font-bold text-white">Apa yang terjadi jika langganan bulanan berakhir?</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Kami akan memberikan masa tenggang 7 hari disertai notifikasi WhatsApp. Jika tidak diperpanjang, proteksi Aegis akan dinonaktifkan secara aman dan traffic akan dikembalikan ke server asal tanpa merusak data Anda.
            </p>
          </div>

          <div className="p-6 bg-[#0a0e17] border border-slate-800 rounded-xl space-y-2">
            <h4 className="text-base font-bold text-white">Apakah Sivilize Aegis melayani penerbitan Faktur Pajak & MoU instansi?</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ya, Sivilize Corp adalah entitas berbadan hukum resmi (PT). Kami melayani pembuatan MoU, kontrak SLA, invoice resmi, dan Faktur Pajak untuk keperluan sekolah, universitas, rumah sakit, maupun BUMN.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-r from-cyan-950 via-[#0a1224] to-purple-950 border border-cyan-500/40 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 glow-cyan">
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">Siap Mengamankan Aset Digital Bisnis Anda?</h3>
            <p className="text-xs md:text-sm text-slate-300 max-w-xl">
              Konsultasikan kebutuhan keamanan website Anda dengan tim spesialis Sivilize Corp secara gratis.
            </p>
          </div>

          <a
            href="https://wa.me/6281234567890?text=Halo%20Sivilize%20Aegis,%20saya%20siap%20mengamankan%20website%20kami"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-sm transition shadow-xl shadow-cyan-400/30 whitespace-nowrap"
          >
            Mulai Konsultasi Keamanan
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-12 bg-[#040609]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span>© {new Date().getFullYear()} PT Sivilize Corp Indonesia. Sivilize Aegis Ecosystem. All rights reserved.</span>
          </div>

          <div className="flex gap-6">
            <a href="#compliance" className="hover:text-slate-300 transition">Kebijakan Privasi</a>
            <a href="#compliance" className="hover:text-slate-300 transition">Terms of Service (ToS)</a>
            <a href="#compliance" className="hover:text-slate-300 transition">SLA Agreement</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
