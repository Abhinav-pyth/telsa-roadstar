import { motion } from 'framer-motion';
import { Play, ChevronDown, AlertTriangle, ExternalLink } from 'lucide-react';

export default function Hero() {
  const scrollToDemo = () => {
    document.querySelector('#videos')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSpecs = () => {
    document.querySelector('#specifications')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="overview" className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://image.qwenlm.ai/generated-images/e9a2f75d-2492-46ef-9905-ece726c35961/_result.png"
          alt="Illustrative concept render of a futuristic electric sports car — not actual demonstration footage"
          className="w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/40 to-[#0a0a0a]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#e31937]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        <p className="absolute bottom-20 right-4 sm:right-8 text-[10px] text-[#555] italic">
          Illustrative concept render — not actual demonstration footage
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Experimental Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e31937]/10 border border-[#e31937]/20 text-[#e31937] text-xs font-medium">
            <AlertTriangle size={12} />
            Experimental Flying Demonstration — Not a Conventional Flying Aircraft
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
        >
          THE FUTURE HAS A
          <br />
          <span className="text-gradient">NEW DIMENSION.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-[#999] max-w-2xl mx-auto mb-8"
        >
          Tesla Roadster — electric performance meets experimental thruster technology.
          <br className="hidden sm:block" />
          An independent exploration of the technology, demonstration, and road ahead.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <button onClick={scrollToDemo} className="btn-primary text-base">
            <Play size={18} />
            Watch the Demo
          </button>
          <button onClick={scrollToSpecs} className="btn-secondary text-base">
            Explore Specifications
          </button>
        </motion.div>

        {/* Production Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="glass-card px-5 py-3 rounded-lg">
            <p className="text-sm text-[#999]">
              Production target:{' '}
              <span className="text-white font-semibold">2028</span>
              <span className="text-[#666] ml-1">— subject to change</span>
            </p>
          </div>
          <a
            href="https://www.tesla.com/roadster"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#666] hover:text-[#999] flex items-center gap-1 transition-colors"
          >
            Source: Tesla Official Roadster Page <ExternalLink size={10} />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={24} className="text-[#666]" />
          </motion.div>
        </motion.div>
      </div>

      {/* Disclaimer */}
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-auto">
        <p className="text-[10px] text-[#555] max-w-xs">
          This is an independent informational website. Not affiliated with or endorsed by Tesla, Inc.
        </p>
      </div>
    </section>
  );
}
