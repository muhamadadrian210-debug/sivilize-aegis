"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AegisSimulator } from "@/components/AegisSimulator";
import { Zap, Shield, Radio } from "lucide-react";

export default function SimulasiPage() {
  return (
    <div className="min-h-screen bg-[#05070c] text-slate-100 bg-grid-cyber relative overflow-hidden font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" /> LIVE THREAT TESTING LAB
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            Simulasi Serangan Sivilize Aegis Live
          </h1>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
            Uji coba langsung bagaimana mesin keamanan Sivilize Aegis secara otomatis menangkal berbagai jenis serangan siber (Brute Force, SQL Injection, Anti-XSS, & Rate Limiter) serta mengirimkan notifikasi instan via WhatsApp.
          </p>
        </div>

        <AegisSimulator />
      </main>

      <Footer />
    </div>
  );
}
