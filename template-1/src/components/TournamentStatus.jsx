import React, { useState, useEffect } from 'react';
import { MoreVertical, ExternalLink } from 'lucide-react';

export default function TournamentStatus({ status, onOpenReport }) {
  const playedTarget = status ? status.played : 32;
  const [playedCount, setPlayedCount] = useState(0);

  const totalSegments = 24;
  const completePercent = status ? status.completePercent : 67;
  const filledSegments = Math.round(totalSegments * (completePercent / 100));

  useEffect(() => {
    setPlayedCount(0);
    const duration = 1200;
    const steps = 30;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const p = step / steps;
      setPlayedCount(Math.round(playedTarget * p));
      if (step >= steps) clearInterval(timer);
    }, intervalTime);

    return () => clearInterval(timer);
  }, [playedTarget]);

  return (
    <div key={playedTarget} className="glass-card element-stagger-3">
      <div className="card-header">
        <div>
          <h3 className="card-title" style={{ fontSize: '15px' }}>
            <span className="live-status-dot" />
            Tournament Status
          </h3>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Last update 5 mins ago</span>
        </div>
        <button className="close-btn icon-spin-hover" title="Options">
          <MoreVertical size={16} />
        </button>
      </div>

      <div className="status-content">
        {/* Donut Chart & Legend Row */}
        <div className="donut-legend-row">
          <div className="main-donut-box">
            <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ transform: 'rotate(-90deg)' }}>
              <defs>
                <linearGradient id="mainDonutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0075ff" />
                  <stop offset="100%" stopColor="#00d2ff" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="8" />
              <circle
                className="main-donut-circle-fill"
                cx="50"
                cy="50"
                r="38"
                fill="none"
                stroke="url(#mainDonutGrad)"
                strokeWidth="8"
                strokeDasharray="238.76"
                strokeDashoffset={238.76 - (completePercent / 100) * 238.76}
                strokeLinecap="round"
              />
            </svg>
            <div className="donut-center-text">
              <div className="donut-val number-counter-anim">{playedCount}</div>
              <div className="donut-sub">Played</div>
            </div>
          </div>

          <div className="legend-list">
            <div className="legend-item legend-anim-1">
              <span className="dot dot-blue" />
              <span><strong>{status ? status.total : 48}</strong> Total match</span>
            </div>
            <div className="legend-item legend-anim-2">
              <span className="dot dot-cyan" />
              <span><strong>{status ? status.teamsLeft : 16}</strong> Teams Left</span>
            </div>
            <div className="legend-item legend-anim-3">
              <span className="dot dot-yellow" />
              <span><strong>{status ? status.redCards : 14}</strong> Red Card</span>
            </div>
            <div className="legend-item legend-anim-4">
              <span className="dot dot-red" />
              <span><strong>{status ? status.yellowCards : 17}</strong> Yellow Card</span>
            </div>
          </div>
        </div>

        {/* Segmented Progress Bar */}
        <div className="segmented-progress-container">
          <div className="segmented-bar-info">
            <span>Group stage complete • R16 underway</span>
          </div>
          <div className="segmented-bar">
            {Array.from({ length: totalSegments }).map((_, i) => (
              <div
                key={i}
                className={`segment ${i < filledSegments ? 'filled' : ''}`}
                style={{
                  animationDelay: i < filledSegments ? `${i * 0.04 + 0.2}s` : '0s'
                }}
              />
            ))}
          </div>
          <div className="segmented-bar-info" style={{ marginTop: '2px' }}>
            <span>{completePercent}% complete</span>
            <span>{status ? status.teamsLeft : 16} Left</span>
          </div>
        </div>

        {/* Action Button */}
        <button className="action-btn-primary shimmer-btn" onClick={onOpenReport}>
          <span>See full report</span>
          <ExternalLink size={14} className="arrow-icon-anim" />
        </button>
      </div>
    </div>
  );
}
