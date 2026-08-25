import React, { useState, useEffect } from 'react';

export default function TournamentFacts() {
  const [counts, setCounts] = useState([0, 0, 0]);

  const facts = [
    { targetNumber: 48, prefix: '', suffix: '', label: 'Nations competing', percent: 75 },
    { targetNumber: 16, prefix: '', suffix: '', label: 'Venues, 3 nations', percent: 60 },
    { targetNumber: 5, prefix: '', suffix: 'M', label: 'Fans expected', percent: 85 },
  ];

  useEffect(() => {
    const duration = 1500; // ms
    const steps = 30;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // easeOutCubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setCounts([
        Math.round(48 * easeProgress),
        Math.round(16 * easeProgress),
        Math.round(5 * easeProgress),
      ]);

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="glass-card element-stagger-2">
      <div className="card-header" style={{ marginBottom: '10px' }}>
        <h3 className="card-title" style={{ fontSize: '14px' }}>
          <span className="title-pulse-dot" />
          Tournament facts
        </h3>
      </div>

      <div className="facts-grid">
        {facts.map((fact, index) => {
          const radius = 24;
          const circumference = 2 * Math.PI * radius;
          const strokeDashoffset = circumference - (fact.percent / 100) * circumference;

          return (
            <div 
              key={index} 
              className={`fact-circle-card fact-card-animated-${index + 1}`}
            >
              <div className="circle-chart-wrapper">
                <svg className="circle-chart-svg" viewBox="0 0 60 60">
                  <defs>
                    <linearGradient id={`blueGrad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0075ff" />
                      <stop offset="100%" stopColor="#00d2ff" />
                    </linearGradient>
                  </defs>
                  <circle className="circle-bg" cx="30" cy="30" r={radius} />
                  <circle
                    className={`circle-fill circle-draw-anim-${index + 1}`}
                    cx="30"
                    cy="30"
                    r={radius}
                    style={{
                      stroke: `url(#blueGrad-${index})`,
                      strokeDasharray: circumference,
                      strokeDashoffset: strokeDashoffset,
                    }}
                  />
                </svg>
                <div className="circle-number number-counter-anim">
                  {fact.prefix}{counts[index]}{fact.suffix}
                </div>
              </div>
              <span className="fact-label">{fact.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
