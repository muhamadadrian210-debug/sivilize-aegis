"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Layanan", href: "/layanan" },
    { label: "Metode", href: "/metode" },
    { label: "Tanpa Source Code", href: "/tanpa-source-code" },
    { label: "Paket & Harga", href: "/harga" },
    { label: "Ancaman", href: "/ancaman" },
    { label: "Kepatuhan", href: "/kepatuhan" },
    { label: "FAQ", href: "/faq" },
  ];

  const emergencyWaMessage = encodeURIComponent(
    "Halo Pak Briand Jivencha Therik (COO Sivilize Aegis),\n\nSaya bermaksud berkonsultasi mengenai pengajuan Security Assessment / Perlindungan Infrastruktur Siber untuk perusahaan/instansi kami.\n\nBoleh dibantu koordinasi jadwal audit awal? Terima kasih."
  );

  return (
    <>
      <style>{`
        .aegis-nav-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 16px 24px;
          display: flex;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .aegis-nav {
          width: 100%;
          max-width: 1280px;
          height: 60px;
          background: rgba(17, 24, 39, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 9999px;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7);
          transition: all 0.3s ease;
        }
        .aegis-nav--scrolled .aegis-nav {
          background: rgba(9, 13, 22, 0.95);
          border-color: rgba(37, 99, 235, 0.3);
          box-shadow: 0 20px 45px -10px rgba(37, 99, 235, 0.25);
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .shield-emblem {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          border: 1px solid rgba(59, 130, 246, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
          transition: all 0.3s ease;
        }
        .brand-logo-text {
          font-size: 1.05rem;
          font-weight: 900;
          letter-spacing: 0.5px;
          color: #ffffff;
          text-transform: uppercase;
        }
        .brand-badge {
          background: rgba(37, 99, 235, 0.15);
          color: #3b82f6;
          border: 1px solid rgba(37, 99, 235, 0.3);
          font-size: 0.6rem;
          font-weight: 800;
          padding: 2px 7px;
          border-radius: 4px;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 20px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-link-a {
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.82rem;
          font-weight: 600;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .nav-link-a:hover, .nav-link-a.active {
          color: #3b82f6;
        }
        .nav-cta {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          color: #ffffff;
          font-size: 0.78rem;
          font-weight: 800;
          padding: 9px 18px;
          border-radius: 9999px;
          text-decoration: none;
          transition: all 0.2s;
          white-space: nowrap;
          box-shadow: 0 4px 16px rgba(37, 99, 235, 0.35);
          flex-shrink: 0;
        }
        .nav-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 25px rgba(37, 99, 235, 0.5);
        }
        .nav-burger {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
          flex-direction: column;
          gap: 5px;
          padding: 5px;
        }
        .nav-burger span {
          display: block;
          width: 22px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.2s;
        }
        @media (max-width: 1100px) {
          .nav-links, .nav-cta {
            display: none;
          }
          .nav-burger {
            display: flex;
          }
        }
      `}</style>

      <div className={`aegis-nav-container ${isScrolled ? "aegis-nav--scrolled" : ""}`}>
        <nav className="aegis-nav">
          <Link href="/" className="brand-logo" aria-label="Sivilize Aegis Home">
            <div className="shield-emblem">
              <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 3L4 7V16C4 23.5 9.5 29 16 31C22.5 29 28 23.5 28 16V7L16 3Z" stroke="url(#aegis_shield_grad)" strokeWidth="2.5" strokeLinejoin="round" />
                <path d="M16 8L22 11V16C22 20.5 19 24.5 16 26C13 24.5 10 20.5 10 16V11L16 8Z" fill="url(#aegis_shield_inner)" opacity="0.85" />
                <path d="M16 12V20M12 16H20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                <defs>
                  <linearGradient id="aegis_shield_grad" x1="4" y1="3" x2="28" y2="31" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#60A5FA" />
                    <stop offset="0.5" stopColor="#2563EB" />
                    <stop offset="1" stopColor="#06B6D4" />
                  </linearGradient>
                  <linearGradient id="aegis_shield_inner" x1="10" y1="8" x2="22" y2="26" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3B82F6" />
                    <stop offset="1" stopColor="#1D4ED8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            <span className="brand-logo-text">Sivilize<span style={{ color: "#3b82f6" }}>Aegis</span></span>
            <span className="brand-badge">CYBERSECURITY</span>
          </Link>
          
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className={`nav-link-a ${pathname === item.href ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <a 
            href={`https://wa.me/6285137743321?text=${emergencyWaMessage}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-cta"
          >
            🛡️ Security Assessment (COO WA)
          </a>

          <button className="nav-burger" aria-label="Menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span style={{ transform: mobileMenuOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
            <span style={{ opacity: mobileMenuOpen ? 0 : 1 }} />
            <span style={{ transform: mobileMenuOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{ position: "fixed", inset: "0", zIndex: "999", background: "#090d16", paddingTop: "100px", paddingLeft: "30px", paddingRight: "30px", display: "flex", flexDirection: "column", gap: "16px", overflowY: "auto" }}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: pathname === item.href ? "#3b82f6" : "#fff", fontSize: "0.95rem", textDecoration: "none", fontWeight: 700, borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "8px" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: pathname === "/blog" ? "#3b82f6" : "#fff", fontSize: "0.95rem", textDecoration: "none", fontWeight: 700, borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "8px" }}
          >
            Blog
          </Link>
          <Link
            href="/kontak"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: pathname === "/kontak" ? "#3b82f6" : "#fff", fontSize: "0.95rem", textDecoration: "none", fontWeight: 700, borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "8px" }}
          >
            Kontak
          </Link>
          <a
            href={`https://wa.me/6285137743321?text=${emergencyWaMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            style={{ background: "#2563eb", color: "#ffffff", fontSize: "0.9rem", fontWeight: 800, padding: "14px", borderRadius: "12px", textDecoration: "none", textAlign: "center", marginTop: "10px" }}
          >
            🛡️ Konsultasi Keamanan Direct COO (+62 851-3774-3321)
          </a>
        </div>
      )}
    </>
  );
}
