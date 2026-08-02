"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const articles30 = [
  { title: "Cara Mencegah Serangan DDoS Pada Server Perusahaan", category: "NETWORK SECURITY", desc: "Panduan teknis dan strategi mitigasi rate-limiting untuk mencegah kelumpuhan server." },
  { title: "Apa Itu Ransomware Dan Cara Melindungi Data Sensitif Bisnis", category: "DATA PROTECTION", desc: "Langkah pencegahan enkripsi massal dan strategi backup otomatis off-site." },
  { title: "Cara Memilih Web Application Firewall (WAF) Yang Tepat", category: "WAF & PROXY", desc: "Perbandingan aturan WAF cloud vs on-premise untuk perlindungan L7." },
  { title: "Cara Melindungi API REST & GraphQL Dari Kebocoran Data", category: "API SECURITY", desc: "Penanganan celah BOLA/IDOR dan otorisasi token JWT pada titik akses API." },
  { title: "Cara Mengamankan Server Linux Ubuntu & CentOS", category: "SERVER HARDENING", desc: "Daftar konfigurasi wajib SSH, UFW firewall, fail2ban, dan penutupan port." },
  { title: "Cara Mengurangi Risiko Serangan SQL Injection Pada Aplikasi Web", category: "APP SECURITY", desc: "Penerapan prepared statements, ORM, dan sanitasi input form." },
  { title: "Checklist Cybersecurity Wajib Bagi UMKM & Startup", category: "SECURITY CHECKLIST", desc: "Panduan keamanan siber tingkat dasar hingga menengah bagi bisnis berkembang." },
  { title: "Mengenal Credential Stuffing Dan Cara Mencegah Pengambilalihan Akun", category: "IDENTITY SECURITY", desc: "Mencegah pencurian akun menggunakan daftar password bocor." },
  { title: "Cara Mendeteksi Dan Membersihkan Web Shell Di Server Web", category: "INCIDENT RESPONSE", desc: "Identifikasi backdoor script jahat dan pemulihan integritas sistem." },
  { title: "Mengenal Serangan XSS Dan Panduan Sanitasi Input", category: "APP SECURITY", desc: "Mencegah eksekusi script jahat di browser pengunjung via Content Security Policy." },
  { title: "Panduan Keamanan Siber Untuk Rumah Sakit Dan SIMRS", category: "HEALTHCARE SECURITY", desc: "Pengamanan rekam medis elektronik (RME) dan integrasi BPJS/SATUSEHAT." },
  { title: "Cara Mengamankan Sistem Informasi Sekolah Dan SIAKAD Kampus", category: "EDUCATION SECURITY", desc: "Melindungi portal akademik dan database nilai mahasiswa dari peretasan." },
  { title: "Panduan DevSecOps: Integrasi Keamanan Pada CI/CD Pipeline", category: "DEVSECOPS", desc: "Otomasi scanning celah kodingan pada setiap proses deployment software." },
  { title: "Mengapa Perusahaan Membutuhkan Multi-Factor Authentication (MFA)", category: "AUTHENTICATION", desc: "Pentingnya verifikasi 2 langkah untuk akun administratif dan server." },
  { title: "Cara Mencegah Serangan Brute Force Pada Panel Login Admin", category: "ACCESS CONTROL", desc: "Implementasi IP blocking, CAPTCHA, dan rate limiting otomatis." },
  { title: "Mengenal Zero-Day Exploit Dan Strategi Patch Management", category: "VULNERABILITY ASSESSMENT", desc: "Mitigasi celah keamanan baru yang belum memiliki patch resmi." },
  { title: "Panduan Keamanan Cloud: AWS, Google Cloud, Dan Cloudflare", category: "CLOUD SECURITY", desc: "Audit IAM roles, enkripsi storage S3, dan firewall security group." },
  { title: "Mengamankan Docker Container Dan Isolated Kubernetes Pods", category: "CONTAINER SECURITY", desc: "Hardening image Docker dan isolasi runtime container microservices." },
  { title: "Pentingnya Audit Logging Tamper-Proof Untuk Kepatuhan Hukum", category: "AUDIT LOGGING", desc: "Pencatatan log aktivitas yang tidak dapat diubah sebagai bukti forensik." },
  { title: "Cara Menghadapi Ancaman Internal (Insider Threat) Di Perusahaan", category: "HUMAN FACTOR", desc: "Pencegahan kebocoran data akibat penyalahgunaan hak akses staf internal." },
  { title: "Solusi Keamanan Website Jika Source Code Ditahan Developer Lama", category: "LEGACY RELIEF", desc: "Perhitungan perimeter WAF dan reverse proxy tanpa ubah kodingan." },
  { title: "Perbandingan DNS Protection vs Full Source Code Review", category: "METHODOLOGY", desc: "Panduan memilih metode perlindungan yang tepat sesuai anggaran." },
  { title: "Cara Mengamankan Toko Online & Payment Gateway Dari Fraud", category: "E-COMMERCE", desc: "Mencegah peretasan transaksi checkout dan pencurian token pembayaran." },
  { title: "Panduan Implementasi Role-Based Access Control (RBAC)", category: "AUTHORIZATION", desc: "Penyusunan hirarki peran pengguna untuk mencegah privilege escalation." },
  { title: "Mengapa Autentikasi Wajah (Face Auth) Lebih Aman Untuk Otorisasi", category: "BIOMETRIC", desc: "Manfaat verifikasi wajah biometrik pada transaksi berisiko tinggi." },
  { title: "Cara Menyusun Disaster Recovery Plan Untuk Mengantisipasi Peretasan", category: "DISASTER RECOVERY", desc: "Langkah taktis memulihkan server pasca insiden serangan Ransomware." },
  { title: "Mengenal Bot Attack Dan Cara Memfilter Trafik Sampah", category: "BOT MANAGEMENT", desc: "Membedakan bot mesin pencari resmi dari bot scraper jahat." },
  { title: "Pentingnya Perjanjian NDA Dalam Audit Keamanan Siber", category: "COMPLIANCE", desc: "Perlindungan hukum dan kerahasiaan penuh atas hasil temuan audit siber." },
  { title: "Memahami Akreditasi Sertifikat Digital BSrE Dan BSSN", category: "GOVERNMENT STANDARD", desc: "Pematuhan standar sertifikasi digital resmi pemerintah Republik Indonesia." },
  { title: "Panduan Lengkap Program Early Adopter Sivilize Aegis", category: "EARLY ADOPTER", desc: "Cara bergabung dan mendapatkan harga spesial perlindungan siber." },
];

export default function BlogPage() {
  return (
    <div className="page-wrapper min-h-screen flex flex-col font-sans bg-[#090d16] text-slate-300">
      <Navbar />

      <main className="flex-1 pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-400 text-xs font-mono tracking-widest uppercase block mb-2">// 30_SEO_KNOWLEDGEBASE_ARTICLES</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">Artikel & Insight Keamanan Siber</h1>
            <p className="text-slate-400 text-sm mt-4">
              30 Ide artikel dan panduan mitigasi risiko siber terstruktur untuk tim IT dan pemilik keputusan bisnis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles30.map((art, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-blue-400 block mb-2">[{String(idx + 1).padStart(2, "0")}] {art.category}</span>
                  <h3 className="text-lg font-bold text-white mb-3 uppercase leading-snug">{art.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">{art.desc}</p>
                </div>
                <span className="text-blue-400 font-mono text-xs font-bold hover:underline cursor-pointer">
                  Baca Artikel Lengkap &rarr;
                </span>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
