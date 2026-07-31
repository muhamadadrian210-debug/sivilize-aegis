"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Globe, Code, CheckCircle2, Copy, FileText, ArrowRight, Layers } from "lucide-react";

export default function ModeIntegrasiPage() {
  const [copiedScript, setCopiedScript] = useState(false);
  const [copiedIp, setCopiedIp] = useState(false);

  const sdkCode = `<script src="https://aegis.sivilize.id/sdk.js" data-key="YOUR_AEGIS_API_KEY" async></script>`;
  const aegisIp = "103.18.24.89";

  const handleCopyScript = () => {
    navigator.clipboard.writeText(sdkCode);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2000);
  };

  const handleCopyIp = () => {
    navigator.clipboard.writeText(aegisIp);
    setCopiedIp(true);
    setTimeout(() => setCopiedIp(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#05070c] text-slate-100 bg-grid-cyber relative overflow-hidden font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
            INTEGRATION MODES
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            Dua Mode Pemasangan Fleksibel
          </h1>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
            Sivilize Aegis dapat dipasang dengan mudah baik Anda memegang source code maupun tidak. Tanpa risiko downtime saat migrasi.
          </p>
        </div>

        {/* Mode 1 & Mode 2 Detailed Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mode 1 */}
          <div className="bg-[#0a0e17] border border-slate-800 rounded-2xl p-8 space-y-6 glow-cyan">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-3 py-1 rounded-full">MODE 1: TANPA KODE</span>
            </div>

            <h2 className="text-2xl font-bold text-white">Aegis Shield (DNS Reverse Proxy)</h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Sangat cocok apabila website Anda dibuat oleh vendor lama yang tidak memberikan source code, menggunakan WordPress, cPanel, atau CMS statis. Trafik disaring otomatis sebelum menyentuh server Anda.
            </p>

            <div className="space-y-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Cukup ubah A Record domain di registrar (Domainesia, Niagahoster, dll)</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Menangkal DDoS & serangan IP jahat di level Edge</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Sertifikat SSL HSTS Grade A+ Otomatis</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Zero Downtime (Website tetap online saat migrasi)</div>
            </div>

            <div className="p-4 bg-[#05070c] rounded-xl border border-slate-800 text-xs font-mono text-slate-300 space-y-2">
              <span className="text-cyan-400 font-bold block">A Record Aegis Proxy IP:</span>
              <div className="flex items-center justify-between bg-slate-900 px-3 py-2 rounded border border-slate-800">
                <code className="text-white font-bold">{aegisIp}</code>
                <button onClick={handleCopyIp} className="text-xs text-cyan-400 hover:underline">
                  {copiedIp ? "Copied!" : "Copy IP"}
                </button>
              </div>
            </div>
          </div>

          {/* Mode 2 */}
          <div className="bg-[#0a0e17] border border-slate-800 rounded-2xl p-8 space-y-6 glow-blue">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Code className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/30 px-3 py-1 rounded-full">MODE 2: DEEP INTEGRATION</span>
            </div>

            <h2 className="text-2xl font-bold text-white">Aegis Core (JavaScript SDK / API)</h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Dirancang untuk pengembang aplikasi web (React, Next.js, Laravel, Custom PHP). Cukup masukkan 1 baris kode script di bagian header aplikasi untuk mengaktifkan audit log & notifikasi WA.
            </p>

            <div className="space-y-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Proteksi otomatis pada form login, register, & pencarian</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Audit Log detail (Merekam aksi user, IP, & timestamp)</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Peringatan keamanan WhatsApp instan ke nomor admin</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Sangat ringan (&lt; 2KB) & tidak memperlambat loading web</div>
            </div>

            <div className="p-4 bg-[#05070c] rounded-xl border border-slate-800 text-xs font-mono text-slate-300 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-purple-400 font-bold">Embed Script Tag:</span>
                <button onClick={handleCopyScript} className="text-xs text-purple-400 hover:underline">
                  {copiedScript ? "Copied!" : "Copy Code"}
                </button>
              </div>
              <div className="p-2.5 bg-slate-900 rounded border border-slate-800 overflow-x-auto text-[11px]">
                <code>{sdkCode}</code>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
