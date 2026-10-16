import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, Gauge, Zap, Battery, Timer } from 'lucide-react';
import { specifications } from '../data/roadster';

const specIcons: Record<string, typeof Gauge> = {
  Vehicle: Zap,
  Propulsion: Zap,
  'Acceleration (0–60 mph)': Timer,
  'Top Speed': Gauge,
  Range: Battery,
  Demonstration: Zap,
  'Production Target': Timer,
  'Final Retail Price': Gauge,
};

export default function Specifications() {
  return (
    <section id="specifications" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Specifications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#999] max-w-2xl mx-auto"
          >
            Reported specifications from the October 2026 reveal. Performance claims are
            Tesla-announced or media-reported — independently unverified unless noted.
          </motion.p>
        </div>

        {/* Visual Element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 rounded-xl overflow-hidden relative aspect-[21/9]"
        >
          <img
            src="https://image.qwenlm.ai/generated-images/e9a2f75d-2492-46ef-9905-ece726c35961/_result.png"
            alt="Illustrative concept render of a futuristic electric sports car — specifications shown are reported figures, not verified measurements"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/40 to-[#0a0a0a]/90" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-[#e31937] text-xs font-mono uppercase tracking-widest mb-2">Reported Specifications</p>
              <p className="text-white text-2xl sm:text-3xl font-bold">&lt; 1s 0-60 mph</p>
              <p className="text-[#999] text-sm mt-1">Claimed for enhanced configuration</p>
            </div>
          </div>
          <span className="absolute bottom-3 right-3 text-[9px] text-[#555] italic bg-black/40 px-2 py-1 rounded">
            Illustrative concept — not actual vehicle
          </span>
        </motion.div>

        {/* Spec Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {specifications.map((spec, index) => {
            const Icon = specIcons[spec.label] || Gauge;
            return (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="spec-card"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-md bg-[#e31937]/10 flex items-center justify-center">
                    <Icon size={16} className="text-[#e31937]" />
                  </div>
                  <div className="flex items-center gap-1">
                    {spec.verified ? (
                      <CheckCircle size={12} className="text-green-400" />
                    ) : (
                      <AlertTriangle size={12} className="text-amber-400" />
                    )}
                    <span className={`text-[10px] ${spec.verified ? 'text-green-400' : 'text-amber-400'}`}>
                      {spec.verified ? 'Confirmed' : 'Unverified'}
                    </span>
                  </div>
                </div>
                <h3 className="text-xs text-[#666] uppercase tracking-wider mb-1">{spec.label}</h3>
                <p className="text-white font-semibold text-sm mb-1">{spec.value}</p>
                {spec.metric && (
                  <p className="text-[#e31937] text-xs font-mono mb-2">{spec.metric}</p>
                )}
                <p className="text-[10px] text-[#555] mt-2 border-t border-white/5 pt-2">
                  {spec.source}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap items-center gap-6 justify-center"
        >
          <div className="flex items-center gap-2">
            <CheckCircle size={14} className="text-green-400" />
            <span className="text-xs text-[#999]">Confirmed / Observed</span>
          </div>
          <div className="flex items-center gap-2">
            <AlertTriangle size={14} className="text-amber-400" />
            <span className="text-xs text-[#999]">Tesla claim or media report — independently unverified</span>
          </div>
        </motion.div>

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 glass-card rounded-lg p-5 text-center"
        >
          <p className="text-xs text-[#999]">
            <strong className="text-white">Note:</strong> These figures are from the October 2026 redesigned Roadster reveal.
            They are distinct from the original 2017 Roadster announcement specifications.
            Performance claims have not been independently tested or verified.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
