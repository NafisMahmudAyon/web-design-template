import React from 'react';
import GoalsProduction from './GoalsProduction';
import AttendanceCard from './AttendanceCard';
import AIPredictionCard from './AIPredictionCard';

export default function RightSidebar({ goals, attendance, aiGroup, aiTeams }) {
  return (
    <div className="grid-col-right" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <GoalsProduction goals={goals} />
      <AttendanceCard attendance={attendance} />
      <AIPredictionCard aiGroup={aiGroup} aiTeams={aiTeams} />
    </div>
  );
}
