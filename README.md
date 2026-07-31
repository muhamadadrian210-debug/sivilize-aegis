# 🛡️ Sivilize Aegis — Next-Gen Web Protection & Ecosystem Security

> **PT Sivilize Corp Indonesia** — Enterprise-Grade Web Application Protection, Reverse Proxy & SDK Ecosystem.

## 🚀 Overview
**Sivilize Aegis** adalah produk Security-as-a-Service (SaaS) mandiri dari ekosistem Sivilize Corp. Aegis memungkinkan bisnis, toko online, sekolah, dan instansi untuk mengamankan sistem mereka tanpa membuat ulang dari nol.

## 🌟 Mode Integrasi
1. **Mode 1: Aegis Shield (DNS Reverse Proxy)**
   - Cukup ubah DNS / A Record domain ke IP Proxy Aegis.
   - Tanpa akses source code, tanpa instalasi software.
   - Melindungi dari DDoS, bot spam, & serangan IP jahat.
2. **Mode 2: Aegis Core (JavaScript SDK & API)**
   - Tempel 1 baris kode `<script src="https://aegis.sivilize.id/sdk.js" data-key="YOUR_KEY"></script>`.
   - Mengaktifkan audit log aktivitas user, proteksi brute-force login, dan notifikasi otomatis WhatsApp.

## 📦 Struktur Proyek
- `src/app/page.tsx`: Landing Page Resmi Sivilize Aegis (Desain Cyber Security Dark-Mode).
- `src/components/AegisSimulator.tsx`: Live Interactive Simulator penangkalan serangan secara real-time.
- `src/components/DashboardPreview.tsx`: Simulasi Client Portal Dashboard (Analytics, IP Lock, Alert WhatsApp, API Key).
- `public/sdk.js`: Lightweight JavaScript SDK Client script.

## ⚙️ Cara Menjalankan (Development)
```bash
npm install
npm run dev
```
Aplikasi akan berjalan di `http://localhost:3000`.

## 🌐 Cara Deploy ke Hosting / Vercel
1. Upload folder `sivilize-aegis` ini ke GitHub / Git Repository tersendiri.
2. Hubungkan ke Vercel / Cloud Provider (Netlify, VPS, cPanel Node.js app).
3. Set domain / subdomain (contoh: `aegis.sivilize.id` atau `aegis.sivilizecorp.my.id`).
