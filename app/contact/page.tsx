'use client';

import { useEffect, useState } from 'react';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';

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

const topics = [
  'Project Development Inquiry',
  'Investment Opportunity',
  'Operations & Maintenance',
  'Consulting & Advisory',
  'Media & Press',
  'General Inquiry',
];

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@peakgeoenergy.com',
    href: 'mailto:info@peakgeoenergy.com',
    color: 'text-geo-orange',
    bg: 'bg-geo-orange/10 border-geo-orange/20',
  },
  {
    icon: MapPin,
    label: 'Head Office',
    value: '1800-330 5 Ave SW\nCalgary, AB T2P 0L4\nCanada',
    href: 'https://maps.google.com/?q=330+5+Ave+SW+Calgary+AB',
    color: 'text-geo-teal',
    bg: 'bg-geo-teal/10 border-geo-teal/20',
  },
];

export default function ContactPage() {
  useReveal();

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: topics[0], message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const mailto = `mailto:info@peakgeoenergy.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <div className="animated-bg">
      {/* ── PAGE HERO ── */}
      <section className="page-hero pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-geo-orange/5 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block text-geo-orange text-xs font-semibold tracking-[0.25em] uppercase mb-4 bg-geo-orange/10 px-3 py-1.5 rounded-full">
            Contact
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Let&apos;s Start a<br />
            <span className="gradient-text">Conversation</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re an investor, government, utility, or potential partner —
            our team is ready to explore how PEAK can help.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* Left — Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="reveal-left">
              <h2 className="text-2xl font-bold text-white mb-2">Get in Touch</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                PEAK Geothermal Energy Inc. is an Alberta, Canada corporation headquartered in Calgary.
                We welcome inquiries from investors, governments, utilities, and industry partners worldwide.
              </p>
            </div>

            {contactInfo.map((info, i) => (
              <a
                key={info.label}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className={`reveal-left delay-${(i + 1) * 100} glass rounded-2xl p-6 flex items-start gap-5 hover:border-geo-orange/30 transition-all duration-300 hover:-translate-y-1 block no-underline`}
              >
                <div className={`w-12 h-12 rounded-xl ${info.bg} border flex items-center justify-center flex-shrink-0`}>
                  <info.icon size={20} className={info.color} />
                </div>
                <div>
                  <div className="text-gray-500 text-xs font-semibold tracking-wider uppercase mb-1">{info.label}</div>
                  <div className="text-white text-sm leading-relaxed whitespace-pre-line">{info.value}</div>
                </div>
              </a>
            ))}

            {/* Locations */}
            <div className="reveal-left delay-300 glass rounded-2xl p-6">
              <div className="text-gray-500 text-xs font-semibold tracking-wider uppercase mb-4">Active Regions</div>
              <div className="space-y-3">
                {[
                  { flag: '🇨🇦', name: 'Calgary, AB — Headquarters' },
                  { flag: '🇺🇸', name: 'Nevada, USA — Operations' },
                  { flag: '🇨🇱', name: 'Chile — Development' },
                ].map((loc) => (
                  <div key={loc.name} className="flex items-center gap-3 text-gray-400 text-sm">
                    <span className="text-xl">{loc.flag}</span>
                    {loc.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3 reveal-right">
            <div className="glass rounded-2xl p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-geo-orange/10 border border-geo-orange/30 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={36} className="text-geo-orange" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-3">Message Sent!</h3>
                  <p className="text-gray-400 max-w-sm mx-auto">
                    Thank you for reaching out. A member of the PEAK team will be in touch with you shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: topics[0], message: '' }); }}
                    className="mt-8 btn-secondary text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">Send us a Message</h3>
                    <p className="text-gray-500 text-sm">We typically respond within 1–2 business days.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-2 block">
                        Your Name <span className="text-geo-orange">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        className="form-input"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-2 block">
                        Email Address <span className="text-geo-orange">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="form-input"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-2 block">
                      Subject
                    </label>
                    <select
                      className="form-input"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    >
                      {topics.map((t) => (
                        <option key={t} value={t} className="bg-[#0a1628]">{t}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-2 block">
                      Your Message <span className="text-geo-orange">*</span>
                    </label>
                    <textarea
                      required
                      rows={6}
                      placeholder="Tell us about your project, inquiry, or how we can help..."
                      className="form-input resize-none"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 text-base py-4">
                    Send Message <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
