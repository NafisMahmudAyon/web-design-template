import React, { useState, useEffect } from 'react';
import { Maximize2 } from 'lucide-react';

export default function ProjectStatus({ onOpenModal }) {
  const targetProjects = 42;
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    setProjectCount(0);
    const duration = 1200;
    const steps = 30;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const p = step / steps;
      setProjectCount(Math.round(targetProjects * p));
      if (step >= steps) clearInterval(timer);
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="ui-card">
      <div className="card-header-row">
        <h3 className="card-title-text">Project Status</h3>
        <button 
          className="card-expand-btn"
          onClick={() => onOpenModal('Project Status Analytics')}
          title="Expand View"
        >
          <Maximize2 size={13} />
        </button>
      </div>

      {/* Semi-Circle Half Donut Progress Gauge */}
      <div className="gauge-container">
        <svg viewBox="0 0 200 110" width="100%" height="100%">
          {/* Background Track Arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="#e9e9e9"
            strokeWidth="18"
            strokeLinecap="round"
          />

          {/* Yellow Progress Segment (In Progress - 55%) */}
          <path
            d="M 20 100 A 80 80 0 0 1 140 32"
            fill="none"
            stroke="#ffcb5b"
            strokeWidth="18"
            strokeLinecap="round"
            style={{
              transition: 'stroke-dashoffset 1.4s ease',
            }}
          />

          {/* Black Progress Segment (Completed - 30%) */}
          <path
            d="M 140 32 A 80 80 0 0 1 175 80"
            fill="none"
            stroke="#101010"
            strokeWidth="18"
            strokeLinecap="round"
          />
        </svg>

        {/* Center Active Projects Counter */}
        <div className="gauge-center-text">
          <div className="gauge-val">{projectCount}</div>
          <div className="gauge-sub">Active Projects</div>
        </div>
      </div>

      {/* Legend Grid Below */}
      <div className="project-status-legend-grid">
        <div className="status-legend-cell">
          <span className="yellow-dot" />
          <span>In Progress (23)</span>
        </div>
        <div className="status-legend-cell">
          <span className="black-dot" />
          <span>Completed (13)</span>
        </div>
        <div className="status-legend-cell">
          <span className="light-grey-dot" />
          <span>In Review (3)</span>
        </div>
        <div className="status-legend-cell">
          <span className="dark-grey-dot" />
          <span>On Hold (3)</span>
        </div>
      </div>
    </div>
  );
}
