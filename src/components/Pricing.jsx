import React from 'react';
import { Coins } from 'lucide-react';

const Tier = ({ name, coins, support, price, featured }) => (
  <div className={`relative rounded-2xl p-6 border backdrop-blur-xl transition transform hover:-translate-y-1 ${
    featured
      ? 'bg-gradient-to-b from-emerald-400/15 to-white/5 border-emerald-400/30 shadow-[0_0_60px_rgba(16,185,129,0.25)]'
      : 'bg-white/5 border-white/10'
  }`}>
    <div className="flex items-center justify-between">
      <h3 className="text-white text-xl font-semibold">{name}</h3>
      <Coins className="w-5 h-5 text-emerald-400" />
    </div>
    <div className="mt-4 flex items-baseline gap-2">
      <div className="text-3xl font-semibold text-emerald-400">{coins}</div>
      <div className="text-white/60">coins</div>
    </div>
    <ul className="mt-6 space-y-2 text-sm text-white/80">
      <li>Support: <span className="text-white/60">{support}</span></li>
      <li>Price: <span className="text-white/60">{price}</span></li>
      <li>No expiry. Use as API credits.</li>
    </ul>
    <button className={`mt-8 w-full py-3 rounded-xl font-medium transition ${
      featured ? 'bg-emerald-400 text-black hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]' : 'bg-white/5 text-white hover:bg-white/10'
    }`}>
      Get Started
    </button>

    {/* Coin stack animation */}
    <div className="absolute -right-3 -bottom-3 opacity-70">
      <div className="relative">
        <div className="w-8 h-8 rounded-full bg-emerald-400/30 blur-sm" />
        <div className="absolute inset-0 flex flex-col items-center gap-1">
          <div className="w-6 h-1.5 rounded-full bg-emerald-400/80 animate-bounce" style={{ animationDuration: '1.6s' }} />
          <div className="w-6 h-1.5 rounded-full bg-emerald-400/60 animate-bounce" style={{ animationDuration: '1.8s' }} />
          <div className="w-6 h-1.5 rounded-full bg-emerald-400/40 animate-bounce" style={{ animationDuration: '2s' }} />
        </div>
      </div>
    </div>
  </div>
);

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 bg-[#0B0B0C]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_50%_-10%,rgba(16,185,129,0.16),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-white">Simple, coin-based pricing</h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">Buy coins. Use them as API credits. No expiry. No surprise billing.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Tier name="Starter" coins="200" support="Billing only" price="₹—" />
          <Tier name="Pro" coins="1000" support="Technical support" price="₹—" featured />
          <Tier name="Enterprise" coins="3000" support="In-person support" price="₹—" />
        </div>
      </div>
    </section>
  );
}
