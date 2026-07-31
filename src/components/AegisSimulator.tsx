"use client";

import React, { useState, useEffect } from "react";
import { Shield, ShieldAlert, ShieldCheck, Zap, AlertTriangle, Smartphone, Terminal, Lock, CheckCircle2, RefreshCw } from "lucide-react";

export function AegisSimulator() {
  const [activeTab, setActiveTab] = useState<"brute" | "sql" | "ratelimit">("brute");
  const [requestCount, setRequestCount] = useState(0);
  const [logs, setLogs] = useState<Array<{ id: number; time: string; type: "ALLOW" | "BLOCK" | "WARN"; text: string }>>([
    { id: 1, time: "14:20:01", type: "ALLOW", text: "GET / - 200 OK (Clean Request from Jakarta)" },
    { id: 2, time: "14:20:03", type: "ALLOW", text: "POST /login - 200 OK (Valid Credentials)" },
  ]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [waNotification, setWaNotification] = useState<string | null>(null);

  const addLog = (type: "ALLOW" | "BLOCK" | "WARN", text: string) => {
    const time = new Date().toLocaleTimeString("id-ID");
    setLogs((prev) => [{ id: Date.now(), time, type, text }, ...prev.slice(0, 7)]);
  };

  const runBruteForceSim = () => {
    setIsSimulating(true);
    setWaNotification(null);
    addLog("ALLOW", "POST /api/login - Percobaan login ke-1 (Gagal - Password salah)");

    setTimeout(() => {
      addLog("WARN", "POST /api/login - Percobaan login ke-3 dari IP 185.220.101.4 (Pola Mencurigakan)");
    }, 800);

    setTimeout(() => {
      addLog("BLOCK", "🛡️ AEGIS BLOCK: IP 185.220.101.4 diblokir 30 menit! (Terdeteksi Brute Force)");
      setWaNotification("⚠️ ALERT AEGIS: Terdeteksi 5x percobaan login ilegal dari IP 185.220.101.4 pada tokobudi.com. Sistem telah memblokir penyerang secara otomatis.");
      setIsSimulating(false);
    }, 1800);
  };

  const runSqlInjectionSim = () => {
    setIsSimulating(true);
    setWaNotification(null);
    addLog("WARN", "POST /api/search query: \"SELECT * FROM users WHERE '1'='1'\"");

    setTimeout(() => {
      addLog("BLOCK", "🛡️ AEGIS WAF: SQL Injection Payload Dinetralkan & Traffic Diblokir");
      setWaNotification("🛡️ SECURITY ALERT: Aegis WAF menggagalkan serangan SQL Injection pada parameter search. Data database aman.");
      setIsSimulating(false);
    }, 1200);
  };

  const handleRateLimitClick = () => {
    const nextCount = requestCount + 1;
    setRequestCount(nextCount);

    if (nextCount > 5) {
      addLog("BLOCK", `⛔ 429 Too Many Requests: Batas 5 req/detik terlampaui. Throttling aktif!`);
      setWaNotification("⚡ AEGIS RATE LIMIT: Terdeteksi banjir request (DDoS ringan). Akses IP Anda dibatasi sementara.");
    } else {
      addLog("ALLOW", `GET /products - Request ke-${nextCount} diterima [Response 200 OK]`);
    }
  };

  const resetSim = () => {
    setRequestCount(0);
    setWaNotification(null);
    setLogs([
      { id: 1, time: new Date().toLocaleTimeString("id-ID"), type: "ALLOW", text: "Aegis Security Engine Initialized & Active" }
    ]);
  };

  return (
    <div className="w-full bg-[#0d121d] border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-2">
            <Zap className="w-3.5 h-3.5" /> INTERACTIVE LIVE SIMULATOR
          </div>
          <h3 className="text-xl font-bold text-white">Uji Ketahanan Sivilize Aegis Secara Live</h3>
          <p className="text-sm text-slate-400">Pilih skenario serangan dan lihat bagaimana Aegis menangkal ancaman secara real-time.</p>
        </div>

        <button 
          onClick={resetSim}
          className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 bg-slate-800/60 hover:bg-slate-800 px-3 py-2 rounded-lg transition"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Reset Logs
        </button>
      </div>

      {/* Selector Tabs */}
      <div className="flex gap-2 my-6 overflow-x-auto pb-2">
        <button
          onClick={() => setActiveTab("brute")}
          className={`px-4 py-2.5 rounded-xl font-medium text-xs md:text-sm transition flex items-center gap-2 whitespace-nowrap ${
            activeTab === "brute"
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold shadow-lg shadow-cyan-500/20"
              : "bg-slate-800/80 text-slate-300 hover:bg-slate-800"
          }`}
        >
          <Lock className="w-4 h-4" /> Brute Force Protection
        </button>

        <button
          onClick={() => setActiveTab("sql")}
          className={`px-4 py-2.5 rounded-xl font-medium text-xs md:text-sm transition flex items-center gap-2 whitespace-nowrap ${
            activeTab === "sql"
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold shadow-lg shadow-cyan-500/20"
              : "bg-slate-800/80 text-slate-300 hover:bg-slate-800"
          }`}
        >
          <ShieldAlert className="w-4 h-4" /> Anti SQL Injection WAF
        </button>

        <button
          onClick={() => setActiveTab("ratelimit")}
          className={`px-4 py-2.5 rounded-xl font-medium text-xs md:text-sm transition flex items-center gap-2 whitespace-nowrap ${
            activeTab === "ratelimit"
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold shadow-lg shadow-cyan-500/20"
              : "bg-slate-800/80 text-slate-300 hover:bg-slate-800"
          }`}
        >
          <AlertTriangle className="w-4 h-4" /> Rate Limiter & Throttling
        </button>
      </div>

      {/* Simulator Control Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
          <div>
            {activeTab === "brute" && (
              <>
                <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-cyan-400" /> Simulasi Serangan Password / Login
                </h4>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  Peretas mencoba menebak password admin secara berulang. Aegis mendeteksi frekuensi gagal dan langsung mengunci IP penyerang serta mengirim peringatan WhatsApp.
                </p>
                <button
                  disabled={isSimulating}
                  onClick={runBruteForceSim}
                  className="w-full py-3 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition shadow-lg shadow-rose-600/30 flex items-center justify-center gap-2"
                >
                  {isSimulating ? "Memproses Proteksi..." : "🔥 Lancarkan Serangan Brute Force"}
                </button>
              </>
            )}

            {activeTab === "sql" && (
              <>
                <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-cyan-400" /> Simulasi SQL Injection
                </h4>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  Peretas mencoba menyisipkan kode database berbahaya untuk membobol akun. Aegis WAF memblokir payload sebelum mencapai database Anda.
                </p>
                <button
                  disabled={isSimulating}
                  onClick={runSqlInjectionSim}
                  className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition shadow-lg shadow-amber-600/30 flex items-center justify-center gap-2"
                >
                  {isSimulating ? "Memeriksa WAF..." : "⚠️ Tembakkan Payload SQL Injection"}
                </button>
              </>
            )}

            {activeTab === "ratelimit" && (
              <>
                <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-cyan-400" /> Uji Coba Rate Limiter (Spam Request)
                </h4>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  Klik tombol di bawah ini berkali-kali secara cepat. Begitu melebihi 5 kali, Aegis akan membatasi request untuk mencegah server down.
                </p>
                <button
                  onClick={handleRateLimitClick}
                  className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-extrabold uppercase tracking-wider rounded-xl transition shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
                >
                  ⚡ Kirim Rapid Request (Hit: {requestCount})
                </button>
              </>
            )}
          </div>

          {/* WhatsApp Alert Mock */}
          {waNotification && (
            <div className="mt-4 p-3.5 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs font-mono flex items-start gap-2.5 animate-fadeIn">
              <Smartphone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block text-emerald-400 mb-0.5">Notifikasi WhatsApp Aegis Terkirim:</span>
                {waNotification}
              </div>
            </div>
          )}
        </div>

        {/* Realtime Terminal Log Output */}
        <div className="lg:col-span-7 bg-[#05070a] border border-slate-800/90 rounded-xl p-4 font-mono text-xs overflow-hidden flex flex-col">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400 text-[11px]">
            <span className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" /> Live Traffic & Audit Log Monitor
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400 text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Proxy Shield Active
            </span>
          </div>

          <div className="space-y-2 overflow-y-auto max-h-[220px] pr-2">
            {logs.map((log) => (
              <div key={log.id} className="flex items-start gap-2 text-[11px] leading-relaxed">
                <span className="text-slate-500 text-[10px] shrink-0 font-mono">[{log.time}]</span>
                {log.type === "ALLOW" && (
                  <span className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded text-[10px] font-bold shrink-0">
                    ALLOW
                  </span>
                )}
                {log.type === "WARN" && (
                  <span className="text-amber-400 bg-amber-500/10 px-1.5 py-0.2 rounded text-[10px] font-bold shrink-0">
                    WARN
                  </span>
                )}
                {log.type === "BLOCK" && (
                  <span className="text-rose-400 bg-rose-500/10 px-1.5 py-0.2 rounded text-[10px] font-bold shrink-0">
                    BLOCKED
                  </span>
                )}
                <span className={log.type === "BLOCK" ? "text-rose-300 font-semibold" : log.type === "WARN" ? "text-amber-300" : "text-slate-300"}>
                  {log.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
