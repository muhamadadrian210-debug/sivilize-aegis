"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, Smartphone, Menu, X, CheckCircle2 } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/simulasi", label: "Simulasi Live" },
    { href: "/mode-integrasi", label: "Mode Integrasi" },
    { href: "/fitur", label: "Fitur Proteksi" },
    { href: "/harga", label: "Harga & Paket" },
    { href: "/compliance", label: "SLA & Legal" },
    { href: "/faq", label: "FAQ" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#05070c]/90 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0a0e17] rounded-[11px] flex items-center justify-center text-cyan-400">
              <Shield className="w-5 h-5 fill-cyan-400/20" />
            </div>
          </div>
          <div>
            <span className="text-lg font-black tracking-tight text-white flex items-center gap-1">
              SIVILIZE <span className="text-cyan-400">AEGIS</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono block -mt-1">By PT Sivilize Corp Indonesia</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-medium">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors py-1 ${
                  active
                    ? "text-cyan-400 font-bold border-b-2 border-cyan-400"
                    : "text-slate-300 hover:text-cyan-400"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/6281234567890?text=Halo%20Sivilize%20Aegis,%20saya%20tertarik%20konsultasi%20keamanan%20website"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-bold transition flex items-center gap-2"
          >
            <Smartphone className="w-4 h-4" /> Konsultasi WA
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0e17] border-b border-slate-800 px-6 py-4 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-sm font-medium ${
                isActive(link.href) ? "text-cyan-400 font-bold" : "text-slate-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/6281234567890?text=Halo%20Sivilize%20Aegis,%20saya%20tertarik%20konsultasi%20keamanan%20website"
            target="_blank"
            rel="noreferrer"
            className="w-full py-3 rounded-xl bg-cyan-400 text-black font-extrabold text-xs text-center block mt-2"
          >
            Konsultasi via WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
