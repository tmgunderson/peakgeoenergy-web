import Link from 'next/link';
import { Zap, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/people', label: 'People' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#030a14] border-t border-white/5">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-geo-orange/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-geo-orange to-geo-amber flex items-center justify-center">
                <Zap size={18} className="text-white" fill="white" />
              </div>
              <div>
                <div className="text-white font-bold text-lg">PEAK</div>
                <div className="text-gray-500 text-[10px] tracking-[0.2em] uppercase -mt-0.5">Geothermal Energy</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Developing the planet&apos;s best renewable energy resources. An Alberta, Canada corporation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-3">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-geo-orange text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0 duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@peakgeoenergy.com"
                  className="flex items-start gap-3 text-gray-400 hover:text-geo-orange text-sm transition-colors duration-200 group"
                >
                  <Mail size={15} className="mt-0.5 flex-shrink-0 text-geo-orange/60 group-hover:text-geo-orange transition-colors" />
                  info@peakgeoenergy.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin size={15} className="mt-0.5 flex-shrink-0 text-geo-orange/60" />
                  <span>1800-330 5 Ave SW<br />Calgary, AB T2P 0L4<br />Canada</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} PEAK Geothermal Energy Inc. All rights reserved.</p>
          <p className="text-gray-600">Calgary, Alberta · Nevada · Chile · Canada</p>
        </div>
      </div>
    </footer>
  );
}
