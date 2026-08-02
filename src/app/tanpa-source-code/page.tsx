"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TanpaSourceCodePage() {
  return (
    <div className="page-wrapper min-h-screen flex flex-col font-sans bg-[#090d16] text-slate-300">
      <Navbar />

      <main className="flex-1 pt-36 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-14 rounded-2xl bg-[#070b12] border-2 border-blue-500/40 shadow-2xl relative">
            <span className="text-blue-400 text-xs font-mono tracking-widest uppercase block mb-3">// LEGACY_SYSTEM_RELIEF</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white uppercase leading-tight mb-6">
              Tidak Memiliki Source Code?
            </h1>
            
            <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-mono mb-8 p-6 rounded-xl bg-slate-900 border border-slate-800">
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

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
              <p>
                Dalam banyak kasus, kami tetap dapat membantu organisasi Anda melalui pendekatan keamanan perimeter berbasis **DNS, Reverse Proxy, Firewall, Web Application Firewall (WAF)**, serta lapisan enkripsi lainnya tanpa perlu menyentuh atau merusak kodingan lama.
              </p>
              <p className="text-slate-400">
                Tim spesialis Sivilize Aegis akan melakukan evaluasi arsitektur terlebih dahulu untuk menentukan pendekatan keamanan perimeter yang paling tepat bagi sistem Anda.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://wa.me/6285137743321?text=Halo%20Pak%20Briand%20(COO%20Sivilize%20Aegis),%20kami%20tertarik%20konsultasi%20solusi%20keamanan%20Tanpa%20Source%20Code"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs shadow-lg shadow-blue-600/30"
              >
                💬 Konsultasi Solusi Tanpa Source Code (COO WA)
              </a>
              <Link href="/metode" className="text-blue-400 font-mono text-xs font-bold hover:underline">
                Lihat Penjelasan Metode Proxy &rarr;
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
