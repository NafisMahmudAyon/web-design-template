import React, { useState, useEffect } from 'react';
import { Maximize2, Clock } from 'lucide-react';

export default function NextMeetingCard({ onOpenModal }) {
  const [secondsLeft, setSecondsLeft] = useState(55534); // 15 hours 25 mins 34 secs

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 55534));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSec) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;

    const pad = (num) => String(num).padStart(2, '0');
    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
  };

  return (
    <div className="ui-card">
      <div className="card-header-row">
        <h3 className="card-title-text" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Clock size={15} color="#101010" />
          Next Meeting In
        </h3>
        <button 
          className="card-expand-btn"
          onClick={() => onOpenModal('Next Meeting Schedule')}
          title="Expand View"
        >
          <Maximize2 size={13} />
        </button>
      </div>

      <div className="meeting-timer-display">
        {formatTime(secondsLeft)}
      </div>
    </div>
  );
}
