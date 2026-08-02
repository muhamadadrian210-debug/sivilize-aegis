"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const servicesList = [
  { title: "Website Protection", scope: "WAF & Reverse Proxy Shield", desc: "Perhitungan lalu lintas data dan pemblokiran otomatis terhadap serangan cyber di layer web." },
  { title: "Web Application Security", scope: "Code & Logic Vulnerability", desc: "Audit keamanan aplikasi web dari celah OWASP Top 10 seperti RCE, LFI, & SSRF." },
  { title: "API Security", scope: "REST & GraphQL Protection", desc: "Pengamanan titik akses API dari manipulasi token, BOLA/IDOR, dan pencurian data." },
  { title: "Cloud Security", scope: "AWS / GCP / Cloudflare", desc: "Hardening konfigurasi cloud server, IAM roles, dan enkripsi data penyimpanan." },
  { title: "Server Hardening", scope: "Linux & Windows OS", desc: "Penutupan port tidak terpakai, konfigurasi SSH keys, firewall OS, dan patch keamanan." },
  { title: "Firewall Configuration", scope: "Network Layer Protection", desc: "Penyusunan aturan ingress/egress firewall jaringan untuk mencegah akses tanpa izin." },
  { title: "WAF (Web Application Firewall)", scope: "L7 Rules & Bot Management", desc: "Aturan kustom WAF untuk memfilter request berbahaya secara real-time." },
  { title: "DDoS Mitigation", scope: "Layer 3, 4, & 7 Defense", desc: "Mitigasi banjir trafik data besar agar server utama tetap online tanpa gangguan." },
  { title: "Vulnerability Assessment", scope: "Scanning & Risk Identification", desc: "Pemindaian celah keamanan berkala untuk menemukan kelemahan sebelum dieksploitasi." },
  { title: "Security Assessment", scope: "Full Infrastructure Audit", desc: "Evaluasi menyeluruh arsitektur siber organisasi berdasarkan standar ISO 27001." },
  { title: "Secure Configuration Review", scope: "Config & Environment Hardening", desc: "Review file konfigurasi server, database, dan environment agar bebas dari kebocoran key." },
  { title: "Authentication Review", scope: "Session & Password Vault", desc: "Audit keandalan alur login, mekanisme hashing password, dan proteksi JWT session." },
  { title: "Authorization Review", scope: "Privilege Escalation Defense", desc: "Memastikan pengguna tidak dapat mengakses data atau fitur di luar hak aksesnya." },
  { title: "Identity Security & RBAC", scope: "Role-Based Access Control", desc: "Penerapan hirarki peran pengguna yang ketat di seluruh modul aplikasi perusahaan." },
  { title: "Multi-Factor Authentication (MFA)", scope: "2FA / TOTP Integration", desc: "Implementasi verifikasi 2 langkah untuk akun administratif dan akses sensitif." },
  { title: "Face Authentication Integration", scope: "Biometric Identity Verification", desc: "Integrasi sistem autentikasi wajah biometric untuk otorisasi tingkat tinggi." },
  { title: "Audit Logging", scope: "Tamper-Proof Activity Logs", desc: "Pencatatan jejak aktivitas pengguna dan sistem yang tidak dapat diubah (immutable logs)." },
  { title: "Security Monitoring", scope: "Real-Time Threat Detection", desc: "Pemantauan berkala log server untuk mendeteksi anomali akses mencurigakan." },
  { title: "Incident Response Assistance", scope: "Emergency Mitigation", desc: "Pendampingan darurat saat terjadi peretasan untuk mengisolasi dan memulihkan sistem." },
  { title: "Malware Analysis & Cleanup", scope: "Web Shell & Script Extraction", desc: "Pembersihan script jahat (web shell/backdoor) dan pemulihan integritas sistem." },
  { title: "Backup Strategy Review", scope: "Disaster Recovery Plan", desc: "Penyusunan strategi backup otomatis off-site untuk mengantisipasi serangan Ransomware." },
  { title: "Container & Docker Security", scope: "Image Hardening & Isolation", desc: "Audit keamanan image Docker, Kubernetes pod isolation, dan container runtime." },
  { title: "DevSecOps Consultation", scope: "CI/CD Pipeline Security", desc: "Integrasi pengujian keamanan otomatis ke dalam alur pengembangan perangkat lunak." },
  { title: "Security Awareness Consultation", scope: "Human Factor & Phishing", desc: "Edukasi staf dan manajemen mengenai pencegahan kejahatan Social Engineering & Phishing." },
];

export default function LayananPage() {
  return (
    <div className="page-wrapper min-h-screen flex flex-col font-sans bg-[#090d16] text-slate-300">
      <Navbar />

      <main className="flex-1 pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-400 text-xs font-mono tracking-widest uppercase block mb-2">// SERVICES_SCOPE</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">Cakupan Layanan Keamanan Siber</h1>
            <p className="text-slate-400 text-sm mt-4">
              24+ Lingkup perlindungan keamanan digital terstandarisasi untuk melindungi aset kritis organisasi Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((srv, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-blue-400 block mb-1">[{String(idx + 1).padStart(2, "0")}] {srv.scope}</span>
                  <h3 className="text-lg font-bold text-white mb-2 uppercase">{srv.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">{srv.desc}</p>
                </div>
                <a
                  href={`https://wa.me/6285137743321?text=${encodeURIComponent(`Halo Pak Briand (COO Sivilize Aegis),\nSaya ingin konsultasi mengenai layanan *${srv.title}* untuk perusahaan kami.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 font-mono text-xs font-bold hover:underline"
                >
                  Konsultasi Scope Ini &rarr;
                </a>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
