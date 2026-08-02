"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const threats = [
  {
    title: "DDoS (Distributed Denial of Service)",
    desc: "Serangan yang membanjiri server Anda dengan jutaan request palsu secara bersamaan sehingga server menjadi sangat lambat atau lumpuh total (down) dan tidak bisa diakses oleh pelanggan resmi.",
    impact: "Kerugian omzet penjualan, rusaknya reputasi bisnis, & hilangnya kepercayaan pelanggan."
  },
  {
    title: "SQL Injection (SQLi)",
    desc: "Teknik peretasan di mana penyerang menyisipkan perintah SQL jahat ke dalam kolom form web (seperti kolom login/pencarian) untuk mencuri, mengubah, atau menghapus database utama perusahaan Anda.",
    impact: "Kebocoran data rahasia pelanggan, data keuangan, & penghapusan database otomatis."
  },
  {
    title: "XSS (Cross-Site Scripting)",
    desc: "Peretas menyisipkan kode script jahat ke dalam halaman web yang nantinya akan tereksekusi di browser pengunjung lain untuk mencuri cookie login atau mengarahkan pengunjung ke web phishing.",
    impact: "Pengambilalihan akun pelanggan & pencurian data kredensial sensitif."
  },
  {
    title: "Brute Force Attack",
    desc: "Metode mencoba ribuan kombinasi username dan password secara terus-menerus dan otomatis menggunakan komputer hingga berhasil menemukan kata sandi yang cocok.",
    impact: "Akun admin/karyawan berhasil diambil alih dan digunakan untuk peretasan internal."
  },
  {
    title: "Bot Attack",
    desc: "Penggunaan program komputer otomatis (bot jahat) yang menyapu (scraping) isi web Anda, memborong stok otomatis, atau memenuhi form pendaftaran dengan data sampah.",
    impact: "Server jebol, biaya bandwidth membengkak, & stok barang terdistorsi."
  },
  {
    title: "Credential Stuffing",
    desc: "Peretas menggunakan daftar kombinasi email & password hasil kebocoran data dari web lain untuk mencoba login otomatis ke web Anda, memanfaatkan kebiasaan pengguna yang memakai password sama.",
    impact: "Pengambilalihan massal akun pelanggan tanpa perlu meretas server Anda secara langsung."
  },
  {
    title: "Malware (Malicious Software)",
    desc: "Perangkat lunak berbahaya yang secara diam-diam menginfeksi server atau komputer operasional Anda untuk mencuri data, merusak file, atau memantau ketikan kata sandi.",
    impact: "Kebocoran data rahasia perusahaan & gangguan serius pada sistem operasional."
  },
  {
    title: "Ransomware",
    desc: "Jenis malware ganas yang mengunci (mengenkripsi) seluruh file dan database penting perusahaan Anda, kemudian penyerang meminta uang tebusan dalam jumlah besar agar file bisa dibuka kembali.",
    impact: "Operasional bisnis terhenti total dan ancaman pembocoran data sensitif ke publik."
  },
  {
    title: "Web Shell (Backdoor)",
    desc: "File script jahat yang berhasil diunggah peretas ke dalam folder server Anda, memberikan akses remote penuh bagi peretas untuk mengendalikan server dari jarak jauh kapan saja.",
    impact: "Server dapat dikendalikan penuh oleh peretas walaupun password admin sudah diganti."
  },
  {
    title: "Zero-Day Exploit",
    desc: "Celah keamanan baru pada software atau plugin yang belum diketahui oleh pembuatnya dan belum memiliki patch perbaikan, namun sudah mulai dimanfaatkan oleh peretas jahat.",
    impact: "Sistem rentan diretas walaupun aplikasi merasa sudah di-update ke versi terbaru."
  },
  {
    title: "Insider Threat",
    desc: "Ancaman keamanan yang berasal dari internal organisasi sendiri, baik akibat tindakan kelalaian staf (salah klik link phishing) maupun penyalahgunaan wewenang oleh oknum karyawan.",
    impact: "Kebocoran data internal perusahaan dan manipulasi hak akses sistem."
  },
];

export default function AncamanPage() {
  return (
    <div className="page-wrapper min-h-screen flex flex-col font-sans bg-[#090d16] text-slate-300">
      <Navbar />

      <main className="flex-1 pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-400 text-xs font-mono tracking-widest uppercase block mb-2">// THREAT_KNOWLEDGEBASE</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">Edukasi Ancaman Keamanan Siber</h1>
            <p className="text-slate-400 text-sm mt-4">
              Penjelasan ringkas mengenai jenis-jenis serangan siber yang dapat mengancam keberlangsungan bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {threats.map((th, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-blue-400 block mb-2">[ THREAT 0{idx + 1} ]</span>
                  <h3 className="text-xl font-bold text-white mb-3 uppercase">{th.title}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">{th.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-800 text-xs font-mono">
                  <span className="text-red-400 block mb-1">Dampak Bisnis:</span>
                  <span className="text-slate-400">{th.impact}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center p-10 rounded-2xl bg-slate-900 border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-2 uppercase">Ingin Memastikan Sistem Anda Bebas Dari Ancaman Di Atas?</h3>
            <p className="text-slate-400 text-sm mb-6 max-w-xl mx-auto">
              Tim Sivilize Aegis siap melakukan Security Assessment menyeluruh terhadap infrastruktur digital Anda.
            </p>
            <a
              href="https://wa.me/6285137743321?text=Halo%20Pak%20Briand%20(COO%20Sivilize%20Aegis),%20kami%20tertarik%20melakukan%20Security%20Assessment%20anomali%20ancaman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs shadow-lg shadow-blue-600/30"
            >
              💬 Konsultasi Security Assessment (COO WA)
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
