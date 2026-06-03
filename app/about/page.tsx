'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  { icon: Target,    title: 'Expertise',       color: 'text-geo-orange', bg: 'bg-orange-50 border-orange-100', desc: 'A team of seasoned geologists, engineers, and energy specialists with deep knowledge in geothermal energy development — identifying and capitalizing on resources efficiently and sustainably.' },
  { icon: Lightbulb, title: 'Innovation',       color: 'text-amber-500',  bg: 'bg-amber-50 border-amber-100',  desc: 'Positioned at the forefront of geothermal technology through ongoing R&D initiatives — continuously improving efficiency, reducing costs, and pioneering new methods of resource development.' },
  { icon: Leaf,       title: 'Sustainability',  color: 'text-geo-teal',   bg: 'bg-teal-50 border-teal-100',    desc: 'Committed to sustainable development practices that minimize environmental impact, promote social responsibility, and deliver clean energy with near-zero greenhouse gas emissions.' },
];

const process = [
  { icon: Search,       step: '01', title: 'Exploration',           desc: 'Advanced data analysis combined with conventional methodologies to identify high-potential geothermal opportunities globally.' },
  { icon: CheckCircle,  step: '02', title: 'Resource Confirmation', desc: 'Exploration drilling validates geothermal resources. Subsequent development leverages horizontal drilling technology to maximize yield.' },
  { icon: Target,       step: '03', title: 'Project Development',   desc: 'Full project portfolio development from engineering through to plant construction, with target capacity exceeding 100MW.' },
  { icon: DollarSign,   step: '04', title: 'Revenue Generation',    desc: 'Diversified income through grid power sales, carbon credits, and direct heat applications for agriculture and aquaculture.' },
];

const locations = [
  { name: 'Nevada, USA', flag: '🇺🇸', detail: 'Established geothermal corridor with proven resources and existing grid infrastructure.' },
  { name: 'Chile',        flag: '🇨🇱', detail: 'High-potential Andean resources with growing energy demand and supportive regulatory framework.' },
  { name: 'Canada',       flag: '🇨🇦', detail: 'Domestic development opportunities with strong ESG mandate and clean energy policy tailwinds.' },
];

export default function AboutPage() {
  useReveal();
  return (
    <div>
      {/* ── HERO (dark photo) ── */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/pexels-fauxels-3184638.jpg" alt="PEAK Geothermal team" fill className="object-cover object-center scale-105" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a]/90 via-[#050d1a]/80 to-[#f8fafc]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block text-geo-orange text-xs font-semibold tracking-[0.25em] uppercase mb-4 bg-geo-orange/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-geo-orange/20">
            About PEAK
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            What Sets Us<br /><span className="gradient-text">Apart</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            At PEAK Geothermal Energy, we are consistently striving to be a global leader in geothermal
            development — driven by technology, sustainability, and a determination to make clean energy
            the world&apos;s primary power source.
          </p>
        </div>
      </section>

      {/* ── PILLARS (light) ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <div key={p.title} className={`reveal delay-${(i+1)*100} glass rounded-2xl p-8`}>
                <div className={`w-14 h-14 rounded-xl ${p.bg} border flex items-center justify-center mb-6`}>
                  <p.icon size={24} className={p.color} />
                </div>
                <h3 className="text-slate-900 font-bold text-xl mb-3">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── COMPANY OVERVIEW (light stripe) ── */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <div className="inline-block text-geo-teal text-xs font-semibold tracking-[0.25em] uppercase mb-4 bg-teal-50 px-3 py-1.5 rounded-full border border-teal-100">
                Company Overview
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Calgary-Based.<br /><span className="gradient-text-teal">Globally Minded.</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                PEAK Geothermal Energy is a Calgary-based corporation operating as an independent sponsor,
                focused on acquiring and developing geothermal energy projects globally. Our projects span
                three countries with a target generating capacity exceeding 100MW.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our multidisciplinary team of geoscientists, engineers, and capital markets professionals
                brings together decades of experience across the energy sector, delivering projects from
                resource identification through to long-term revenue generation.
              </p>
            </div>
            <div className="reveal-right space-y-4">
              {locations.map((loc) => (
                <div key={loc.name} className="glass rounded-xl p-6 flex gap-5 items-start hover:-translate-y-1">
                  <span className="text-3xl flex-shrink-0">{loc.flag}</span>
                  <div>
                    <div className="text-slate-900 font-semibold mb-1">{loc.name}</div>
                    <div className="text-slate-500 text-sm leading-relaxed">{loc.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── PROCESS + INFOGRAPHIC (white) ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="inline-block text-geo-orange text-xs font-semibold tracking-[0.25em] uppercase mb-4 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100">
              How We Work
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              From Discovery to<br /><span className="gradient-text">Delivery</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="reveal-left">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg group">
                <Image src="/images/Binary-Greenhouse-Geothermal-Infographic.jpg" alt="Binary Cycle Geothermal Process" width={800} height={600} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs text-white bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">Binary Cycle Geothermal Process</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 reveal-right">
              {process.map((step, i) => (
                <div key={step.step} className={`glass rounded-xl p-6 flex gap-5 items-start delay-${(i+1)*100} hover:-translate-y-1`}>
                  <span className="text-geo-orange/30 font-black text-2xl flex-shrink-0">{step.step}</span>
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0">
                    <step.icon size={18} className="text-geo-orange" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold mb-1">{step.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA (dark) ── */}
      <section className="py-20 bg-[#0f172a]">
        <div className="max-w-4xl mx-auto px-6 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interested in partnering with <span className="gradient-text">PEAK</span>?
          </h2>
          <p className="text-slate-400 mb-8">Meet the experienced team driving our global geothermal vision.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/people" className="btn-primary inline-flex items-center gap-2">Meet the Team <ArrowRight size={18} /></Link>
            <Link href="/contact" className="btn-secondary inline-flex items-center gap-2 !text-white !border-white/20 hover:!bg-white/10 hover:!text-white hover:!border-white/40">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
