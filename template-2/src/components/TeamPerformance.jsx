import React, { useState, useEffect } from 'react';
import { Maximize2 } from 'lucide-react';

export default function TeamPerformance({ onOpenModal }) {
  const members = [
    { name: 'James R.', percent: 70, fillType: 'solid-black' },
    { name: 'Olivia F.', percent: 80, fillType: 'striped-yellow' },
    { name: 'Kair H.', percent: 90, fillType: 'solid-black' },
    { name: 'Abraham M.', percent: 60, fillType: 'solid-black' },
  ];

  const [animatedPercents, setAnimatedPercents] = useState(members.map(() => 0));

  useEffect(() => {
    setAnimatedPercents(members.map(() => 0));
    const timer = setTimeout(() => {
      setAnimatedPercents(members.map((m) => m.percent));
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="ui-card">
      <div className="card-header-row">
        <h3 className="card-title-text">Team Performance</h3>
        <button 
          className="card-expand-btn"
          onClick={() => onOpenModal('Team Performance Details')}
          title="Expand View"
        >
          <Maximize2 size={13} />
        </button>
      </div>

      <div className="team-list">
        {members.map((member, idx) => {
          const currentP = animatedPercents[idx] || 0;
          return (
            <div key={member.name} className="team-row">
              <span className="team-name">{member.name}</span>
              <div className="team-progress-track">
                <div
                  className={`team-progress-fill ${
                    member.fillType === 'striped-yellow'
                      ? 'fill-striped-yellow'
                      : ''
                  }`}
                  style={{
                    width: `${currentP}%`,
                    backgroundColor:
                      member.fillType === 'striped-yellow' ? '#ffcb5b' : '#101010',
                  }}
                />
              </div>
              <span className="team-percent">{currentP}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
