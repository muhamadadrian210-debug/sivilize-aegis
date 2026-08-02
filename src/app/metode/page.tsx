"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function MetodePage() {
  return (
    <div className="page-wrapper min-h-screen flex flex-col font-sans bg-[#090d16] text-slate-300">
      <Navbar />

      <main className="flex-1 pt-36 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-400 text-xs font-mono tracking-widest uppercase block mb-2">// PROTECTION_METHODOLOGY</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">Dua Metode Implementasi Keamanan</h1>
            <p className="text-slate-400 text-sm mt-4">
              Pendekatan adaptif yang disesuaikan dengan ketersediaan akses source code dan arsitektur infrastruktur Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* METODE 1 */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-mono text-blue-400 block mb-2">[ METODE 1 ]</span>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase">DNS & Reverse Proxy Protection</h2>
              
              <div className="space-y-4 text-xs text-slate-300 leading-relaxed mb-8">
                <p>
                  <strong>Penjelasan</strong>:<br />
                  Implementasi dilakukan melalui konfigurasi DNS, reverse proxy, Web Application Firewall (WAF), dan layanan keamanan jaringan sehingga perlindungan dapat diterapkan tanpa perlu mengubah aplikasi secara langsung, apabila arsitektur sistem memungkinkan.
                </p>
                
                <div className="p-4 rounded-xl bg-[#070b12] border border-slate-800 space-y-2 font-mono">
                  <span className="text-blue-400 font-bold block mb-1">Keunggulan Utama:</span>
                  <div className="flex items-center gap-2 text-slate-200">
                    <span className="text-emerald-400">✓</span> <span>Implementasi cepat & instan.</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <span className="text-emerald-400">✓</span> <span>Downtime minimal (Zero Impact).</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <span className="text-emerald-400">✓</span> <span>Tidak memerlukan akses ke source code aplikasi.</span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/6285137743321?text=Halo%20Pak%20Briand%20(COO%20Sivilize%20Aegis),%20kami%20tertarik%20implementasi%20Metode%201%20(DNS%20%26%20Proxy)"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs"
              >
                💬 Konsultasi Metode 1 (COO WA)
              </a>
            </div>

            {/* METODE 2 */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-mono text-blue-400 block mb-2">[ METODE 2 ]</span>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase">Full Source Code Protection</h2>
              
              <div className="space-y-4 text-xs text-slate-300 leading-relaxed mb-8">
                <p>
                  <strong>Penjelasan</strong>:<br />
                  Untuk organisasi yang memiliki akses penuh terhadap source code. Kami membantu melakukan penguatan keamanan langsung pada aplikasi, proses autentikasi, otorisasi, konfigurasi, serta praktik pengembangan yang lebih aman.
                </p>
                
                <div className="p-4 rounded-xl bg-[#070b12] border border-slate-800 space-y-2 font-mono">
                  <span className="text-blue-400 font-bold block mb-1">Keunggulan Utama:</span>
                  <div className="flex items-center gap-2 text-slate-200">
                    <span className="text-blue-400">✓</span> <span>Audit mendalam arsitektur kodingan.</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <span className="text-blue-400">✓</span> <span>Penguatan autentikasi RBAC & MFA.</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <span className="text-blue-400">✓</span> <span>Integrasi DevSecOps & Container Security.</span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/6285137743321?text=Halo%20Pak%20Briand%20(COO%20Sivilize%20Aegis),%20kami%20tertarik%20implementasi%20Metode%202%20(Source%20Code%20Review)"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs"
              >
                💬 Konsultasi Metode 2 (COO WA)
              </a>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
