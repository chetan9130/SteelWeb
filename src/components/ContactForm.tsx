"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    zip: "",
    interest: "Barndominium",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white border border-[#E5E0D4] rounded-sm p-8 sm:p-10 text-center space-y-4 animate-in zoom-in-95 duration-200 shadow-md">
        <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold uppercase text-[#111315] font-display">
          Message Dispatched
        </h3>
        <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto leading-relaxed">
          Thank you, <span className="text-[#111315] font-semibold">{form.name}</span>. A regional build consultant has received your inquiry and will follow up within 1 business day.
        </p>
        <div className="pt-2">
          <button
            onClick={() => {
              setIsSubmitted(false);
              setForm({
                name: "",
                email: "",
                phone: "",
                zip: "",
                interest: "Barndominium",
                message: "",
              });
            }}
            className="px-5 py-2.5 bg-[#FAF8F5] hover:bg-[#F3EFE6] border border-[#E5E0D4] text-xs font-bold uppercase tracking-wider text-[#111315] rounded-sm transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-[#E5E0D4] rounded-sm p-6 sm:p-10 space-y-5 shadow-md text-[#111315]">
      <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8753D]">
        Direct Engineering Consultation
      </div>
      <h3 className="text-xl sm:text-2xl font-bold uppercase text-[#111315] font-display">
        Send Us Your Project Details
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#111315] mb-1">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="John Doe"
            className="w-full bg-[#FAF8F5] border border-[#E5E0D4] px-3.5 py-2.5 text-xs text-[#111315] focus:outline-none focus:border-[#C8753D] rounded-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#111315] mb-1">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="john@domain.com"
            className="w-full bg-[#FAF8F5] border border-[#E5E0D4] px-3.5 py-2.5 text-xs text-[#111315] focus:outline-none focus:border-[#C8753D] rounded-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#111315] mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="(555) 123-4567"
            className="w-full bg-[#FAF8F5] border border-[#E5E0D4] px-3.5 py-2.5 text-xs text-[#111315] focus:outline-none focus:border-[#C8753D] rounded-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#111315] mb-1">
            Build Location PIN/ZIP *
          </label>
          <input
            type="text"
            required
            value={form.zip}
            onChange={(e) => setForm({ ...form, zip: e.target.value })}
            placeholder="e.g. 560001"
            className="w-full bg-[#FAF8F5] border border-[#E5E0D4] px-3.5 py-2.5 text-xs text-[#111315] focus:outline-none focus:border-[#C8753D] rounded-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#111315] mb-1">
          Structure Typology
        </label>
        <select
          value={form.interest}
          onChange={(e) => setForm({ ...form, interest: e.target.value })}
          className="w-full bg-[#FAF8F5] border border-[#E5E0D4] px-3.5 py-2.5 text-xs text-[#111315] focus:outline-none focus:border-[#C8753D] rounded-sm cursor-pointer"
        >
          <option value="Barndominium">Modern Barndominium (Residential)</option>
          <option value="Steel Workshop">Commercial / Shop Clear-Span Facility</option>
          <option value="Cabin">Modern Mountain / Lake Cabin</option>
          <option value="Building Kit">Pre-Engineered DIY Kit</option>
          <option value="Other">Custom Commercial Structure</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#111315] mb-1">
          Message or Project Questions *
        </label>
        <textarea
          rows={4}
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us about your property, intended timeline, target square footage, or any specific questions..."
          className="w-full bg-[#FAF8F5] border border-[#E5E0D4] px-3.5 py-2.5 text-xs text-[#111315] focus:outline-none focus:border-[#C8753D] rounded-sm"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-[#C8753D] hover:bg-[#BA642C] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isSubmitting ? (
          <span>Sending Transmission...</span>
        ) : (
          <>
            <span>Send Message</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      <div className="flex items-center justify-center gap-2 text-[11px] text-[#64748B]">
        <Shield className="w-3.5 h-3.5 text-[#C8753D]" />
        <span>No spam. Your email and phone are used strictly for project estimates.</span>
      </div>
    </form>
  );
}
