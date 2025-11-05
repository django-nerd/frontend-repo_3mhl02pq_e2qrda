import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, Cloud, EyeOff } from 'lucide-react';

const Badge = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/80 text-xs">
    <Icon className="w-4 h-4 text-emerald-400" />
    <span>{label}</span>
  </div>
);

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0B0B0C]">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient glow overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0B0C]/20 to-[#0B0B0C]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 text-xs mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>NoloPDF — Futuristic Invoice Platform</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
          Transform Your Invoices Into
          <span className="block bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text text-transparent">Brand Statements.</span>
        </h1>

        <p className="mt-5 text-base md:text-lg text-white/70 max-w-3xl mx-auto">
          Design invoices that reflect your brand’s personality — and automate them instantly with our API.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#designer"
            className="group inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-400 text-black font-medium shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:shadow-[0_0_40px_rgba(16,185,129,0.8)] transition-shadow"
          >
            Try Designer Free
          </a>
          <a
            href="#api"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/15 text-white/90 hover:bg-white/5 transition"
          >
            Explore API
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Badge icon={Shield} label="Bank-Level Encryption" />
          <Badge icon={Cloud} label="Powered by AWS" />
          <Badge icon={EyeOff} label="No Data Retention" />
        </div>
      </div>
    </section>
  );
}
