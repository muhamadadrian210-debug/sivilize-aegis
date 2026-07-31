"use client";

import React, { useState } from "react";
import { Shield, Lock, Bell, Activity, Key, Globe, FileText, CheckCircle2, AlertOctagon, Smartphone, Server } from "lucide-react";

export function DashboardPreview() {
  const [waAlertEnabled, setWaAlertEnabled] = useState(true);
  const [rateLimitEnabled, setRateLimitEnabled] = useState(true);
  const [autoBlockIp, setAutoBlockIp] = useState(true);
  const [copiedKey, setCopiedKey] = useState(false);

  const apiKey = "aegis_live_pk_8892f39001a4b9c1d09e";

  const handleCopyKey = () => {
    navigator.clipboard.writeText(apiKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  return (
    <div className="w-full bg-[#0a0e17] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* Top Portal Header Bar */}
      <div className="bg-[#0f1523] px-6 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-black font-extrabold shadow-lg shadow-cyan-500/20">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-white">Sivilize Aegis Portal</span>
              <span className="text-[10px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-2 py-0.5 rounded-full font-mono">PRO PLAN</span>
            </div>
            <span className="text-xs text-slate-400 font-mono">Domain: tokobudi.com (Active)</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-emerald-950/80 border border-emerald-500/30 px-3 py-1.5 rounded-lg text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>SLA 99.9% Online</span>
          </div>
        </div>
      </div>

      {/* Main Dashboard Stats */}
      <div className="p-6 md:p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
            <span className="text-xs text-slate-400 font-medium block mb-1">Total Requests (24 Jam)</span>
            <span className="text-2xl font-extrabold text-white font-mono">48,291</span>
            <span className="text-[11px] text-emerald-400 block mt-1">↑ +12% dari kemarin</span>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
            <span className="text-xs text-slate-400 font-medium block mb-1">Ancaman Diblokir</span>
            <span className="text-2xl font-extrabold text-rose-400 font-mono">312</span>
            <span className="text-[11px] text-rose-400 block mt-1">🛡️ 100% Terkondisikan</span>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
            <span className="text-xs text-slate-400 font-medium block mb-1">Status Enkripsi & SSL</span>
            <span className="text-2xl font-extrabold text-cyan-400 font-mono">TLS 1.3</span>
            <span className="text-[11px] text-slate-400 block mt-1">🔒 Grade A+ Certificate</span>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
            <span className="text-xs text-slate-400 font-medium block mb-1">Respons Waktu Rata-rata</span>
            <span className="text-2xl font-extrabold text-amber-400 font-mono">14 ms</span>
            <span className="text-[11px] text-emerald-400 block mt-1">⚡ Ultra Fast Latency</span>
          </div>
        </div>

        {/* Quick Settings & Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Security Controls */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-4">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Lock className="w-4 h-4 text-cyan-400" /> Pengaturan Sistem Proteksi Otomatis
            </h4>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-slate-800/80">
                <div>
                  <span className="text-xs font-semibold text-white block">WhatsApp Instant Security Alert</span>
                  <span className="text-[11px] text-slate-400">Kirim notifikasi WA jika ada aktivitas pembobolan.</span>
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
                  <span className="text-[11px] text-slate-400">Cegah server crash akibat serangan banjir request (DDoS).</span>
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
            </div>
          </div>

          {/* Integration Keys & DNS Status */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-4 flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
                <Key className="w-4 h-4 text-cyan-400" /> Kunci API & Mode Integrasi
              </h4>

              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-xs mb-4">
                <span className="text-slate-500 text-[10px] block mb-1">Aegis Public API Key:</span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-cyan-400 font-semibold truncate">{apiKey}</span>
                  <button
                    onClick={handleCopyKey}
                    className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-[10px] px-2.5 py-1 rounded transition shrink-0"
                  >
                    {copiedKey ? "Copied!" : "Copy Key"}
                  </button>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-cyan-400" /> Status DNS Reverse Proxy:</span>
                  <span className="text-emerald-400 font-bold">Active (103.18.24.89)</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5"><FileText className="w-3.5 h-3.5 text-cyan-400" /> UU PDP Compliance Log:</span>
                  <span className="text-emerald-400 font-bold">Encrypted & Audited</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-cyan-950/40 border border-cyan-500/30 rounded-lg text-cyan-300 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Sivilize Aegis siap melindungi aplikasi Anda tanpa downtime.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
