import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Sprout, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export const InvestModal = ({ isOpen, onClose }) => {
  const [profile, setProfile] = useState('grower');
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#B7F436', '#183821', '#204A2C'],
    });

    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2400);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md rounded-3xl bg-white border border-terra-border p-8 shadow-2xl text-terra-dark"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-terra-subtle flex items-center justify-center text-terra-muted hover:text-terra-dark hover:bg-terra-border/80 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {isSuccess ? (
            <div className="py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-terra-lime text-terra-forest flex items-center justify-center mx-auto mb-4 font-black">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h3 className="text-2xl font-bold text-terra-dark">Welcome to TerraFarm!</h3>
              <p className="text-sm text-terra-muted mt-2">
                Your investment overview and grower prospectus have been delivered.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-terra-lime flex items-center justify-center text-terra-forest shadow-xs">
                  <Sprout className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-terra-dark">Invest in Future Agriculture</h3>
                  <p className="text-xs text-terra-muted">TerraFarm Autonomous Yield & Technology Fund</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-terra-dark mb-1.5">Investor Type</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setProfile('grower')}
                      className={`p-3 rounded-xl border text-left text-xs font-bold transition-all ${
                        profile === 'grower'
                          ? 'border-terra-forest bg-terra-forest text-white'
                          : 'border-terra-border bg-terra-subtle text-terra-dark'
                      }`}
                    >
                      Landowner / Grower
                    </button>
                    <button
                      type="button"
                      onClick={() => setProfile('fund')}
                      className={`p-3 rounded-xl border text-left text-xs font-bold transition-all ${
                        profile === 'fund'
                          ? 'border-terra-forest bg-terra-forest text-white'
                          : 'border-terra-border bg-terra-subtle text-terra-dark'
                      }`}
                    >
                      AgTech Syndicate
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-terra-dark mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="invest@terrafarm.ag"
                    className="w-full py-2.5 px-4 rounded-xl bg-terra-subtle border border-terra-border text-sm text-terra-dark focus:outline-none focus:border-terra-forest"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-terra-lime text-terra-forest font-extrabold text-sm hover:bg-terra-lime-hover transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <span>Request Information Deck</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-terra-muted">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Sustainable Agriculture Standard Audited</span>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
