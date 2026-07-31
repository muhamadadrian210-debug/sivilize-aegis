"use client";

import React, { useState } from "react";
import { Shield, ShieldAlert, Zap, Lock, Terminal, RefreshCw, Smartphone, CheckCircle2, AlertOctagon, Cpu, Radio } from "lucide-react";

type AttackType = "brute" | "sql" | "ratelimit" | "xss";

export function AegisSimulator() {
  const [activeTab, setActiveTab] = useState<AttackType>("brute");
  const [requestCount, setRequestCount] = useState(0);
  const [logs, setLogs] = useState<Array<{ id: number; time: string; type: "ALLOW" | "BLOCK" | "WARN"; text: string; location?: string }>>([
    { id: 1, time: "15:40:01.102", type: "ALLOW", text: "GET / - 200 OK (Clean HTTPS Request)", location: "Jakarta, ID" },
    { id: 2, time: "15:40:03.450", type: "ALLOW", text: "POST /login - 200 OK (Valid Session Created)", location: "Surabaya, ID" },
  ]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [waNotification, setWaNotification] = useState<string | null>(null);

  const addLog = (type: "ALLOW" | "BLOCK" | "WARN", text: string, location: string = "Unknown Node") => {
    const time = new Date().toLocaleTimeString("id-ID", { hour12: false }) + "." + Math.floor(Math.random() * 900 + 100);
    setLogs((prev) => [{ id: Date.now(), time, type, text, location }, ...prev.slice(0, 8)]);
  };

  const runBruteForceSim = () => {
    setIsSimulating(true);
    setWaNotification(null);
    addLog("ALLOW", "POST /api/auth/login - Percobaan login ke-1 (Password Salah)", "Bandung, ID");

    setTimeout(() => {
      addLog("WARN", "POST /api/auth/login - Detect 3x failed attempts from IP 185.220.101.4", "Tor Node / Proxy");
    }, 600);

    setTimeout(() => {
      addLog("BLOCK", "🛡️ AEGIS AUTO-BLOCK: IP 185.220.101.4 locked for 30 min (Brute Force Pattern)", "Blacklisted Node");
      setWaNotification("⚠️ ALERT SIVILIZE AEGIS: Terdeteksi 5x percobaan login ilegal dari IP 185.220.101.4 pada tokobudi.com. Sistem telah memblokir penyerang secara otomatis.");
      setIsSimulating(false);
    }, 1400);
  };

  const runSqlInjectionSim = () => {
    setIsSimulating(true);
    setWaNotification(null);
    addLog("WARN", "POST /api/products query: \"SELECT * FROM users WHERE '1'='1'\"", "Moscow, RU");

    setTimeout(() => {
      addLog("BLOCK", "🛡️ AEGIS WAF RULE #4021: Malicious SQL Injection Payload Intercepted & Cleansed", "Filtered at Edge");
      setWaNotification("🛡️ SECURITY ALERT: Aegis WAF menggagalkan serangan SQL Injection pada parameter search. Data database toko Anda aman.");
      setIsSimulating(false);
    }, 1000);
  };

  const runXssSim = () => {
    setIsSimulating(true);
    setWaNotification(null);
    addLog("WARN", "POST /api/comments payload: \"<script>document.cookie=steal()</script>\"", "Frankfurt, DE");

    setTimeout(() => {
      addLog("BLOCK", "🛡️ AEGIS SANITIZER: Cross-Site Scripting (XSS) Attack Blocked & Sanitized", "Edge WAF Engine");
      setWaNotification("🛡️ SECURITY ALERT: Aegis Sanitizer mencegah injeksi script berbahaya (XSS) pada form komentar.");
      setIsSimulating(false);
    }, 1100);
  };

  const handleRateLimitClick = () => {
    const nextCount = requestCount + 1;
    setRequestCount(nextCount);

    if (nextCount > 5) {
      addLog("BLOCK", `⛔ HTTP 429: Rate limit 5 req/sec exceeded. IP Throttling Engaged!`, "Local Client");
      setWaNotification("⚡ AEGIS RATE LIMIT: Terdeteksi lonjakan request (DDoS ringan). Akses IP dibatasi sementara untuk stabilitas server.");
    } else {
      addLog("ALLOW", `GET /catalog - Rapid Request #${nextCount} [HTTP 200 OK - 12ms]`, "Client Traffic");
    }
  };

  const resetSim = () => {
    setRequestCount(0);
    setWaNotification(null);
    setLogs([
      { id: 1, time: new Date().toLocaleTimeString("id-ID", { hour12: false }) + ".000", type: "ALLOW", text: "Aegis Security Engine Initialized & Active", location: "Local Node" }
    ]);
  };

  return (
    <div className="w-full bg-[#0a0e17] border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
      {/* Subtle Ambient Background Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-slate-800/80 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-2">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" /> LIVE SECURITY ENGINE DEMO
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">Simulasi Pertahanan Real-Time Aegis</h3>
          <p className="text-xs text-slate-400 mt-1">Uji coba interaktif bagaimana Sivilize Aegis menangkal vektor serangan siber secara otomatis.</p>
        </div>

        <button 
          onClick={resetSim}
          className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 bg-slate-900 border border-slate-800 hover:border-slate-700 px-3.5 py-2 rounded-xl transition"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Reset Log Terminal
        </button>
      </div>

      {/* Attack Vector Tabs */}
      <div className="flex gap-2 my-6 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setActiveTab("brute")}
          className={`px-4 py-2.5 rounded-xl font-medium text-xs transition flex items-center gap-2 whitespace-nowrap ${
            activeTab === "brute"
              ? "bg-cyan-500 text-black font-extrabold shadow-md shadow-cyan-500/20"
              : "bg-slate-900/80 text-slate-300 border border-slate-800 hover:bg-slate-800"
          }`}
        >
          <Lock className="w-4 h-4" /> Brute Force Protection
        </button>

        <button
          onClick={() => setActiveTab("sql")}
          className={`px-4 py-2.5 rounded-xl font-medium text-xs transition flex items-center gap-2 whitespace-nowrap ${
            activeTab === "sql"
              ? "bg-cyan-500 text-black font-extrabold shadow-md shadow-cyan-500/20"
              : "bg-slate-900/80 text-slate-300 border border-slate-800 hover:bg-slate-800"
          }`}
        >
          <ShieldAlert className="w-4 h-4" /> WAF SQL Injection
        </button>

        <button
          onClick={() => setActiveTab("xss")}
          className={`px-4 py-2.5 rounded-xl font-medium text-xs transition flex items-center gap-2 whitespace-nowrap ${
            activeTab === "xss"
              ? "bg-cyan-500 text-black font-extrabold shadow-md shadow-cyan-500/20"
              : "bg-slate-900/80 text-slate-300 border border-slate-800 hover:bg-slate-800"
          }`}
        >
          <AlertOctagon className="w-4 h-4" /> Anti-XSS Sanitizer
        </button>

        <button
          onClick={() => setActiveTab("ratelimit")}
          className={`px-4 py-2.5 rounded-xl font-medium text-xs transition flex items-center gap-2 whitespace-nowrap ${
            activeTab === "ratelimit"
              ? "bg-cyan-500 text-black font-extrabold shadow-md shadow-cyan-500/20"
              : "bg-slate-900/80 text-slate-300 border border-slate-800 hover:bg-slate-800"
          }`}
        >
          <Zap className="w-4 h-4" /> Rate Limiter & Throttling
        </button>
      </div>

      {/* Simulator Interface Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls Column */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-xl p-5 flex flex-col justify-between space-y-4">
          <div>
            {activeTab === "brute" && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Lock className="w-4 h-4 text-cyan-400" /> Skenario 1: Penyerangan Brute Force
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Peretas mengulang login ratusan kali secara otomatis. Aegis mendeteksi frekuensi dan langsung mengunci IP penyerang serta mengirim pesan WhatsApp ke admin.
                </p>
                <button
                  disabled={isSimulating}
                  onClick={runBruteForceSim}
                  className="w-full py-3 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition shadow-lg shadow-rose-600/20 flex items-center justify-center gap-2"
                >
                  {isSimulating ? "Memproses Proteksi..." : "🔥 Eksekusi Serangan Brute Force"}
                </button>
              </div>
            )}

            {activeTab === "sql" && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <ShieldAlert className="w-4 h-4 text-cyan-400" /> Skenario 2: SQL Injection
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Peretas menyisipkan query database berbahaya di form pencarian. Aegis WAF memfilter dan menetralisir payload sebelum menyentuh database Anda.
                </p>
                <button
                  disabled={isSimulating}
                  onClick={runSqlInjectionSim}
                  className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition shadow-lg shadow-amber-600/20 flex items-center justify-center gap-2"
                >
                  {isSimulating ? "Memeriksa WAF..." : "⚠️ Uji Payload SQL Injection"}
                </button>
              </div>
            )}

            {activeTab === "xss" && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <AlertOctagon className="w-4 h-4 text-cyan-400" /> Skenario 3: Cross-Site Scripting (XSS)
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Peretas menyuntikkan tag script JavaScript di kolom komentar. Aegis Sanitizer otomatis membersihkan kode sebelum disimpan atau dieksekusi.
                </p>
                <button
                  disabled={isSimulating}
                  onClick={runXssSim}
                  className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition shadow-lg shadow-purple-600/20 flex items-center justify-center gap-2"
                >
                  {isSimulating ? "Sanitizing..." : "⚡ Uji Injeksi Script XSS"}
                </button>
              </div>
            )}

            {activeTab === "ratelimit" && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Zap className="w-4 h-4 text-cyan-400" /> Skenario 4: Spam Request / Rate Limit
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Klik tombol di bawah secara cepat melebihi 5 kali. Aegis akan mengaktifkan throttling HTTP 429 untuk menjaga server dari beban berlebih.
                </p>
                <button
                  onClick={handleRateLimitClick}
                  className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-extrabold uppercase tracking-wider rounded-xl transition shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
                >
                  ⚡ Kirim Request Cepat (Jumlah: {requestCount})
                </button>
              </div>
            )}
          </div>

          {/* WhatsApp Alert Mock Card */}
          {waNotification && (
            <div className="p-3.5 bg-emerald-950/70 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs font-mono flex items-start gap-2.5 animate-fadeIn">
              <Smartphone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block text-emerald-400 mb-0.5">Alert WhatsApp Aegis:</span>
                {waNotification}
              </div>
            </div>
          )}
        </div>

        {/* Realtime Terminal Console Output */}
        <div className="lg:col-span-7 bg-[#05070c] border border-slate-800 rounded-xl p-4 font-mono text-xs flex flex-col justify-between min-h-[260px]">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80 text-slate-400 text-[11px]">
              <span className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" /> Aegis Threat Telemetry Log
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400 text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Proxy Node Active
              </span>
            </div>

            <div className="space-y-2 overflow-y-auto max-h-[220px] pr-2">
              {logs.map((log) => (
                <div key={log.id} className="flex items-start gap-2 text-[11px] leading-relaxed">
                  <span className="text-slate-500 text-[10px] shrink-0 font-mono">[{log.time}]</span>
                  {log.type === "ALLOW" && (
                    <span className="text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.2 rounded text-[10px] font-bold shrink-0">
                      ALLOW
                    </span>
                  )}
                  {log.type === "WARN" && (
                    <span className="text-amber-400 bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.2 rounded text-[10px] font-bold shrink-0">
                      WARN
                    </span>
                  )}
                  {log.type === "BLOCK" && (
                    <span className="text-rose-400 bg-rose-500/10 border border-rose-500/20 px-1.5 py-0.2 rounded text-[10px] font-bold shrink-0">
                      BLOCKED
                    </span>
                  )}
                  <div className="flex-1">
                    <span className={log.type === "BLOCK" ? "text-rose-300 font-semibold" : log.type === "WARN" ? "text-amber-300" : "text-slate-300"}>
                      {log.text}
                    </span>
                    {log.location && (
                      <span className="text-slate-500 text-[10px] ml-2 font-sans">({log.location})</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
