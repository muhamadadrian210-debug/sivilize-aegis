import Link from "next/link";

export function Footer() {
  const footerWaMessage = encodeURIComponent(
    "Halo Pak Briand Jivencha Therik (COO Sivilize Aegis),\n\nSaya ingin mengajukan konsultasi / audit keamanan siber infrastruktur digital PT Sivilize Corp Indonesia.\n\nBoleh dibantu koordinasinya? Terima kasih."
  );

  return (
    <>
      <style>{`
        .aegis-footer {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: #090d16;
          padding: 80px 24px 40px;
          position: relative;
          z-index: 10;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr repeat(4, 1fr);
          gap: 40px;
          margin-bottom: 60px;
        }
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .footer-logo-title {
          font-size: 1.2rem;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .footer-logo-emblem {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          border: 1px solid rgba(59, 130, 246, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .footer-tagline {
          font-size: 0.82rem;
          line-height: 1.65;
          color: #64748b;
          margin: 0;
          max-width: 300px;
        }
        .footer-col-title {
          font-size: 0.72rem;
          font-weight: 800;
          color: #f1f5f9;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-links li {
          margin-bottom: 12px;
        }
        .footer-link-a {
          color: #64748b;
          text-decoration: none;
          font-size: 0.8rem;
          transition: color 0.2s;
        }
        .footer-link-a:hover {
          color: #3b82f6;
        }
        .footer-legal-bar {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 30px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .footer-legal-text {
          font-size: 0.72rem;
          line-height: 1.65;
          color: #475569;
          margin: 0;
        }
        .footer-bottom-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
          color: #475569;
          margin-top: 10px;
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-bottom-row {
            flex-direction: column;
            gap: 8px;
            align-items: flex-start;
          }
        }
      `}</style>
      <footer className="aegis-footer">
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <Link href="/" style={{ textDecoration: "none" }}>
                <span className="footer-logo-title">
                  <div className="footer-logo-emblem">
                    <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 3L4 7V16C4 23.5 9.5 29 16 31C22.5 29 28 23.5 28 16V7L16 3Z" stroke="#3B82F6" strokeWidth="2.5" strokeLinejoin="round" />
                      <path d="M16 8L22 11V16C22 20.5 19 24.5 16 26C13 24.5 10 20.5 10 16V11L16 8Z" fill="#2563EB" opacity="0.85" />
                    </svg>
                  </div>
                  Sivilize<span style={{ color: "#3b82f6" }}>Aegis</span>
                </span>
              </Link>
              <p className="footer-tagline">
                Divisi Keamanan Siber Enterprise & System Hardening di Bawah Naungan PT Sivilize Corp Indonesia.
              </p>
              <div style={{ fontSize: "0.75rem", color: "#94a3b8", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "12px" }}>
                <strong>Executive Operational Contact:</strong><br />
                Briand Jivencha Therik — Chief Operating Officer (COO)<br />
                💬 <a href={`https://wa.me/6285137743321?text=${footerWaMessage}`} target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6", fontWeight: 700 }}>+62 851-3774-3321</a>
              </div>
            </div>
            
            {/* Col 1 */}
            <div>
              <h4 className="footer-col-title">Perlindungan</h4>
              <ul className="footer-links">
                <li><Link href="/layanan" className="footer-link-a">Web & API Security</Link></li>
                <li><Link href="/layanan" className="footer-link-a">DDoS & WAF Protection</Link></li>
                <li><Link href="/layanan" className="footer-link-a">Cloud Server Hardening</Link></li>
                <li><Link href="/layanan" className="footer-link-a">Identity & RBAC Review</Link></li>
                <li><Link href="/layanan" className="footer-link-a">DevSecOps Consultation</Link></li>
              </ul>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="footer-col-title">Metode & Solusi</h4>
              <ul className="footer-links">
                <li><Link href="/metode" className="footer-link-a">Metode 1: DNS & Proxy</Link></li>
                <li><Link href="/metode" className="footer-link-a">Metode 2: Source Code Review</Link></li>
                <li><Link href="/tanpa-source-code" className="footer-link-a">Tanpa Source Code Relief</Link></li>
                <li><Link href="/ancaman" className="footer-link-a">Edukasi Ancaman Bisnis</Link></li>
                <li><Link href="/harga" className="footer-link-a">Paket & Enterprise SLA</Link></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="footer-col-title">Perusahaan</h4>
              <ul className="footer-links">
                <li><Link href="/kepatuhan" className="footer-link-a">Badan Hukum PT Sivilize Corp</Link></li>
                <li><Link href="/kepatuhan" className="footer-link-a">BSrE & BSSN Digital Cert</Link></li>
                <li><Link href="/blog" className="footer-link-a">Artikel Keamanan Siber</Link></li>
                <li><Link href="/faq" className="footer-link-a">20+ Security FAQ</Link></li>
                <li><Link href="/kontak" className="footer-link-a">Form Audit Incident</Link></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="footer-col-title">Legal & Compliance</h4>
              <ul className="footer-links">
                <li><Link href="/kepatuhan" className="footer-link-a">NIB: 0207260103661</Link></li>
                <li><Link href="/kepatuhan" className="footer-link-a">KBLI 62199 Pemrograman</Link></li>
                <li><Link href="/kepatuhan" className="footer-link-a">Risiko Assessment NDA</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-legal-bar">
            <p className="footer-legal-text">
              <strong>SIVILIZE AEGIS</strong> — Divisi Keamanan Siber Milik <strong>PT SIVILIZE CORP INDONESIA</strong>. Terdaftar Sah di Kemenkumham RI.
              <br />
              NIB: 0207260103661 | NPWP: 1000 0000 1032 4212 | KBLI: 62199 (Aktivitas Pemrograman Komputer Lainnya).
              <br />
              Sertifikat Digital Resmi dari Balai Sertifikasi Elektronik (BSrE) & Badan Siber dan Sandi Negara (BSSN).
            </p>
            
            <div className="footer-bottom-row">
              <span>© {new Date().getFullYear()} Sivilize Aegis x PT Sivilize Corp Indonesia. All Rights Reserved.</span>
              <span>Protected by Enterprise Security Standards in Indonesia 🇮🇩</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
