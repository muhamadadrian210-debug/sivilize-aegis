"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const emergencyWaMessage = encodeURIComponent(
    "Halo Pak Briand Jivencha Therik (COO Sivilize Aegis),\n\nSaya bermaksud mendaftar Program Early Adopter / berkonsultasi mengenai pengajuan Security Assessment untuk perusahaan/instansi kami.\n\nBoleh dibantu koordinasi jadwal audit awal? Terima kasih."
  );

  return (
    <div className="page-wrapper min-h-screen flex flex-col font-sans bg-[#090d16] text-slate-300 selection:bg-blue-600 selection:text-white overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        
        {/* 1. HERO SECTION — ENTERPRISE CYBERSECURITY */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-slate-800/60 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[300px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-blue-500/30 text-blue-400 text-[10px] font-mono tracking-wide mb-4 shadow-xl backdrop-blur-md max-w-full text-center">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shrink-0" />
              <span className="truncate">Sivilize Aegis — PT Sivilize Corp Indonesia</span>
            </div>

            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              Keamanan Siber Enterprise.{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 block sm:inline mt-1 sm:mt-0">
                Lindungi Bisnis Anda Sebelum Ancaman Menjadi Insiden.
              </span>
            </h1>

            <p className="text-slate-400 text-sm sm:text-base md:text-lg font-normal max-w-3xl mx-auto leading-relaxed mb-8">
              Sivilize Aegis membantu organisasi meningkatkan keamanan website, aplikasi, server, cloud, API, dan infrastruktur digital melalui pendekatan keamanan berlapis yang disesuaikan dengan kebutuhan bisnis.
            </p>

            {/* EARLY ADOPTER HIGHLIGHT BADGE */}
            <div className="mb-10 max-w-2xl mx-auto p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs text-slate-300">
              <span className="text-blue-400 font-mono font-bold uppercase mr-2">🚀 Program Early Adopter:</span>
              <span>Dapatkan harga spesial lebih terjangkau tanpa mengurangi komitmen kualitas terbaik kami.</span>
            </div>

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
                href="/harga"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-xs sm:text-sm px-8 py-4 rounded-xl border border-slate-700/80 transition-all"
              >
                <span>📋 Minta Security Assessment</span>
              </Link>
            </div>

            {/* LIVE SECURITY METRIC BAR */}
            <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl max-w-5xl mx-auto text-left">
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

        {/* 2. CORPORATE BACKGROUND & EKOSISTEM PT SIVILIZE CORP INDONESIA */}
        <section className="py-20 border-b border-slate-800/60 bg-slate-900/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-blue-400 text-xs font-mono tracking-widest uppercase block mb-2">// CORPORATE_ENTITY_&_BACKGROUND</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
                Bagian Dari Ekosistem PT Sivilize Corp Indonesia
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-3">
                Sivilize Aegis beroperasi secara sah sebagai pilar spesialis pertahanan siber & pengerasan infrastruktur digital terpisah di bawah badan hukum resmi perseroan.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
              
              {/* LATAR BELAKANG PERUSAHAAN */}
              <div className="lg:col-span-7 p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4 uppercase">Profil & Identitas Badan Hukum</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  <strong>PT SIVILIZE CORP INDONESIA</strong> adalah induk perusahaan teknologi skala enterprise yang menaungi 3 pilar layanan utama: **SiWeb Production** (Digital Presence & Web UMKM), **Sivilize Software** (Custom Enterprise Software, ERP, SIMRS), dan **Sivilize Aegis** (Enterprise Cybersecurity & System Hardening).
                </p>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  Setiap pengujian keamanan siber dan pendampingan audit oleh Sivilize Aegis dilindungi oleh instrumen hukum perseroan yang sah, dokumen *Non-Disclosure Agreement (NDA)*, serta kepatuhan pada standar akreditasi sertifikat digital resmi pemerintah.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-[#070b12] border border-slate-800">
                    <span className="text-slate-500 block text-[10px] mb-1">NIB KEMENKUMHAM</span>
                    <strong className="text-blue-400 font-bold text-xs">0207260103661</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#070b12] border border-slate-800">
                    <span className="text-slate-500 block text-[10px] mb-1">KBLI PERIZINAN</span>
                    <strong className="text-white font-bold text-xs">62199 Pemrograman</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#070b12] border border-slate-800">
                    <span className="text-slate-500 block text-[10px] mb-1">DIGITAL CERTIFICATE</span>
                    <strong className="text-emerald-400 font-bold text-xs">BSrE / BSSN RI</strong>
                  </div>
                </div>
              </div>

              {/* DIREKSI & EXECUTIVE LEADERSHIP */}
              <div className="lg:col-span-5 p-8 rounded-2xl bg-slate-900 border border-slate-800 relative shadow-xl">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block mb-2">// EXECUTIVE_LEADERSHIP</span>
                <h3 className="text-xl font-bold text-white mb-6 uppercase">Direksi & Penanggung Jawab Operasional</h3>
                
                <div className="p-5 rounded-xl bg-[#070b12] border border-blue-500/40 mb-5">
                  <strong className="text-white font-bold text-base block">Briand Jivencha Therik</strong>
                  <span className="text-blue-400 font-bold text-xs block mb-2">Chief Operating Officer (COO) — Sivilize Aegis</span>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    Memimpin langsung eksekusi mitigasi insiden siber, evaluasi dokumen security audit, serta pengesahan NDA perseroan.
                  </p>
                  <a
                    href={`https://wa.me/6285137743321?text=${emergencyWaMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs transition-all"
                  >
                    💬 WA Direct COO: +62 851-3774-3321 &rarr;
                  </a>
                </div>

                <div className="text-xs text-slate-400 leading-relaxed border-t border-slate-800 pt-4 font-mono">
                  CEO: Muhamad Adrian | CFO: Hendrik Putra Hanas | CMO: Shatrya Dhimar
                </div>
              </div>

            </div>

            {/* 3 PILAR EKOSISTEM SIVILIZE CORP */}
            <div className="p-8 rounded-2xl bg-[#070b12] border border-blue-500/30">
              <span className="text-blue-400 text-xs font-mono tracking-widest uppercase block mb-2 text-center">// CORPORATE_ECOSYSTEM_TIERS</span>
              <h3 className="text-xl font-bold text-white uppercase text-center mb-8">3 Pilar Utama Ekosistem PT Sivilize Corp Indonesia</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono">
                <a href="https://sivilizecorp.my.id" target="_blank" rel="noopener noreferrer" className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all block">
                  <span className="text-slate-500 block text-[10px] mb-1">01 / DIGITAL PRESENCE</span>
                  <strong className="text-white font-bold text-sm block mb-2">SiWeb Production &rarr;</strong>
                  <p className="text-slate-400 font-sans leading-relaxed">Penyedia jasa pembuatan landing page, website UMKM, company profile, &amp; sistem toko online WhatsApp.</p>
                </a>

                <a href="https://software.sivilizecorp.com" target="_blank" rel="noopener noreferrer" className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all block">
                  <span className="text-slate-500 block text-[10px] mb-1">02 / ENTERPRISE SOFTWARE</span>
                  <strong className="text-white font-bold text-sm block mb-2">Sivilize Software &rarr;</strong>
                  <p className="text-slate-400 font-sans leading-relaxed">Pengembangan sistem software enterprise custom, ERP, CRM, SIMRS rumah sakit, &amp; integrasi AI/ML.</p>
                </a>

                <a href="https://aegis.sivilizecorp.com" target="_blank" rel="noopener noreferrer" className="p-5 rounded-xl bg-slate-900 border border-blue-500/60 shadow-lg hover:border-blue-400 transition-all block">
                  <span className="text-blue-400 block text-[10px] mb-1">03 / CYBERSECURITY DIVISION</span>
                  <strong className="text-white font-bold text-sm block mb-2">Sivilize Aegis &rarr;</strong>
                  <p className="text-slate-400 font-sans leading-relaxed">Pengawasan keamanan siber, WAF layer 7, mitigasi DDoS, hardening server, &amp; incident response.</p>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* 3. PROGRAM EARLY ADOPTER SECTION */}
        <section className="py-16 border-b border-slate-800/60 bg-blue-950/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-2xl bg-[#070b12] border-2 border-blue-500/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="text-blue-400 text-xs font-mono tracking-widest uppercase block mb-2">// EARLY_ADOPTER_PROGRAM</span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase mb-4">
                  Program Early Adopter Sivilize Aegis
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Karena Sivilize Aegis masih dalam tahap awal pengembangan layanan, kami membuka Program Early Adopter dengan harga khusus bagi klien yang ingin menjadi bagian dari perjalanan kami.
                </p>
                <p className="text-slate-400 text-xs leading-relaxed font-mono">
                  Program ini memberikan harga lebih terjangkau tanpa mengurangi komitmen kami dalam memberikan layanan terbaik.
                </p>
              </div>

              <div className="w-full md:w-auto text-center md:text-right">
                <Link
                  href="/harga"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs shadow-lg shadow-blue-600/30 transition-all whitespace-nowrap"
                >
                  <span>Lihat Paket Early Adopter &rarr;</span>
                </Link>
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
                  Tidak masalah. Dalam banyak kasus kami tetap dapat membantu melalui pendekatan **DNS Protection, Reverse Proxy, Web Application Firewall (WAF), Firewall Rules, Bot Protection, CDN**, dan berbagai lapisan keamanan lainnya sesuai dengan arsitektur sistem yang digunakan.
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
              <span className="text-blue-400 text-xs font-mono tracking-widest uppercase block mb-2">// IMPLEMENTATION_METHODS</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase">Dua Pendekatan Layanan Keamanan</h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-3">Fleksibilitas perlindungan sesuai ketersediaan source code & arsitektur sistem Anda.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* METODE 1 */}
              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-blue-400">[ METODE 1 ]</span>
                    <span className="px-3 py-1 rounded bg-[#070b12] text-emerald-400 text-[11px] font-mono">No Source Code Required</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 uppercase">DNS Protection</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    Implementasi melalui DNS, Reverse Proxy, Web Application Firewall, Firewall Rules, Traffic Filtering, CDN, dan berbagai lapisan keamanan lainnya tanpa perlu menyentuh source code.
                  </p>
                  
                  <div className="space-y-2 text-xs text-slate-400 font-mono mb-8">
                    <div className="flex items-center gap-2 text-slate-200">
                      <span className="text-emerald-400">✓</span> <span>Tidak membutuhkan source code.</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-200">
                      <span className="text-emerald-400">✓</span> <span>Implementasi cepat & instan.</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-200">
                      <span className="text-emerald-400">✓</span> <span>Cocok untuk sebagian besar website aktif.</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-200">
                      <span className="text-emerald-400">✓</span> <span>Downtime minim / zero impact.</span>
                    </div>
                  </div>
                </div>

                <Link href="/metode" className="text-blue-400 font-mono text-xs font-bold hover:underline">
                  Detail DNS Protection &rarr;
                </Link>
              </div>

              {/* METODE 2 */}
              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-blue-400">[ METODE 2 ]</span>
                    <span className="px-3 py-1 rounded bg-[#070b12] text-blue-400 text-[11px] font-mono">Deep Code Hardening</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 uppercase">Full Source Code Protection</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    Implementasi dilakukan langsung pada aplikasi, meliputi Source Code Review, Authentication, Authorization, API Security, Dependency, Config, & Deployment Review.
                  </p>
                  
                  <div className="space-y-2 text-xs text-slate-400 font-mono mb-8">
                    <div className="flex items-center gap-2 text-slate-200">
                      <span className="text-blue-400">✓</span> <span>Membutuhkan akses source code.</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-200">
                      <span className="text-blue-400">✓</span> <span>Perlindungan lebih mendalam pada kodingan.</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-200">
                      <span className="text-blue-400">✓</span> <span>Audit autentikasi & RBAC terstruktur.</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-200">
                      <span className="text-blue-400">✓</span> <span>Review API Security & Patch Recommendation.</span>
                    </div>
                  </div>
                </div>

                <Link href="/metode" className="text-blue-400 font-mono text-xs font-bold hover:underline">
                  Detail Full Source Code Protection &rarr;
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* 6. EXECUTIVE CONTACT BANNER (COO DIRECT WA) */}
        <section className="py-20 bg-slate-900/40">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="p-8 sm:p-12 rounded-2xl bg-[#070b12] border-2 border-blue-600/60 shadow-2xl relative overflow-hidden">
              <span className="text-blue-400 text-xs font-mono tracking-widest uppercase block mb-3">// EXECUTIVE_INCIDENT_RESPONSE</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase mb-4">
                Konsultasikan Keamanan Sistem Anda Sekarang
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-8">
                Diskusikan pendaftaran Program Early Adopter, Security Assessment, dan penguatan sistem langsung bersama Chief Operating Officer (COO) kami.
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
                  <span>📋 Hubungi Tim Kami</span>
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
