import React, { useState, useEffect } from 'react';
import { MoreVertical } from 'lucide-react';

export default function GoalsProduction({ goals }) {
  const targetTotal = goals ? goals.total : 89;
  const openPlay = goals ? goals.openPlay : 72;
  const setPiece = goals ? goals.setPiece : 17;
  const totalSegments = goals ? goals.totalSegments : 26;
  const openPlaySegments = goals ? goals.openPlaySegments : 21;

  const [goalsCount, setGoalsCount] = useState(0);

  useEffect(() => {
    setGoalsCount(0);
    const duration = 1200;
    const steps = 30;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setGoalsCount(Math.round(targetTotal * progress));
      if (step >= steps) clearInterval(timer);
    }, intervalTime);

    return () => clearInterval(timer);
  }, [targetTotal]);

  return (
    <div key={targetTotal} className="glass-card element-stagger-1">
      <div className="card-header" style={{ marginBottom: '8px' }}>
        <h3 className="card-title" style={{ fontSize: '15px' }}>
          <span className="live-status-dot" />
          Goals production
        </h3>
        <button className="close-btn icon-spin-hover" title="Options">
          <MoreVertical size={16} />
        </button>
      </div>

      <div className="goals-big-number number-counter-anim">{goalsCount}</div>
      <div className="goals-sub">Total goal • 32 matches</div>

      <div className="goals-breakdown-row">
        <span className="breakdown-anim-left">{openPlay} open play</span>
        <span className="breakdown-anim-right">{setPiece} set piece</span>
      </div>

      {/* Segmented Bar Chart */}
      <div className="goals-chart-segmented">
        {Array.from({ length: totalSegments }).map((_, i) => (
          <div
            key={i}
            className={`goal-bar-segment ${i >= openPlaySegments ? 'muted' : ''}`}
            style={{
              animationDelay: `${i * 0.03 + 0.15}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}
