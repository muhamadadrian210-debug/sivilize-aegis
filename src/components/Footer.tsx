"use client";

import React from "react";
import Link from "next/link";
import { Shield, Smartphone, Globe, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#040609] pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        {/* Top CTA Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-[#0a1224] to-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 glow-cyan">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">Siap Mengamankan Aset Digital Bisnis Anda?</h3>
            <p className="text-xs md:text-sm text-slate-300 max-w-xl">
              Konsultasikan kebutuhan keamanan web & aplikasi Anda dengan spesialis PT Sivilize Corp Indonesia secara gratis.
            </p>
          </div>

          <a
            href="https://wa.me/6281234567890?text=Halo%20Sivilize%20Aegis,%20saya%20siap%20mengamankan%20website%20kami"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-sm transition shadow-xl shadow-cyan-400/20 whitespace-nowrap flex items-center gap-2"
          >
            Konsultasi WhatsApp Sekarang <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-sm font-black text-white">SIVILIZE AEGIS</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Divisi Layanan Keamanan Siber Resmi & Security SaaS di bawah naungan PT Sivilize Corp Indonesia.
            </p>
            <span className="text-[10px] font-mono text-cyan-400 block">KBLI 62020 & 62090 Certified</span>
          </div>

          <div className="space-y-2">
            <span className="font-bold text-white uppercase tracking-wider block mb-2">Produk & Solusi</span>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/mode-integrasi" className="hover:text-cyan-400 transition">Aegis Shield (DNS Reverse Proxy)</Link></li>
              <li><Link href="/mode-integrasi" className="hover:text-cyan-400 transition">Aegis Core (JS SDK & Middleware)</Link></li>
              <li><Link href="/fitur" className="hover:text-cyan-400 transition">WAF & DDoS Mitigation</Link></li>
              <li><Link href="/fitur" className="hover:text-cyan-400 transition">WhatsApp Alert Gateway</Link></li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="font-bold text-white uppercase tracking-wider block mb-2">Halaman Utama</span>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/" className="hover:text-cyan-400 transition">Beranda & Latar Belakang</Link></li>
              <li><Link href="/simulasi" className="hover:text-cyan-400 transition">Simulasi Serangan Live</Link></li>
              <li><Link href="/harga" className="hover:text-cyan-400 transition">Harga & Paket Langganan</Link></li>
              <li><Link href="/compliance" className="hover:text-cyan-400 transition">SLA 99.9% & UU PDP Compliance</Link></li>
              <li><Link href="/faq" className="hover:text-cyan-400 transition">Pertanyaan Umum (FAQ)</Link></li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="font-bold text-white uppercase tracking-wider block mb-2">Legal & Kontak</span>
            <ul className="space-y-2 text-slate-400">
              <li>PT Sivilize Corp Indonesia</li>
              <li>Email: <span className="text-cyan-400 font-mono">support@sivilize.id</span></li>
              <li>WhatsApp: <span className="text-cyan-400 font-mono">+62 812-3456-7890</span></li>
              <li className="pt-2"><Link href="/compliance" className="hover:text-slate-200 underline">Ketentuan Layanan & SLA</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Notice */}
        <div className="border-t border-slate-800/80 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span>© {new Date().getFullYear()} PT Sivilize Corp Indonesia. Sivilize Aegis Security Engine. All rights reserved.</span>
          </div>

          <div className="flex gap-6">
            <Link href="/compliance" className="hover:text-slate-300 transition">Kebijakan Privasi</Link>
            <Link href="/compliance" className="hover:text-slate-300 transition">Terms of Service (ToS)</Link>
            <Link href="/compliance" className="hover:text-slate-300 transition">Service Level Agreement (SLA)</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
