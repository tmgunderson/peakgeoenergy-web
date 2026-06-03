'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, Globe, TrendingUp, Leaf, ChevronDown } from 'lucide-react';

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const stats = [
  { value: '100MW+', label: 'Target Capacity', icon: Zap },
  { value: '3', label: 'Countries Active', icon: Globe },
  { value: '25+', label: 'Years Experience', icon: TrendingUp },
  { value: '~0', label: 'GHG Emissions', icon: Leaf },
];

const locations = [
  { name: 'Nevada, USA', flag: '🇺🇸', desc: 'Established geothermal corridor' },
  { name: 'Chile', flag: '🇨🇱', desc: 'High-potential Andean resources' },
  { name: 'Canada', flag: '🇨🇦', desc: 'Domestic energy development' },
];

const services = [
  {
    icon: '🔬',
    title: 'Project Development',
    desc: 'From initial resource assessment and exploration through to plant design, construction, and commissioning — we deliver end-to-end geothermal development.',
    color: 'from-orange-500/20 to-amber-500/10',
  },
  {
    icon: '⚙️',
    title: 'Operations & Maintenance',
    desc: 'Reliable operations and maintenance services for geothermal power plants, ensuring optimal performance, efficiency, and long-term longevity.',
    color: 'from-teal-500/20 to-cyan-500/10',
  },
  {
    icon: '💡',
    title: 'Consulting & Advisory',
    desc: 'Strategic consulting for governments, utilities, and organizations interested in geothermal energy development and sustainable energy transition.',
    color: 'from-orange-500/20 to-teal-500/10',
  },
];

