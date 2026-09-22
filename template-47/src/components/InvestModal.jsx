import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Sprout, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export const InvestModal = ({ isOpen, onClose }) => {
  const [tier, setTier] = useState('producer');
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
      colors: ['#B7F436', '#1E3A24', '#22c55e'],
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
          className="relative w-full max-w-md rounded-3xl bg-white border border-agro-border p-8 shadow-2xl text-agro-dark"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-agro-subtle flex items-center justify-center text-agro-muted hover:text-agro-dark hover:bg-agro-border/80 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {isSuccess ? (
            <div className="py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-agro-lime text-agro-forest flex items-center justify-center mx-auto mb-4 font-black">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h3 className="text-2xl font-bold text-agro-dark">Welcome to Agrovia!</h3>
              <p className="text-sm text-agro-muted mt-2">
                Your investment and onboarding portal is being initialized.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-agro-lime flex items-center justify-center text-agro-forest shadow-xs">
                  <Sprout className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-agro-dark">Start Investing with Agrovia</h3>
                  <p className="text-xs text-agro-muted">Smart agricultural technology & yield index</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-agro-dark mb-1.5">Select Profile</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setTier('producer')}
                      className={`p-3 rounded-xl border text-left text-xs font-bold transition-all ${
                        tier === 'producer'
                          ? 'border-agro-forest bg-agro-forest text-white'
                          : 'border-agro-border bg-agro-subtle text-agro-dark hover:border-agro-forest/40'
                      }`}
                    >
                      Agricultural Producer
                    </button>
                    <button
                      type="button"
                      onClick={() => setTier('institutional')}
                      className={`p-3 rounded-xl border text-left text-xs font-bold transition-all ${
                        tier === 'institutional'
                          ? 'border-agro-forest bg-agro-forest text-white'
                          : 'border-agro-border bg-agro-subtle text-agro-dark hover:border-agro-forest/40'
                      }`}
                    >
                      AgTech Investor
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-agro-dark mb-1.5">Work Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="partner@agriholdings.com"
                    className="w-full py-2.5 px-4 rounded-xl bg-agro-subtle border border-agro-border text-sm text-agro-dark focus:outline-none focus:border-agro-forest"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-agro-lime text-agro-forest font-extrabold text-sm hover:bg-agro-lime-hover transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <span>Request Investor Deck</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-agro-muted">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified Agricultural Security & Compliance</span>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
