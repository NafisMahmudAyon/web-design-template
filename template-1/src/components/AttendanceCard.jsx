import React, { useState, useEffect } from 'react';
import { MoreVertical } from 'lucide-react';

export default function AttendanceCard({ attendance }) {
  const targetStr = attendance ? attendance.val : '2.17 M';
  const targetNum = parseFloat(targetStr);
  const [attendVal, setAttendVal] = useState('0.00');

  useEffect(() => {
    setAttendVal('0.00');
    const duration = 1200;
    const steps = 30;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const p = step / steps;
      setAttendVal((targetNum * p).toFixed(2));
      if (step >= steps) clearInterval(timer);
    }, intervalTime);

    return () => clearInterval(timer);
  }, [targetNum]);

  const usaActive = attendance ? attendance.usaActive : 13;
  const mxCaActive = attendance ? attendance.mxCaActive : 7;

  return (
    <div key={targetStr} className="glass-card element-stagger-2">
      <div className="card-header" style={{ marginBottom: '8px' }}>
        <h3 className="card-title" style={{ fontSize: '15px' }}>
          <span className="live-status-dot" />
          Attendance
        </h3>
        <button className="close-btn icon-spin-hover" title="Options">
          <MoreVertical size={16} />
        </button>
      </div>

      <div className="attendance-val number-counter-anim">{attendVal} M</div>

      <div className="venue-progress-list">
        {/* USA Venues */}
        <div className="venue-progress-row venue-row-anim-1">
          <div className="venue-meta">
            <span className="venue-name">USA Venues</span>
            <span className="venue-stats">{attendance ? attendance.usaVal : '1.41M • 65%'}</span>
          </div>
          <div className="segmented-fill-bar">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className={`bar-pill ${i < usaActive ? 'active-blue' : ''}`}
                style={{
                  animationDelay: i < usaActive ? `${i * 0.03 + 0.1}s` : '0s'
                }}
              />
            ))}
          </div>
        </div>

        {/* MX + CA Venues */}
        <div className="venue-progress-row venue-row-anim-2">
          <div className="venue-meta">
            <span className="venue-name">MX + CA Venues</span>
            <span className="venue-stats">{attendance ? attendance.mxCaVal : '0.76M • 35%'}</span>
          </div>
          <div className="segmented-fill-bar">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className={`bar-pill ${i < mxCaActive ? 'active-blue' : ''}`}
                style={{
                  animationDelay: i < mxCaActive ? `${i * 0.03 + 0.15}s` : '0s'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
