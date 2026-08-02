"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const emergencyWaMessage = encodeURIComponent(
    "Halo Pak Briand Jivencha Therik (COO Sivilize Aegis),\n\nSaya bermaksud berkonsultasi mengenai pengajuan Security Assessment / Perlindungan Infrastruktur Siber untuk perusahaan/instansi kami.\n\nBoleh dibantu koordinasi jadwal audit awal? Terima kasih."
  );

  return (
    <div className="page-wrapper min-h-screen flex flex-col font-sans bg-[#090d16] text-slate-300 selection:bg-blue-600 selection:text-white overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        
        {/* 1. HERO SECTION — ENTERPRISE CYBERSECURITY */}
        <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 border-b border-slate-800/60 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-blue-400 text-[11px] font-mono tracking-wider mb-8 shadow-2xl backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>DIVISI CYBERSECURITY RESMI PT SIVILIZE CORP INDONESIA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 uppercase">
              Enterprise Cybersecurity That Protects Your Business <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
                Before Threats Become Incidents.
              </span>
            </h1>

            <p className="text-slate-400 text-sm sm:text-base md:text-lg font-normal max-w-3xl mx-auto leading-relaxed mb-10">
              Sivilize Aegis membantu organisasi meningkatkan keamanan website, aplikasi, server, cloud, API, dan infrastruktur digital melalui pendekatan keamanan berlapis yang disesuaikan dengan kebutuhan bisnis.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/6285137743321?text=${emergencyWaMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
              >
                <span>🛡️ Konsultasi Keamanan (COO WA Direct)</span>
              </a>
              <Link
                href="/layanan"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-xs sm:text-sm px-8 py-4 rounded-xl border border-slate-700/80 transition-all"
              >
                <span>📋 Security Assessment</span>
              </Link>
            </div>

            {/* LIVE SECURITY METRIC BAR */}
            <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl max-w-5xl mx-auto text-left">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-slate-800 pb-4 mb-6 gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80 animate-pulse" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">sivilize-aegis-threat-guard.active</span>
                </div>
                <div className="flex items-center gap-4 text-[11px] font-mono text-slate-400">
                  <span className="text-emerald-400 font-bold">[ STATUS: SECURE ]</span>
                  <span className="text-blue-400 font-bold">[ SLA: 99.99% ]</span>
                  <span>[ BSrE / BSSN VALIDATED ]</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-[#070b12] border border-slate-800/80">
                  <span className="text-slate-500 text-[10px] block mb-1">01 / MITIGATION</span>
                  <strong className="text-white block font-sans font-bold text-sm mb-1">WAF & DDoS Shield</strong>
                  <span className="text-emerald-400 text-[11px]">Active Rate-Limiting</span>
                </div>
                <div className="p-4 rounded-xl bg-[#070b12] border border-slate-800/80">
                  <span className="text-slate-500 text-[10px] block mb-1">02 / LEGAL ENTITY</span>
                  <strong className="text-white block font-sans font-bold text-sm mb-1">PT Sivilize Corp NIB</strong>
                  <span className="text-blue-400 text-[11px]">0207260103661</span>
                </div>
                <div className="p-4 rounded-xl bg-[#070b12] border border-slate-800/80">
                  <span className="text-slate-500 text-[10px] block mb-1">03 / IMPLEMENTATION</span>
                  <strong className="text-white block font-sans font-bold text-sm mb-1">DNS & Proxy Method</strong>
                  <span className="text-indigo-400 text-[11px]">Zero Source Code Needed</span>
                </div>
                <div className="p-4 rounded-xl bg-[#070b12] border border-slate-800/80">
                  <span className="text-slate-500 text-[10px] block mb-1">04 / EXECUTIVE LEAD</span>
                  <strong className="text-white block font-sans font-bold text-sm mb-1">Briand Jivencha Therik</strong>
                  <span className="text-slate-400 text-[11px]">COO Direct WA</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 2. LATAR BELAKANG PERUSAHAAN (BAGIAN DARI PT SIVILIZE CORP INDONESIA) */}
        <section className="py-20 border-b border-slate-800/60 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7">
                <span className="text-blue-400 text-xs font-mono tracking-widest uppercase block mb-3">// CORPORATE_BACKGROUND</span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase leading-tight mb-6">
                  Divisi Keamanan Siber Resmi PT Sivilize Corp Indonesia
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                  <strong>Sivilize Aegis</strong> beroperasi secara sah sebagai divisi khusus pengamanan siber dan infrastruktur terpisah di bawah naungan <strong>PT SIVILIZE CORP INDONESIA</strong>. Kami berfokus pada pengerasan sistem (hardening), audit celah siber, mitigasi serangan DDoS/WAF, dan pengamanan API.
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-8">
                  Seluruh kerja sama diawasi oleh payung hukum perseroan yang sah, dokumen perjanjian Non-Disclosure Agreement (NDA), serta pematuhan sertifikasi siber dari Balai Sertifikasi Elektronik (BSrE) & Badan Siber dan Sandi Negara (BSSN).
                </p>
                
                {/* LEGAL CREDENTIALS */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-[#070b12] border border-slate-800">
                    <span className="text-slate-500 block text-[10px] mb-1">NIB KEMENKUMHAM</span>
                    <strong className="text-blue-400 font-bold text-sm">0207260103661</strong>
                  </div>
                  <div className="p-4 rounded-xl bg-[#070b12] border border-slate-800">
                    <span className="text-slate-500 block text-[10px] mb-1">KBLI PERIZINAN</span>
                    <strong className="text-white font-bold text-sm">62199 Pemrograman</strong>
                  </div>
                  <div className="p-4 rounded-xl bg-[#070b12] border border-slate-800">
                    <span className="text-slate-500 block text-[10px] mb-1">DIGITAL CERTIFICATE</span>
                    <strong className="text-emerald-400 font-bold text-sm">BSrE / BSSN</strong>
                  </div>
                </div>
              </div>

              {/* EXECUTIVE LEADERSHIP CARD */}
              <div className="lg:col-span-5 p-8 rounded-2xl bg-slate-900 border border-slate-800 relative shadow-2xl">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block mb-2">// EXECUTIVE_LEADERSHIP</span>
                <h3 className="text-xl font-bold text-white mb-6 uppercase">Direksi & Penanggung Jawab Operasional</h3>
                
                <div className="p-5 rounded-xl bg-[#070b12] border border-blue-500/40 mb-6">
                  <strong className="text-white font-bold text-base block">Briand Jivencha Therik</strong>
                  <span className="text-blue-400 font-bold text-xs block mb-2">Chief Operating Officer (COO) — Sivilize Aegis</span>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    Memimpin eksekusi penanganan insiden siber, evaluasi dokumen security audit, serta pengesahan NDA legalitas.
                  </p>
                  <a
                    href={`https://wa.me/6285137743321?text=${emergencyWaMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-2.5 px-5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs transition-all"
                  >
                    💬 WA Direct COO: +62 851-3774-3321 &rarr;
                  </a>
                </div>

                <div className="text-xs text-slate-400 leading-relaxed border-t border-slate-800 pt-4 font-mono">
                  CEO: Muhamad Adrian | CFO: Hendrik Putra Hanas | CMO: Shatrya Dhimar
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. VISI & MISI SIVILIZE AEGIS */}
        <section className="py-20 border-b border-slate-800/60 bg-slate-900/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-2xl bg-[#070b12] border border-blue-500/40 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-800 pb-6 lg:pb-0 lg:pr-8">
                  <span className="text-blue-400 text-xs font-mono tracking-widest uppercase block mb-2">// STRATEGIC_VISION</span>
                  <h3 className="text-2xl font-extrabold text-white uppercase mb-4">Perisai Keamanan Siber Utama</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    Menjadi partner keamanan siber skala enterprise terdepan di Indonesia yang mengamankan infrastruktur kritis instansi pemerintah, BUMN, rumah sakit, dan korporasi.
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <span className="text-blue-400 text-xs font-mono tracking-widest uppercase block mb-2">// ENGINEERING_MISSION</span>
                  <h3 className="text-2xl font-extrabold text-white uppercase mb-4">Komitmen Perlindungan Sivilize Aegis</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <strong className="text-blue-400 block mb-1">01 / RISK-BASED AUDIT</strong>
                      <span className="text-slate-400 font-sans">Prioritas pengamanan berfokus pada titik kritis paling berdampak bagi bisnis.</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <strong className="text-blue-400 block mb-1">02 / ZERO DOWNTIME</strong>
                      <span className="text-slate-400 font-sans">Perlindungan perimeter WAF/Proxy tanpa mengganggu operasional harian.</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <strong className="text-blue-400 block mb-1">03 / EMERGENCY SLA</strong>
                      <span className="text-slate-400 font-sans">Respon darurat insiden siber cepat dengan dukungan teknis 24/7.</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 4. SECTION KHUSUS: TIDAK MEMILIKI SOURCE CODE? */}
        <section className="py-20 border-b border-slate-800/60 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-2xl bg-[#070b12] border-2 border-blue-500/40 shadow-2xl relative overflow-hidden">
              <div className="max-w-3xl">
                <span className="text-blue-400 text-xs font-mono tracking-widest uppercase block mb-3">// LEGACY_SYSTEM_RELIEF</span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase leading-tight mb-4">
                  Tidak Memiliki Source Code?
                </h2>
                <div className="space-y-2 text-xs sm:text-sm text-slate-300 mb-6 font-mono">
                  <p className="flex items-center gap-2 text-red-400">
                    <span>❌</span> <span>Source code masih ditahan developer lama?</span>
                  </p>
                  <p className="flex items-center gap-2 text-red-400">
                    <span>❌</span> <span>Developer sebelumnya sudah tidak bisa dihubungi?</span>
                  </p>
                  <p className="flex items-center gap-2 text-red-400">
                    <span>❌</span> <span>Tidak memiliki akses penuh terhadap aplikasi?</span>
                  </p>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Dalam banyak kasus kami tetap dapat membantu melalui pendekatan berbasis **DNS, reverse proxy, firewall, web application firewall (WAF)**, serta lapisan keamanan lainnya, tergantung pada arsitektur sistem yang digunakan.
                </p>
                <p className="text-slate-400 text-xs leading-relaxed mb-8 font-mono">
                  Tim kami akan melakukan evaluasi arsitektur terlebih dahulu untuk menentukan pendekatan yang paling tepat tanpa perlu merusak aplikasi lama Anda.
                </p>

                <Link
                  href="/tanpa-source-code"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs transition-all"
                >
                  <span>Pelajari Solusi Tanpa Source Code &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5. DUA METODE IMPLEMENTASI PERLINDUNGAN */}
        <section className="py-20 border-b border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blue-400 text-xs font-mono tracking-widest uppercase block mb-2">// PROTECTION_METHODOLOGY</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase">Dua Pendekatan Implementasi Keamanan</h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-3">Fleksibilitas perlindungan sesuai dengan akses dan arsitektur sistem organisasi Anda.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* METODE 1 */}
              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-blue-400">[ METODE 1 ]</span>
                    <span className="px-3 py-1 rounded bg-[#070b12] text-emerald-400 text-[11px] font-mono">No Code Change</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 uppercase">DNS & Reverse Proxy Protection</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    Implementasi dilakukan melalui konfigurasi DNS, reverse proxy, firewall, dan layanan keamanan jaringan sehingga perlindungan dapat diterapkan tanpa perlu mengubah aplikasi secara langsung, apabila arsitektur sistem memungkinkan.
                  </p>
                  
                  <div className="space-y-2 text-xs text-slate-400 font-mono mb-8">
                    <div className="flex items-center gap-2 text-slate-200">
                      <span className="text-emerald-400">✓</span> <span>Implementasi cepat & instan.</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-200">
                      <span className="text-emerald-400">✓</span> <span>Downtime minimal / zero downtime.</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-200">
                      <span className="text-emerald-400">✓</span> <span>Tidak memerlukan akses source code aplikasi.</span>
                    </div>
                  </div>
                </div>

                <Link href="/metode" className="text-blue-400 font-mono text-xs font-bold hover:underline">
                  Detail Metode 1 &rarr;
                </Link>
              </div>

              {/* METODE 2 */}
              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-blue-400">[ METODE 2 ]</span>
                    <span className="px-3 py-1 rounded bg-[#070b12] text-blue-400 text-[11px] font-mono">Full Access Hardening</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 uppercase">Full Source Code Protection</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    Untuk organisasi yang memiliki akses penuh terhadap source code. Kami membantu melakukan penguatan keamanan langsung pada aplikasi, proses autentikasi, otorisasi, konfigurasi, serta praktik pengembangan yang lebih aman.
                  </p>
                  
                  <div className="space-y-2 text-xs text-slate-400 font-mono mb-8">
                    <div className="flex items-center gap-2 text-slate-200">
                      <span className="text-blue-400">✓</span> <span>Audit mendalam arsitektur kodingan.</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-200">
                      <span className="text-blue-400">✓</span> <span>Penguatan autentikasi RBAC & Multi-Factor Auth.</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-200">
                      <span className="text-blue-400">✓</span> <span>Integrasi DevSecOps & Container Security.</span>
                    </div>
                  </div>
                </div>

                <Link href="/metode" className="text-blue-400 font-mono text-xs font-bold hover:underline">
                  Detail Metode 2 &rarr;
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* 6. SEKTOR TARGET INDUSTRI */}
        <section className="py-20 border-b border-slate-800/60 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blue-400 text-xs font-mono tracking-widest uppercase block mb-2">// TARGET_SECTORS</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase">Sektor Organisasi Target</h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-3">Spesialisasi pengamanan infrastruktur kritis untuk berbagai sektor industri.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-xs font-mono">
              {["Rumah Sakit & SIMRS", "Pemerintah (E-Gov)", "Sekolah & Kampus", "Startup & SaaS", "Marketplace Custom", "Perusahaan Corporate", "BUMN Enterprise", "Layanan Keuangan", "Logistik & Transport", "Manufaktur Industri"].map((sector, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#070b12] border border-slate-800 text-center hover:border-blue-500/40 transition-all">
                  <span className="text-white font-bold block">{sector}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. TRUST SECTION: MENGAPA MEMILIH SIVILIZE AEGIS */}
        <section className="py-20 border-b border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blue-400 text-xs font-mono tracking-widest uppercase block mb-2">// TRUST_FRAMEWORK</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase">Mengapa Memilih Sivilize Aegis</h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-3">Pendekatan terstruktur dengan garansi legalitas perseroan sah.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
              <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-blue-400 font-mono text-sm block mb-2">01 / RISK-BASED</span>
                <strong className="text-white font-bold text-sm block mb-2">Pendekatan Berbasis Risiko</strong>
                <p className="text-slate-400 leading-relaxed">Prioritas pengamanan berfokus pada titik paling krusial yang paling berdampak bagi bisnis.</p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-blue-400 font-mono text-sm block mb-2">02 / DOCUMENTATION</span>
                <strong className="text-white font-bold text-sm block mb-2">Dokumentasi Yang Jelas</strong>
                <p className="text-slate-400 leading-relaxed">Laporan audit dan rekomendasi teknis yang komprehensif serta mudah dipahami tim IT Anda.</p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-blue-400 font-mono text-sm block mb-2">03 / STAGED_DEPLOY</span>
                <strong className="text-white font-bold text-sm block mb-2">Implementasi Bertahap</strong>
                <p className="text-slate-400 leading-relaxed">Penguatan keamanan dilakukan tanpa mengganggu jalannya operasional bisnis harian.</p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-blue-400 font-mono text-sm block mb-2">04 / MONITORING</span>
                <strong className="text-white font-bold text-sm block mb-2">Monitoring & SLA Support</strong>
                <p className="text-slate-400 leading-relaxed">Dukungan teknis berkelanjutan dan pemantauan ancaman secara berkala.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. EXECUTIVE CONTACT BANNER (COO DIRECT WA) */}
        <section className="py-20 bg-slate-900/40">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="p-8 sm:p-12 rounded-2xl bg-[#070b12] border-2 border-blue-600/60 shadow-2xl relative overflow-hidden">
              <span className="text-blue-400 text-xs font-mono tracking-widest uppercase block mb-3">// EXECUTIVE_INCIDENT_RESPONSE</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase mb-4">
                Lindungi Infrastruktur Digital Anda Sekarang
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-8">
                Diskusikan kebutuhan Security Assessment, Incident Response, dan penguatan sistem langsung bersama Chief Operating Officer (COO) kami.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/6285137743321?text=${emergencyWaMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all"
                >
                  <span>💬 Chat WA COO: Briand Jivencha Therik (+62 851-3774-3321)</span>
                </a>
                <Link
                  href="/kontak"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-xs sm:text-sm px-8 py-4 rounded-xl border border-slate-700 transition-all"
                >
                  <span>📋 Submit Emergency Form</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