export default function HomePage() {
  useReveal();

  return (
    <div className="animated-bg">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Full-bleed background photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pexels-fauxels-3184638.jpg"
            alt="PEAK Geothermal team"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a]/80 via-[#050d1a]/70 to-[#050d1a]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a]/60 via-transparent to-[#050d1a]/40" />
        </div>

        {/* Hero grid overlay */}
        <div className="absolute inset-0 hero-grid opacity-20 z-0" />

        {/* Decorative orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-geo-orange/10 blur-3xl pointer-events-none animate-glow-pulse z-0" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-geo-teal/8 blur-3xl pointer-events-none animate-glow-pulse z-0" style={{ animationDelay: '1.5s' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-geo-orange/40 bg-geo-orange/10 backdrop-blur-sm text-geo-orange text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-geo-orange animate-pulse" />
            Calgary, Alberta · Independent Sponsor
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight mb-6 leading-none">
            <span className="text-white">Powering the</span>
            <br />
            <span className="gradient-text text-glow-orange">Future</span>
            <span className="text-white"> from</span>
            <br />
            <span className="text-white">the </span>
            <span className="gradient-text-teal">Earth&apos;s Core</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-lg">
            PEAK Geothermal Energy is a leading developer of geothermal energy solutions —
            harnessing renewable heat from beneath the Earth&apos;s surface to power a sustainable future.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/about" className="btn-primary flex items-center gap-2 text-base">
              Discover Our Story <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-secondary flex items-center gap-2 text-base">
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 animate-float z-10">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={18} />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 relative">
        <div className="section-divider mb-20" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={stat.value} className={`stat-card reveal delay-${(i + 1) * 100}`}>
                <stat.icon size={24} className="text-geo-orange mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-black gradient-text mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="section-divider mt-20" />
      </section>

      {/* ── MISSION ── */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <div className="inline-block text-geo-orange text-xs font-semibold tracking-[0.25em] uppercase mb-4 bg-geo-orange/10 px-3 py-1.5 rounded-full">
              Our Mission
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Accelerating the Clean<br />
              <span className="gradient-text">Energy Transition</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              PEAK operates as an independent sponsor focused on acquiring and developing geothermal
              energy projects worldwide. We believe geothermal is the most reliable, lowest-impact
              renewable energy available — baseload power with near-zero greenhouse gas emissions.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our target portfolio exceeds 100MW across Nevada, Chile, and Canada, with revenue streams
              spanning grid power sales, carbon credits, and direct heat applications for agriculture
              and aquaculture.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-geo-orange font-semibold hover:gap-3 transition-all duration-300">
              Learn More About PEAK <ArrowRight size={18} />
            </Link>
          </div>

          <div className="reveal-right">
            <div className="relative">
              <div className="glass rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2">
                <div className="text-6xl mb-6">🌍</div>
                <h3 className="text-white font-bold text-xl mb-4">Global Portfolio</h3>
                <div className="space-y-4">
                  {locations.map((loc) => (
                    <div key={loc.name} className="flex items-center gap-4 p-3 rounded-xl bg-white/3 border border-white/5 hover:border-geo-orange/30 transition-colors">
                      <span className="text-2xl">{loc.flag}</span>
                      <div>
                        <div className="text-white font-semibold text-sm">{loc.name}</div>
                        <div className="text-gray-500 text-xs">{loc.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-geo-orange/5 to-geo-teal/5 rounded-3xl blur-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── INFOGRAPHIC SECTION ── */}
      <section className="relative overflow-hidden">
        <div className="section-divider" />
        <div className="py-24 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Infographic image */}
            <div className="reveal-left order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <Image
                  src="/images/Binary-Greenhouse-Geothermal-Infographic.jpg"
                  alt="Binary Cycle Geothermal Energy Infographic"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs text-gray-300 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    Binary Cycle Geothermal Process
                  </span>
                </div>
              </div>
            </div>

            <div className="reveal-right order-1 md:order-2">
              <div className="inline-block text-geo-teal text-xs font-semibold tracking-[0.25em] uppercase mb-4 bg-geo-teal/10 px-3 py-1.5 rounded-full">
                The Technology
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Clean Energy from<br />
                <span className="gradient-text-teal">Deep Below</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Binary cycle geothermal technology extracts thermal energy from underground reservoirs
                and converts it into clean electricity — 24 hours a day, 365 days a year, with
                near-zero greenhouse gas emissions.
              </p>
              <div className="space-y-3">
                {[
                  'No fuel costs — the Earth\'s heat is free and limitless',
                  'Smallest land footprint of any baseload energy source',
                  'Fully dispatchable — power on demand, unlike solar or wind',
                  'Revenue from power sales, carbon credits & direct heat',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-geo-teal mt-1.5 flex-shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/services" className="inline-flex items-center gap-2 text-geo-teal font-semibold hover:gap-3 transition-all duration-300">
                  Explore Our Services <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="section-divider" />
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="inline-block text-geo-orange text-xs font-semibold tracking-[0.25em] uppercase mb-4 bg-geo-orange/10 px-3 py-1.5 rounded-full">
              What We Do
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              End-to-End Geothermal<br />
              <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              From exploration to commissioning, we deliver the full spectrum of geothermal energy services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div key={svc.title} className={`service-card reveal delay-${(i + 1) * 100}`}>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center text-2xl mb-6 border border-white/10`}>
                  {svc.icon}
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{svc.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Link href="/services" className="btn-secondary inline-flex items-center gap-2">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TEAM PHOTO BANNER ── */}
      <section className="relative h-80 md:h-96 overflow-hidden reveal">
        <Image
          src="/images/pexels-fauxels-3184638.jpg"
          alt="PEAK Geothermal team collaboration"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a] via-[#050d1a]/60 to-[#050d1a]/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                A World-Class Team<br />
                <span className="gradient-text">Behind Every Project</span>
              </h2>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Our leadership team brings over 100 combined years of experience across geoscience,
                engineering, capital markets, and geothermal operations.
              </p>
              <Link href="/people" className="btn-primary inline-flex items-center gap-2 text-sm">
                Meet the Team <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="reveal relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-geo-orange/20 via-geo-amber/10 to-geo-teal/20" />
          <div className="absolute inset-0 hero-grid opacity-30" />
          <div className="relative px-8 py-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Ready to harness the<br />
              <span className="gradient-text">Earth&apos;s energy?</span>
            </h2>
            <p className="text-gray-300 mb-10 max-w-lg mx-auto">
              Whether you&apos;re a government, utility, or investor — let&apos;s explore how geothermal
              can power your future.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2 text-base">
              Contact Our Team <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
