'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Linkedin } from 'lucide-react';

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const leaders = [
  {
    name: 'Craig Dunn',
    credentials: 'BSc',
    title: 'Chief Executive Officer',
    initials: 'CD',
    color: 'from-orange-500 to-amber-500',
    bio: '25+ years of expertise in natural resource exploration and geoscience. Recognized for sustainability focus and low-impact technology development. President of WellDunn Consulting Ltd., Director of Terrador Energy, and E&Y Entrepreneur of the Year Finalist in 2016.',
    tags: ['Geoscience', 'Sustainability', 'Leadership'],
  },
  {
    name: 'TM Gunderson',
    credentials: 'P.Eng, CPA',
    title: 'Chief Operating Officer',
    initials: 'TG',
    color: 'from-teal-500 to-cyan-500',
    bio: 'Engineer with 20 years building successful firms across energy and agriculture. Pioneer in sustainable inland shrimp farming. Holds M.Sc. in Engineering, CPA designation, and is a registered professional engineer in both Canada and the USA.',
    tags: ['Engineering', 'Operations', 'Finance'],
  },
  {
    name: 'Doug McNeill',
    credentials: 'P.Eng, ICD',
    title: 'Chairman',
    initials: 'DM',
    color: 'from-purple-500 to-indigo-500',
    bio: 'Founding Partner of Epoch Energy with 30+ years of energy industry experience. B.Sc. in Mechanical Engineering, Corporate Governance College graduate. President of JTK Resources Inc., former CSO of The Stream-Flo Group, and board member of Canadian Energy & Climate Nexus.',
    tags: ['Governance', 'Energy', 'Strategy'],
  },
  {
    name: 'Michael Wellwood',
    credentials: 'BSc, CPEP',
    title: 'Chief Financial Officer',
    initials: 'MW',
    color: 'from-green-500 to-emerald-500',
    bio: '20+ years in private capital markets, domestic and international structuring. Certified Private Equity Professional, former Chairman of the National Exempt Market Association Due Diligence Committee, and founder of an Exempt Market Dealer in Alberta.',
    tags: ['Capital Markets', 'Structuring', 'Private Equity'],
  },
  {
    name: 'Peter K. Braxton',
    credentials: '',
    title: 'Managing Director',
    initials: 'PB',
    color: 'from-rose-500 to-pink-500',
    bio: '17+ years in investor relations, capital formation, and syndication. Advises on structuring, fundraising, and operations across the private capital sector — bringing a deep network of institutional and accredited investors to PEAK.',
    tags: ['Investor Relations', 'Capital Formation', 'Syndication'],
  },
  {
    name: 'Monte Morrison',
    credentials: 'PE, EMT',
    title: 'CEO — PEAK USA',
    initials: 'MM',
    color: 'from-orange-600 to-red-500',
    bio: '35+ years managing geothermal power plants and well fields across Nevada, California, Hawaii, Utah, and New Mexico. Board member of Geothermal Rising, the industry\'s premier advocacy organization. The operational backbone of PEAK\'s US geothermal portfolio.',
    tags: ['Geothermal Ops', 'Nevada', 'Well Fields'],
  },
];

export default function PeoplePage() {
  useReveal();

  return (
    <div className="animated-bg">
      {/* ── PAGE HERO ── */}
      <section className="page-hero pt-40 pb-24 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-geo-teal/5 blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block text-geo-orange text-xs font-semibold tracking-[0.25em] uppercase mb-4 bg-geo-orange/10 px-3 py-1.5 rounded-full">
            Our Team
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            The People Behind<br />
            <span className="gradient-text">PEAK</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A capable and highly experienced core team, augmented by best-in-class professionals
            across geoscience, engineering, capital markets, and operations.
          </p>
        </div>
      </section>

      {/* ── LEADERSHIP GRID ── */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-block text-geo-orange text-xs font-semibold tracking-[0.25em] uppercase mb-4 bg-geo-orange/10 px-3 py-1.5 rounded-full">
            Leadership
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Executive <span className="gradient-text">Team</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.map((person, i) => (
            <div
              key={person.name}
              className={`person-card reveal delay-${Math.min((i % 3 + 1) * 100, 500)}`}
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${person.color}`} />

              <div className="p-8">
                {/* Avatar */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${person.color} flex items-center justify-center text-white font-black text-xl shadow-lg`}>
                    {person.initials}
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
                    <Linkedin size={15} className="text-gray-400" />
                  </div>
                </div>

                {/* Name & title */}
                <h3 className="text-white font-bold text-xl mb-0.5">
                  {person.name}
                  {person.credentials && (
                    <span className="text-gray-500 font-normal text-sm ml-2">{person.credentials}</span>
                  )}
                </h3>
                <div className={`text-sm font-semibold mb-4 bg-gradient-to-r ${person.color} bg-clip-text text-transparent`}>
                  {person.title}
                </div>

                {/* Bio */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{person.bio}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {person.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ── VALUES STRIP ── */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          {[
            { value: '100+', label: 'Combined Years of Experience' },
            { value: '6', label: 'Disciplines Represented' },
            { value: '3', label: 'Countries of Active Operations' },
          ].map((item, i) => (
            <div key={item.label} className={`reveal delay-${(i + 1) * 100} stat-card`}>
              <div className="text-4xl font-black gradient-text mb-2">{item.value}</div>
              <div className="text-gray-400 text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <div className="reveal relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-geo-orange/15 to-geo-teal/15" />
          <div className="absolute inset-0 hero-grid opacity-20" />
          <div className="relative px-8 py-14 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              We would love to hear from you.
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Whether you&apos;re an investor, potential partner, government, or utility —
              our team is ready to explore opportunities with you.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Get in Touch <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
