import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Wind, Move, Rocket, ChevronRight, BookOpen } from 'lucide-react';
import { technologies } from '../data/roadster';

const iconMap: Record<string, typeof Flame> = {
  flame: Flame,
  wind: Wind,
  move: Move,
  rocket: Rocket,
};

export default function TechnologySection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="technology" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Technology Explained
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#999] max-w-2xl mx-auto"
          >
            Beginner-friendly explanations of the key technologies behind the Roadster demonstration.
            Technically accurate, clearly sourced.
          </motion.p>
        </div>

        {/* Technology Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {technologies.map((tech, index) => {
            const Icon = iconMap[tech.icon] || Flame;
            const isExpanded = expandedId === tech.id;

            return (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : tech.id)}
                  className="w-full text-left p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#e31937]/10 flex items-center justify-center shrink-0">
                      <Icon size={24} className="text-[#e31937]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg mb-1">{tech.title}</h3>
                      <p className="text-[#999] text-sm">{tech.whatItDoes}</p>
                    </div>
                    <ChevronRight
                      size={20}
                      className={`text-[#666] transition-transform shrink-0 mt-1 ${
                        isExpanded ? 'rotate-90' : ''
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 space-y-4 border-t border-white/5 pt-4">
                        <div>
                          <h4 className="text-xs font-semibold text-[#e31937] uppercase tracking-wider mb-1">
                            How It Works
                          </h4>
                          <p className="text-[#ccc] text-sm leading-relaxed">{tech.howItWorks}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-1">
                            Potential Benefits
                          </h4>
                          <p className="text-[#ccc] text-sm leading-relaxed">{tech.benefits}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                            Engineering Limitations
                          </h4>
                          <p className="text-[#ccc] text-sm leading-relaxed">{tech.limitations}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
                            Safety & Regulatory
                          </h4>
                          <p className="text-[#ccc] text-sm leading-relaxed">{tech.safety}</p>
                        </div>
                        <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                          <BookOpen size={12} className="text-[#666]" />
                          <p className="text-xs text-[#666]">
                            <strong className="text-[#999]">Source:</strong> {tech.source}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
