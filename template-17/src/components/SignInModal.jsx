import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Lock, Mail, ArrowRight } from 'lucide-react';
import GolfioLogo from './GolfioLogo';

export default function SignInModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('alex.carter@golfersclub.com');
  const [password, setPassword] = useState('••••••••••••');
  const [signedIn, setSignedIn] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignedIn(true);
    setTimeout(() => {
      onClose();
      setSignedIn(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-[#0e2218] border border-white/15 rounded-3xl w-full max-w-md p-6 sm:p-8 text-white shadow-2xl relative"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <GolfioLogo className="h-7 mb-4" />
          <h3 className="text-2xl font-bold tracking-tight">Member Portal</h3>
          <p className="text-xs text-white/70 mt-1">Access your handicap tracking, rounds, and coach feedback.</p>
        </div>

        {signedIn ? (
          <div className="p-6 rounded-2xl bg-[#E2F844]/20 border border-[#E2F844] text-[#E2F844] text-center font-bold">
            Welcome back, Alex! Loading dashboard...
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-white/80 mb-1 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#E2F844]" /> Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#153324] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E2F844]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-white/80 mb-1 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#E2F844]" /> Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-[#153324] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E2F844]"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-white/70">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded accent-[#E2F844]" />
                <span>Remember me</span>
              </label>
              <a href="#forgot" className="text-[#E2F844] hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-[#E2F844] hover:bg-[#d0e536] text-[#0a1711] font-bold py-3.5 rounded-full transition-all hover:scale-[1.02] shadow-lg shadow-[#E2F844]/20"
            >
              Sign In
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
