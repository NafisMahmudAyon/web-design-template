import React, { useState } from 'react';
import { 
  Plus, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Plane, 
  Car, 
  PiggyBank 
} from 'lucide-react';
import { INITIAL_GOALS } from '../data/steadiData';

export default function SavingsGoalsCard({ onOpenAddGoal }) {
  const [goals, setGoals] = useState(INITIAL_GOALS);
  const [expandedGoalId, setExpandedGoalId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedGoalId(prev => prev === id ? null : id);
  };

  const getGoalIcon = (iconName) => {
    switch (iconName) {
      case 'shield':
        return <ShieldCheck className="w-4 h-4 text-orange-400" />;
      case 'plane':
        return <Plane className="w-4 h-4 text-orange-400" />;
      case 'car':
        return <Car className="w-4 h-4 text-orange-400" />;
      default:
        return <PiggyBank className="w-4 h-4 text-orange-400" />;
    }
  };

  return (
    <div className="bg-[#12151D] rounded-3xl p-6 text-white shadow-xl">
      {/* Header with Title and Add Goal Button */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-white">
            <PiggyBank className="w-4 h-4" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
            My Savings Goals
          </h3>
        </div>

        <button
          onClick={onOpenAddGoal}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-slate-100 text-[#111827] text-xs font-bold shadow-xs transition active:scale-95"
        >
          <Plus className="w-3.5 h-3.5 stroke-[3]" />
          <span>Add Goal</span>
        </button>
      </div>

      {/* Goal Rows */}
      <div className="space-y-3">
        {goals.map((goal) => {
          const isExpanded = expandedGoalId === goal.id;

          return (
            <div
              key={goal.id}
              className="bg-[#1A1E29] hover:bg-[#202534] border border-white/5 rounded-2xl p-4 transition-all duration-150 cursor-pointer"
              onClick={() => toggleExpand(goal.id)}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                {/* Goal Name & Icon */}
                <div className="flex items-center gap-3 sm:w-1/4">
                  <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    {getGoalIcon(goal.icon)}
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-white block">
                      {goal.name}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {goal.category}
                    </span>
                  </div>
                </div>

                {/* Percentage & Horizontal Progress Bar */}
                <div className="flex items-center gap-3 flex-1 px-0 sm:px-4">
                  <span className="text-xs font-bold text-slate-300 w-10">
                    {goal.progress}%
                  </span>
                  <div className="flex-1 h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      style={{ width: `${goal.progress}%` }}
                      className="h-full rounded-full bg-orange-500 transition-all duration-300 shadow-sm"
                    />
                  </div>
                </div>

                {/* Target Ratio & Expand Chevron */}
                <div className="flex items-center justify-between sm:justify-end gap-3 sm:w-1/4">
                  <span className="text-xs font-semibold text-slate-300">
                    {goal.current} <span className="text-slate-500">/ {goal.target}</span>
                  </span>
                  <button className="p-1 text-slate-400 hover:text-white rounded transition">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Expandable Sub-details */}
              {isExpanded && (
                <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 animate-in fade-in duration-150">
                  <div>
                    <span>Recurring Deposit: </span>
                    <span className="text-white font-semibold">{goal.monthlyDeposit}</span>
                  </div>
                  <div>
                    <span>Target Date: </span>
                    <span className="text-orange-400 font-semibold">{goal.dueDate}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
