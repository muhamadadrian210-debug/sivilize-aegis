"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const faqData = [
  { q: "Apa itu Sivilize Aegis?", a: "Sivilize Aegis adalah divisi keamanan siber (Enterprise Cybersecurity) resmi di bawah PT SIVILIZE CORP INDONESIA yang berfokus pada pengamanan website, aplikasi, server, cloud, dan API perusahaan." },
  { q: "Apakah Sivilize Aegis penyedia jasa pembuatan website?", a: "Bukan. Sivilize Aegis khusus berfokus pada audit keamanan, hardening server, mitigasi serangan (DDoS/WAF), dan penguatan infrastruktur siber enterprise." },
  { q: "Apakah Sivilize Aegis toko penjual software antivirus?", a: "Bukan. Kami bukan penjual antivirus ritel. Kami adalah konsultansi dan penyedia solusi pengamanan infrastruktur digital berskala enterprise." },
  { q: "Bagaimana jika organisasi kami tidak memiliki akses source code?", a: "Kami menyediakan Metode 1 (DNS & Reverse Proxy Protection) yang dapat mengamankan aplikasi Anda melalui lapisan WAF dan firewall perimeter tanpa perlu mengubah source code." },
  { q: "Apakah implementasi keamanan akan menyebabkan sistem downtime?", a: "Untuk Metode 1, implementasi dapat dilakukan dengan zero downtime atau downtime minimal melalui pengalihan DNS secara halus." },
  { q: "Apa itu Web Application Firewall (WAF)?", a: "WAF adalah lapisan perisai yang memfilter request HTTP/S masuk untuk memblokir serangan SQL Injection, XSS, dan bot jahat sebelum mencapai server utama Anda." },
  { q: "Bagaimana cara Sivilize Aegis memitigasi serangan DDoS?", a: "Kami menggunakan infrastruktur penyaring trafik L3/L4/L7 yang mengisolasi trafik banjir jahat dan hanya meneruskan request resmi ke server Anda." },
  { q: "Apakah data perusahaan kami dijamin kerahasiaannya?", a: "Ya. Seluruh kerja sama diikat secara hukum oleh dokumen Non-Disclosure Agreement (NDA) sah dari PT Sivilize Corp Indonesia." },
  { q: "Apa perbedaan Metode 1 dan Metode 2?", a: "Metode 1 bekerja di level perimeter jaringan (DNS/Proxy) tanpa ubah kodingan. Metode 2 bekerja langsung mengamankan source code, autentikasi RBAC, dan server internal." },
  { q: "Apakah Sivilize Aegis melayani rumah sakit dan SIMRS?", a: "Ya. Kami berpengalaman mengamankan sistem rekam medis elektronik (RME) dan integrasi BPJS/SATUSEHAT dari kejahatan kebocoran data." },
  { q: "Apakah Sivilize Aegis melayani instansi pemerintah (E-Gov)?", a: "Ya. Kami mematuhi standar keamanan siber nasional dengan dukungan sertifikasi digital BSrE dan BSSN." },
  { q: "Bagaimana proses penanganan insiden peretasan darurat (Incident Response)?", a: "Tim kami akan langsung mengisolasi server terinfeksi, melakukan pembersihan backdoor/web shell, dan memulihkan akses sistem secara aman." },
  { q: "Apakah ada garansi Service Level Agreement (SLA)?", a: "Ya. Kami menyediakan jaminan SLA hingga 99.99% Uptime dan respon cepat sesuai paket langganan yang dipilih." },
  { q: "Apakah kami mendapatkan laporan hasil audit keamanan?", a: "Ya. Setiap pengujian akan menghasilkan dokumen Laporan Vulnerability Assessment yang berisi rincian celah dan langkah perbaikannya." },
  { q: "Apakah Sivilize Aegis melayani integrasi Autentikasi Wajah (Face Auth)?", a: "Ya. Kami melayani integrasi biometrik wajah untuk otorisasi akses tingkat tinggi pada sistem internal perusahaan." },
  { q: "Apakah perbaikan keamanan bisa dilakukan secara berkala?", a: "Bisa. Kami menyediakan opsi langganan bulanan, 6 bulanan, dan 1 tahunan untuk pemantauan keamanan secara kontinu." },
  { q: "Bagaimana jika developer lama kami sengaja menahan source code?", a: "Tim kami akan menggunakan pendekatan reverse proxy & perimeter WAF untuk mengisolasi server dari jangkauan tidak sah developer tersebut." },
  { q: "Apakah Sivilize Aegis melayani keamanan cloud (AWS/GCP/Cloudflare)?", a: "Ya. Kami melayani audit IAM roles, enkripsi storage S3/GCS, dan pengerasan konfigurasi cloud security group." },
  { q: "Bagaimana cara mengajukan proposal resmi (RFP)?", a: "Anda dapat mengisi Form Kontak atau menghubungi langsung COO Briand Jivencha Therik via WhatsApp di +62 851-3774-3321." },
  { q: "Berapa lama estimasi waktu audit keamanan awal?", a: "Evaluasi awal arsitektur umumnya selesai dalam 1-3 hari kerja tergantung pada kompleksitas infrastruktur Anda." },
];

export default function FaqPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="page-wrapper min-h-screen flex flex-col font-sans bg-[#090d16] text-slate-300">
      <Navbar />

      <main className="flex-1 pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-blue-400 text-xs font-mono tracking-widest uppercase block mb-2">// KNOWLEDGE_BASE_FAQ</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">20+ Pertanyaan Sering Diajukan</h1>
            <p className="text-slate-400 text-sm mt-4">
              Jawaban resmi mengenai layanan, metode, legalitas, dan prosedur kerja Sivilize Aegis.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full text-left font-bold text-white text-sm sm:text-base uppercase flex justify-between items-center gap-4 focus:outline-none"
                >
                  <span>[{String(idx + 1).padStart(2, "0")}] {item.q}</span>
                  <span className="text-blue-400 font-mono text-lg">{openIdx === idx ? "−" : "+"}</span>
                </button>
                {openIdx === idx && (
                  <div className="mt-4 pt-4 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
