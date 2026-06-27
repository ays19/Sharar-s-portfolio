import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Mail, MapPin, CheckCircle, Github, Linkedin, AlertCircle, Phone } from 'lucide-react';
import { personalInfo } from '../data';
import { ContactMessage } from '../types';

export default function ContactForm() {
  const [form, setForm] = useState<ContactMessage>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/sahsanyasir@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _subject: form.subject || `New Portfolio Message from ${form.name}`,
          message: form.message,
          _honeypot: "", // Anti-spam honey pot
        })
      });

      if (response.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        const result = await response.json();
        throw new Error(result.message || "Form submission failed. Please try again.");
      }
    } catch (error: any) {
      console.error("Email send error:", error);
      setStatus('error');
      setErrorMessage(error.message || "Unable to transmit message. Please verify your connection or try again later.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-neutral-950 text-white relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Left */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-8 justify-between"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono text-indigo-500 uppercase tracking-widest font-semibold">Get In Touch</span>
              <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white">
                Let's discuss your next backend project
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mt-2">
                I am actively exploring full-time Software Engineering roles, backend API contracts, and AI agent automation systems. 
              </p>
            </div>

            {/* Structured Contact Elements */}
            <div className="flex flex-col gap-5 my-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/40 border border-neutral-800 hover:border-indigo-500/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-950 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-neutral-500 uppercase">Direct Email</p>
                  <p className="text-sm font-semibold text-neutral-300">{personalInfo.email}</p>
                </div>
              </a>

              {personalInfo.phone && (
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/40 border border-neutral-800 hover:border-indigo-500/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-950 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-neutral-500 uppercase">Phone Number</p>
                    <p className="text-sm font-semibold text-neutral-300">{personalInfo.phone}</p>
                  </div>
                </a>
              )}

              <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/40 border border-neutral-800">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center text-neutral-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-neutral-500 uppercase">Location</p>
                  <p className="text-sm font-semibold text-neutral-300">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Quick profiles links */}
            <div className="flex items-center gap-3">
              <a
                id="contact-github"
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-850 text-neutral-400 hover:text-white hover:border-indigo-500/50 flex items-center justify-center transition-all"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                id="contact-linkedin"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-850 text-neutral-400 hover:text-white hover:border-indigo-500/50 flex items-center justify-center transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Contact Interactive Form Right */}
          <motion.div
            className="lg:col-span-7 bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-6 sm:p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-12 gap-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-emerald-950 flex items-center justify-center text-emerald-400 border border-emerald-800"
                  >
                    <CheckCircle size={32} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">Message Dispatched!</h3>
                  <p className="text-neutral-400 text-sm max-w-xs leading-relaxed">
                    Thank you for reaching out, Ahsan has received your request and will revert shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-4 py-2 bg-neutral-800 hover:bg-neutral-750 text-neutral-300 rounded-lg text-xs font-mono transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-mono text-neutral-400 font-semibold">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors text-sm text-neutral-200"
                        required
                      />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-mono text-neutral-400 font-semibold">
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors text-sm text-neutral-200"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-xs font-mono text-neutral-400 font-semibold">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Opportunities, project ideas..."
                      className="px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors text-sm text-neutral-200"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-mono text-neutral-400 font-semibold">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Hi Ahsan, I'd love to connect regarding..."
                      className="px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors text-sm text-neutral-200 resize-none"
                      required
                    />
                  </div>

                  {/* Errors feedback */}
                  {status === 'error' && (
                    <div className="flex items-center gap-2 p-3 bg-rose-950/40 border border-rose-900/60 rounded-xl text-rose-300 text-xs">
                      <AlertCircle size={14} className="flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/10 cursor-pointer disabled:bg-indigo-900 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Transmitting Message...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Transmit Message
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
