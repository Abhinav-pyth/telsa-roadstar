import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wind, Flame, RotateCw, CheckCircle, AlertCircle } from 'lucide-react';
import { demoTimeline } from '../data/roadster';

const icons = [Wind, Flame, RotateCw, CheckCircle];

export default function DemoTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="demo" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Flying Demonstration
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#999] max-w-2xl mx-auto"
          >
            On October 15, 2026, Tesla demonstrated experimental thruster-assisted aerial maneuvers.
            This was a controlled engineering showcase — not sustained flight.
          </motion.p>
        </div>

        {/* Important Distinction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-lg p-5 mb-12 border-l-4 border-l-[#e31937]"
        >
          <div className="flex items-start gap-3">
            <AlertCircle size={20} className="text-[#e31937] mt-0.5 shrink-0" />
            <div>
              <h3 className="text-white font-semibold text-sm mb-1">Important Distinction</h3>
              <p className="text-[#999] text-sm">
                Brief aerial maneuvers using cold-gas thrusters are <strong className="text-white">not equivalent</strong> to 
                sustained flight or practical passenger air transportation. The demonstration showed momentary 
                lifts and rotations — not aircraft-like flight capability.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <div className="space-y-4">
            {demoTimeline.map((step, index) => {
              const Icon = icons[index];
              const isActive = activeStep === index;
              return (
                <motion.button
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left p-5 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'glass-card border-[#e31937]/30 shadow-lg shadow-[#e31937]/5'
                      : 'bg-[#141414]/50 border border-white/5 hover:border-white/10'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-[#e31937]/20 text-[#e31937]' : 'bg-[#1a1a1a] text-[#666]'
                    }`}>
                      <Icon size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-mono ${isActive ? 'text-[#e31937]' : 'text-[#666]'}`}>
                          Step {step.step}
                        </span>
                      </div>
                      <h3 className={`font-semibold text-sm mb-1 ${isActive ? 'text-white' : 'text-[#ccc]'}`}>
                        {step.title}
                      </h3>
                      <p className={`text-xs ${isActive ? 'text-[#999]' : 'text-[#666]'}`}>
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Detail Panel */}
          <div className="lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-xl p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#e31937]/10 flex items-center justify-center">
                    {(() => {
                      const Icon = icons[activeStep];
                      return <Icon size={24} className="text-[#e31937]" />;
                    })()}
                  </div>
                  <div>
                    <span className="text-xs text-[#e31937] font-mono">
                      Step {demoTimeline[activeStep].step} of {demoTimeline.length}
                    </span>
                    <h3 className="text-white font-bold text-lg">
                      {demoTimeline[activeStep].title}
                    </h3>
                  </div>
                </div>
                <p className="text-[#ccc] leading-relaxed mb-6">
                  {demoTimeline[activeStep].description}
                </p>
                <div className="border-t border-white/5 pt-4">
                  <p className="text-xs text-[#666]">
                    <strong className="text-[#999]">Source:</strong> October 15, 2026 Tesla demonstration event.
                    Observed demonstration footage, Tesla's claims, and media reporting.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress */}
            <div className="flex gap-2 mt-6">
              {demoTimeline.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    i <= activeStep ? 'bg-[#e31937]' : 'bg-[#1a1a1a]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
