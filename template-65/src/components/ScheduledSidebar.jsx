import React from 'react';
import { Calendar, ChevronLeft, ChevronRight, Clock, Video } from 'lucide-react';

export default function ScheduledSidebar({
  selectedDateText = '8 September, 2025',
  agendaItems = [],
  onOpenMeet,
  onEventClick,
}) {
  return (
    <aside className="w-full lg:w-80 xl:w-96 flex flex-col p-6 bg-[#18212F]/90 border-t lg:border-t-0 lg:border-l border-[#283549]/70 shrink-0">
      {/* Header */}
      <div className="flex items-center justify-between pb-6 border-b border-[#283549]/60">
        <div>
          <h2 className="text-xl font-extrabold text-white tracking-tight">
            Scheduled
          </h2>
          <p className="text-xs text-[#8B9CB2] mt-0.5">
            {selectedDateText}
          </p>
        </div>

        {/* Date Controls */}
        <div className="flex items-center gap-1.5">
          <button
            title="Calendar picker"
            className="w-8 h-8 rounded-full bg-[#1C2535] border border-[#283549] hover:border-[#2B85FF] flex items-center justify-center text-[#8B9CB2] hover:text-white transition-colors cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
          </button>
          <button
            title="Previous Day"
            className="w-8 h-8 rounded-full bg-[#1C2535] border border-[#283549] hover:border-[#2B85FF] flex items-center justify-center text-[#8B9CB2] hover:text-white transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            title="Next Day"
            className="w-8 h-8 rounded-full bg-[#1C2535] border border-[#283549] hover:border-[#2B85FF] flex items-center justify-center text-[#8B9CB2] hover:text-white transition-colors cursor-pointer"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Events List */}
      <div className="space-y-6 pt-6 flex-1 overflow-y-auto pr-1">
        {agendaItems.length === 0 ? (
          <div className="py-12 text-center text-xs text-[#8B9CB2]">
            No scheduled events for this day. Click on any date cell to plan an activity.
          </div>
        ) : (
          agendaItems.map((event) => (
            <div key={event.id} className="space-y-2">
              {/* Time Slot Label */}
              <div className="text-xs font-mono font-semibold text-[#8B9CB2]">
                {event.timeSlot}
              </div>

              {/* Event Card */}
              <div
                onClick={() => onEventClick && onEventClick(event)}
                className="rounded-2xl bg-[#1C2535] border border-[#283549] p-4.5 hover:border-[#283549]/90 hover:bg-[#202B3D] transition-all cursor-pointer shadow-lg relative overflow-hidden group"
              >
                {/* Top Accent Stripe */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl"
                  style={{ backgroundColor: event.accentColor }}
                />

                {/* Card Title & Subtitle */}
                <h3 className="text-sm font-bold text-white tracking-tight mt-1 group-hover:text-[#2B85FF] transition-colors">
                  {event.title}
                </h3>
                <p className="text-[11px] text-[#8B9CB2] mt-0.5 font-medium">
                  {event.subtitle}
                </p>

                {/* Time Range & Duration */}
                <div className="flex items-center justify-between text-[11px] text-neutral-400 mt-3 pt-3 border-t border-[#283549]/40 font-mono">
                  <div className="flex items-center gap-1.5 text-neutral-300">
                    <Clock className="w-3 h-3 text-[#8B9CB2]" />
                    <span>{event.timeRange}</span>
                  </div>
                  <span>{event.duration}</span>
                </div>

                {/* Meet Link or Attendees Row */}
                {event.hasMeetLink ? (
                  <div className="mt-3 pt-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenMeet && onOpenMeet(event);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#253346] hover:bg-[#2B85FF] text-white text-xs font-semibold transition-all cursor-pointer shadow-sm group/btn"
                    >
                      <Video className="w-3.5 h-3.5 text-[#D4E738] group-hover/btn:text-white transition-colors" />
                      <span>Meet Link</span>
                    </button>
                  </div>
                ) : event.attendees ? (
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {event.attendees.map((att, i) => (
                        <img
                          key={i}
                          src={att.avatar}
                          alt={att.name}
                          className="w-5 h-5 rounded-full border border-[#1C2535] object-cover"
                        />
                      ))}
                    </div>
                    <span className="text-[11px] text-[#8B9CB2] truncate">
                      {event.attendeeText}
                    </span>
                  </div>
                ) : null}
              </div>
            </div>
          ))
        )}
      </div>
    </aside>
  );
}
