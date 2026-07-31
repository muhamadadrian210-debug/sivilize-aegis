"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  Shield, Lock, Globe, Smartphone, FileText, Scale, Zap, 
  CheckCircle2, Cpu, Eye, Radio, Server
} from "lucide-react";

export default function FiturPage() {
  return (
    <div className="min-h-screen bg-[#05070c] text-slate-100 bg-grid-cyber relative overflow-hidden font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
            PROTECTION CAPABILITIES
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            Fitur Proteksi Siber Kelas Enterprise
          </h1>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
            Seluruh modul keamanan dirancang untuk menjaga integritas data, ketersediaan layanan (uptime), dan kepatuhan hukum bisnis Anda secara pasif maupun aktif.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#0a0e17] border border-slate-800 p-8 rounded-2xl space-y-4 hover:border-cyan-500/50 transition glow-cyan">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">DNS Reverse Proxy WAF</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Menyaring seluruh trafik web di jaringan Edge sebelum sampai ke hosting asal Anda. Otomatis memblokir bot spam, malware scanner, dan pembobol otomatis.
            </p>
            <ul className="text-xs text-slate-400 space-y-1.5 pt-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Filtering Layer 7 Application</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Auto Geo-Blocking IP Negara Berbahaya</li>
            </ul>
          </div>

          <div className="bg-[#0a0e17] border border-slate-800 p-8 rounded-2xl space-y-4 hover:border-cyan-500/50 transition glow-cyan">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Anti Brute-Force & IP Lockout</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Sistem pintar memantau pola pencocokan password pada form login. Jika terdeteksi percobaan ilegal berulang, IP penyerang dikunci otomatis selama 30 menit.
            </p>
            <ul className="text-xs text-slate-400 space-y-1.5 pt-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Proteksi Form Login & Register</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Blacklist IP Otomatis</li>
            </ul>
          </div>

          <div className="bg-[#0a0e17] border border-slate-800 p-8 rounded-2xl space-y-4 hover:border-emerald-500/50 transition glow-emerald">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Alert WhatsApp Real-Time</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Setiap kali terjadi indikasi peretasan atau pemblokiran IP dalam skala besar, sistem langsung mengirim pesan notifikasi ke WhatsApp pengelola website.
            </p>
            <ul className="text-xs text-slate-400 space-y-1.5 pt-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Terhubung Gateway WhatsApp Lokal</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Notifikasi Tanggap Darurat 24/7</li>
            </ul>
          </div>

          <div className="bg-[#0a0e17] border border-slate-800 p-8 rounded-2xl space-y-4 hover:border-purple-500/50 transition glow-blue">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Audit Log Interaksi User</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Seluruh aktivitas penting di dalam sistem (login admin, perubahan data, hapus catatan) tercatat rapi secara terenkripsi untuk transparansi audit.
            </p>
            <ul className="text-xs text-slate-400 space-y-1.5 pt-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Rekam Jejak IP, User Agent, & Timestamp</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Tamper-Proof Storage</li>
            </ul>
          </div>

          <div className="bg-[#0a0e17] border border-slate-800 p-8 rounded-2xl space-y-4 hover:border-purple-500/50 transition glow-blue">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">UU PDP No. 27/2022 Ready</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Membantu usaha Anda memenuhi ketentuan hukum pelindungan data pribadi di Indonesia dengan enkripsi ketat dan standar hak penghapusan data.
            </p>
            <ul className="text-xs text-slate-400 space-y-1.5 pt-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Dokumen Compliance legal</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Data Privacy Framework</li>
            </ul>
          </div>

          <div className="bg-[#0a0e17] border border-slate-800 p-8 rounded-2xl space-y-4 hover:border-amber-500/50 transition">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Adaptive Rate Limiter</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Membatasi jumlah request cepat per detik dari satu pengguna untuk menjaga server dari ancaman lonjakan trafik ilegal atau DDoS ringan.
            </p>
            <ul className="text-xs text-slate-400 space-y-1.5 pt-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Throttling HTTP 429 Otomatis</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Menjaga Server Bebas Downtime</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
