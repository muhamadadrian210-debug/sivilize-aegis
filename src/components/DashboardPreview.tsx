"use client";

import React, { useState } from "react";
import { Shield, Lock, Bell, Activity, Key, Globe, FileText, CheckCircle2, Copy, Terminal, Code, Cpu, Server } from "lucide-react";

export function DashboardPreview() {
  const [waAlertEnabled, setWaAlertEnabled] = useState(true);
  const [rateLimitEnabled, setRateLimitEnabled] = useState(true);
  const [autoBlockIp, setAutoBlockIp] = useState(true);
  const [corsEnforced, setCorsEnforced] = useState(true);
  const [copiedKey, setCopiedKey] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<"html" | "react" | "laravel" | "curl">("html");

  const apiKey = "aegis_live_pk_8892f39001a4b9c1d09e";

  const handleCopyKey = () => {
    navigator.clipboard.writeText(apiKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const snippets = {
    html: `<script src="https://aegis.sivilize.id/sdk.js" data-key="${apiKey}" async></script>`,
    react: `import { initAegis } from '@sivilize/aegis-react';\n\nuseEffect(() => {\n  initAegis({ apiKey: "${apiKey}" });\n}, []);`,
    laravel: `// app/Http/Middleware/AegisSecurity.php\nuse Sivilize\\Aegis\\AegisGuard;\n\npublic function handle($request, Closure $next) {\n    return AegisGuard::protect($request, $next);\n}`,
    curl: `curl -X POST https://api.aegis.sivilize.id/v1/verify \\\n  -H "Authorization: Bearer ${apiKey}" \\\n  -d '{"ip":"185.220.101.4"}'`
  };

  return (
    <div className="w-full bg-[#0a0e17] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* Top Portal Header Bar */}
      <div className="bg-[#0e1422] px-6 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#121b2d] border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-white tracking-tight">Sivilize Aegis Client Portal</span>
              <span className="text-[10px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-2 py-0.5 rounded font-mono">PRO PLAN</span>
            </div>
            <span className="text-xs text-slate-400 font-mono">Domain: tokobudi.com (Active & Protected)</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-emerald-950/70 border border-emerald-500/30 px-3 py-1.5 rounded-lg text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>SLA 99.9% Operational</span>
          </div>
        </div>
      </div>

      {/* Main Dashboard Stats */}
      <div className="p-6 md:p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
            <span className="text-xs text-slate-400 font-medium block mb-1">Total Requests (24 Jam)</span>
            <span className="text-2xl font-extrabold text-white font-mono">48,291</span>
            <span className="text-[11px] text-emerald-400 block mt-1">↑ +12% vs Kemarin</span>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
            <span className="text-xs text-slate-400 font-medium block mb-1">Ancaman Dinetralkan</span>
            <span className="text-2xl font-extrabold text-rose-400 font-mono">312</span>
            <span className="text-[11px] text-rose-400 block mt-1">🛡️ 100% Mitigated</span>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
            <span className="text-xs text-slate-400 font-medium block mb-1">Enkripsi & SSL</span>
            <span className="text-2xl font-extrabold text-cyan-400 font-mono">TLS 1.3</span>
            <span className="text-[11px] text-slate-400 block mt-1">🔒 Grade A+ Certificate</span>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
            <span className="text-xs text-slate-400 font-medium block mb-1">Latency Rata-rata</span>
            <span className="text-2xl font-extrabold text-amber-400 font-mono">14 ms</span>
            <span className="text-[11px] text-emerald-400 block mt-1">⚡ Ultra-Fast Proxy</span>
          </div>
        </div>

        {/* Quick Settings & Integration Snippets */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-4">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Lock className="w-4 h-4 text-cyan-400" /> Pengaturan Sistem Proteksi Real-Time
            </h4>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-slate-800/80">
                <div>
                  <span className="text-xs font-semibold text-white block">WhatsApp Instant Security Alert</span>
                  <span className="text-[11px] text-slate-400">Kirim pesan WA otomatis saat terdeteksi pembobolan.</span>
                </div>
                <button
                  onClick={() => setWaAlertEnabled(!waAlertEnabled)}
                  className={`w-11 h-6 rounded-full transition-colors relative p-1 ${waAlertEnabled ? "bg-cyan-500" : "bg-slate-700"}`}
                >
                  <span className={`w-4 h-4 rounded-full bg-black block transition-transform ${waAlertEnabled ? "translate-x-5" : "translate-x-0"}`} />
                </button>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-slate-800/80">
                <div>
                  <span className="text-xs font-semibold text-white block">Adaptive Rate Limiter (Throttling)</span>
                  <span className="text-[11px] text-slate-400">Cegah server crash akibat banjir request (DDoS).</span>
                </div>
                <button
                  onClick={() => setRateLimitEnabled(!rateLimitEnabled)}
                  className={`w-11 h-6 rounded-full transition-colors relative p-1 ${rateLimitEnabled ? "bg-cyan-500" : "bg-slate-700"}`}
                >
                  <span className={`w-4 h-4 rounded-full bg-black block transition-transform ${rateLimitEnabled ? "translate-x-5" : "translate-x-0"}`} />
                </button>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-slate-800/80">
                <div>
                  <span className="text-xs font-semibold text-white block">Auto IP Lockout (Brute Force Block)</span>
                  <span className="text-[11px] text-slate-400">Kunci IP penyerang jika gagal login &gt; 3x.</span>
                </div>
                <button
                  onClick={() => setAutoBlockIp(!autoBlockIp)}
                  className={`w-11 h-6 rounded-full transition-colors relative p-1 ${autoBlockIp ? "bg-cyan-500" : "bg-slate-700"}`}
                >
                  <span className={`w-4 h-4 rounded-full bg-black block transition-transform ${autoBlockIp ? "translate-x-5" : "translate-x-0"}`} />
                </button>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-slate-800/80">
                <div>
                  <span className="text-xs font-semibold text-white block">Strict CORS & Header Guard</span>
                  <span className="text-[11px] text-slate-400">Batasi domain luar yang dapat mengakses API Anda.</span>
                </div>
                <button
                  onClick={() => setCorsEnforced(!corsEnforced)}
                  className={`w-11 h-6 rounded-full transition-colors relative p-1 ${corsEnforced ? "bg-cyan-500" : "bg-slate-700"}`}
                >
                  <span className={`w-4 h-4 rounded-full bg-black block transition-transform ${corsEnforced ? "translate-x-5" : "translate-x-0"}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Integration Code Switcher */}
          <div className="lg:col-span-6 bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Code className="w-4 h-4 text-cyan-400" /> Panduan Integrasi Cepat
                </h4>
                <div className="flex items-center gap-2 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                  <Key className="w-3 h-3 text-cyan-400" />
                  <span className="text-[10px] font-mono text-slate-300">{apiKey.slice(0, 14)}...</span>
                  <button onClick={handleCopyKey} className="text-[10px] text-cyan-400 font-bold hover:underline ml-1">
                    {copiedKey ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Code Language Selector */}
              <div className="flex gap-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800 mb-3 text-xs">
                <button
                  onClick={() => setActiveCodeTab("html")}
                  className={`px-3 py-1 rounded-md text-[11px] font-mono transition ${activeCodeTab === "html" ? "bg-cyan-500 text-black font-bold" : "text-slate-400 hover:text-white"}`}
                >
                  HTML Script
                </button>
                <button
                  onClick={() => setActiveCodeTab("react")}
                  className={`px-3 py-1 rounded-md text-[11px] font-mono transition ${activeCodeTab === "react" ? "bg-cyan-500 text-black font-bold" : "text-slate-400 hover:text-white"}`}
                >
                  React / Next.js
                </button>
                <button
                  onClick={() => setActiveCodeTab("laravel")}
                  className={`px-3 py-1 rounded-md text-[11px] font-mono transition ${activeCodeTab === "laravel" ? "bg-cyan-500 text-black font-bold" : "text-slate-400 hover:text-white"}`}
                >
                  PHP / Laravel
                </button>
                <button
                  onClick={() => setActiveCodeTab("curl")}
                  className={`px-3 py-1 rounded-md text-[11px] font-mono transition ${activeCodeTab === "curl" ? "bg-cyan-500 text-black font-bold" : "text-slate-400 hover:text-white"}`}
                >
                  cURL / API
                </button>
              </div>

              <div className="p-3 bg-[#05070c] rounded-lg border border-slate-800 font-mono text-[11px] text-slate-300 overflow-x-auto max-h-[140px] leading-relaxed">
                <pre>{snippets[activeCodeTab]}</pre>
              </div>
            </div>

            <div className="p-3 bg-cyan-950/40 border border-cyan-500/30 rounded-lg text-cyan-300 text-xs flex items-center gap-2 mt-4">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Proteksi aktif otomatis begitu kodingan dipasang atau DNS dihubungkan.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
