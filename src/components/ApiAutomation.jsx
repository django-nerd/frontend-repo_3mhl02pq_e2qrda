import React from 'react';
import { Braces, Shield, FileDown, Mail, Zap } from 'lucide-react';

const Step = ({ icon: Icon, title, desc }) => (
  <div className="relative flex flex-col items-center text-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
    <div className="p-3 rounded-xl bg-emerald-400/10 border border-emerald-400/20">
      <Icon className="w-6 h-6 text-emerald-400" />
    </div>
    <div className="text-white font-medium">{title}</div>
    <div className="text-white/70 text-sm">{desc}</div>
  </div>
);

export default function ApiAutomation() {
  return (
    <section id="api" className="relative py-20 bg-[#0B0B0C]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_250px_at_50%_-10%,rgba(0,255,153,0.2),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-white">Automate Beautifully.</h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Generate beautiful branded invoices through our powerful PDF API. Perfect for apps, CRMs, and automated billing systems.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
          <Step icon={Braces} title="JSON" desc="Your data" />
          <Step icon={Shield} title="Secure API" desc="Encrypted in transit" />
          <Step icon={FileDown} title="PDF" desc="Rendered perfectly" />
          <Step icon={Mail} title="Deliver" desc="Email/WhatsApp" />
          <Step icon={Zap} title="Automate" desc="Webhooks & flows" />
        </div>

        <div className="mt-10 flex items-center justify-center">
          <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/5 border border-white/15 text-white hover:bg-white/10 transition">
            View API Docs
          </a>
        </div>
      </div>
    </section>
  );
}
