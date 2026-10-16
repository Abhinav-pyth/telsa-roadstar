import { motion } from 'framer-motion';
import { ExternalLink, Building2, Newspaper, Calendar, BookOpen } from 'lucide-react';
import { sources } from '../data/sources';

export default function SourcesSection() {
  return (
    <section id="sources" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Sources & Verification
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#999] max-w-2xl mx-auto"
          >
            Every important claim on this page links to its supporting source.
            We distinguish official company sources from independent third-party reporting.
          </motion.p>
        </div>

        {/* Source Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {sources.map((source, index) => (
            <motion.div
              key={source.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card rounded-xl p-5 hover:border-white/10 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                  source.type === 'official' ? 'bg-[#e31937]/10' : 'bg-[#1a1a1a]'
                }`}>
                  {source.type === 'official' ? (
                    <Building2 size={18} className="text-[#e31937]" />
                  ) : (
                    <Newspaper size={18} className="text-[#999]" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-semibold uppercase tracking-wider ${
                      source.type === 'official' ? 'text-[#e31937]' : 'text-blue-400'
                    }`}>
                      {source.type === 'official' ? 'Official' : 'Media'}
                    </span>
                    <span className="text-[10px] text-[#555] flex items-center gap-1">
                      <Calendar size={9} /> {source.date}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{source.name}</h3>
                  <p className="text-[#999] text-xs mb-2">{source.title}</p>
                  <p className="text-[#666] text-xs leading-relaxed mb-3">{source.summary}</p>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#e31937] hover:text-[#ff3050] transition-colors"
                  >
                    <BookOpen size={12} />
                    Read Original Source
                    <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verification Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 glass-card rounded-lg p-5"
        >
          <div className="flex items-start gap-3">
            <BookOpen size={18} className="text-[#999] mt-0.5 shrink-0" />
            <div>
              <h3 className="text-white font-semibold text-sm mb-2">Verification Methodology</h3>
              <ul className="space-y-1.5 text-xs text-[#999]">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">•</span>
                  <span>Official Tesla sources: Direct from tesla.com — company announcements and product pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">•</span>
                  <span>Media sources: Reuters, TechCrunch, Associated Press — independent reporting with editorial standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">•</span>
                  <span>Unverified claims: Tesla performance claims and future targets are clearly labeled as such</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#666] mt-0.5">•</span>
                  <span>We do not fabricate dates, prices, or citations. When information is unknown, we state that clearly.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
