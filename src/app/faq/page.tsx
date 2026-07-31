"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "Apakah saya harus membongkar atau membuat ulang website lama saya?",
      a: "Sama sekali tidak. Aegis dirancang khusus untuk melindungi website atau aplikasi yang sudah berjalan (WordPress, Custom PHP, Laravel, Node.js). Cukup ubah DNS (Mode Shield) atau tempel 1 baris kode script (Mode Core)."
    },
    {
      q: "Bagaimana jika vendor pembuatan website lama memegang source code kami?",
      a: "Anda tetap dapat menggunakan Aegis Mode 1 (Aegis Shield DNS Proxy). Anda hanya perlu mengubah DNS Record di panel registrasi domain tanpa membutuhkan izin atau akses source code dari vendor lama."
    },
    {
      q: "Apakah PT Sivilize Corp Indonesia melayani penerbitan MoU & Faktur Pajak?",
      a: "Ya. PT Sivilize Corp Indonesia adalah entitas PT resmi. Kami melayani penerbitan MoU, kontrak SLA, invoice resmi, dan Faktur Pajak untuk keperluan sekolah, universitas, maupun BUMN."
    },
    {
      q: "Apa yang terjadi jika masa langganan bulanan berakhir?",
      a: "Sistem memberikan masa tenggang 7 hari disertai notifikasi WhatsApp. Jika tidak diperpanjang, proteksi akan dinonaktifkan secara aman dan trafik dikembalikan ke server asal tanpa merusak data Anda."
    },
    {
      q: "Berapa lama proses pemasangan Sivilize Aegis?",
      a: "Proses integrasi Mode 1 (DNS Reverse Proxy) memakan waktu 5-15 menit (propagasi DNS). Untuk Mode 2 (JS SDK), hanya butuh waktu 1 menit menyalin 1 baris kode ke bagian header website Anda."
    },
    {
      q: "Apakah Sivilize Aegis memperlambat kecepatan loading website saya?",
      a: "Tidak. Server Proxy Aegis menggunakan teknologi Edge Computing ultra-cepat dengan latency di bawah 15ms. Bahkan dalam banyak kasus, website Anda terasa lebih cepat karena ancaman bot dan scraping otomatis disaring di luar server utama Anda."
    }
  ];

  return (
    <div className="min-h-screen bg-[#05070c] text-slate-100 bg-grid-cyber relative overflow-hidden font-sans">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16 space-y-10">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" /> FREQUENTLY ASKED QUESTIONS
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            Pertanyaan Sering Diajukan
          </h1>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
            Segala hal yang perlu Anda ketahui mengenai Sivilize Aegis dan layanan PT Sivilize Corp Indonesia.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="border border-slate-800 rounded-xl bg-[#0a0e17] overflow-hidden transition">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-white hover:text-cyan-400 transition"
              >
                <span>{item.q}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === idx ? "rotate-180 text-cyan-400" : ""}`} />
              </button>

              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
