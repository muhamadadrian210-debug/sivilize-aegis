"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  Shield, ShieldCheck, Zap, Lock, Globe, Server, CheckCircle2, 
  ArrowRight, Code, FileText, Smartphone, AlertTriangle, Scale, 
  Users, Building2, Target, HeartHandshake, HelpCircle, Layers, Sparkles
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#05070c] text-slate-100 bg-grid-cyber relative overflow-hidden font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-16 md:pt-24 pb-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          {/* Official Division Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono shadow-inner">
            <Building2 className="w-4 h-4 text-cyan-400" />
            <span>Divisi Layanan Keamanan Siber Resmi — PT Sivilize Corp Indonesia</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
            Pelindung Utama Aset Digital Bisnis Anda <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Tanpa Harus Membuat Ulang Website Dari Nol
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Sivilize Aegis hadir melayani toko online, UMKM, platform sekolah, hingga instansi di seluruh Indonesia. Berikan perlindungan sekelas perbankan via DNS Reverse Proxy (Tanpa Kode) atau JavaScript SDK (1-Line Embed).
          </p>

          {/* Primary Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Sivilize%20Aegis,%20saya%20mau%20konsultasi%20keamanan%20website"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-sm transition shadow-xl shadow-cyan-400/20 flex items-center justify-center gap-2"
            >
              <Smartphone className="w-4 h-4" /> Konsultasi WA Gratis <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/harga"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-sm transition flex items-center justify-center gap-2"
            >
              Lihat Skema Harga & Paket
            </Link>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 text-left border-t border-slate-800/80 max-w-3xl mx-auto">
            <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
              <span className="text-2xl font-black text-white font-mono">PT Resmi</span>
              <span className="text-xs text-slate-400 block mt-0.5">PT Sivilize Corp Indonesia</span>
            </div>
            <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
              <span className="text-2xl font-black text-cyan-400 font-mono">UU PDP 2022</span>
              <span className="text-xs text-slate-400 block mt-0.5">100% Compliant</span>
            </div>
            <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
              <span className="text-2xl font-black text-purple-400 font-mono">SLA 99.9%</span>
              <span className="text-xs text-slate-400 block mt-0.5">Uptime & Monitoring</span>
            </div>
            <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
              <span className="text-2xl font-black text-emerald-400 font-mono">Zero Downtime</span>
              <span className="text-xs text-slate-400 block mt-0.5">Instant DNS Migration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Latar Belakang & PT Sivilize Corp Indonesia */}
      <section className="py-20 bg-[#070a11] border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                ABOUT PT SIVILIZE CORP INDONESIA
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Pusat Inovasi Peradaban Digital Terpercaya Indonesia
              </h2>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                <strong>PT Sivilize Corp Indonesia</strong> adalah entitas teknologi nasional yang berkomitmen membangun ekosistem digital mandiri, aman, dan berdaya saing tinggi. Kami menaungi berbagai lini solusi mulai dari sistem informasi pendidikan (Sivilize Edu), layanan digital bisnis (Sivilize Web / SiWeb), hingga pertahanan siber terpadu (Sivilize Aegis).
              </p>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                Melalui divisi **Sivilize Aegis**, kami menyediakan payung perlindungan digital (Security-as-a-Service) yang dapat diakses oleh bisnis lokal tanpa kendala bahasa, biaya mahal, atau kerumitan teknis.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Badan Hukum PT Resmi
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Sertifikasi KBLI IT Jasa
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Faktur Pajak & MoU Support
                </span>
              </div>
            </div>

            {/* Vision & Mission Cards */}
            <div className="space-y-6">
              <div className="bg-[#0b0f19] border border-slate-800 p-6 rounded-2xl space-y-3 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Visi Kami</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Menjadi benteng keamanan digital utama di Indonesia yang memberikan ketenangan pikiran bagi jutaan pemilik usaha, institusi pendidikan, dan pengembang aplikasi tanpa hambatan teknis.
                </p>
              </div>

              <div className="bg-[#0b0f19] border border-slate-800 p-6 rounded-2xl space-y-3 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Misi Utama Kami</h3>
                </div>
                <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Demokratisasi keamanan siber: Membuat teknologi proteksi tingkat tinggi dapat dijangkau oleh UMKM hingga korporasi.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Menghapus ketergantungan pada vendor lama atau kerumitan source code melalui teknologi DNS Reverse Proxy & SDK modern.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Memastikan seluruh aset digital klien mematuhi standar UU PDP No. 27/2022 dengan transparansi penuh.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Keresahan Yang Kami Jawab (The Problems Being Solved) */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono text-rose-400 uppercase tracking-widest bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full">
            KERESAHAN BISNIS DIGITAL
          </span>
          <h2 className="text-3xl font-extrabold text-white">Masalah Nyata Yang Dihadapi Pemilik Usaha</h2>
          <p className="text-sm text-slate-400">Mengapa ribuan pemilik website di Indonesia cemas setiap harinya?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0b0f19] border border-rose-500/20 rounded-2xl p-6 space-y-3 relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-2">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">1. Source Code Disandera / Vendor Lama Tidak Kooperatif</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Banyak pemilik usaha tidak memiliki akses source code website mereka sendiri. Ketika ada masalah keamanan atau mau perbaiki kode, vendor lama tidak merespons atau minta biaya sangat tinggi.
            </p>
            <div className="p-3 bg-cyan-950/40 border border-cyan-500/30 rounded-xl text-xs text-cyan-300 font-medium">
              💡 <strong>Solusi Aegis:</strong> Pakai Mode Aegis Shield (DNS Proxy). Tanpa butuh akses source code, website langsung terlindungi!
            </div>
          </div>

          <div className="bg-[#0b0f19] border border-rose-500/20 rounded-2xl p-6 space-y-3 relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-2">
              <Scale className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">2. Ancam Sanksi UU PDP & Kebocoran Data Pelanggan</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              UU Pelindungan Data Pribadi (UU PDP No. 27/2022) menjatuhkan sanksi berat bagi pemilik website jika data pengguna bocor akibat peretasan. Kebanyakan UMKM bingung cara mengamankannya.
            </p>
            <div className="p-3 bg-cyan-950/40 border border-cyan-500/30 rounded-xl text-xs text-cyan-300 font-medium">
              💡 <strong>Solusi Aegis:</strong> Aegis menyediakan audit log terenkripsi & sistem keamanan berlapis siap pakai.
            </div>
          </div>

          <div className="bg-[#0b0f19] border border-rose-500/20 rounded-2xl p-6 space-y-3 relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-2">
              <Globe className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">3. Alat Keamanan Luar Negeri Mahal & Bahasa Inggris</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Alat keamanan luar negeri (seperti Cloudflare Pro atau Auth0) mahal, menggunakan kartu kredit dolar, konfigurasi rumit, dan tidak menyediakan tim dukungan WhatsApp berbahasa Indonesia.
            </p>
            <div className="p-3 bg-cyan-950/40 border border-cyan-500/30 rounded-xl text-xs text-cyan-300 font-medium">
              💡 <strong>Solusi Aegis:</strong> Aegis hadir dengan harga rupiah terjangkau, notifikasi WA instan, & support lokal 24/7.
            </div>
          </div>

          <div className="bg-[#0b0f19] border border-rose-500/20 rounded-2xl p-6 space-y-3 relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-2">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">4. Website Down atau Dibobol Saat Jam Sibuk</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Serangan DDoS atau pembobolan form login terjadi saat transaksi toko online sedang ramai. Kerugian penjualan dan kepercayaan pelanggan langsung hancur seketika.
            </p>
            <div className="p-3 bg-cyan-950/40 border border-cyan-500/30 rounded-xl text-xs text-cyan-300 font-medium">
              💡 <strong>Solusi Aegis:</strong> Automatic Rate Limiter & Brute-Force Lockout menjaga server tetap online & stabil.
            </div>
          </div>
        </div>
      </section>

      {/* Ekosistem PT Sivilize Corp Indonesia Showcase */}
      <section className="py-20 bg-[#070a11] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
              SIVILIZE ECOSYSTEM
            </span>
            <h2 className="text-3xl font-extrabold text-white">Ekosistem Produk PT Sivilize Corp Indonesia</h2>
            <p className="text-xs md:text-sm text-slate-400">Seluruh lini solusi saling terintegrasi untuk mendukung percepatan digitalisasi usaha Anda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#0a0e17] border-2 border-cyan-500/80 p-6 rounded-2xl space-y-3 shadow-lg glow-cyan">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Sivilize Aegis</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Sistem keamanan siber & reverse proxy otomatis untuk melindungi seluruh website bisnis Anda.</p>
              <span className="text-[10px] text-cyan-400 font-mono block">★ Produk Keamanan Utama</span>
            </div>

            <div className="bg-[#0a0e17] border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-slate-700 transition">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Sivilize Edu</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Sistem Informasi Akademik Terpadu untuk sekolah, madrasah, & perguruan tinggi.</p>
              <span className="text-[10px] text-slate-500 font-mono block">Platform Pendidikan</span>
            </div>

            <div className="bg-[#0a0e17] border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-slate-700 transition">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
                <Code className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Sivilize Web (SiWeb)</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Jasa pembuatan website profesional instan untuk UMKM, korporasi, & personal brand.</p>
              <span className="text-[10px] text-slate-500 font-mono block">Web Development Service</span>
            </div>

            <div className="bg-[#0a0e17] border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-slate-700 transition">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Sivilize Moments</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Platform undangan digital eksklusif dengan sistem QR check-in & angpao digital.</p>
              <span className="text-[10px] text-slate-500 font-mono block">Digital Event Invitation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="py-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 space-y-6">
          <h3 className="text-xl font-bold text-white text-center">Jelajahi Fitur & Layanan Sivilize Aegis</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <Link href="/simulasi" className="p-4 bg-[#0a0e17] rounded-xl border border-slate-800 hover:border-cyan-500/50 transition flex items-center justify-between group">
              <div>
                <span className="font-bold text-white block group-hover:text-cyan-400 transition">Simulasi Serangan Live</span>
                <span className="text-slate-400 text-[11px]">Uji ketahanan WAF & Bot Blocker</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition" />
            </Link>

            <Link href="/mode-integrasi" className="p-4 bg-[#0a0e17] rounded-xl border border-slate-800 hover:border-cyan-500/50 transition flex items-center justify-between group">
              <div>
                <span className="font-bold text-white block group-hover:text-cyan-400 transition">Mode Integrasi (DNS vs SDK)</span>
                <span className="text-slate-400 text-[11px]">Pilih metode pasang yang sesuai</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition" />
            </Link>

            <Link href="/harga" className="p-4 bg-[#0a0e17] rounded-xl border border-slate-800 hover:border-cyan-500/50 transition flex items-center justify-between group">
              <div>
                <span className="font-bold text-white block group-hover:text-cyan-400 transition">Harga & Paket Langganan</span>
                <span className="text-slate-400 text-[11px]">Mulai Rp 99k/bulan per domain</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
