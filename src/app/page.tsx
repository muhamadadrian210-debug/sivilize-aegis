"use client";

import React, { useState } from "react";
import { 
  Shield, ShieldCheck, Zap, Lock, Globe, Server, CheckCircle2, 
  ArrowRight, Code, FileText, Smartphone, AlertTriangle, ChevronDown, 
  Copy, ExternalLink, Scale, Users, Radio, Activity, Cpu, Key, RefreshCw
} from "lucide-react";
import { AegisSimulator } from "@/components/AegisSimulator";
import { DashboardPreview } from "@/components/DashboardPreview";

export default function AegisLandingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "sixMonth" | "yearly">("sixMonth");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#05070c] text-slate-100 bg-grid-cyber relative overflow-hidden font-sans">
      {/* Subtle Hero Gradient Backdrops */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-cyan-500/10 via-blue-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Top Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#05070c]/85 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-[#0a0e17] rounded-[11px] flex items-center justify-center text-cyan-400">
                <Shield className="w-5 h-5 fill-cyan-400/20" />
              </div>
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-white flex items-center gap-1">
                SIVILIZE <span className="text-cyan-400">AEGIS</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono block -mt-1">Sivilize Corp Ecosystem</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-slate-300">
            <a href="#simulator" className="hover:text-cyan-400 transition">Simulasi Live</a>
            <a href="#mode" className="hover:text-cyan-400 transition">Mode Integrasi</a>
            <a href="#features" className="hover:text-cyan-400 transition">Fitur Proteksi</a>
            <a href="#pricing" className="hover:text-cyan-400 transition">Harga & Paket</a>
            <a href="#compliance" className="hover:text-cyan-400 transition">SLA & Legal</a>
            <a href="#faq" className="hover:text-cyan-400 transition">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Sivilize%20Aegis,%20saya%20tertarik%20konsultasi%20keamanan%20website"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-bold transition flex items-center gap-2"
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
            <span>UU PDP No. 27/2022 Ready • Zero-Downtime Security Ecosystem</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
            Perlindungan Keamanan Web & Aplikasi <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Sekelas Enterprise Tanpa Bikin Ulang
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Sivilize Aegis memberikan sistem proteksi otomatis untuk toko online, website instansi, hingga platform sekolah. Pasang instan via DNS Proxy (Tanpa Kode) atau JS SDK (Tanpa Ribet).
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-sm transition shadow-xl shadow-cyan-400/20 flex items-center justify-center gap-2"
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

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 text-left border-t border-slate-800/80 max-w-3xl mx-auto">
            <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
              <span className="text-2xl md:text-3xl font-black text-white font-mono">99.9%</span>
              <span className="text-xs text-slate-400 block mt-0.5">SLA Uptime Target</span>
            </div>
            <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
              <span className="text-2xl md:text-3xl font-black text-cyan-400 font-mono">&lt; 15 ms</span>
              <span className="text-xs text-slate-400 block mt-0.5">Proxy Response Latency</span>
            </div>
            <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
              <span className="text-2xl md:text-3xl font-black text-purple-400 font-mono">100%</span>
              <span className="text-xs text-slate-400 block mt-0.5">UU PDP 2022 Compliant</span>
            </div>
            <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
              <span className="text-2xl md:text-3xl font-black text-emerald-400 font-mono">2 Mode</span>
              <span className="text-xs text-slate-400 block mt-0.5">DNS Proxy & JS SDK</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Simulator Section */}
      <section id="simulator" className="py-16 bg-[#070a11] border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Sistem Pertahanan Teruji & Real-Time</h2>
            <p className="text-xs md:text-sm text-slate-400">Cobalah simulasi ancaman siber di bawah ini dan perhatikan bagaimana Aegis merespons secara otomatis.</p>
          </div>

          <AegisSimulator />
        </div>
      </section>

      {/* Architecture Dual Mode Section */}
      <section id="mode" className="py-20 max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
            DUAL INTEGRATION ARCHITECTURE
          </span>
          <h2 className="text-3xl font-extrabold text-white">Dua Opsi Pemasangan Fleksibel</h2>
          <p className="text-sm text-slate-400">Pilih metode integrasi yang paling sesuai dengan kebutuhan infrastruktur web Anda.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mode 1: Aegis Shield */}
          <div className="bg-[#0a0e17] border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition glow-cyan flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-3 py-1 rounded-full">MODE 1: DNS REVERSE PROXY</span>
              </div>

              <h3 className="text-2xl font-bold text-white">Aegis Shield (Tanpa Akses Kode)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ideal untuk website yang dibuat oleh vendor lama, menggunakan WordPress, cPanel, atau jika Anda tidak memegang source code. Cukup arahkan DNS domain ke IP Aegis.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Tanpa instalasi software atau ubah kodingan</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Menangkal DDoS, Bot Spam, & IP Jahat sebelum menyentuh server</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Auto SSL HSTS Grade A+ Certificate</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Migrasi lancar tanpa downtime</div>
              </div>
            </div>

            <div className="p-4 bg-[#05070c] rounded-xl border border-slate-800/80 text-xs font-mono text-slate-400">
              <span className="text-cyan-400 font-bold block mb-1">Pemasangan DNS:</span>
              A Record domain ke IP Aegis Proxy: <code className="text-white bg-slate-800 px-2 py-0.5 rounded">103.18.24.89</code>
            </div>
          </div>

          {/* Mode 2: Aegis Core */}
          <div className="bg-[#0a0e17] border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition glow-blue flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Code className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/30 px-3 py-1 rounded-full">MODE 2: JS SDK / API</span>
              </div>

              <h3 className="text-2xl font-bold text-white">Aegis Core (Deep Integration)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dirancang untuk pengembang aplikasi web modern (React, Next.js, Laravel, Custom PHP). Cukup tempel 1 baris kode script untuk proteksi form login & audit log.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Proteksi Brute-Force pada form Login & Register</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Audit Log detail per aktivitas pengguna</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Peringatan keamanan otomatis via WhatsApp ke admin</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Dashboard analisis lalu lintas pengguna</div>
              </div>
            </div>

            <div className="p-4 bg-[#05070c] rounded-xl border border-slate-800/80 text-xs font-mono text-slate-300">
              <span className="text-purple-400 font-bold block mb-1">1-Line Script Integration:</span>
              <code className="text-slate-300 text-[11px] block overflow-x-auto">
                &lt;script src="https://aegis.sivilize.id/sdk.js" data-key="YOUR_KEY"&gt;&lt;/script&gt;
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Capabilities Grid */}
      <section id="features" className="py-20 bg-[#070a11] border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
              SECURITY CAPABILITIES
            </span>
            <h2 className="text-3xl font-extrabold text-white">Perlindungan Berlapis & Komprehensif</h2>
            <p className="text-sm text-slate-400">Seluruh modul dirancang untuk menjaga uptime dan keamanan data bisnis Anda secara pasif maupun aktif.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0b0f19] border border-slate-800 p-6 rounded-xl space-y-3 hover:border-slate-700 transition">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <Globe className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">DNS Reverse Proxy WAF</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Menyaring request berbahaya di lapisan terdepan sebelum menyentuh hosting utama Anda.</p>
            </div>

            <div className="bg-[#0b0f19] border border-slate-800 p-6 rounded-xl space-y-3 hover:border-slate-700 transition">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Anti Brute-Force & Bot Lock</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Mengunci IP penyerang secara otomatis jika terdeteksi percobaan pencocokan password mencurigakan.</p>
            </div>

            <div className="bg-[#0b0f19] border border-slate-800 p-6 rounded-xl space-y-3 hover:border-slate-700 transition">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Alert WhatsApp Real-Time</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Notifikasi instan dikirim langsung ke WhatsApp admin saat ada indikasi percobaan pembobolan.</p>
            </div>

            <div className="bg-[#0b0f19] border border-slate-800 p-6 rounded-xl space-y-3 hover:border-slate-700 transition">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Audit Log Aktivitas Pengguna</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Pencatatan rekam jejak aksi penting (siapa, kapan, dari IP mana) untuk transparansi keamanan.</p>
            </div>

            <div className="bg-[#0b0f19] border border-slate-800 p-6 rounded-xl space-y-3 hover:border-slate-700 transition">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                <Scale className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">UU PDP No. 27/2022 Ready</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Struktur enkripsi dan kebijakan pengolahan data sesuai dengan regulasi pelindungan data pribadi Indonesia.</p>
            </div>

            <div className="bg-[#0b0f19] border border-slate-800 p-6 rounded-xl space-y-3 hover:border-slate-700 transition">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Adaptive Rate Limiter</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Membatasi laju request secara otomatis untuk mencegah server down akibat lonjakan DDoS.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 md:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Portal Dashboard Terpusat</h2>
          <p className="text-xs md:text-sm text-slate-400">Pantau lalu lintas, ancaman yang dicegah, dan status kepatuhan hukum dalam satu panel kerja yang bersih.</p>
        </div>

        <DashboardPreview />
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
            SUBSCRIPTION PRICING
          </span>
          <h2 className="text-3xl font-extrabold text-white">Skema Harga Terjangkau & Transparan</h2>
          <p className="text-sm text-slate-400">Pilih paket perlindungan yang sesuai dengan skala bisnis Anda. Tanpa biaya tersembunyi.</p>

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

        {/* Pricing Cards Grid */}
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
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Auto SSL HSTS Certificate</div>
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

          {/* Enterprise Plan */}
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

      {/* SLA & Legal Support */}
      <section id="compliance" className="py-16 bg-[#070a11] border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <Scale className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">UU PDP No. 27/2022 Ready</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Membantu bisnis Anda mematuhi regulasi pelindungan data pribadi Indonesia secara hukum.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">Kontrak Legal & MoU Resmi</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Dukungan dokumen legalitas formal di bawah entitas berbadan hukum resmi PT Sivilize Corp Indonesia.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">Dukungan Spesialis Lokal</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Tim dukungan teknis berbahasa Indonesia yang siap membantu penanganan masalah 24/7.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section id="faq" className="py-20 max-w-4xl mx-auto px-4 md:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-white">Pertanyaan Sering Diajukan (FAQ)</h2>
          <p className="text-xs md:text-sm text-slate-400">Informasi penting mengenai cara kerja dan layanan Sivilize Aegis.</p>
        </div>

        <div className="space-y-3">
          {[
            {
              q: "Apakah saya perlu membuat ulang website lama saya?",
              a: "Sama sekali tidak. Aegis dirancang khusus untuk melindungi website atau aplikasi yang sudah berjalan (WordPress, Custom PHP, Laravel, Node.js). Cukup ubah DNS (Mode Shield) atau tempel 1 baris kode (Mode Core)."
            },
            {
              q: "Bagaimana jika developer lama tidak menyerahkan source code?",
              a: "Anda tetap dapat menggunakan Aegis Mode 1 (Aegis Shield DNS Proxy). Anda hanya perlu mengubah DNS Record di panel registrasi domain tanpa butuh izin atau akses source code dari vendor lama."
            },
            {
              q: "Apa yang terjadi jika masa langganan berakhir?",
              a: "Sistem memberikan masa tenggang 7 hari disertai notifikasi WhatsApp. Jika tidak diperpanjang, proteksi akan dinonaktifkan secara aman dan trafik dikembalikan ke server asal tanpa merusak data Anda."
            },
            {
              q: "Apakah PT Sivilize Corp melayani penerbitan MoU & Faktur Pajak?",
              a: "Ya. PT Sivilize Corp Indonesia adalah entitas PT resmi. Kami melayani penerbitan MoU, kontrak SLA, invoice resmi, dan Faktur Pajak untuk keperluan sekolah, universitas, maupun BUMN."
            }
          ].map((item, idx) => (
            <div key={idx} className="border border-slate-800/80 rounded-xl bg-[#0a0e17] overflow-hidden transition">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-white hover:text-cyan-400 transition"
              >
                <span>{item.q}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === idx ? "rotate-180 text-cyan-400" : ""}`} />
              </button>

              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-[#0a1224] to-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 glow-cyan">
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">Siap Mengamankan Aset Digital Bisnis Anda?</h3>
            <p className="text-xs md:text-sm text-slate-300 max-w-xl">
              Konsultasikan kebutuhan keamanan web & aplikasi Anda dengan spesialis Sivilize Corp.
            </p>
          </div>

          <a
            href="https://wa.me/6281234567890?text=Halo%20Sivilize%20Aegis,%20saya%20siap%20mengamankan%20website%20kami"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-sm transition shadow-xl shadow-cyan-400/20 whitespace-nowrap"
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
