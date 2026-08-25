import React, { useState } from 'react';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import MatchHero from './components/MatchHero';
import RightSidebar from './components/RightSidebar';
import ReportModal from './components/ReportModal';
import { stadiumsData } from './data/stadiumsData';

export default function App() {
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [currentStadiumIdx, setCurrentStadiumIdx] = useState(0);

  const currentStadium = stadiumsData[currentStadiumIdx];

  const handlePrevStadium = () => {
    setCurrentStadiumIdx((prev) => (prev === 0 ? stadiumsData.length - 1 : prev - 1));
  };

  const handleNextStadium = () => {
    setCurrentStadiumIdx((prev) => (prev === stadiumsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="dashboard-container">
      {/* Top Header Navigation */}
      <Header />

      {/* Main 3-Column Grid Layout */}
      <main className="dashboard-grid">
        <LeftSidebar 
          status={currentStadium.status} 
          onOpenReport={() => setIsReportOpen(true)} 
        />

        <MatchHero 
          stadium={currentStadium}
          onPrev={handlePrevStadium}
          onNext={handleNextStadium}
          currentIndex={currentStadiumIdx}
          totalCount={stadiumsData.length}
        />

        <RightSidebar 
          goals={currentStadium.goals}
          attendance={currentStadium.attendance}
          aiGroup={currentStadium.aiPredictionGroup}
          aiTeams={currentStadium.aiTeams}
        />
      </main>

      {/* Report Details Modal */}
      <ReportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
      />
    </div>
  );
}
