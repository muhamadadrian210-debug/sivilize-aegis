"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function KepatuhanPage() {
  return (
    <div className="page-wrapper min-h-screen flex flex-col font-sans bg-[#090d16] text-slate-300">
      <Navbar />

      <main className="flex-1 pt-36 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-400 text-xs font-mono tracking-widest uppercase block mb-2">// LEGAL_COMPLIANCE</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">Legalitas & Kepatuhan Hukum</h1>
            <p className="text-slate-400 text-sm mt-4">
              Sivilize Aegis beroperasi secara sah sebagai divisi resmi di bawah naungan PT Sivilize Corp Indonesia.
            </p>
          </div>

          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <h2 className="text-xl font-bold text-white mb-4 uppercase">Kredensial Legalitas Perusahaan</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono mb-6">
                <div className="p-4 rounded-xl bg-[#070b12] border border-slate-800">
                  <span className="text-slate-500 block mb-1">NAMA ENTITAS HUKUM</span>
                  <strong className="text-white font-bold text-sm block">PT SIVILIZE CORP INDONESIA</strong>
                </div>
                <div className="p-4 rounded-xl bg-[#070b12] border border-slate-800">
                  <span className="text-slate-500 block mb-1">NOMOR INDUK BERUSAHA (NIB)</span>
                  <strong className="text-blue-400 font-bold text-sm block">0207260103661</strong>
                </div>
                <div className="p-4 rounded-xl bg-[#070b12] border border-slate-800">
                  <span className="text-slate-500 block mb-1">NPWP PERUSAHAAN</span>
                  <strong className="text-white font-bold text-sm block">1000 0000 1032 4212</strong>
                </div>
                <div className="p-4 rounded-xl bg-[#070b12] border border-slate-800">
                  <span className="text-slate-500 block mb-1">KBLI PERIZINAN</span>
                  <strong className="text-white font-bold text-sm block">62199 Pemrograman Komputer</strong>
                </div>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed border-t border-slate-800 pt-4">
                Sertifikat perizinan ditandatangani secara elektronik menggunakan sertifikat digital resmi dari Balai Sertifikasi Elektronik (BSrE), Badan Siber dan Sandi Negara (BSSN).
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <h2 className="text-xl font-bold text-white mb-4 uppercase">Prinsip Kerahasiaan Data (NDA & SLA)</h2>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                Setiap bentuk kerja sama pengujian keamanan, audit source code, maupun mitigasi insiden akan diikat oleh dokumen perjanjian Non-Disclosure Agreement (NDA) yang sah secara hukum Republik Indonesia.
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Kami menjamin kerahasiaan penuh atas seluruh temuan celah keamanan, arsitektur server, dan data sensitif organisasi Anda.
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
