import React from 'react';
import { PencilRuler, Type, Image as ImageIcon, Palette, Table, Play } from 'lucide-react';

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="group relative rounded-2xl p-5 bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/7.5 transition">
    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-emerald-400/10 border border-emerald-400/20">
        <Icon className="w-5 h-5 text-emerald-400" />
      </div>
      <h4 className="text-white font-medium">{title}</h4>
    </div>
    <p className="mt-3 text-sm text-white/70">{desc}</p>
    <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition shadow-[0_0_40px_10px_rgba(16,185,129,0.15)]" />
  </div>
);

export default function DesignerSection() {
  return (
    <section id="designer" className="relative py-20 bg-[#0B0B0C]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_50%_-10%,rgba(16,185,129,0.18),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-white">
            Your Brand. Your Style. Every Time.
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            A no-code invoice designer that lets your brand shine — no templates, just freedom.
          </p>
        </div>

        {/* Visual mock of editor */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 overflow-hidden">
            <div className="flex items-center justify-between text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              </div>
              <span className="uppercase tracking-wider text-xs">Live Preview</span>
            </div>
            <div className="mt-4 grid grid-cols-12 gap-4">
              <div className="col-span-4 space-y-3">
                <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-black/30 border border-white/10">
                  <div className="flex items-center gap-2 text-white/80 text-sm"><Type className="w-4 h-4" /> Typography</div>
                  <button className="text-emerald-400 text-xs">Edit</button>
                </div>
                <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-black/30 border border-white/10">
                  <div className="flex items-center gap-2 text-white/80 text-sm"><Palette className="w-4 h-4" /> Colors</div>
                  <button className="text-emerald-400 text-xs">Pick</button>
                </div>
                <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-black/30 border border-white/10">
                  <div className="flex items-center gap-2 text-white/80 text-sm"><ImageIcon className="w-4 h-4" /> Logo</div>
                  <button className="text-emerald-400 text-xs">Upload</button>
                </div>
                <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-black/30 border border-white/10">
                  <div className="flex items-center gap-2 text-white/80 text-sm"><Table className="w-4 h-4" /> Add Table</div>
                  <button className="text-emerald-400 text-xs">Add</button>
                </div>
              </div>
              <div className="col-span-8">
                <div className="rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-semibold tracking-tight">INVOICE</div>
                    <div className="text-right">
                      <div className="text-sm text-white/60">Invoice #</div>
                      <div className="font-medium">INV-10293</div>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-6 text-sm">
                    <div>
                      <div className="text-white/60">Bill To</div>
                      <div className="font-medium">Acme, Inc.</div>
                      <div className="text-white/60">billing@acme.com</div>
                    </div>
                    <div className="text-right">
                      <div className="text-white/60">Amount Due</div>
                      <div className="text-2xl font-semibold text-emerald-400">₹ 49,500</div>
                    </div>
                  </div>
                  <div className="mt-6 overflow-hidden rounded-lg border border-white/10">
                    <table className="w-full text-sm">
                      <thead className="bg-black/30">
                        <tr className="text-left text-white/70">
                          <th className="px-4 py-2">Item</th>
                          <th className="px-4 py-2">Qty</th>
                          <th className="px-4 py-2">Price</th>
                          <th className="px-4 py-2 text-right">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-white/10">
                          <td className="px-4 py-2">Design Services</td>
                          <td className="px-4 py-2">10</td>
                          <td className="px-4 py-2">₹ 3,500</td>
                          <td className="px-4 py-2 text-right">₹ 35,000</td>
                        </tr>
                        <tr className="border-t border-white/10">
                          <td className="px-4 py-2">Development</td>
                          <td className="px-4 py-2">4</td>
                          <td className="px-4 py-2">₹ 3,625</td>
                          <td className="px-4 py-2 text-right">₹ 14,500</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Feature icon={PencilRuler} title="Drag & drop editor" desc="Craft layouts with pixel-perfect control and instant feedback." />
            <Feature icon={Palette} title="Brand colors & typography" desc="Match your brand system with custom palettes and font stacks." />
            <Feature icon={Table} title="Auto-calculations" desc="Placeholders and totals update as you type — no spreadsheets." />
            <Feature icon={Play} title="Instant live preview" desc="See exactly what your clients will receive, in real-time." />
          </div>
        </div>
      </div>
    </section>
  );
}
