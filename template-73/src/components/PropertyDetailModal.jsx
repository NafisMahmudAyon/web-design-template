import React, { useState } from 'react';
import { X, CheckCircle2, Bed, Bath, MapPin, Camera, FileText, Calendar } from 'lucide-react';

export default function PropertyDetailModal({ isOpen, onClose, property }) {
  const [scheduled, setScheduled] = useState(false);

  if (!isOpen || !property) return null;

  const handleSchedule = (e) => {
    e.preventDefault();
    setScheduled(true);
    setTimeout(() => {
      setScheduled(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 text-gray-500 hover:text-black flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {scheduled ? (
          <div className="py-12 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-condensed font-black tracking-wide text-black uppercase mb-1">
              Tour Scheduled!
            </h3>
            <p className="text-xs text-gray-500">
              A licensed broker for {property.title} will confirm your appointment via email.
            </p>
          </div>
        ) : (
          <div>
            {/* Image Banner */}
            <div className="relative rounded-xl overflow-hidden aspect-[16/9] mb-4 bg-neutral-900">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="px-2 py-1 bg-black/70 backdrop-blur-md rounded text-[10px] font-bold text-white flex items-center gap-1">
                  <Camera className="w-3 h-3" />
                  <span>{property.photos} Photos</span>
                </span>
                <span className="px-2 py-1 bg-black/70 backdrop-blur-md rounded text-[10px] font-bold text-white flex items-center gap-1">
                  <FileText className="w-3 h-3" />
                  <span>{property.plans} Floor Plans</span>
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-condensed font-black tracking-wide text-black uppercase">
                {property.title}
              </h3>
              <span className="text-xl font-black text-black">
                {property.price}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-500 pb-4 border-b border-gray-100 mb-6">
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                <span>{property.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Bed className="w-3.5 h-3.5" />
                  <span>{property.beds} Beds</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Bath className="w-3.5 h-3.5" />
                  <span>{property.baths} Baths</span>
                </span>
              </div>
            </div>

            <form onSubmit={handleSchedule} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-xs focus:ring-1 focus:ring-black focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-xs focus:ring-1 focus:ring-black focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book In-Person Viewing</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
