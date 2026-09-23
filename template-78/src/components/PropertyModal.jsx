import React, { useState } from 'react';
import { X, Bed, Maximize2, MapPin, Check, Calendar, Phone, Mail, User, ShieldCheck } from 'lucide-react';

export const PropertyModal = ({ property, onClose }) => {
  const [scheduled, setScheduled] = useState(false);
  const [date, setDate] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  if (!property) return null;

  const handleBooking = (e) => {
    e.preventDefault();
    setScheduled(true);
    setTimeout(() => {
      setScheduled(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 my-8 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-neutral-800 flex items-center justify-center shadow-md transition-all duration-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left Media & Key Details Column */}
          <div className="md:col-span-6 bg-neutral-900 text-white flex flex-col">
            <div className="relative h-64 sm:h-80 w-full overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/95 text-neutral-900 font-serif font-bold text-lg px-4 py-1.5 rounded-md shadow-md">
                {property.price}
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-investa-accent font-semibold">
                  {property.category} • {property.country}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-white">
                  {property.title}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed">
                  {property.description}
                </p>

                {/* Amenities / Key features */}
                <div className="mt-6 pt-6 border-t border-neutral-800">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-3">
                    Premium Features
                  </h4>
                  <ul className="space-y-2">
                    {property.features.map((feat, i) => (
                      <li key={i} className="text-xs text-neutral-300 flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-investa-accent shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Specs bar */}
              <div className="mt-8 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-300">
                <span className="flex items-center gap-1.5">
                  <Bed className="w-4 h-4 text-investa-accent" />
                  {property.beds} Bedrooms
                </span>
                <span className="flex items-center gap-1.5">
                  <Maximize2 className="w-4 h-4 text-investa-accent" />
                  {property.area} Total Area
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Verified Title
                </span>
              </div>
            </div>
          </div>

          {/* Right Scheduling & Contact Column */}
          <div className="md:col-span-6 p-6 sm:p-10 flex flex-col justify-between bg-white">
            <div>
              <div className="mb-6">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400">
                  Direct Inquiries
                </span>
                <h4 className="font-serif text-2xl font-bold text-neutral-900 mt-1">
                  Schedule Private Showing
                </h4>
                <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                  Connect directly with our dedicated senior portfolio advisor for a bespoke tour.
                </p>
              </div>

              {scheduled ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h5 className="font-serif text-lg font-bold text-emerald-900">
                    Viewing Scheduled!
                  </h5>
                  <p className="text-xs text-emerald-700">
                    Our lead concierge will reach out within 2 hours to confirm your private showing.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBooking} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Your Full Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-neutral-400 absolute left-3 top-3.5" />
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full pl-9 pr-3.5 py-3 border border-neutral-300 rounded-md text-sm text-neutral-800 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-neutral-400 absolute left-3 top-3.5" />
                      <input
                        type="tel"
                        required
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full pl-9 pr-3.5 py-3 border border-neutral-300 rounded-md text-sm text-neutral-800 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-neutral-400 absolute left-3 top-3.5" />
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full pl-9 pr-3.5 py-3 border border-neutral-300 rounded-md text-sm text-neutral-800 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#202020] hover:bg-neutral-800 text-white font-medium text-sm rounded-md shadow-sm transition-all duration-200 mt-2"
                  >
                    Confirm Private Showing
                  </button>
                </form>
              )}
            </div>

            {/* Advisor Signature Card */}
            <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center gap-3.5">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                alt="Senior Advisor"
                className="w-11 h-11 rounded-full object-cover border border-neutral-200"
              />
              <div>
                <p className="text-xs font-bold text-neutral-900">
                  Sarah Kensington
                </p>
                <p className="text-[11px] text-neutral-400">
                  Principal Partner &bull; Luxury Portfolio Advisor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
