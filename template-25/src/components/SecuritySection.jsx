import React from 'react';
import { ShieldCheck, Fingerprint, Lock, Bell, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function SecuritySection() {
  return (
    <section id="security" className="py-20 bg-[#eff1e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#0b2416] text-white rounded-3xl border-3 border-[#0b2416] p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Security Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-emerald-900/60 border border-emerald-700/50 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#bef264]">
                <ShieldCheck className="w-4 h-4" />
                <span>BANK-GRADE ENCRYPTION</span>
              </div>

              <h2 className="font-display text-4xl sm:text-6xl font-black uppercase leading-tight tracking-tight">
                YOUR MONEY, <br />
                <span className="text-[#bef264]">LOCKED DOWN.</span>
              </h2>

              <p className="text-base text-white/80 font-medium leading-relaxed">
                Deposits are protected up to $250,000. Everything else is handled by autonomous risk engines that never sleep.
              </p>

              {/* Security Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs font-black uppercase px-3 py-1.5 rounded-lg bg-white/10 text-white border border-white/20">
                  AES-256
                </span>
                <span className="text-xs font-black uppercase px-3 py-1.5 rounded-lg bg-white/10 text-white border border-white/20">
                  SOC-2 TYPE II
                </span>
                <span className="text-xs font-black uppercase px-3 py-1.5 rounded-lg bg-white/10 text-white border border-white/20">
                  PCI DSS COMPLIANT
                </span>
              </div>
            </div>

            {/* Right 4 Security Cards Grid */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Feature 1 */}
                <div className="bg-emerald-950/80 p-5 rounded-2xl border border-emerald-800/40 space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-[#bef264]/20 text-[#bef264] flex items-center justify-center font-bold">
                    <Fingerprint className="w-5 h-5" />
                  </div>
                  <h4 className="font-display text-base font-black text-white uppercase">
                    Biometric access
                  </h4>
                  <p className="text-xs text-white/70 font-medium">
                    Face and fingerprint sign-in, plus device binding on every new login.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="bg-emerald-950/80 p-5 rounded-2xl border border-emerald-800/40 space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-[#bef264]/20 text-[#bef264] flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-display text-base font-black text-white uppercase">
                    Fraud detection
                  </h4>
                  <p className="text-xs text-white/70 font-medium">
                    Models score every transaction in 40ms and stop anything that looks off.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="bg-emerald-950/80 p-5 rounded-2xl border border-emerald-800/40 space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-[#bef264]/20 text-[#bef264] flex items-center justify-center font-bold">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h4 className="font-display text-base font-black text-white uppercase">
                    One-tap freeze
                  </h4>
                  <p className="text-xs text-white/70 font-medium">
                    Lost your card at the airport? Freeze it instantly, unfreeze when it turns up.
                  </p>
                </div>

                {/* Feature 4: Live Alerts (Highlight Neon Card) */}
                <div className="bg-[#bef264] text-[#0b2416] p-5 rounded-2xl border-2 border-[#0b2416] space-y-2 shadow-lg">
                  <div className="w-9 h-9 rounded-xl bg-[#0b2416] text-[#bef264] flex items-center justify-center font-bold">
                    <Bell className="w-5 h-5" />
                  </div>
                  <h4 className="font-display text-base font-black uppercase">
                    Live alerts
                  </h4>
                  <p className="text-xs font-bold text-[#0b2416]/80">
                    A notification for every payment, with a one-tap "wasn't me" button.
                  </p>
                </div>

              </div>

              {/* Bottom Audit Log Status */}
              <div className="bg-[#0b2416] p-4 rounded-xl border border-emerald-800/40 flex items-center justify-between text-xs font-bold text-white/80">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#bef264]" />
                  <span>Secure login verified — New device · Oslo, Norway · 2 min ago</span>
                </div>
                <span className="bg-emerald-900 text-[#bef264] text-[10px] font-black px-2.5 py-0.5 rounded border border-emerald-700">
                  • Approved
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
