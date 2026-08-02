"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const faq25 = [
  { q: "Apa itu Sivilize Aegis?", a: "Sivilize Aegis adalah divisi keamanan siber (Enterprise Cybersecurity) resmi di bawah PT SIVILIZE CORP INDONESIA yang berfokus pada pengamanan website, aplikasi, server, cloud, dan API perusahaan." },
  { q: "Apakah Sivilize Aegis bagian resmi dari PT Sivilize Corp Indonesia?", a: "Ya, Sivilize Aegis beroperasi secara sah sebagai divisi khusus pengamanan siber yang terdaftar di Kemenkumham (NIB: 0207260103661, KBLI: 62199) serta diakreditasi sertifikat digital BSrE & BSSN." },
  { q: "Apa itu Program Early Adopter Sivilize Aegis?", a: "Program Early Adopter dibuka untuk memberikan penawaran harga khusus lebih terjangkau bagi klien pertama yang ingin bergabung dalam perjalanan awal pengembangan layanan Sivilize Aegis tanpa mengurangi komitmen kualitas terbaik." },
  { q: "Apakah Sivilize Aegis pembuat website biasa?", a: "Bukan. Pembuatan website ritel dan landing page ditangani oleh SiWeb Production. Sivilize Aegis khusus menangani audit keamanan siber, hardening server, WAF, mitigasi DDoS, dan Incident Response." },
  { q: "Apakah Sivilize Aegis toko penjual software antivirus?", a: "Bukan. Kami bukan penjual antivirus ritel. Kami adalah konsultansi dan penyedia solusi pengamanan infrastruktur digital berskala enterprise." },
  { q: "Bagaimana jika source code website kami ditahan developer lama?", a: "Kami menyediakan opsi DNS Protection (Metode 1) yang mengamankan aplikasi Anda melalui jaringan WAF dan reverse proxy perimeter tanpa membutuhkan akses source code sama sekali." },
  { q: "Apa perbedaan DNS Protection dan Full Source Code Protection?", a: "DNS Protection bekerja di perimeter luar jaringan (tanpa ubah kodingan, deploy cepat). Full Source Code Protection bekerja hingga ke dalam kodingan aplikasi, review autentikasi, API, dan server." },
  { q: "Kapan kami harus memilih paket DNS Protection?", a: "Pilihlah DNS Protection jika website Anda sudah aktif berjalan, butuh perlindungan DDoS/WAF instan, atau jika Anda tidak memiliki akses ke source code lama." },
  { q: "Kapan kami harus memilih paket Full Source Code Protection?", a: "Pilihlah Full Source Code Protection jika organisasi Anda memiliki akses penuh ke source code dan ingin mengamankan alur login, otorisasi RBAC, API, dan CI/CD pipeline secara mendalam." },
  { q: "Apakah implementasi DNS Protection akan membuat website down?", a: "Tidak. Pengalihan DNS dilakukan secara halus (graceful DNS propagation) dengan zero downtime atau gangguan minimal pada operasional." },
  { q: "Apa itu WAF (Web Application Firewall)?", a: "WAF adalah penyaring trafik L7 yang secara otomatis memblokir perintah jahat seperti SQL Injection, XSS, dan bot peretas sebelum mencapai server Anda." },
  { q: "Bagaimana Sivilize Aegis menahan serangan DDoS?", a: "Kami mengalihkan banjir trafik jahat L3/L4/L7 ke jaringan penyaring (scrubbing center) sehingga hanya trafik pelanggan resmi yang diteruskan ke server Anda." },
  { q: "Apa itu SQL Injection dan cara mencegahnya?", a: "SQLi adalah penyisipan perintah database jahat via form web. Kami mencegahnya melalui aturan WAF dan rekomendasi prepared statements pada kodingan." },
  { q: "Apa itu XSS (Cross-Site Scripting)?", a: "XSS adalah eksekusi script jahat di browser pengunjung lain. Kami mencegahnya dengan filtering input dan konfigurasi Content Security Policy (CSP)." },
  { q: "Apa itu Credential Stuffing?", a: "Credential Stuffing adalah pencurian akun massal menggunakan daftar password bocor dari web lain. Kami mencegahnya dengan rate limiting dan bot challenge." },
  { q: "Apa itu Ransomware dan bagaimana cara mencegahnya?", a: "Ransomware mengunci file server dan meminta tebusan. Kami mencegahnya dengan isolasi port, server hardening, dan strategi backup otomatis off-site." },
  { q: "Apa itu Web Shell (Backdoor)?", a: "Web shell adalah script jahat yang disisipkan peretas untuk mengontrol server remote. Kami melakukan сканування dan pembersihan backdoor secara tuntas." },
  { q: "Apakah ada perjanjian kerahasiaan data (NDA)?", a: "Ya. Setiap kerja sama diawali dengan penandatanganan dokumen Non-Disclosure Agreement (NDA) yang sah secara hukum Republik Indonesia." },
  { q: "Apakah dokumen legalitas PT Sivilize Corp sah secara hukum?", a: "Ya. Terdaftar resmi di Kemenkumham RI dengan NIB 0207260103661, NPWP 1000 0000 1032 4212, serta sertifikat digital resmi dari BSSN." },
  { q: "Apakah sertifikat BSrE dan BSSN sudah terekam?", a: "Sertifikat perizinan ditandatangani secara elektronik oleh Balai Sertifikasi Elektronik (BSrE) & BSSN." },
  { q: "Berapa lama proses Security Assessment awal?", a: "Evaluasi awal arsitektur umumnya selesai dalam 1-3 hari kerja tergantung pada kompleksitas sistem Anda." },
  { q: "Apakah kami mendapatkan laporan audit tertulis?", a: "Ya. Setiap audit menghasilkan Laporan Vulnerability Assessment resmi berisi temuan celah dan langkah mitigasinya." },
  { q: "Bagaimana alur langganan bulanan vs tahunan?", a: "Langganan bulanan memberikan kelenturan tanpa komitmen lama. Langganan tahunan memberikan harga spesial Early Adopter yang jauh lebih hemat." },
  { q: "Bagaimana cara klaim Incident Response darurat?", a: "Hubungi langsung hotline darurat COO kami atau kirim Form Kontak untuk respon penanganan darurat dalam waktu < 15 menit." },
  { q: "Siapa penanggung jawab operasional di Sivilize Aegis?", a: "Chief Operating Officer (COO) Briand Jivencha Therik memimpin langsung koordinasi operasional dan audit penanganan insiden siber." },
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
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">25 FAQ Keamanan Siber</h1>
            <p className="text-slate-400 text-sm mt-4">
              Jawaban resmi mengenai layanan, metode, Program Early Adopter, legalitas, dan prosedur kerja Sivilize Aegis.
            </p>
          </div>

          <div className="space-y-4">
            {faq25.map((item, idx) => (
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
