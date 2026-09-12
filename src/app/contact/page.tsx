import { MapPin, Phone, Mail, Clock, HelpCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Our Engineering Team | VORTEX STEEL",
  description: "Connect with Vortex Steel's structural specialists, project estimators, and cabin designers. Request a quote or schedule a design consultation.",
};

const FAQS = [
  {
    q: "How long does fabrication and delivery take?",
    a: "Standard pre-engineered cabins and building kits are manufactured and delivered to your job site in 4 to 6 weeks from final signed engineering blueprint approval.",
  },
  {
    q: "Are the blueprints stamped for my local county?",
    a: "Yes. All Vortex building kits come with licensed engineering calculation packets wet-stamped for the specific county and state where you are building.",
  },
  {
    q: "What type of foundation is required?",
    a: "Our rigid-frame buildings can be anchored to an engineered monolithic concrete slab, crawlspace stem walls, or pier foundation runners depending on the model.",
  },
  {
    q: "Can I erect the building myself?",
    a: "Yes! All components are pre-punched and bolt-together. Many customers assemble with friends and a telehandler, or hire a local steel erection crew.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-28 text-[#1D2521]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Editorial Contact (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#B82025] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#B82025]"></span>
                <span>Get In Touch</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#1D2521] font-display leading-[0.95]">
                Let's Build <br />
                <span className="text-[#B82025]">Something Great.</span>
              </h1>
              <p className="mt-4 text-sm sm:text-base text-[#6B716D] leading-relaxed font-body">
                Whether you have existing architectural sketches or are starting with a blank slate, our licensed structural engineers and cabin advisors are here to help.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4 pt-2 border-t border-[#E5E0D4]">
              <div className="p-4 bg-[#F7F4EC] border border-[#E5E0D4] rounded-sm flex items-start gap-4 shadow-xs">
                <div className="p-2.5 rounded-sm bg-white text-[#B82025] shrink-0 border border-[#E5E0D4]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-[#6B716D]">Toll-Free Phone</div>
                  <a href="tel:18005557833" className="text-base font-bold text-[#1D2521] hover:text-[#B82025] transition-colors">
                    (800) 555-STEEL
                  </a>
                  <div className="text-[11px] text-[#6B716D]">Direct: (512) 890-4400</div>
                </div>
              </div>

              <div className="p-4 bg-[#F7F4EC] border border-[#E5E0D4] rounded-sm flex items-start gap-4 shadow-xs">
                <div className="p-2.5 rounded-sm bg-white text-[#B82025] shrink-0 border border-[#E5E0D4]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-[#6B716D]">Engineering & Quotes</div>
                  <a href="mailto:sales@vortexsteel.com" className="text-base font-bold text-[#1D2521] hover:text-[#B82025] transition-colors">
                    sales@vortexsteel.com
                  </a>
                  <div className="text-[11px] text-[#6B716D]">Avg response time: under 4 business hours</div>
                </div>
              </div>

              <div className="p-4 bg-[#F7F4EC] border border-[#E5E0D4] rounded-sm flex items-start gap-4 shadow-xs">
                <div className="p-2.5 rounded-sm bg-white text-[#B82025] shrink-0 border border-[#E5E0D4]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-[#6B716D]">Manufacturing & Headquarters</div>
                  <div className="text-sm font-semibold text-[#1D2521]">
                    4800 Ironwood Parkway, Austin, TX 78701
                  </div>
                  <div className="text-[11px] text-[#6B716D]">Nationwide delivery across all 50 states</div>
                </div>
              </div>

              <div className="p-4 bg-[#F7F4EC] border border-[#E5E0D4] rounded-sm flex items-start gap-4 shadow-xs">
                <div className="p-2.5 rounded-sm bg-white text-[#B82025] shrink-0 border border-[#E5E0D4]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-[#6B716D]">Operating Hours</div>
                  <div className="text-sm font-semibold text-[#1D2521]">
                    Monday – Friday: 7:00 AM – 6:00 PM CST
                  </div>
                  <div className="text-[11px] text-[#6B716D]">Saturday: 9:00 AM – 2:00 PM (By Appointment)</div>
                </div>
              </div>
            </div>

            {/* Quick FAQs */}
            <div className="pt-6 border-t border-[#E5E0D4] space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#1D2521]">
                Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <div key={idx} className="p-4 bg-[#F7F4EC] border border-[#E5E0D4] rounded-sm space-y-1 shadow-2xs">
                    <div className="text-xs font-bold text-[#1D2521] flex items-center gap-2">
                      <HelpCircle className="w-3.5 h-3.5 text-[#B82025] shrink-0" />
                      <span>{faq.q}</span>
                    </div>
                    <p className="text-xs text-[#6B716D] pl-5.5 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
