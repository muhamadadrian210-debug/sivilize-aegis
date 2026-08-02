"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    incidentType: "Security Assessment & Audit",
    hasSourceCode: "Ya, Memiliki Akses Penuh",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Pak Briand Jivencha Therik (COO Sivilize Aegis),%0A%0AKami ingin berkonsultasi / mengajukan Security Assessment:%0A• Nama: ${encodeURIComponent(formData.name)}%0A• Perusahaan/Instansi: ${encodeURIComponent(formData.companyName)}%0A• Email: ${encodeURIComponent(formData.email)}%0A• Kebutuhan: ${encodeURIComponent(formData.incidentType)}%0A• Status Source Code: ${encodeURIComponent(formData.hasSourceCode)}%0A• Ringkasan Kendala: ${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/6285137743321?text=${text}`, "_blank");
  };

  return (
    <div className="page-wrapper min-h-screen flex flex-col font-sans bg-[#090d16] text-slate-300">
      <Navbar />

      <main className="flex-1 pt-36 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-blue-400 text-xs font-mono tracking-widest uppercase block mb-2">// EMERGENCY_INCIDENT_RESPONSE</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">Kontak & Form Security Audit</h1>
            <p className="text-slate-400 text-sm mt-4 max-w-xl mx-auto">
              Tim penanganan insiden siber Sivilize Aegis siap merespon konsultasi darurat dan pengajuan RFP perusahaan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* FORM AUDIT */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-6 uppercase">Form Audit & Assessment</h3>
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-bold mb-1 font-mono">Nama Lengkap *</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Ir. Hendra Wijaya"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-[#070b12] border border-slate-800 text-white focus:outline-none focus:border-blue-500 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1 font-mono">Nama Perusahaan / Rumah Sakit / Instansi *</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: PT Bank Nusantara / RSUD..."
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-[#070b12] border border-slate-800 text-white focus:outline-none focus:border-blue-500 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1 font-mono">Email Perusahaan *</label>
                  <input
                    type="email"
                    required
                    placeholder="hendra@perusahaan.co.id"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-[#070b12] border border-slate-800 text-white focus:outline-none focus:border-blue-500 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1 font-mono">Kebutuhan Utama</label>
                  <select
                    value={formData.incidentType}
                    onChange={(e) => setFormData({ ...formData, incidentType: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-[#070b12] border border-slate-800 text-white focus:outline-none focus:border-blue-500 font-mono"
                  >
                    <option value="Security Assessment & Audit">Security Assessment & Audit</option>
                    <option value="Perlindungan WAF & DDoS Mitigation">Perlindungan WAF & DDoS Mitigation</option>
                    <option value="Penanganan Insiden Peretasan (Incident Response)">Penanganan Insiden Peretasan (Incident Response)</option>
                    <option value="API Security & Auth Review">API Security & Auth Review</option>
                    <option value="Pembersihan Malware / Web Shell">Pembersihan Malware / Web Shell</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1 font-mono">Status Akses Source Code</label>
                  <select
                    value={formData.hasSourceCode}
                    onChange={(e) => setFormData({ ...formData, hasSourceCode: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-[#070b12] border border-slate-800 text-white focus:outline-none focus:border-blue-500 font-mono"
                  >
                    <option value="Ya, Memiliki Akses Penuh">Ya, Memiliki Akses Penuh (Metode 2)</option>
                    <option value="Tidak Punya / Developer Lama Hilang">Tidak Punya / Developer Lama Hilang (Metode 1 Proxy)</option>
                    <option value="Perlu Evaluasi Dulu">Perlu Evaluasi Dulu oleh Tim Aegis</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1 font-mono">Ringkasan Deskripsi Sistem & Kendala</label>
                  <textarea
                    rows={3}
                    placeholder="Jelaskan secara singkat sistem yang ingin dilindungi..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-[#070b12] border border-slate-800 text-white focus:outline-none focus:border-blue-500 font-mono"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs transition-all shadow-lg shadow-blue-600/30"
                >
                  🛡️ Submit Form & Chat Direct WA COO
                </button>
              </form>
            </div>

            {/* DIRECT EXECUTIVE CONTACT */}
            <div className="space-y-6">
              <div className="p-8 rounded-2xl bg-slate-900 border-2 border-blue-500/60 relative overflow-hidden shadow-2xl">
                <span className="bg-blue-600 text-white text-[10px] font-mono font-extrabold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">CHIEF OPERATING OFFICER</span>
                <h4 className="text-xl font-extrabold text-white mb-1 uppercase">Briand Jivencha Therik</h4>
                <span className="text-xs text-blue-400 font-bold block mb-4">Chief Operating Officer (COO) — Sivilize Aegis</span>
                <p className="text-slate-300 text-xs leading-relaxed mb-6">
                  Penanggung jawab langsung evaluasi insiden, pengawasan tim penetrasi siber, dan pengesahan NDA legalitas perusahaan.
                </p>

                <div className="p-4 rounded-xl bg-[#070b12] border border-slate-800 mb-6 text-xs space-y-2 font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Direct WhatsApp:</span>
                    <strong className="text-blue-400">+62 851-3774-3321</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Response SLA:</span>
                    <strong className="text-emerald-400 font-bold">&lt; 15 Menit (Emergency)</strong>
                  </div>
                </div>

                <a
                  href="https://wa.me/6285137743321?text=Halo%20Pak%20Briand%20Jivencha%20Therik%20(COO%20Sivilize%20Aegis),%20kami%20tertarik%20diskusikan%20audit%20keamanan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs transition-all shadow-md shadow-blue-600/30"
                >
                  💬 Hubungi COO Direct WA (+62 851-3774-3321)
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 text-xs font-mono">
                <span className="text-blue-400 font-bold uppercase tracking-wider block mb-2">// LEGAL_ENTITAS</span>
                <h4 className="text-sm font-bold text-white mb-2 uppercase">PT SIVILIZE CORP INDONESIA</h4>
                <p className="text-slate-400 leading-relaxed">
                  Kota Kupang, Nusa Tenggara Timur (NTT), Indonesia.
                  <br />
                  NIB: 0207260103661 | NPWP: 1000 0000 1032 4212 | KBLI: 62199
                  <br />
                  Akreditasi Digital Sertifikat: BSrE & BSSN RI.
                </p>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
