import React, { useState, useEffect } from 'react';
import { Sparkles, ChevronDown } from 'lucide-react';

export default function AIPredictionCard({ aiGroup, aiTeams }) {
  const [selectedGroup, setSelectedGroup] = useState(aiGroup || 'Group C');
  const [teams, setTeams] = useState(aiTeams || []);
  const [animatedProbs, setAnimatedProbs] = useState(teams.map(() => 0));

  useEffect(() => {
    if (aiGroup) setSelectedGroup(aiGroup);
    if (aiTeams) setTeams(aiTeams);
  }, [aiGroup, aiTeams]);

  useEffect(() => {
    setAnimatedProbs(teams.map(() => 0));

    const timer = setTimeout(() => {
      setAnimatedProbs(teams.map((t) => t.prob));
    }, 120);

    return () => clearTimeout(timer);
  }, [teams]);

  return (
    <div key={selectedGroup} className="glass-card element-stagger-3">
      <div className="card-header" style={{ marginBottom: '4px' }}>
        <h3 className="card-title" style={{ fontSize: '15px' }}>
          <Sparkles size={16} color="#00d2ff" className="sparkle-spin-anim" />
          AI Prediction
        </h3>
        <span className="badge-pill badge-green">94.2% Acc.</span>
      </div>

      <div className="ai-header-subtitle">
        <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Top Qualifiers Probability</span>

        <button className="dropdown-selector" title="Select Group">
          <span>{selectedGroup}</span>
          <ChevronDown size={12} />
        </button>
      </div>

      <div className="team-prob-list">
        {teams.map((team, idx) => (
          <div 
            key={team.name} 
            className={`team-prob-item team-item-anim-${idx + 1}`}
          >
            <div className="team-left-info">
              <img src={team.flag} alt={team.name} className="prob-flag flag-hover-spin" />
              <span className="prob-team-name">{team.name}</span>
            </div>

            <div className="prob-bar-container">
              <div
                className="prob-bar-fill"
                style={{ width: `${animatedProbs[idx] || 0}%` }}
              />
            </div>

            <span className="prob-percentage">{animatedProbs[idx] || 0}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
