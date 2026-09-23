import React from 'react';
import { MoreHorizontal, Check, Clock } from 'lucide-react';
import { TIMELINE_TASKS } from '../data/drankData';

export default function TasksTimelineCard() {
  return (
    <div className="bg-[#12131a] rounded-[32px] p-5 border border-[#1f212c] shadow-lg flex flex-col justify-between select-none">
      {/* 1. Header & Finish Tasks Sparkline */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-bold text-white tracking-wide">
            16/30 <span className="text-[#6d7085] font-normal">Finish tasks</span>
          </h3>
          <button
            type="button"
            aria-label="Tasks options"
            className="w-6 h-6 rounded-full hover:bg-[#1a1c27] text-[#6d7085] hover:text-white flex items-center justify-center transition-colors"
          >
            <MoreHorizontal className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Sinusoidal Wave SVG Sparkline */}
        <div className="w-full h-12 relative my-1">
          <svg
            viewBox="0 0 200 40"
            className="w-full h-full overflow-visible"
            preserveAspectRatio="none"
          >
            <path
              d="M 0,25 Q 25,35 50,20 T 100,10 T 150,28 T 200,8"
              fill="none"
              stroke="#8e92a8"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Axis Numbers */}
        <div className="flex justify-between text-[10px] text-[#55586d] font-mono px-1">
          <span>5</span>
          <span>10</span>
          <span>15</span>
          <span>20</span>
          <span>25</span>
          <span>30</span>
        </div>
      </div>

      {/* 2. Stage 3 Progress Card */}
      <div className="bg-[#181a24] rounded-2xl p-3 border border-[#232535] flex items-center gap-3.5 my-3">
        {/* Circular Progress Gauge */}
        <div className="relative w-11 h-11 shrink-0 flex items-center justify-center">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            <path
              className="text-[#262838]"
              strokeWidth="3.5"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-[#7ae2a4]"
              strokeDasharray="23, 100"
              strokeWidth="3.5"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <span className="absolute text-[10px] font-bold text-white tracking-tight">
            23%
          </span>
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-medium text-[#7d8095]">Stage 3</p>
          <p className="text-xs font-semibold text-white leading-tight mt-0.5 line-clamp-2">
            Develop UI Components Based on Design System
          </p>
        </div>
      </div>

      {/* 3. Steps Timeline */}
      <div className="relative flex flex-col gap-3.5 pt-2">
        {/* Vertical line behind icons */}
        <div className="absolute left-[13px] top-4 bottom-4 w-[1px] bg-[#222434] pointer-events-none"></div>

        {TIMELINE_TASKS.map((step) => {
          const isCompleted = step.status === 'completed';
          const isInProgress = step.status === 'in-progress';

          return (
            <div
              key={step.id}
              className="flex items-start justify-between gap-3 group cursor-pointer"
            >
              <div className="flex items-start gap-3 min-w-0">
                {/* Node Icon */}
                <div
                  className={`relative z-10 w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${
                    isCompleted
                      ? 'bg-[#10b981]/20 border border-[#10b981] text-[#7ae2a4]'
                      : isInProgress
                      ? 'bg-[#1b1d28] border border-dashed border-[#7ae2a4] text-white'
                      : 'bg-[#151620] border border-[#262838] text-[#55586d]'
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  ) : isInProgress ? (
                    <div className="flex gap-0.5">
                      <span className="w-1 h-1 rounded-full bg-white animate-pulse"></span>
                      <span className="w-1 h-1 rounded-full bg-white animate-pulse delay-75"></span>
                      <span className="w-1 h-1 rounded-full bg-white animate-pulse delay-150"></span>
                    </div>
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3d4052]"></span>
                  )}
                </div>

                {/* Title */}
                <p
                  className={`text-xs leading-snug mt-1 transition-colors ${
                    isCompleted
                      ? 'text-gray-200 font-semibold'
                      : isInProgress
                      ? 'text-white font-medium'
                      : 'text-[#6f7287] group-hover:text-gray-300'
                  }`}
                >
                  {step.title}
                </p>
              </div>

              {/* Time */}
              <span className="text-[10px] text-[#5e6175] font-mono shrink-0 mt-1">
                {step.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
