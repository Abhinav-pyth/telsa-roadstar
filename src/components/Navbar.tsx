import { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Play } from 'lucide-react';

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Flying Demo', href: '#demo' },
  { label: 'Technology', href: '#technology' },
  { label: 'Specifications', href: '#specifications' },
  { label: 'Variants', href: '#variants' },
  { label: 'Price', href: '#pricing' },
  { label: 'Videos', href: '#videos' },
  { label: 'Sources', href: '#sources' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#e31937] rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-white font-semibold text-sm hidden sm:block">
              Roadster Demo
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[#999] hover:text-white text-xs font-medium px-2.5 py-1.5 rounded transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('#videos')}
              className="btn-primary text-xs py-2 px-4"
            >
              <Play size={14} />
              Watch Demo
            </button>
            <a
              href="https://www.tesla.com/roadster"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999] hover:text-white text-xs flex items-center gap-1 transition-colors"
            >
              Official Tesla <ExternalLink size={12} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0a0a0a]/98 backdrop-blur-md border-t border-white/5">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left text-[#999] hover:text-white text-sm py-2.5 px-3 rounded transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-white/5 flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('#videos')}
                className="btn-primary text-sm justify-center"
              >
                <Play size={14} />
                Watch Demo
              </button>
              <a
                href="https://www.tesla.com/roadster"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#999] hover:text-white text-sm flex items-center justify-center gap-1 py-2"
              >
                Official Tesla Website <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
