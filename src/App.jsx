import React from 'react';
import Hero from './components/Hero';
import DesignerSection from './components/DesignerSection';
import ApiAutomation from './components/ApiAutomation';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] font-sans">
      {/* Top nav */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0B0B0C]/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-[0_0_30px_rgba(16,185,129,0.6)]" />
            <span className="text-white font-semibold tracking-tight">NoloPDF</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-white/70">
            <a href="#designer" className="hover:text-white transition">Designer</a>
            <a href="#api" className="hover:text-white transition">API</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#" className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition">Sign In</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <DesignerSection />
        <ApiAutomation />
        <Pricing />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0B0B0C]">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center text-white/60 text-sm">
          <div>© 2025 NoloPDF — Designed with 💚 in India</div>
          <div className="mt-2">Powered by AWS | AES-256 Encrypted | GDPR Compliant</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
