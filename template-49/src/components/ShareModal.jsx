import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Copy, Share2, Mail, Users } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ShareModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [collaboratorEmail, setCollaboratorEmail] = useState('');
  const [invited, setInvited] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://oripiofin.io/dashboard/v/treasury-2026');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInvite = (e) => {
    e.preventDefault();
    if (!collaboratorEmail) return;
    setInvited(true);
    confetti({
      particleCount: 60,
      spread: 50,
      origin: { y: 0.6 },
      colors: ['#105B3A', '#22C55E'],
    });
    setTimeout(() => {
      setInvited(false);
      setCollaboratorEmail('');
      onClose();
    }, 2200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-md rounded-3xl bg-white border border-slate-200 p-8 shadow-2xl text-slate-900"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Share Treasury Report</h3>
              <p className="text-xs text-slate-400">Collaborate with accountants and stakeholders</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Direct Link</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value="https://oripiofin.io/dashboard/v/treasury-2026"
                  className="flex-1 py-2 px-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 focus:outline-none"
                />
                <button
                  onClick={handleCopyLink}
                  className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Invite Teammate</label>
              <form onSubmit={handleInvite} className="space-y-3">
                <input
                  type="email"
                  required
                  value={collaboratorEmail}
                  onChange={(e) => setCollaboratorEmail(e.target.value)}
                  placeholder="cfo@company.com"
                  className="w-full py-2.5 px-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-emerald-700"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  {invited ? <Check className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
                  <span>{invited ? 'Invitation Sent!' : 'Send Access Invite'}</span>
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
