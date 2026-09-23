import React, { useState } from 'react';
import {
  ArrowLeft,
  Printer,
  ExternalLink,
  Reply,
  Star,
  Trash2,
  MoreVertical,
  Paperclip,
  Maximize2,
  Calendar,
  Send,
  Download,
  FileText,
  Plus,
} from 'lucide-react';

export default function MessageDetail({ email, onBack }) {
  const [replyText, setReplyText] = useState(
    email?.defaultReply ||
      `Hello, Mateusz\n\nThank you for your reminder. I will send the project-related documents soon and will also attach a summary of the findings and recommendations.`
  );
  const [isStarred, setIsStarred] = useState(email?.starred ?? true);
  const [sentToast, setSentToast] = useState(false);

  if (!email) {
    return (
      <div className="flex-1 bg-white flex items-center justify-center text-gray-400 text-sm">
        Select a message to view details
      </div>
    );
  }

  const handleSendReply = () => {
    setSentToast(true);
    setTimeout(() => {
      setSentToast(false);
      setReplyText('');
    }, 3000);
  };

  return (
    <main className="flex-1 bg-white flex flex-col justify-between h-full select-none overflow-hidden relative">
      {/* Toast Alert */}
      {sentToast && (
        <div className="absolute top-4 right-6 z-50 bg-[#0f334c] text-white text-xs px-4 py-2.5 rounded-xl shadow-xl border border-white/10 flex items-center gap-2 animate-slideDown">
          <span>Reply successfully sent to {email.sender.email}!</span>
        </div>
      )}

      {/* Top Header Bar */}
      <div className="px-6 py-3.5 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="md:hidden p-1.5 hover:bg-gray-100 rounded-lg text-gray-500"
            aria-label="Back"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          {/* Badges */}
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg border border-purple-200 bg-purple-50/50 text-[10px] font-bold text-purple-600">
              BWC Bank
            </span>
            <span className="px-2.5 py-1 rounded-lg border border-gray-200 bg-gray-50 text-[10px] font-bold text-gray-600">
              Payments
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-400">
          <button
            className="p-1.5 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            title="Print message"
          >
            <Printer className="w-4 h-4" />
          </button>
          <button
            className="p-1.5 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            title="Open in new window"
          >
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scrollable Email Content Body */}
      <div className="flex-1 overflow-y-auto px-8 py-6">
        {/* Sender Info Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100/60">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={email.sender.avatar}
                alt={email.sender.name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100"
              />
              {email.sender.online && (
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
              )}
            </div>

            <div>
              <h3 className="text-xs font-bold text-gray-900">{email.sender.name}</h3>
              <p className="text-[11px] text-gray-400">{email.sender.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span className="text-[11px] font-medium">{email.date}</span>

            <button
              className="p-1 hover:text-gray-700 transition-colors"
              title="Reply"
            >
              <Reply className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsStarred(!isStarred)}
              className="p-1 transition-colors"
              title="Star"
            >
              <Star
                className={`w-4 h-4 ${
                  isStarred ? 'fill-amber-400 text-amber-400' : 'text-gray-300 hover:text-amber-400'
                }`}
              />
            </button>

            <button
              className="p-1 hover:text-rose-600 transition-colors"
              title="Delete"
            >
              <Trash2 className="w-4 h-4" />
            </button>

            <button
              className="p-1 hover:text-gray-700 transition-colors"
              title="More options"
            >
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Email Subject Heading */}
        <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight mb-6">
          {email.subject}
        </h1>

        {/* Email Body Prose */}
        <div className="text-xs sm:text-sm text-gray-600 leading-relaxed space-y-4 mb-10 max-w-3xl whitespace-pre-line font-normal">
          {email.body}
        </div>

        {/* Attachments Section */}
        {email.attachments && email.attachments.length > 0 && (
          <div className="mb-8 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-bold text-gray-900">
                Attachments ({email.attachments.length} Files)
              </h4>
              <button className="text-xs font-bold text-[#a7a7fc] hover:underline flex items-center gap-1">
                <Download className="w-3.5 h-3.5" />
                <span>Receive all</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {email.attachments.map((att) => (
                <div
                  key={att.id}
                  className="rounded-2xl border border-gray-200 overflow-hidden bg-gray-50/50 hover:bg-white hover:shadow-md transition-all p-2 group cursor-pointer"
                >
                  <div className="w-full h-24 rounded-xl overflow-hidden bg-gray-200 mb-2 relative">
                    <img
                      src={att.preview}
                      alt={att.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="flex items-center justify-between px-1">
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-bold text-gray-800 truncate">{att.name}</p>
                      <p className="text-[10px] text-gray-400">{att.size}</p>
                    </div>
                    <FileText className="w-3.5 h-3.5 text-gray-400 shrink-0 ml-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Quick Reply Editor */}
      <div className="p-6 border-t border-gray-100 bg-white">
        <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#a7a7fc] transition-all">
          {/* Top Reply Recipient Bar */}
          <div className="px-4 py-2.5 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Reply className="w-3.5 h-3.5 text-gray-400" />
              <span className="px-2.5 py-1 rounded-lg bg-gray-200/80 text-[11px] font-semibold text-gray-700">
                {email.sender.email}
              </span>
              <button className="w-5 h-5 rounded hover:bg-gray-200 flex items-center justify-center text-gray-500">
                <Plus className="w-3 h-3" />
              </button>
            </div>

            <div className="flex items-center gap-2 text-gray-400">
              <button className="p-1 hover:text-gray-700">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              <button className="p-1 hover:text-gray-700">
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Textarea */}
          <textarea
            rows={3}
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write your reply..."
            className="w-full p-4 text-xs text-gray-800 focus:outline-none resize-none leading-relaxed"
          />

          {/* Bottom Action Controls */}
          <div className="px-4 py-2.5 bg-white border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3 text-gray-400">
              <button className="p-1.5 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <Paperclip className="w-4 h-4" />
              </button>
              <button className="px-2 py-1 text-xs font-bold hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                Aa
              </button>
            </div>

            <button
              onClick={handleSendReply}
              className="px-5 py-2 rounded-xl bg-[#fbe871] hover:bg-[#f6df60] text-gray-950 text-xs font-bold shadow-sm flex items-center gap-2 transition-all active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
