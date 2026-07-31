"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Scale, FileText, Users, ShieldCheck, CheckCircle2, Building2, Smartphone } from "lucide-react";

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-[#05070c] text-slate-100 bg-grid-cyber relative overflow-hidden font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full">
            LEGAL & SLA COMPLIANCE
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            Kepatuhan Hukum & SLA 99.9%
          </h1>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
            PT Sivilize Corp Indonesia menjamin kepatuhan regulasi data pribadi nasional dan menyediakan jaminan ketersediaan server secara legal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#0a0e17] border border-slate-800 p-8 rounded-2xl space-y-4 glow-cyan">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">UU PDP No. 27/2022 Ready</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Membantu usaha Anda memenuhi undang-undang pelindungan data pribadi di Indonesia melalui enkripsi data transaksi dan sistem hak penghapusan data.
            </p>
            <ul className="text-xs text-slate-400 space-y-2 pt-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Enkripsi End-to-End Log</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Pelaporan Tanggap Darurat 3x24 Jam</li>
            </ul>
          </div>

          <div className="bg-[#0a0e17] border border-slate-800 p-8 rounded-2xl space-y-4 glow-blue">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Dokumen MoU & Kontrak SLA</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Dukungan pembuatan dokumen perjanjian kerja sama resmi (MoU), Service Level Agreement (SLA 99.9%), dan penagihan Faktur Pajak resmi PT.
            </p>
            <ul className="text-xs text-slate-400 space-y-2 pt-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Kontrak Berlangganan Formal</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Dukungan Faktur Pajak PPN/PPh</li>
            </ul>
          </div>

          <div className="bg-[#0a0e17] border border-slate-800 p-8 rounded-2xl space-y-4 glow-emerald">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Legalitas Badan Hukum PT</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Berada di bawah entitas resmi **PT Sivilize Corp Indonesia** dengan Nomor Induk Berusaha (NIB) & Sertifikasi KBLI Jasa IT Terdaftar.
            </p>
            <ul className="text-xs text-slate-400 space-y-2 pt-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> NIB Terdaftar di OSS Indonesia</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Tim Support Teknis Lokal</li>
            </ul>
          </div>
        </div>

        {/* MoU Request Section */}
        <div className="bg-[#0c1220] border border-slate-800 rounded-3xl p-8 md:p-12 text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">Butuh Dokumen MoU / Proposal Pengadaan?</h2>
          <p className="text-xs md:text-sm text-slate-300">
            Tim PT Sivilize Corp Indonesia siap menerbitkan proposal pengadaan, MoU formal, atau draf SLA sesuai kebutuhan instansi Anda.
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo%20PT%20Sivilize%20Corp,%20kami%20butuh%20dokumen%20MoU%20dan%20proposal%20Sivilize%20Aegis"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs transition inline-flex items-center gap-2"
          >
            <Smartphone className="w-4 h-4" /> Minta Dokumen MoU Resmi
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
