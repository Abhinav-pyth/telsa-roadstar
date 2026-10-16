import { motion } from 'framer-motion';
import { Car, Zap, Rocket, Shield, AlertTriangle, Info } from 'lucide-react';
import { variants } from '../data/roadster';

const variantIcons: Record<string, typeof Car> = {
  performance: Car,
  thrust: Zap,
  rocket: Rocket,
};

export default function VariantComparison() {
  return (
    <section id="variants" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Variant Comparison
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#999] max-w-2xl mx-auto"
          >
            Three reported configurations. Reservation deposits are not final purchase prices.
            Final specifications, availability, and pricing subject to change.
          </motion.p>
        </div>

        {/* Variant Image Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 rounded-xl overflow-hidden relative"
        >
          <div className="aspect-[2/1] relative">
            <img
              src="https://image.qwenlm.ai/generated-images/b958b2e1-47af-49f9-95b7-7cadebfac327/_result.png"
              alt="Illustrative concept render showing three vehicle configurations side by side — not actual product photography"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-3 h-3 rounded-full bg-blue-400 mx-auto mb-2" />
                  <p className="text-white font-semibold text-sm">Performance</p>
                  <p className="text-[#999] text-xs">Road-Ready</p>
                </div>
                <div className="text-center">
                  <div className="w-3 h-3 rounded-full bg-[#e31937] mx-auto mb-2" />
                  <p className="text-white font-semibold text-sm">Thrust</p>
                  <p className="text-[#999] text-xs">Race-Ready</p>
                </div>
                <div className="text-center">
                  <div className="w-3 h-3 rounded-full bg-purple-400 mx-auto mb-2" />
                  <p className="text-white font-semibold text-sm">Rocket</p>
                  <p className="text-[#999] text-xs">Air-Ready</p>
                </div>
              </div>
            </div>
            <span className="absolute top-4 right-4 text-[9px] text-[#555] italic bg-black/40 px-2 py-1 rounded">
              Illustrative concept — not actual product photography
            </span>
          </div>
        </motion.div>

        {/* Variant Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {variants.map((variant, index) => {
            const Icon = variantIcons[variant.id] || Car;
            return (
              <motion.div
                key={variant.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-xl overflow-hidden ${
                  variant.highlight
                    ? 'border-2 border-[#e31937]/40 shadow-lg shadow-[#e31937]/5'
                    : 'border border-white/5'
                } bg-[#141414]`}
              >
                {variant.highlight && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#e31937]" />
                )}

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      variant.highlight ? 'bg-[#e31937]/20' : 'bg-[#1a1a1a]'
                    }`}>
                      <Icon size={20} className={variant.highlight ? 'text-[#e31937]' : 'text-[#999]'} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{variant.name}</h3>
                      <span className={`text-xs ${variant.highlight ? 'text-[#e31937]' : 'text-[#666]'}`}>
                        {variant.tagline}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-start">
                      <span className="text-xs text-[#666]">Seating</span>
                      <span className="text-xs text-[#ccc] text-right">{variant.seating}</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-xs text-[#666]">Thruster Equipment</span>
                      <span className="text-xs text-[#ccc] text-right max-w-[60%]">{variant.thrusterEquipment}</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-xs text-[#666]">Intended Use</span>
                      <span className="text-xs text-[#ccc] text-right max-w-[60%]">{variant.intendedUse}</span>
                    </div>
                    <div className="border-t border-white/5 pt-3">
                      <span className="text-xs text-[#e31937] font-semibold">{variant.reservationInfo}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="border-t border-white/5 pt-4">
                    <ul className="space-y-1.5">
                      {variant.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1 h-1 rounded-full bg-[#e31937] mt-1.5 shrink-0" />
                          <span className="text-xs text-[#999]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Regulatory Caveat */}
                <div className={`px-6 py-3 border-t ${
                  variant.id === 'rocket' ? 'bg-[#e31937]/5 border-[#e31937]/20' : 'bg-[#1a1a1a]/50 border-white/5'
                }`}>
                  <div className="flex items-start gap-2">
                    {variant.id === 'rocket' ? (
                      <AlertTriangle size={12} className="text-[#e31937] mt-0.5 shrink-0" />
                    ) : (
                      <Shield size={12} className="text-[#666] mt-0.5 shrink-0" />
                    )}
                    <p className={`text-[10px] leading-relaxed ${
                      variant.id === 'rocket' ? 'text-[#e31937]' : 'text-[#666]'
                    }`}>
                      {variant.regulatoryCaveat}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-xs text-[#666] font-medium">Attribute</th>
                {variants.map((v) => (
                  <th key={v.id} className="text-center py-3 px-4 text-xs text-white font-semibold">
                    {v.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { label: 'Configuration', values: variants.map(v => v.tagline) },
                { label: 'Seating', values: variants.map(v => v.seating) },
                { label: 'Thruster Equipment', values: variants.map(v => v.thrusterEquipment) },
                { label: 'Intended Use', values: variants.map(v => v.intendedUse) },
                { label: 'Reservation', values: variants.map(v => v.reservationInfo) },
              ].map((row, i) => (
                <tr key={row.label} className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-[#141414]/30' : ''}`}>
                  <td className="py-3 px-4 text-xs text-[#999]">{row.label}</td>
                  {row.values.map((val, j) => (
                    <td key={j} className="py-3 px-4 text-xs text-[#ccc] text-center">{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex items-start gap-3 glass-card rounded-lg p-4"
        >
          <Info size={16} className="text-[#e31937] mt-0.5 shrink-0" />
          <p className="text-xs text-[#999]">
            <strong className="text-white">Disclaimer:</strong> Reservation deposits ($50,000 and $250,000) are NOT final vehicle purchase prices.
            These configurations are not certified production aircraft. The Rocket configuration's experimental flying
            functionality is not approved for public-road use. All information based on Tesla announcements and media reporting as of October 2026.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
