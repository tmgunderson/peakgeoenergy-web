'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Hammer, Settings, BookOpen, Thermometer, Droplets, Zap, Wind, Globe, ShieldCheck } from 'lucide-react';

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

const services = [
  {
    icon: Hammer, number: '01', title: 'Geothermal Project Development', tagline: 'From resource to revenue',
    borderColor: 'border-orange-200', iconBg: 'bg-orange-50 border-orange-100', iconColor: 'text-geo-orange', dotColor: 'bg-geo-orange',
    desc: 'Comprehensive geothermal project development from initial resource assessment and exploration through to plant design, construction, and commissioning. We manage every phase of the development lifecycle.',
    features: ['Resource assessment & feasibility studies','Exploration drilling programs','Plant engineering & design','EPC contractor management','Grid connection & commissioning','Project finance structuring'],
  },
  {
    icon: Settings, number: '02', title: 'Operations & Maintenance', tagline: 'Performance you can count on',
    borderColor: 'border-teal-200', iconBg: 'bg-teal-50 border-teal-100', iconColor: 'text-geo-teal', dotColor: 'bg-geo-teal',
    desc: 'Reliable operations and maintenance services for geothermal power plants, ensuring optimal performance, efficiency, and longevity. Our team brings decades of hands-on experience managing plants across Nevada, California, Hawaii, Utah, and New Mexico.',
    features: ['Plant operations management','Preventive & corrective maintenance','Well field management','Performance optimization','HSE compliance & reporting','Long-term asset management'],
  },
  {
    icon: BookOpen, number: '03', title: 'Consulting & Advisory', tagline: 'Strategic geothermal expertise',
    borderColor: 'border-amber-200', iconBg: 'bg-amber-50 border-amber-100', iconColor: 'text-amber-500', dotColor: 'bg-amber-500',
    desc: 'Strategic consulting and advisory services to governments, utilities, investors, and organizations interested in geothermal energy development. We provide independent technical, commercial, and regulatory guidance.',
    features: ['Resource & technical due diligence','Regulatory & permitting strategy','Investment analysis & structuring','Technology selection & review','Government policy advisory','Carbon credit strategy'],
  },
];

const facts = [
  { icon: Thermometer, title: 'Resource Identification', desc: 'Advanced seismic surveys, geochemical analysis, and satellite data pinpoint high-value geothermal reservoirs.' },
  { icon: Droplets,    title: 'Well Drilling',           desc: 'Directional and horizontal drilling techniques extract geothermal fluid with minimal surface footprint.' },
  { icon: Zap,         title: 'Energy Conversion',       desc: 'Dry steam, flash steam, and binary cycle plant technologies convert thermal energy into grid-quality electricity.' },
  { icon: Wind,        title: 'Direct Use Applications', desc: 'Thermal energy applied directly to agriculture, aquaculture, and district heating — maximizing resource value.' },
  { icon: Globe,       title: 'Environmental Impact',    desc: 'Near-zero greenhouse gas emissions with a fraction of the land footprint of solar or wind at equivalent capacity.' },
  { icon: ShieldCheck, title: 'Baseload Reliability',    desc: 'Unlike solar and wind, geothermal delivers 24/7 baseload power — unaffected by weather or time of day.' },
];

export default function ServicesPage() {
  useReveal();
  return (
    <div>
      {/* ── HERO (light page-hero) ── */}
      <section className="page-hero pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-geo-teal/8 blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block text-geo-teal text-xs font-semibold tracking-[0.25em] uppercase mb-4 bg-teal-50 px-3 py-1.5 rounded-full border border-teal-100">
            Our Services
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight">
            End-to-End<br />
            <span className="gradient-text-teal">Geothermal</span><br />
            <span className="gradient-text">Excellence</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            PEAK delivers the complete spectrum of geothermal energy services — from initial exploration
            and project development through to long-term operations and strategic advisory.
          </p>
        </div>
      </section>

      {/* ── MAIN SERVICES (white) ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          {services.map((svc) => (
            <div key={svc.number} className={`reveal glass rounded-2xl p-8 md:p-12 hover:-translate-y-1`}>
              <div className="grid md:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl font-black text-slate-200 leading-none">{svc.number}</span>
                    <div className={`w-12 h-12 rounded-xl ${svc.iconBg} border flex items-center justify-center`}>
                      <svc.icon size={22} className={svc.iconColor} />
                    </div>
                  </div>
                  <div className={`text-xs font-semibold tracking-[0.2em] uppercase mb-2 ${svc.iconColor}`}>{svc.tagline}</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{svc.title}</h2>
                  <p className="text-slate-500 leading-relaxed">{svc.desc}</p>
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold mb-4 text-sm tracking-wider uppercase">What&apos;s Included</h4>
                  <ul className="space-y-3">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-slate-600 text-sm">
                        <span className={`w-1.5 h-1.5 rounded-full ${svc.dotColor} flex-shrink-0`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ── HOW IT WORKS (light stripe) ── */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="inline-block text-geo-orange text-xs font-semibold tracking-[0.25em] uppercase mb-4 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100">
              The Science
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              How Geothermal<br /><span className="gradient-text">Energy Works</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Geothermal energy is a clean, renewable source with near-zero greenhouse gas emissions —
              tapping into the Earth&apos;s internal heat that has existed for billions of years.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {facts.map((fact, i) => (
              <div key={fact.title} className={`reveal delay-${(i+1)*100} glass rounded-xl p-6 hover:-translate-y-2`}>
                <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-5">
                  <fact.icon size={20} className="text-geo-orange" />
                </div>
                <h3 className="text-slate-900 font-semibold mb-2">{fact.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{fact.desc}</p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="mt-12 reveal">
            <div className="glass rounded-2xl p-8 md:p-12 text-center border-teal-100">
              <div className="text-5xl text-geo-teal/30 font-serif mb-4">&ldquo;</div>
              <p className="text-xl md:text-2xl text-slate-800 font-medium max-w-3xl mx-auto leading-relaxed">
                Geothermal energy is considered a clean and renewable energy source with{' '}
                <span className="gradient-text-teal">near zero greenhouse gas emissions</span>.
              </p>
              <div className="mt-6 text-slate-400 text-sm">— PEAK Geothermal Energy</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA (dark) ── */}
      <section className="py-20 bg-[#0f172a]">
        <div className="max-w-4xl mx-auto px-6 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to discuss your <span className="gradient-text">project</span>?
          </h2>
          <p className="text-slate-400 mb-8">Our team is ready to assess your geothermal opportunity and build a path to clean energy.</p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2 text-base">
            Start the Conversation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
