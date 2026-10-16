import { motion } from 'framer-motion';
import { AlertTriangle, DollarSign, Globe, Info, ExternalLink } from 'lucide-react';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Pricing & Reservation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#999] max-w-2xl mx-auto"
          >
            Clear distinction between reservation deposits and vehicle purchase prices.
            Final retail pricing has not been announced.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: US Pricing */}
          <div className="space-y-6">
            {/* Vehicle Price */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center">
                  <DollarSign size={20} className="text-[#999]" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Vehicle Purchase Price</h3>
                  <p className="text-xs text-[#666]">Final retail cost</p>
                </div>
              </div>
              <div className="bg-[#1a1a1a] rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-white">Not Announced</p>
                <p className="text-xs text-[#666] mt-1">
                  Tesla has not released official retail pricing for any configuration.
                </p>
              </div>
            </motion.div>

            {/* Reservation Deposits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#e31937]/10 flex items-center justify-center">
                  <Info size={20} className="text-[#e31937]" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Reported US Reservation Deposits</h3>
                  <p className="text-xs text-[#666]">Not purchase prices</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-[#1a1a1a] rounded-lg p-4">
                  <div>
                    <p className="text-white font-semibold text-sm">Performance</p>
                    <p className="text-xs text-[#666]">Road-ready configuration</p>
                  </div>
                  <p className="text-[#e31937] font-bold text-lg">$50,000</p>
                </div>
                <div className="flex items-center justify-between bg-[#1a1a1a] rounded-lg p-4">
                  <div>
                    <p className="text-white font-semibold text-sm">Thrust</p>
                    <p className="text-xs text-[#666]">Race-ready configuration</p>
                  </div>
                  <p className="text-[#e31937] font-bold text-lg">$250,000</p>
                </div>
                <div className="flex items-center justify-between bg-[#1a1a1a] rounded-lg p-4">
                  <div>
                    <p className="text-white font-semibold text-sm">Rocket</p>
                    <p className="text-xs text-[#666]">Invitation-only</p>
                  </div>
                  <p className="text-[#999] font-bold text-sm">No confirmed amount</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: India + Disclaimer */}
          <div className="space-y-6">
            {/* India Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center">
                  <Globe size={20} className="text-[#999]" />
                </div>
                <div>
                  <h3 className="text-white font-bold">India Availability</h3>
                  <p className="text-xs text-[#666]">Indian market information</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Indian retail price', value: 'Not announced' },
                  { label: 'Indian on-road price', value: 'Not announced' },
                  { label: 'Taxes, duties, registration', value: 'Not confirmed' },
                  { label: 'Launch & delivery date', value: 'Not confirmed' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between bg-[#1a1a1a] rounded-lg p-3">
                    <span className="text-xs text-[#999]">{item.label}</span>
                    <span className="text-xs text-[#666] font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://www.tesla.com/en_in/roadster"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 text-xs text-[#e31937] hover:text-[#ff3050] transition-colors py-2"
              >
                Tesla India Roadster Page <ExternalLink size={12} />
              </a>
            </motion.div>

            {/* Prominent Disclaimer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-xl p-6 bg-[#e31937]/5 border border-[#e31937]/20"
            >
              <div className="flex items-start gap-3">
                <AlertTriangle size={20} className="text-[#e31937] mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-white font-bold text-sm mb-2">Important Disclaimer</h3>
                  <p className="text-[#ccc] text-sm leading-relaxed">
                    <strong>Reservation deposits are NOT vehicle purchase prices.</strong> Final pricing,
                    specifications, availability, delivery dates, taxes, and fees may all change.
                    Do not confuse the earlier $200,000 figure quoted for the 2017 Roadster announcement
                    with the current vehicle's final price.
                  </p>
                  <p className="text-[#999] text-xs mt-3">
                    Historical note: The original 2017 Roadster announcement referenced a ~$200,000 price.
                    That figure pertains to the previous announcement, not the current redesigned vehicle.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Source */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <a
                href="https://www.tesla.com/roadster/reserve#payment"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#666] hover:text-[#999] flex items-center justify-center gap-1 transition-colors"
              >
                Source: Tesla Reservation Page <ExternalLink size={10} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
