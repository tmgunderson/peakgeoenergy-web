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

export default function ContactPage() {
  useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: topics[0], message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:info@peakgeoenergy.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div>
      {/* ── HERO (light) ── */}
      <section className="page-hero pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-geo-orange/6 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block text-geo-orange text-xs font-semibold tracking-[0.25em] uppercase mb-4 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100">
            Contact
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight">
            Let&apos;s Start a<br /><span className="gradient-text">Conversation</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re an investor, government, utility, or potential partner —
            our team is ready to explore how PEAK can help.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT (white) ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            {/* Left — info */}
            <div className="lg:col-span-2 space-y-5">
              <div className="reveal-left">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Get in Touch</h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  PEAK Geothermal Energy Inc. is an Alberta, Canada corporation headquartered in Calgary.
                  We welcome inquiries from investors, governments, utilities, and industry partners worldwide.
                </p>
              </div>

              {/* Email card */}
              <a href="mailto:info@peakgeoenergy.com" className="reveal-left delay-100 glass rounded-2xl p-6 flex items-start gap-5 hover:-translate-y-1 block no-underline">
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-geo-orange" />
                </div>
                <div>
                  <div className="text-slate-400 text-xs font-semibold tracking-wider uppercase mb-1">Email</div>
                  <div className="text-slate-900 text-sm font-medium">info@peakgeoenergy.com</div>
                </div>
              </a>

              {/* Address card */}
              <a href="https://maps.google.com/?q=330+5+Ave+SW+Calgary+AB" target="_blank" rel="noreferrer" className="reveal-left delay-200 glass rounded-2xl p-6 flex items-start gap-5 hover:-translate-y-1 block no-underline">
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-geo-teal" />
                </div>
                <div>
                  <div className="text-slate-400 text-xs font-semibold tracking-wider uppercase mb-1">Head Office</div>
                  <div className="text-slate-900 text-sm leading-relaxed">
                    1800-330 5 Ave SW<br />Calgary, AB T2P 0L4<br />Canada
                  </div>
                </div>
              </a>

              {/* Regions */}
              <div className="reveal-left delay-300 glass rounded-2xl p-6">
                <div className="text-slate-400 text-xs font-semibold tracking-wider uppercase mb-4">Active Regions</div>
                <div className="space-y-3">
                  {[
                    { flag: '🇨🇦', name: 'Calgary, AB — Headquarters' },
                    { flag: '🇺🇸', name: 'Nevada, USA — Operations' },
                    { flag: '🇨🇱', name: 'Chile — Development' },
                  ].map((loc) => (
                    <div key={loc.name} className="flex items-center gap-3 text-slate-600 text-sm">
                      <span className="text-xl">{loc.flag}</span> {loc.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3 reveal-right">
              <div className="glass rounded-2xl p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={36} className="text-geo-orange" />
                    </div>
                    <h3 className="text-slate-900 text-2xl font-bold mb-3">Message Sent!</h3>
                    <p className="text-slate-500 max-w-sm mx-auto">
                      Your email client should have opened with the message ready to send to info@peakgeoenergy.com.
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
                      <h3 className="text-slate-900 font-bold text-xl mb-1">Send us a Message</h3>
                      <p className="text-slate-400 text-sm">We typically respond within 1–2 business days.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-slate-500 text-xs font-semibold tracking-wider uppercase mb-2 block">
                          Your Name <span className="text-geo-orange">*</span>
                        </label>
                        <input type="text" required placeholder="John Smith" className="form-input"
                          value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                      </div>
                      <div>
                        <label className="text-slate-500 text-xs font-semibold tracking-wider uppercase mb-2 block">
                          Email Address <span className="text-geo-orange">*</span>
                        </label>
                        <input type="email" required placeholder="john@example.com" className="form-input"
                          value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                      </div>
                    </div>

                    <div>
                      <label className="text-slate-500 text-xs font-semibold tracking-wider uppercase mb-2 block">Subject</label>
                      <select className="form-input" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
                        {topics.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="text-slate-500 text-xs font-semibold tracking-wider uppercase mb-2 block">
                        Your Message <span className="text-geo-orange">*</span>
                      </label>
                      <textarea required rows={6} placeholder="Tell us about your project, inquiry, or how we can help..."
                        className="form-input resize-none" value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })} />
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center gap-2 text-base py-4">
                      Send Message <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
