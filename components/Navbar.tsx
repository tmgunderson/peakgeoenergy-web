'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/people', label: 'People' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // On pages with photo heroes the navbar starts transparent over the dark photo
  const isPhotoHero = ['/', '/about', '/people'].includes(pathname);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm'
          : isPhotoHero
          ? 'bg-transparent'
          : 'bg-white/80 backdrop-blur-md border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo — white version on dark hero, colour version on light bg */}
        <Link href="/" className="flex items-center group">
          {scrolled || !isPhotoHero ? (
            <Image
              src="/images/PEAK-Geothermal-Energy-full-logo-on-transparent.png"
              alt="PEAK Geothermal Energy"
              width={320} height={96}
              className="h-20 w-auto object-contain group-hover:opacity-80 transition-opacity duration-300"
            />
          ) : (
            <Image
              src="/images/PEAK-Geothermal-Energy-full-white-logo-on-transparent-512-wide.png"
              alt="PEAK Geothermal Energy"
              width={320} height={96}
              className="h-20 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            />
          )}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link text-sm font-medium transition-colors duration-300 ${
                pathname === href
                  ? 'text-geo-orange active'
                  : scrolled || !isPhotoHero
                  ? 'text-slate-600 hover:text-slate-900'
                  : 'text-gray-200 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link href="/contact" className="btn-primary text-sm">
            Get in Touch
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className={`md:hidden transition-colors ${scrolled || !isPhotoHero ? 'text-slate-700 hover:text-slate-900' : 'text-gray-200 hover:text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white border-t border-slate-100 px-6 py-4 space-y-1 shadow-lg">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                pathname === href
                  ? 'text-geo-orange bg-orange-50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="pt-2">
            <Link href="/contact" className="btn-primary text-sm w-full justify-center">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
