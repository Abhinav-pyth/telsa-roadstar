import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqItems } from '../data/roadster';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#999] max-w-xl mx-auto"
          >
            Answers based on sourced information. When details remain unknown, we state that clearly.
          </motion.p>
        </div>

        {/* FAQ Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 rounded-xl overflow-hidden relative aspect-[3/1]"
        >
          <img
            src="https://image.qwenlm.ai/generated-images/21fff757-3ecd-4d0b-b4e9-a3be4d7340dc/_result.png"
            alt="Abstract visualization representing questions and answers"
            className="w-full h-full object-cover opacity-40"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-white text-xl sm:text-2xl font-bold">Common Questions</p>
              <p className="text-[#999] text-sm mt-1">Answers based on sourced information</p>
            </div>
          </div>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="glass-card rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 flex items-start gap-3"
                  aria-expanded={isOpen}
                >
                  <HelpCircle size={16} className="text-[#e31937] mt-0.5 shrink-0" />
                  <span className="text-white font-medium text-sm flex-1">{item.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-[#666] transition-transform shrink-0 mt-0.5 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pl-12">
                        <p className="text-[#ccc] text-sm leading-relaxed">{item.answer}</p>
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
