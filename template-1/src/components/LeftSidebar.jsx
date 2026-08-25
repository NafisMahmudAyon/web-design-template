import React from 'react';
import AlertsFacts from './AlertsFacts';
import TournamentFacts from './TournamentFacts';
import TournamentStatus from './TournamentStatus';

export default function LeftSidebar({ status, onOpenReport }) {
  return (
    <div className="grid-col-left" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <AlertsFacts />
      <TournamentFacts />
      <TournamentStatus status={status} onOpenReport={onOpenReport} />
    </div>
  );
}
