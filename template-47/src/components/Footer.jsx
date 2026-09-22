import React from 'react';
import { 
  Sprout, 
  Mail, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Facebook, 
  ArrowUpRight 
} from 'lucide-react';

export const Footer = ({ onOpenContact }) => {
  return (
    <footer className="relative -mt-24 z-20 pb-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Floating White Card Container */}
        <div className="rounded-3xl sm:rounded-4xl bg-white border border-agro-border p-8 sm:p-12 lg:p-16 shadow-2xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-agro-border">
            
            {/* Left Brand Column (lg:col-span-5) */}
            <div className="lg:col-span-5 space-y-6">
              <a href="#home" className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-agro-lime flex items-center justify-center text-agro-forest shadow-sm">
                  <Sprout className="w-5 h-5 stroke-[2.5]" />
                </div>
                <span className="text-2xl font-bold tracking-tight text-agro-dark">
                  Agrovia
                </span>
              </a>

              <p className="text-sm text-agro-muted max-w-sm leading-relaxed">
                Agrovia empowers farmers with smart tools for better yields and sustainable growth.
              </p>

              {/* Email Button */}
              <div>
                <a
                  href="mailto:hello@agrovia.com"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-agro-subtle hover:bg-agro-border/80 text-xs font-semibold text-agro-dark border border-agro-border transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-agro-forest" />
                  <span>hello@agrovia.com</span>
                </a>
              </div>

              {/* Social Media */}
              <div>
                <div className="text-xs font-bold text-agro-dark mb-3">Social Media</div>
                <div className="flex items-center gap-2.5">
                  {[
                    { icon: <Facebook className="w-4 h-4" />, href: '#', label: 'Facebook' },
                    { icon: <Linkedin className="w-4 h-4" />, href: '#', label: 'LinkedIn' },
                    { icon: <Instagram className="w-4 h-4" />, href: '#', label: 'Instagram' },
                    { icon: <Twitter className="w-4 h-4" />, href: '#', label: 'Twitter' },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      aria-label={social.label}
                      className="w-9 h-9 rounded-full bg-agro-subtle border border-agro-border flex items-center justify-center text-agro-muted hover:text-agro-forest hover:bg-white transition-colors"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links (lg:col-span-2) */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-agro-dark mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm text-agro-muted">
                <li><a href="#home" className="hover:text-agro-forest transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-agro-forest transition-colors">About</a></li>
                <li><a href="#solutions" className="hover:text-agro-forest transition-colors">Services</a></li>
                <li><button onClick={onOpenContact} className="hover:text-agro-forest transition-colors text-left">Contact</button></li>
              </ul>
            </div>

            {/* Services (lg:col-span-3) */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-agro-dark mb-4">Services</h4>
              <ul className="space-y-3 text-sm text-agro-muted">
                <li><a href="#solutions" className="hover:text-agro-forest transition-colors">Smart Crop Monitoring</a></li>
                <li><a href="#solutions" className="hover:text-agro-forest transition-colors">Precision Irrigation Systems</a></li>
                <li><a href="#solutions" className="hover:text-agro-forest transition-colors">Soil & Weather Analytics</a></li>
                <li><a href="#solutions" className="hover:text-agro-forest transition-colors">Maintenance & Support</a></li>
              </ul>
            </div>

            {/* Company (lg:col-span-2) */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-agro-dark mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-agro-muted">
                <li><button onClick={onOpenContact} className="hover:text-agro-forest transition-colors text-left">Contact Us</button></li>
                <li><a href="#about" className="hover:text-agro-forest transition-colors">Emergency Help</a></li>
                <li><a href="#about" className="hover:text-agro-forest transition-colors">FAQ</a></li>
                <li><a href="#about" className="hover:text-agro-forest transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-agro-muted">
            <div>
              © {new Date().getFullYear()} agrovia. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-agro-dark transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-agro-dark transition-colors">Privacy Policy</a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};
