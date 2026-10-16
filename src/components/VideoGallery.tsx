import { motion } from 'framer-motion';
import { Play, ExternalLink, Calendar, AlertCircle } from 'lucide-react';
import { videos } from '../data/sources';

export default function VideoGallery() {
  return (
    <section id="videos" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Video Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#999] max-w-2xl mx-auto"
          >
            Official demonstration footage and credible media coverage.
            All links point to original sources — we do not host or embed unofficial recordings.
          </motion.p>
        </div>

        {/* Primary Video Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="aspect-video flex items-center justify-center relative">
              <img
                src="https://image.qwenlm.ai/generated-images/fdff5554-9b45-4733-9516-978c78d36f3f/_result.png"
                alt="Illustrative concept of the Roadster demonstration — visit Tesla official for actual footage"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]/80" />
              <div className="relative text-center px-6">
                <div className="w-16 h-16 rounded-full bg-[#e31937]/20 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-[#e31937]/30">
                  <Play size={28} className="text-[#e31937] ml-1" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  Tesla Roadster Official Reveal — October 2026
                </h3>
                <p className="text-[#ccc] text-sm mb-4 max-w-md mx-auto">
                  Visit Tesla's official website for authorized footage of the demonstration and vehicle reveal.
                </p>
                <a
                  href="https://www.tesla.com/roadster"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm inline-flex"
                >
                  <ExternalLink size={14} />
                  Visit Tesla Official
                </a>
              </div>
              {/* Label */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-md px-3 py-1.5">
                <div className="w-2 h-2 rounded-full bg-[#e31937] animate-pulse" />
                <span className="text-xs text-white font-medium">Official Source</span>
              </div>
              <span className="absolute bottom-4 right-4 text-[9px] text-[#555] italic bg-black/40 px-2 py-1 rounded">
                Illustrative background — not actual footage
              </span>
            </div>
            <div className="p-4 flex items-center justify-between border-t border-white/5">
              <div className="flex items-center gap-4">
                <span className="text-xs text-[#999] flex items-center gap-1">
                  <Calendar size={12} /> October 15, 2026
                </span>
                <span className="text-xs text-[#666]">Tesla (Official)</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-start gap-3 glass-card rounded-lg p-4 mb-8"
        >
          <AlertCircle size={16} className="text-amber-400 mt-0.5 shrink-0" />
          <p className="text-xs text-[#999]">
            <strong className="text-white">Note:</strong> Video embeds may not be available due to platform restrictions.
            All links open original sources in new tabs. We do not use unofficial edited videos as if they were Tesla's original demonstration.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.slice(1).map((video, index) => (
            <motion.a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl overflow-hidden group hover:border-[#e31937]/20 transition-all"
            >
              {/* Thumbnail */}
              <div className="aspect-video bg-gradient-to-br from-[#1a1a1a] to-[#141414] flex items-center justify-center relative">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#e31937]/20 transition-colors">
                  <Play size={20} className="text-[#666] group-hover:text-[#e31937] transition-colors ml-0.5" />
                </div>
                <div className="absolute top-3 right-3">
                  <ExternalLink size={14} className="text-[#666]" />
                </div>
              </div>
              {/* Info */}
              <div className="p-4">
                <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-[#e31937] transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-[#666] text-xs mb-2 line-clamp-2">{video.description}</p>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-[#e31937] font-medium">{video.source}</span>
                  <span className="text-[10px] text-[#555] flex items-center gap-1">
                    <Calendar size={10} /> {video.date}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
