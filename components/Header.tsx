
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-paper/95 backdrop-blur-sm shadow-soft' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-ink rounded-sm flex items-center justify-center transition-transform group-hover:rotate-3">
              <span className="text-paper font-serif text-sm font-bold">AI</span>
            </div>
            <span className="font-serif text-lg tracking-tight">Sunny Workshop</span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {[
              { href: '#about', label: '私たちについて' },
              { href: '#method', label: '手法' },
              { href: '#pricing', label: '料金' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-ink-muted hover:text-ink transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-ink transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium bg-ink text-paper px-5 py-2.5 rounded-sm hover:bg-ink-light transition-colors"
          >
            無料相談
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
