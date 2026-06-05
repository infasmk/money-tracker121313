import React, { useState } from "react";
import { ArrowUp, Mail, MapPin, Instagram, Linkedin, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FooterProps {
  currentPage?: string;
  onPageChange?: (page: "home" | "all-projects" | "cv", targetSection?: string) => void;
}

export default function Footer({ currentPage, onPageChange }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (page: "home" | "all-projects" | "cv", sectionId?: string) => {
    if (onPageChange) {
      onPageChange(page, sectionId);
    }
  };

  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 5000);
    }
  };

  return (
    <footer className="relative bg-luxury-black text-white pt-20 pb-10 border-t border-white/5 overflow-hidden">
      {/* Decorative background visual elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Description */}
          <div className="md:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <span className="font-serif tracking-[0.3em] text-2xl font-bold text-gold">
                AS
              </span>
              <span className="text-[9px] font-mono tracking-widest uppercase text-white/60 animate-pulse ml-2">
                ARCHITUCTUR
              </span>
            </div>
            
            <p className="text-sm text-gray-300 font-sans leading-relaxed">
              Curating exceptional spaces, custom biophilic aesthetics, and landmark branded hyper-residences that transform modern skylines into luxury architectural art.
            </p>
            
            <div className="flex items-center space-x-4 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-all duration-300 hover:scale-105"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://example.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-all duration-300 hover:scale-105"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono tracking-widest text-gold uppercase">
              NAVIGATION
            </h3>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick("home", "hero")}
                  className="text-white/60 hover:text-gold transition-colors text-left cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("home", "about")}
                  className="text-white/60 hover:text-gold transition-colors text-left cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("all-projects")}
                  className="text-white/60 hover:text-gold transition-colors text-left cursor-pointer"
                >
                  All Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("cv")}
                  className="text-white/60 hover:text-gold transition-colors text-left cursor-pointer"
                >
                  Architect CV
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("home", "contact")}
                  className="text-white/60 hover:text-gold transition-colors text-left cursor-pointer"
                >
                  Contact & Register
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono tracking-widest text-gold uppercase">
              STUDIO LOCATION
            </h3>
            <div className="space-y-4 font-sans text-sm">
              <div className="flex items-start space-x-3 text-white/85">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                <p className="text-gray-300">
                  Business Bay Canal Promenade,<br />
                  Downtown Corridor, Dubai, UAE
                </p>
              </div>
              <div className="flex items-center space-x-3 text-white/85">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <p className="text-gray-300">design@ajayarchitecture.com</p>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono tracking-widest text-gold uppercase">
              REGISTER FOR EARLY ACCESS
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Subscribe to receive exclusive concept floor plans, VIP launches, and architectural showcases.
            </p>
            <AnimatePresence mode="wait">
              {!subscribed ? (
                <motion.form 
                  key="subscribe-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubscribeSubmit} 
                  className="flex flex-col gap-2"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="YOUR EMAIL PARTNER"
                    className="w-full bg-luxury-gray/30 border border-white/10 rounded px-4 py-2.5 text-sm font-mono text-white placeholder-white/30 focus:outline-none focus:border-gold transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-hover text-black font-semibold text-xs tracking-widest py-2.5 rounded transition-all duration-300 uppercase cursor-pointer"
                  >
                    SUBSCRIBE
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="subscribe-success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 border border-gold/20 bg-gold/5 rounded text-left"
                >
                  <p className="text-gold font-mono text-xs tracking-wider uppercase mb-1">
                    REGISTRATION SUCCESSFUL
                  </p>
                  <p className="text-xs text-gray-300">
                    You have been placed on our priority access list. Live floor plans will arrive shortly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 py-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="space-y-1 text-center md:text-left">
            <p className="font-mono text-[10px] text-white/40 tracking-wider">
              &copy; {new Date().getFullYear()} ARCHITECTURE AJAY. ALL RIGHTS RESERVED.
            </p>
            <p className="font-mono text-[9px] text-white/30 tracking-wider">
              POWERED BY BINGHATTI INSPIRATIONS &bull; REFINED HIGH-DENSITY PORTFOLIO
            </p>
          </div>
          
          <button
            onClick={handleScrollToTop}
            className="group flex items-center space-x-2 text-white/40 hover:text-gold font-mono text-[10px] tracking-widest uppercase transition-all duration-300 border border-white/5 hover:border-gold/30 px-3 py-1.5 rounded cursor-pointer"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3 h-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
