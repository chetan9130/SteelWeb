"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  ArrowRight, 
  Compass, 
  Calculator, 
  HelpCircle,
  Building2,
  Bot
} from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  actionButtons?: { label: string; href?: string; query?: string }[];
}

export default function AIBuildAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: "Welcome to Vortex Steel. I am your architectural build advisor. What kind of project are you envisioning?",
      timestamp: "Just now",
      actionButtons: [
        { label: "Modern Barndominiums", query: "Tell me about your residential barndominiums" },
        { label: "Steel Workshops & Shops", query: "What options do you have for heavy industrial workshops?" },
        { label: "Estimate Build Cost", href: "/quote" },
        { label: "Upload Custom Floor Plan", href: "/upload-floor-plan" },
      ],
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const generateBotReply = (userQuery: string): { reply: string; actionButtons?: { label: string; href?: string; query?: string }[] } => {
    const q = userQuery.toLowerCase();

    if (q.includes("barndominium") || q.includes("residential") || q.includes("living") || q.includes("house")) {
      return {
        reply: "Our Barndominiums blend rigid red-iron steel frames with open Scandinavian luxury interiors. Our top residential design is 'The Hawthorne' (2,400 sq ft, 3 Bed, starting at ₹1,68,000) or 'The Ridgeway Estate' (4,800 sq ft with carriage house).",
        actionButtons: [
          { label: "View The Hawthorne", href: "/models/the-hawthorne" },
          { label: "View The Ridgeway", href: "/models/the-ridgeway-estate" },
          { label: "Calculate Quote", href: "/quote" },
        ],
      };
    }

    if (q.includes("quote") || q.includes("cost") || q.includes("price") || q.includes("estimate") || q.includes("sq ft")) {
      return {
        reply: "Steel building kits typically range from ₹1,800 to ₹3,500 per sq ft for the engineered shell, while fully finished luxury barndominiums range from ₹8,500 to ₹14,000 per sq ft. You can calculate a customized breakdown using our interactive tool:",
        actionButtons: [
          { label: "Launch Instant Quote Tool →", href: "/quote" },
          { label: "Submit Floor Plan For Exact Bids", href: "/upload-floor-plan" },
        ],
      };
    }

    if (q.includes("workshop") || q.includes("commercial") || q.includes("shop") || q.includes("storage") || q.includes("crane")) {
      return {
        reply: "For workshops and commercial storage, take a look at 'The Ironclad' (4,000 sq ft live-work facility) and our 'Apex Commercial Kit' (6,000 sq ft 100% clear-span with zero interior columns, 160 MPH wind rating).",
        actionButtons: [
          { label: "Explore The Ironclad", href: "/models/the-ironclad-workshop" },
          { label: "Explore Apex Commercial", href: "/models/the-apex-commercial-kit" },
        ],
      };
    }

    if (q.includes("cabin") || q.includes("snow") || q.includes("mountain") || q.includes("off-grid")) {
      return {
        reply: "Our cabin line is built with steep pitches (up to 10:12) specifically rated for 75+ PSF snow loads. 'The Alpine Gable' (1,150 sq ft) and 'The Summit Ridge' (850 sq ft) are ideal for rugged mountain and off-grid parcels.",
        actionButtons: [
          { label: "Alpine Gable Cabin", href: "/models/the-alpine-gable-cabin" },
          { label: "Summit Ridge Micro Cabin", href: "/models/the-summit-ridge-cabin" },
        ],
      };
    }

    if (q.includes("wood") || q.includes("steel vs") || q.includes("termite") || q.includes("fire")) {
      return {
        reply: "Commercial steel structures offer non-combustible Class A fire resistance, zero risk of wood rot or termites, 40-50 year structural warranties, and allow clear-span spans of up to 100 feet without load-bearing interior walls.",
        actionButtons: [
          { label: "Read Why Steel Guide", href: "/about" },
          { label: "Explore Models", href: "/models" },
        ],
      };
    }

    return {
      reply: "Thank you for reaching out. We engineer and manufacture steel structures from 800 sq ft off-grid cabins to 10,000+ sq ft custom estates. Would you like to explore existing models or build a custom quote?",
      actionButtons: [
        { label: "Browse All Models", href: "/models" },
        { label: "Build a Quote", href: "/quote" },
        { label: "Contact an Engineer", href: "/contact" },
      ],
    };
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: text.trim(),
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const response = generateBotReply(text);
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: response.reply,
        timestamp: "Just now",
        actionButtons: response.actionButtons,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <aside aria-label="AI Build Advisor" className="fixed bottom-6 right-6 z-50">
      {/* Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 px-4 py-3.5 bg-white hover:bg-[#FAF8F5] border border-[#E5E0D4] hover:border-[#C8753D] text-[#111315] rounded-full shadow-xl transition-all duration-300 hover:scale-105"
        >
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-[#C8753D] flex items-center justify-center text-white shadow-xs">
              <Bot className="w-4 h-4" />
            </div>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8753D] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C8753D]"></span>
            </span>
          </div>
          <div className="text-left pr-1 hidden sm:block">
            <div className="text-xs font-bold uppercase tracking-wider text-[#111315]">
              Build Assistant
            </div>
            <div className="text-[10px] text-[#64748B] font-medium">Ask about models & pricing</div>
          </div>
        </button>
      )}

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="w-[360px] sm:w-[400px] h-[520px] bg-white border border-[#E5E0D4] rounded-lg shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#F3EFE6] px-4 py-3.5 border-b border-[#E5E0D4] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#C8753D] flex items-center justify-center text-white shadow-xs">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#111315]">
                  Vortex Build Assistant
                </div>
                <div className="text-[10px] text-[#64748B] flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Online • AI Architecture Advisor
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-[#64748B] hover:text-[#111315] hover:bg-[#E5E0D4]/50 rounded-sm transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#FAF8F5]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-3.5 py-2.5 text-xs leading-relaxed shadow-xs ${
                    msg.sender === "user"
                      ? "bg-[#C8753D] text-white"
                      : "bg-white border border-[#E5E0D4] text-[#111315]"
                  }`}
                >
                  {msg.text}
                </div>

                {/* Render quick Action Buttons if provided by the bot */}
                {msg.actionButtons && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[90%]">
                    {msg.actionButtons.map((btn, idx) => (
                      btn.href ? (
                        <Link
                          key={idx}
                          href={btn.href}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold bg-white hover:bg-[#C8753D] text-[#111315] hover:text-white border border-[#E5E0D4] rounded-full transition-colors shadow-2xs"
                        >
                          <span>{btn.label}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      ) : (
                        <button
                          key={idx}
                          onClick={() => handleSend(btn.query || btn.label)}
                          className="px-2.5 py-1 text-[11px] font-semibold bg-white hover:bg-[#F3EFE6] text-[#111315] border border-[#E5E0D4] rounded-full transition-colors text-left shadow-2xs"
                        >
                          {btn.label}
                        </button>
                      )
                    ))}
                  </div>
                )}

                <span className="text-[9px] text-[#94A3B8] mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 bg-white border border-[#E5E0D4] rounded-lg w-fit shadow-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C8753D] animate-bounce"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#C8753D] animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#C8753D] animate-bounce [animation-delay:0.4s]"></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions strip */}
          <div className="px-3 py-2 bg-white border-t border-[#E5E0D4] flex items-center gap-1.5 overflow-x-auto text-[10px] text-[#64748B] no-scrollbar">
            <span className="shrink-0 font-bold text-[#111315]">Ask:</span>
            <button
              onClick={() => handleSend("What sizes are available?")}
              className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#E5E0D4] hover:text-[#111315] shrink-0 transition-colors"
            >
              Sizes?
            </button>
            <button
              onClick={() => handleSend("Why steel over wood framing?")}
              className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#E5E0D4] hover:text-[#111315] shrink-0 transition-colors"
            >
              Steel vs Wood
            </button>
            <button
              onClick={() => handleSend("How much does a 2,400 sq ft build cost?")}
              className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#E5E0D4] hover:text-[#111315] shrink-0 transition-colors"
            >
              Price per SQ FT?
            </button>
          </div>

          {/* Input field */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-[#E5E0D4] flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about models, pricing or floor plans..."
              className="flex-1 bg-[#FAF8F5] border border-[#E5E0D4] px-3 py-2 text-xs text-[#111315] placeholder-[#94A3B8] focus:outline-none focus:border-[#C8753D] rounded-sm"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              aria-label="Send message"
              className="p-2 bg-[#C8753D] hover:bg-[#BA642C] disabled:opacity-40 disabled:hover:bg-[#C8753D] text-white rounded-sm transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </aside>
  );
}
