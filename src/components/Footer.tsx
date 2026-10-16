import { ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-[#e31937] rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-[10px]">T</span>
              </div>
              <span className="text-white font-semibold text-sm">Roadster Demo</span>
            </div>
            <p className="text-xs text-[#666] leading-relaxed">
              An independent informational website about the Tesla Roadster flying demonstration.
              Not affiliated with or endorsed by Tesla, Inc.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Explore</h4>
            <ul className="space-y-2">
              {['Overview', 'Flying Demo', 'Technology', 'Specifications', 'Variants'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const id = link.toLowerCase().replace(' ', '-');
                      const map: Record<string, string> = {
                        'overview': 'overview',
                        'flying-demo': 'demo',
                        'technology': 'technology',
                        'specifications': 'specifications',
                        'variants': 'variants',
                      };
                      document.querySelector(`#${map[id] || id}`)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs text-[#666] hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Resources</h4>
            <ul className="space-y-2">
              {[
                { label: 'Pricing', id: 'pricing' },
                { label: 'Videos', id: 'videos' },
                { label: 'Sources', id: 'sources' },
                { label: 'FAQ', id: 'faq' },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => document.querySelector(`#${link.id}`)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-xs text-[#666] hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Links */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Official Tesla</h4>
            <ul className="space-y-2">
              {[
                { label: 'Tesla Roadster', url: 'https://www.tesla.com/roadster' },
                { label: 'Tesla India', url: 'https://www.tesla.com/en_in/roadster' },
                { label: 'Reservation', url: 'https://www.tesla.com/roadster/reserve#payment' },
                { label: 'Tesla on X', url: 'https://x.com/Tesla' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#666] hover:text-[#e31937] transition-colors flex items-center gap-1"
                  >
                    {link.label} <ExternalLink size={9} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-[#555]">
            © 2026 Independent Automotive Technology Research. This is an independent informational website.
            Not affiliated with, sponsored by, or endorsed by Tesla, Inc. or SpaceX.
          </p>
          <p className="text-[10px] text-[#555] flex items-center gap-1">
            Built with <Heart size={9} className="text-[#e31937]" /> for credible automotive journalism
          </p>
        </div>
      </div>
    </footer>
  );
}
