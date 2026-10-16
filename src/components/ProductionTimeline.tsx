import { motion } from 'framer-motion';
import { Calendar, Clock, AlertTriangle, CheckCircle } from 'lucide-react';
import { productionTimeline } from '../data/roadster';

const typeStyles: Record<string, { bg: string; text: string; icon: typeof Calendar }> = {
  announcement: { bg: 'bg-blue-500/10', text: 'text-blue-400', icon: Calendar },
  delay: { bg: 'bg-amber-500/10', text: 'text-amber-400', icon: Clock },
  milestone: { bg: 'bg-[#e31937]/10', text: 'text-[#e31937]', icon: CheckCircle },
  target: { bg: 'bg-purple-500/10', text: 'text-purple-400', icon: AlertTriangle },
};

export default function ProductionTimeline() {
  return (
    <section className="py-24 section-gradient">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Production Timeline
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#999] max-w-2xl mx-auto"
          >
            From original announcement to the October 2026 demonstration and beyond.
            Future dates are targets, not guarantees.
          </motion.p>
        </div>

        {/* Production Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 rounded-xl overflow-hidden relative aspect-[21/9]"
        >
          <img
            src="https://image.qwenlm.ai/generated-images/11c5abe3-8b32-48fb-a4dd-6c971b6e4051/_result.png"
            alt="Illustrative concept of advanced automotive manufacturing — not actual Tesla factory photograph"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <p className="text-[#e31937] text-xs font-mono uppercase tracking-widest mb-2">Production Target</p>
              <p className="text-white text-3xl sm:text-4xl font-bold">2028</p>
              <p className="text-[#999] text-sm mt-2 max-w-md mx-auto">
                Target date for customer deliveries — subject to change based on production readiness
              </p>
            </div>
          </div>
          <span className="absolute bottom-3 right-3 text-[9px] text-[#555] italic bg-black/40 px-2 py-1 rounded">
            Illustrative concept — not actual factory
          </span>
        </motion.div>

        {/* Horizontal Timeline (Desktop) */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/30 via-[#e31937]/30 to-purple-500/30" />
            
            {/* Items */}
            <div className="grid grid-cols-4 gap-4">
              {productionTimeline.map((item, index) => {
                const style = typeStyles[item.type];
                const Icon = style.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="relative text-center"
                  >
                    {/* Dot */}
                    <div className={`w-16 h-16 rounded-full ${style.bg} flex items-center justify-center mx-auto mb-4 relative z-10 border-2 border-[#1a1a1a]`}>
                      <Icon size={24} className={style.text} />
                    </div>
                    {/* Year */}
                    <p className={`text-xs font-mono font-bold ${style.text} mb-1`}>{item.year}</p>
                    {/* Title */}
                    <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                    {/* Description */}
                    <p className="text-[#999] text-xs leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Vertical Timeline (Mobile) */}
        <div className="md:hidden space-y-6">
          {productionTimeline.map((item, index) => {
            const style = typeStyles[item.type];
            const Icon = style.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full ${style.bg} flex items-center justify-center shrink-0`}>
                    <Icon size={18} className={style.text} />
                  </div>
                  {index < productionTimeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-white/5 mt-2" />
                  )}
                </div>
                <div className="pb-6">
                  <p className={`text-xs font-mono font-bold ${style.text} mb-0.5`}>{item.year}</p>
                  <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-[#999] text-xs leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-[#666] flex items-center justify-center gap-2">
            <AlertTriangle size={12} className="text-amber-400" />
            Future dates are production targets, not guaranteed commitments. Tesla's timelines have historically been subject to delays.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
