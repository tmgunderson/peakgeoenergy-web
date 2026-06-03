'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Target, Lightbulb, Leaf, Search, CheckCircle, DollarSign } from 'lucide-react';

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

const pillars = [
  {
    icon: Target,
    title: 'Expertise',
    desc: 'A team of seasoned geologists, engineers, and energy specialists with deep knowledge in geothermal energy development — identifying and capitalizing on resources efficiently and sustainably.',
    color: 'text-geo-orange',
    bg: 'bg-geo-orange/10 border-geo-orange/20',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'Positioned at the forefront of geothermal technology through ongoing R&D initiatives — continuously improving efficiency, reducing costs, and pioneering new methods of resource development.',
    color: 'text-geo-amber',
    bg: 'bg-geo-amber/10 border-geo-amber/20',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    desc: 'Committed to sustainable development practices that minimize environmental impact, promote social responsibility, and deliver clean energy with near-zero greenhouse gas emissions.',
    color: 'text-geo-teal',
    bg: 'bg-geo-teal/10 border-geo-teal/20',
  },
];

const process = [
  {
    icon: Search,
    step: '01',
    title: 'Exploration',
    desc: 'Advanced data analysis combined with conventional methodologies to identify high-potential geothermal opportunities globally.',
  },
  {
    icon: CheckCircle,
    step: '02',
    title: 'Resource Confirmation',
    desc: 'Exploration drilling validates geothermal resources. Subsequent development leverages horizontal drilling technology to maximize yield.',
  },
  {
    icon: Target,
    step: '03',
    title: 'Project Development',
    desc: 'Full project portfolio development from engineering through to plant construction, with target capacity exceeding 100MW.',
  },
  {
    icon: DollarSign,
    step: '04',
    title: 'Revenue Generation',
    desc: 'Diversified income through grid power sales, carbon credits, and direct heat applications for agriculture and aquaculture.',
  },
];

const locations = [
  { name: 'Nevada, USA', flag: '🇺🇸', detail: 'Established geothermal corridor with proven resources and existing grid infrastructure.' },
  { name: 'Chile', flag: '🇨🇱', detail: 'High-potential Andean resources with growing energy demand and supportive regulatory framework.' },
  { name: 'Canada', flag: '🇨🇦', detail: 'Domestic development opportunities with strong ESG mandate and clean energy policy tailwinds.' },
];

export default function AboutPage() {
  useReveal();

  return (
    <div className="animated-bg">
      {/* ── PAGE HERO ── */}
      <section className="page-hero pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-geo-orange/5 blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block text-geo-orange text-xs font-semibold tracking-[0.25em] uppercase mb-4 bg-geo-orange/10 px-3 py-1.5 rounded-full">
            About PEAK
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            What Sets Us<br />
            <span className="gradient-text">Apart</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            At PEAK Geothermal Energy, we are consistently striving to be a global leader in the field
            of geothermal development — driven by technology, sustainability, and a determination to
            make clean energy the world&apos;s primary power source.
          </p>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div key={p.title} className={`reveal delay-${(i + 1) * 100} glass rounded-2xl p-8 border transition-all duration-400`}>
              <div className={`w-14 h-14 rounded-xl ${p.bg} border flex items-center justify-center mb-6`}>
                <p.icon size={24} className={p.color} />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ── COMPANY OVERVIEW ── */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <div className="inline-block text-geo-teal text-xs font-semibold tracking-[0.25em] uppercase mb-4 bg-geo-teal/10 px-3 py-1.5 rounded-full">
              Company Overview
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Calgary-Based.<br />
              <span className="gradient-text-teal">Globally Minded.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-5">
              PEAK Geothermal Energy is a Calgary-based corporation operating as an independent sponsor,
              focused on acquiring and developing geothermal energy projects globally. Our projects span
              three countries with a target generating capacity exceeding 100MW.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We pride ourselves on our determination to develop new technology and sustainable energy
              development that separates our organization from competitors. Our multidisciplinary team
              of geoscientists, engineers, and capital markets professionals brings together decades of
              experience across the energy sector.
            </p>
          </div>
          <div className="reveal-right space-y-4">
            {locations.map((loc) => (
              <div key={loc.name} className="glass rounded-xl p-6 flex gap-5 items-start hover:border-geo-orange/30 transition-all duration-300 hover:-translate-y-1">
                <span className="text-3xl flex-shrink-0">{loc.flag}</span>
                <div>
                  <div className="text-white font-semibold mb-1">{loc.name}</div>
                  <div className="text-gray-400 text-sm leading-relaxed">{loc.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── PROCESS ── */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-block text-geo-orange text-xs font-semibold tracking-[0.25em] uppercase mb-4 bg-geo-orange/10 px-3 py-1.5 rounded-full">
            How We Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            From Discovery to<br />
            <span className="gradient-text">Delivery</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Our proven four-stage process takes geothermal projects from initial resource identification
            through to revenue-generating power plants.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {process.map((step, i) => (
            <div key={step.step} className={`reveal delay-${(i + 1) * 100} relative`}>
              {/* Connector line */}
              {i < process.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-geo-orange/40 to-transparent z-10" />
              )}
              <div className="glass rounded-2xl p-6 h-full hover:border-geo-orange/30 transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-geo-orange/40 font-black text-3xl leading-none">{step.step}</span>
                  <div className="w-10 h-10 rounded-xl bg-geo-orange/10 border border-geo-orange/20 flex items-center justify-center">
                    <step.icon size={18} className="text-geo-orange" />
                  </div>
                </div>
                <h3 className="text-white font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-center">
        <div className="reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interested in partnering with <span className="gradient-text">PEAK</span>?
          </h2>
          <p className="text-gray-400 mb-8">Meet the experienced team driving our global geothermal vision.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/people" className="btn-primary inline-flex items-center gap-2">
              Meet the Team <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-secondary inline-flex items-center gap-2">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
