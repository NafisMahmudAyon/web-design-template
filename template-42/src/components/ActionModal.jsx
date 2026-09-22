import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Copy, 
  Check, 
  QrCode, 
  Send, 
  DollarSign, 
  FileText, 
  Plus, 
  ShieldCheck, 
  CreditCard, 
  Settings,
  Bell,
  Lock,
  ArrowRight
} from 'lucide-react';

export default function ActionModal({ isOpen, type, onClose, onAddGoalSubmit }) {
  const [copiedField, setCopiedField] = useState(null);
  
  // Send state
  const [sendRecipient, setSendRecipient] = useState('');
  const [sendAmount, setSendAmount] = useState('');
  const [sendNote, setSendNote] = useState('');
  const [sendSuccess, setSendSuccess] = useState(false);

  // Request state
  const [reqPayer, setReqPayer] = useState('');
  const [reqAmount, setReqAmount] = useState('');
  const [reqDescription, setReqDescription] = useState('');
  const [reqLinkCopied, setReqLinkCopied] = useState(false);

  // Add Goal state
  const [goalName, setGoalName] = useState('');
  const [goalTarget, setGoalTarget] = useState('');
  const [goalCategory, setGoalCategory] = useState('Personal');
  const [goalDate, setGoalDate] = useState('Dec 2026');

  if (!isOpen) return null;

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSendSubmit = (e) => {
    e.preventDefault();
    if (!sendAmount || !sendRecipient) return;
    setSendSuccess(true);
    setTimeout(() => {
      setSendSuccess(false);
      onClose();
    }, 1500);
  };

  const handleAddGoalSubmitInternal = (e) => {
    e.preventDefault();
    if (!goalName || !goalTarget) return;
    if (onAddGoalSubmit) {
      onAddGoalSubmit({
        id: `goal-${Date.now()}`,
        name: goalName,
        category: goalCategory,
        progress: 10,
        current: '$500',
        target: `$${goalTarget}`,
        icon: 'piggy',
        monthlyDeposit: '$250/mo',
        dueDate: goalDate,
      });
    }
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50/50">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center">
                {type === 'receive' && <DollarSign className="w-5 h-5" />}
                {type === 'send' && <Send className="w-5 h-5" />}
                {type === 'request' && <FileText className="w-5 h-5" />}
                {type === 'addGoal' && <Plus className="w-5 h-5" />}
                {type === 'settings' && <Settings className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {type === 'receive' && 'Receive Money'}
                  {type === 'send' && 'Send Money'}
                  {type === 'request' && 'Payment Request'}
                  {type === 'addGoal' && 'Create Savings Goal'}
                  {type === 'settings' && 'Account Settings'}
                </h3>
                <p className="text-xs text-slate-500">
                  {type === 'receive' && 'Share your account coordinates to receive funds'}
                  {type === 'send' && 'Transfer funds instantly to any account'}
                  {type === 'request' && 'Create an instant payment link'}
                  {type === 'addGoal' && 'Set a new financial target to track'}
                  {type === 'settings' && 'Manage your workspace and security'}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6">
            {/* 1. RECEIVE MONEY */}
            {type === 'receive' && (
              <div className="space-y-5">
                <div className="flex flex-col items-center justify-center p-6 bg-[#F8FAFC] rounded-2xl border border-slate-200/70 text-center">
                  {/* Visual QR Code SVG Representation */}
                  <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-200 mb-3">
                    <svg className="w-36 h-36" viewBox="0 0 120 120" fill="none">
                      <rect width="120" height="120" fill="white" />
                      {/* Top Left Finder */}
                      <rect x="10" y="10" width="30" height="30" rx="4" fill="#0F172A" />
                      <rect x="16" y="16" width="18" height="18" fill="white" />
                      <rect x="20" y="20" width="10" height="10" fill="#0F172A" />
                      {/* Top Right Finder */}
                      <rect x="80" y="10" width="30" height="30" rx="4" fill="#0F172A" />
                      <rect x="86" y="16" width="18" height="18" fill="white" />
                      <rect x="90" y="20" width="10" height="10" fill="#0F172A" />
                      {/* Bottom Left Finder */}
                      <rect x="10" y="80" width="30" height="30" rx="4" fill="#0F172A" />
                      <rect x="16" y="86" width="18" height="18" fill="white" />
                      <rect x="20" y="90" width="10" height="10" fill="#0F172A" />
                      {/* Pattern dots */}
                      <circle cx="50" cy="20" r="3" fill="#F97316" />
                      <circle cx="65" cy="20" r="3" fill="#0F172A" />
                      <circle cx="50" cy="35" r="3" fill="#0F172A" />
                      <circle cx="65" cy="35" r="3" fill="#F97316" />
                      <rect x="48" y="48" width="24" height="24" rx="4" fill="#0F172A" />
                      <rect x="54" y="54" width="12" height="12" rx="2" fill="#F97316" />
                      <circle cx="20" cy="55" r="3" fill="#0F172A" />
                      <circle cx="32" cy="55" r="3" fill="#0F172A" />
                      <circle cx="20" cy="67" r="3" fill="#0F172A" />
                      <circle cx="32" cy="67" r="3" fill="#0F172A" />
                      <circle cx="85" cy="55" r="3" fill="#0F172A" />
                      <circle cx="98" cy="55" r="3" fill="#0F172A" />
                      <circle cx="85" cy="67" r="3" fill="#0F172A" />
                      <circle cx="98" cy="67" r="3" fill="#0F172A" />
                      <circle cx="50" cy="85" r="3" fill="#0F172A" />
                      <circle cx="65" cy="85" r="3" fill="#0F172A" />
                      <circle cx="50" cy="98" r="3" fill="#F97316" />
                      <circle cx="65" cy="98" r="3" fill="#0F172A" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">
                    Scan using your mobile banking app
                  </span>
                </div>

                {/* Account Details */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div>
                      <span className="text-[11px] font-semibold uppercase text-slate-400 tracking-wider block">
                        IBAN / Account Number
                      </span>
                      <span className="text-xs sm:text-sm font-mono font-bold text-slate-800">
                        US89 3704 0044 0532 0130 00
                      </span>
                    </div>
                    <button
                      onClick={() => handleCopy('US89 3704 0044 0532 0130 00', 'iban')}
                      className="p-2 text-slate-500 hover:text-orange-600 rounded-xl hover:bg-slate-200/60 transition"
                      title="Copy IBAN"
                    >
                      {copiedField === 'iban' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div>
                      <span className="text-[11px] font-semibold uppercase text-slate-400 tracking-wider block">
                        SWIFT / BIC
                      </span>
                      <span className="text-xs sm:text-sm font-mono font-bold text-slate-800">
                        STEADIUS33
                      </span>
                    </div>
                    <button
                      onClick={() => handleCopy('STEADIUS33', 'bic')}
                      className="p-2 text-slate-500 hover:text-orange-600 rounded-xl hover:bg-slate-200/60 transition"
                      title="Copy SWIFT"
                    >
                      {copiedField === 'bic' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 2. SEND MONEY */}
            {type === 'send' && (
              <form onSubmit={handleSendSubmit} className="space-y-4">
                {sendSuccess ? (
                  <div className="py-8 text-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6 stroke-[3]" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900">Transfer Initiated!</h4>
                    <p className="text-xs text-slate-500">
                      ${sendAmount} has been queued for immediate settlement.
                    </p>
                  </div>
                ) : (
                  <>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Recipient Name or Email
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. sarah.connor@gmail.com"
                        value={sendRecipient}
                        onChange={(e) => setSendRecipient(e.target.value)}
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 text-sm font-medium"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Amount (USD)
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                        <input
                          type="number"
                          placeholder="0.00"
                          step="0.01"
                          value={sendAmount}
                          onChange={(e) => setSendAmount(e.target.value)}
                          required
                          className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 text-sm font-bold"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Transfer Note (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="Invoice #492 or Dinner Split"
                        value={sendNote}
                        onChange={(e) => setSendNote(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 text-sm"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md shadow-orange-500/20 transition active:scale-[0.98] flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>Confirm Transfer</span>
                      </button>
                    </div>
                  </>
                )}
              </form>
            )}

            {/* 3. PAYMENT REQUEST */}
            {type === 'request' && (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Request From (Client / Contact)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Design Studio Agency"
                    value={reqPayer}
                    onChange={(e) => setReqPayer(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Amount Requested
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                    <input
                      type="number"
                      placeholder="500.00"
                      value={reqAmount}
                      onChange={(e) => setReqAmount(e.target.value)}
                      className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Memo
                  </label>
                  <input
                    type="text"
                    placeholder="Consulting services - September"
                    value={reqDescription}
                    onChange={(e) => setReqDescription(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setReqLinkCopied(true);
                      setTimeout(() => setReqLinkCopied(false), 2000);
                    }}
                    className="w-full py-3 rounded-2xl bg-slate-900 hover:bg-black text-white font-bold text-sm shadow-md transition active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    {reqLinkCopied ? (
                      <>
                        <Check className="w-4 h-4 text-green-400" />
                        <span>Payment Link Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Generate & Copy Link</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* 4. ADD GOAL */}
            {type === 'addGoal' && (
              <form onSubmit={handleAddGoalSubmitInternal} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Goal Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. New Apartment Deposit"
                    value={goalName}
                    onChange={(e) => setGoalName(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Target Amount ($)
                    </label>
                    <input
                      type="text"
                      placeholder="15,000"
                      value={goalTarget}
                      onChange={(e) => setGoalTarget(e.target.value)}
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Target Date
                    </label>
                    <input
                      type="text"
                      placeholder="Dec 2027"
                      value={goalDate}
                      onChange={(e) => setGoalDate(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Category
                  </label>
                  <select
                    value={goalCategory}
                    onChange={(e) => setGoalCategory(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium bg-white focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500"
                  >
                    <option value="Real Estate">Real Estate</option>
                    <option value="Travel">Travel</option>
                    <option value="Vehicle">Vehicle</option>
                    <option value="Education">Education</option>
                    <option value="Personal">Personal</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md shadow-orange-500/20 transition active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4 stroke-[3]" />
                    <span>Create Savings Goal</span>
                  </button>
                </div>
              </form>
            )}

            {/* 5. SETTINGS */}
            {type === 'settings' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-200 text-slate-700">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">Two-Factor Authentication</span>
                      <span className="text-[11px] text-slate-500">Protect transfers with biometrics / 2FA</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-[11px] font-bold">
                    Active
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-200 text-slate-700">
                      <Bell className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">Push Notifications</span>
                      <span className="text-[11px] text-slate-500">Real-time alerts for incoming deposits</span>
                    </div>
                  </div>
                  <input type="checkbox" defaultChecked className="toggle-checkbox accent-orange-500 w-4 h-4 rounded" />
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-200 text-slate-700">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">Steadi Encryption Key</span>
                      <span className="text-[11px] text-slate-500">AES-256 bank-level financial vault</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-600">ST-2026-X8</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
