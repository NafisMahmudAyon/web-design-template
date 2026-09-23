import React from 'react';
import { UserCheck, Tag, PhoneCall, ShieldCheck } from 'lucide-react';

export default function AgentTrustSection({ onContactAgent }) {
  return (
    <section id="contacts" className="w-full py-20 bg-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Value Points */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f334c] tracking-tight leading-[1.15] mb-10 max-w-lg">
              Get the house in trust by working with our agents
            </h2>

            {/* Feature 1: Empathy & Support */}
            <div className="flex items-start gap-4 mb-8 group">
              <div className="w-12 h-12 rounded-2xl bg-[#0f334c]/5 border border-[#0f334c]/10 flex items-center justify-center text-[#0f334c] shrink-0 group-hover:bg-[#0f334c] group-hover:text-white transition-colors duration-300">
                <UserCheck className="w-5 h-5 stroke-[1.75]" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-md">
                  After a simple phone call, our agents will come to your aid, making you feel at ease and trying to understand your needs. Empathy is essential for understanding the customer's needs.
                </p>
              </div>
            </div>

            {/* Feature 2: Flash Sales & Exclusive Deals */}
            <div className="flex items-start gap-4 mb-10 group">
              <div className="w-12 h-12 rounded-2xl bg-[#0f334c]/5 border border-[#0f334c]/10 flex items-center justify-center text-[#0f334c] shrink-0 group-hover:bg-[#0f334c] group-hover:text-white transition-colors duration-300">
                <Tag className="w-5 h-5 stroke-[1.75]" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-md">
                  The best deals don't last long, which is why we can contact you in case of unmissable flash sales in your preferred areas.
                </p>
              </div>
            </div>

            <div>
              <button
                onClick={onContactAgent}
                className="px-8 py-3.5 rounded-full text-xs font-bold text-white bg-[#0f334c] hover:bg-[#0a2334] transition-all shadow-lg shadow-navy-900/20 active:scale-95 inline-flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Talk to an Agent</span>
              </button>
            </div>
          </div>

          {/* Right Column: Layered Agent & Architecture Composition */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Background Architecture Card */}
            <div className="w-64 sm:w-80 h-72 sm:h-96 rounded-3xl overflow-hidden shadow-lg border border-gray-100 absolute left-4 sm:left-10 top-0 sm:top-4 opacity-90 group">
              <img
                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=600&q=80"
                alt="Contemporary residence backdrop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0f334c]/20" />
            </div>

            {/* Front Agent Card */}
            <div className="relative z-10 w-72 sm:w-88 h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white ml-24 sm:ml-36 bg-gray-100 group">
              <img
                src="/assets/agent.jpg"
                alt="Licensed Real Estate Senior Advisor"
                className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e2e]/70 via-transparent to-transparent" />

              {/* Agent Badge Overlay */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[10px] font-bold mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Senior Broker</span>
                </div>
                <h4 className="text-sm font-bold text-white">Mark Henderson</h4>
                <p className="text-[11px] text-white/80">14+ Years in Luxury Rentals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
