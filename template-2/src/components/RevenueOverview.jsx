import React, { useState, useEffect } from 'react';
import { Maximize2, TrendingUp } from 'lucide-react';

export default function RevenueOverview({ onOpenModal }) {
  const targetEarning = 284.5;
  const [earningVal, setEarningVal] = useState(0);
  const [hoveredMonth, setHoveredMonth] = useState('Apr');

  useEffect(() => {
    setEarningVal(0);
    const duration = 1200;
    const steps = 30;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const p = step / steps;
      setEarningVal((targetEarning * p).toFixed(1));
      if (step >= steps) clearInterval(timer);
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="ui-card">
      <div className="card-header-row">
        <div>
          <h3 className="card-title-text">Revenue Overview</h3>
          <span style={{ fontSize: '11px', color: 'var(--color-text-sub)' }}>This Month Earning</span>
        </div>
        <button 
          className="card-expand-btn"
          onClick={() => onOpenModal('Revenue Overview Details')}
          title="Expand View"
        >
          <Maximize2 size={13} />
        </button>
      </div>

      {/* Big Earnings Counter */}
      <div className="earnings-number">
        ${earningVal}K
        <span className="earning-green-tag">
          <TrendingUp size={12} style={{ display: 'inline', marginRight: '2px' }} />
          12.5%
        </span>
      </div>

      {/* Legend Toggles */}
      <div className="chart-legend-row">
        <div className="chart-legend-item">
          <span className="legend-dot-black" />
          <span>Revenue</span>
        </div>
        <div className="chart-legend-item">
          <span className="legend-dot-grey" />
          <span>Expense</span>
        </div>
      </div>

      {/* Ultra Sleek SVG Area Chart */}
      <div className="area-chart-svg-container">
        {/* Tooltip badge centered directly over April peak (x = 180) */}
        <div className="chart-tooltip-tag">$245.2K</div>

        <svg viewBox="0 0 300 95" width="100%" height="100%" preserveAspectRatio="none">
          <defs>
            <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#101010" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#101010" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Area Fill Path */}
          <path
            d="M 15,70 C 45,72 60,52 80,50 C 110,48 135,60 150,55 C 165,50 172,32 180,32 C 195,32 215,40 240,42 C 265,44 275,55 285,62 L 285,95 L 15,95 Z"
            fill="url(#revenueGrad)"
          />

          {/* Sleek Line Path */}
          <path
            d="M 15,70 C 45,72 60,52 80,50 C 110,48 135,60 150,55 C 165,50 172,32 180,32 C 195,32 215,40 240,42 C 265,44 275,55 285,62"
            fill="none"
            stroke="#101010"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Node Points */}
          <circle cx="15" cy="70" r="3" fill="#101010" />
          <circle cx="80" cy="50" r="3" fill="#101010" />
          <circle cx="150" cy="55" r="3" fill="#101010" />
          
          {/* April Node Highlight */}
          <circle cx="180" cy="32" r="4.5" fill="#ffcb5b" stroke="#101010" strokeWidth="1.5" />
          
          <circle cx="240" cy="42" r="3" fill="#101010" />
          <circle cx="285" cy="62" r="3" fill="#101010" />
        </svg>
      </div>

      {/* Months Label Row */}
      <div className="chart-months-row">
        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month) => (
          <span 
            key={month} 
            style={{ 
              fontWeight: hoveredMonth === month ? 700 : 400,
              color: hoveredMonth === month ? '#101010' : 'var(--color-text-muted)',
              cursor: 'pointer'
            }}
            onMouseEnter={() => setHoveredMonth(month)}
          >
            {month}
          </span>
        ))}
      </div>
    </div>
  );
}
