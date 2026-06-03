'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    name: 'Craig Dunn', credentials: 'BSc', title: 'Chief Executive Officer',
    photo: '/images/cropped-cropped-Headshot-Craig-Dunn-2018-scaled-1.jpg',
    linkedin: 'https://www.linkedin.com/in/craigdunncalgary/',
    color: 'from-orange-500 to-amber-500',
    bio: '25+ years of expertise in natural resource exploration and geoscience. Recognized for sustainability focus and low-impact technology development. President of WellDunn Consulting Ltd., Director of Terrador Energy, and E&Y Entrepreneur of the Year Finalist in 2016.',
    tags: ['Geoscience', 'Sustainability', 'Leadership'],
  },
  {
    name: 'TM Gunderson', credentials: 'P.Eng, CPA', title: 'Chief Operating Officer',
    photo: '/images/TM4.jpg',
    linkedin: 'https://www.linkedin.com/in/t-m-gunderson-5599208/',
    color: 'from-teal-500 to-cyan-500',
    bio: 'Engineer with 20 years building successful firms across energy and agriculture. Pioneer in sustainable inland shrimp farming. Holds M.Sc. in Engineering, CPA designation, and is a registered professional engineer in both Canada and the USA.',
    tags: ['Engineering', 'Operations', 'Finance'],
  },
  {
    name: 'Doug McNeill', credentials: 'P.Eng, ICD', title: 'Chairman',
    photo: '/images/Doug_McNeill2.webp',
    linkedin: 'https://www.linkedin.com/in/doug-mcneill-7b338134/',
    color: 'from-purple-500 to-indigo-500',
    bio: 'Founding Partner of Epoch Energy with 30+ years of energy industry experience. B.Sc. in Mechanical Engineering, Corporate Governance College graduate. President of JTK Resources Inc., former CSO of The Stream-Flo Group, and board member of Canadian Energy & Climate Nexus.',
    tags: ['Governance', 'Energy', 'Strategy'],
  },
  {
    name: 'Michael Wellwood', credentials: 'BSc, CPEP', title: 'Chief Financial Officer',
    photo: '/images/cropped-Mike-Wellwood-Headshot-at-WeWork4.png',
    linkedin: 'https://www.linkedin.com/in/michaelwellwood/',
    color: 'from-green-500 to-emerald-500',
    bio: '20+ years in private capital markets, domestic and international structuring. Certified Private Equity Professional, former Chairman of the National Exempt Market Association Due Diligence Committee, and founder of an Exempt Market Dealer in Alberta.',
    tags: ['Capital Markets', 'Structuring', 'Private Equity'],
  },
  {
    name: 'Peter K. Braxton', credentials: '', title: 'Managing Director',
    photo: '/images/cropped-Peter-Braxton-Headshot-300x300.png',
    linkedin: 'https://www.linkedin.com/in/peterkbraxton/',
    color: 'from-rose-500 to-pink-500',
    bio: '17+ years in investor relations, capital formation, and syndication. Advises on structuring, fundraising, and operations across the private capital sector — bringing a deep network of institutional and accredited investors to PEAK.',
    tags: ['Investor Relations', 'Capital Formation', 'Syndication'],
  },
  {
    name: 'Monte Morrison', credentials: 'PE, EMT', title: 'CEO — PEAK USA',
    photo: '/images/Monte_Morrison2.jpg',
    linkedin: 'https://www.linkedin.com/in/monte-morrison-pe-asp-emt-6b03216/',
    color: 'from-orange-600 to-red-500',
    bio: "35+ years managing geothermal power plants and well fields across Nevada, California, Hawaii, Utah, and New Mexico. Board member of Geothermal Rising, the industry's premier advocacy organization.",
    tags: ['Geothermal Ops', 'Nevada', 'Well Fields'],
  },
];

export default function PeoplePage() {
  useReveal();
  return (
    <div>
      {/* ── HERO (dark photo) ── */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/pexels-fauxels-3184638.jpg" alt="PEAK Geothermal team" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a]/85 via-[#050d1a]/75 to-[#f8fafc]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block text-geo-orange text-xs font-semibold tracking-[0.25em] uppercase mb-4 bg-geo-orange/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-geo-orange/20">
            Our Team
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            The People Behind<br /><span className="gradient-text">PEAK</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A capable and highly experienced core team, augmented by best-in-class professionals
            across geoscience, engineering, capital markets, and operations.
          </p>
        </div>
      </section>

      {/* ── LEADERSHIP GRID (white) ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="inline-block text-geo-orange text-xs font-semibold tracking-[0.25em] uppercase mb-4 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100">
              Leadership
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Executive <span className="gradient-text">Team</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leaders.map((person, i) => (
              <div key={person.name} className={`person-card reveal delay-${Math.min((i % 3 + 1) * 100, 500)}`}>
                {/* Gradient top bar */}
                <div className={`h-1.5 bg-gradient-to-r ${person.color}`} />

                {/* Photo */}
                <div className="relative w-full h-72 overflow-hidden bg-slate-100">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="text-slate-900 font-bold text-lg leading-tight">
                        {person.name}
                        {person.credentials && (
                          <span className="text-slate-400 font-normal text-sm ml-1">{person.credentials}</span>
                        )}
                      </h3>
                      <div className={`text-sm font-semibold mt-0.5 bg-gradient-to-r ${person.color} bg-clip-text text-transparent`}>
                        {person.title}
                      </div>
                    </div>
                    <a href={person.linkedin} target="_blank" rel="noreferrer"
                      className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center hover:bg-[#0077b5] hover:border-[#0077b5] transition-all flex-shrink-0 ml-2 group"
                      aria-label={`${person.name} on LinkedIn`}>
                      <Linkedin size={13} className="text-slate-400 group-hover:text-white transition-colors" />
                    </a>
                  </div>

                  <div className="my-4 h-px bg-slate-100" />

                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{person.bio}</p>

                  <div className="flex flex-wrap gap-2">
                    {person.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── STATS (light stripe) ── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { value: '100+', label: 'Combined Years of Experience' },
              { value: '6',    label: 'Disciplines Represented' },
              { value: '3',    label: 'Countries of Active Operations' },
            ].map((item, i) => (
              <div key={item.label} className={`reveal delay-${(i+1)*100} stat-card`}>
                <div className="text-4xl font-black gradient-text mb-2">{item.value}</div>
                <div className="text-slate-500 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA (dark) ── */}
      <section className="py-20 bg-[#0f172a]">
        <div className="max-w-4xl mx-auto px-6 text-center reveal">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            We would love to hear from you.
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Whether you&apos;re an investor, potential partner, government, or utility —
            our team is ready to explore opportunities with you.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
