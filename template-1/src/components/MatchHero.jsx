import React, { useState, useEffect, useRef } from 'react';
import { LayoutGrid, Target, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

export default function MatchHero({ stadium, onPrev, onNext, currentIndex, totalCount }) {
  const [currentImg, setCurrentImg] = useState(stadium.bgImage);
  const [prevImg, setPrevImg] = useState(null);
  const [slideDirection, setSlideDirection] = useState('next');
  const [isSliding, setIsSliding] = useState(false);
  const prevIdxRef = useRef(currentIndex);

  useEffect(() => {
    if (stadium.bgImage !== currentImg) {
      const isNext = (currentIndex > prevIdxRef.current) || (prevIdxRef.current === totalCount - 1 && currentIndex === 0);
      setSlideDirection(isNext ? 'next' : 'prev');
      setPrevImg(currentImg);
      setCurrentImg(stadium.bgImage);
      setIsSliding(true);
      prevIdxRef.current = currentIndex;

      const timer = setTimeout(() => {
        setIsSliding(false);
        setPrevImg(null);
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [stadium.bgImage, currentIndex, currentImg, totalCount]);

  const handlePrevClick = () => {
    setSlideDirection('prev');
    onPrev();
  };

  const handleNextClick = () => {
    setSlideDirection('next');
    onNext();
  };

  const renderFlag = (flagName) => {
    switch (flagName) {
      case 'jordan':
        return (
          <svg viewBox="0 0 640 480" className="flag-img">
            <path fill="#000" d="M0 0h640v160H0z"/>
            <path fill="#fff" d="M0 160h640v160H0z"/>
            <path fill="#007a3d" d="M0 320h640v160H0z"/>
            <path fill="#ce1126" d="M0 0l320 240L0 480z"/>
            <polygon fill="#fff" points="100,240 106,248 116,244 112,254 120,260 110,262 108,272 102,264 92,266 98,258 92,250 102,252"/>
          </svg>
        );
      case 'argentina':
        return (
          <svg viewBox="0 0 640 480" className="flag-img">
            <path fill="#74acdf" d="M0 0h640v160H0zM0 320h640v160H0z"/>
            <path fill="#fff" d="M0 160h640v160H0z"/>
            <circle cx="320" cy="240" r="30" fill="#f6b40e"/>
          </svg>
        );
      case 'netherlands':
        return (
          <svg viewBox="0 0 640 480" className="flag-img">
            <path fill="#ae1c28" d="M0 0h640v160H0z"/>
            <path fill="#fff" d="M0 160h640v160H0z"/>
            <path fill="#21468b" d="M0 320h640v160H0z"/>
          </svg>
        );
      case 'france':
        return (
          <svg viewBox="0 0 640 480" className="flag-img">
            <path fill="#002395" d="M0 0h213.3v480H0z"/>
            <path fill="#fff" d="M213.3 0h213.4v480H213.3z"/>
            <path fill="#ed2939" d="M426.7 0H640v480H426.7z"/>
          </svg>
        );
      case 'mexico':
        return (
          <svg viewBox="0 0 640 480" className="flag-img">
            <path fill="#006847" d="M0 0h213.3v480H0z"/>
            <path fill="#fff" d="M213.3 0h213.4v480H213.3z"/>
            <path fill="#ce1126" d="M426.7 0H640v480H426.7z"/>
          </svg>
        );
      case 'portugal':
        return (
          <svg viewBox="0 0 640 480" className="flag-img">
            <path fill="#046a38" d="M0 0h240v480H0z"/>
            <path fill="#da291c" d="M240 0h400v480H240z"/>
          </svg>
        );
      case 'spain':
        return (
          <svg viewBox="0 0 640 480" className="flag-img">
            <path fill="#aa1523" d="M0 0h640v120H0zM0 360h640v120H0z"/>
            <path fill="#f1bf00" d="M0 120h640v240H0z"/>
          </svg>
        );
      case 'england':
      default:
        return (
          <svg viewBox="0 0 640 480" className="flag-img">
            <path fill="#fff" d="M0 0h640v480H0z"/>
            <path fill="#ce1126" d="M280 0h80v480h-80zM0 200h640v80H0z"/>
          </svg>
        );
    }
  };

  return (
    <div className="grid-col-center">
      <div className="hero-match-card">
        {/* Background Image Carousel Container */}
        <div className="hero-bg-carousel">
          {/* Active / Incoming Background Image */}
          <img 
            src={currentImg} 
            alt={stadium.name} 
            className={`hero-bg-image ${isSliding ? `carousel-enter-${slideDirection}` : 'carousel-active'}`} 
          />

          {/* Outgoing Background Image */}
          {isSliding && prevImg && (
            <img 
              src={prevImg} 
              alt="Previous Stadium" 
              className={`hero-bg-image carousel-exit-${slideDirection}`} 
            />
          )}
        </div>

        {/* Gradient Dark Overlay */}
        <div className="hero-overlay" />

        {/* Navigation Overlay Buttons */}
        <button 
          className="stadium-nav-btn stadium-nav-prev" 
          onClick={handlePrevClick}
          title="Previous Stadium"
        >
          <ChevronLeft size={20} />
        </button>

        <button 
          className="stadium-nav-btn stadium-nav-next" 
          onClick={handleNextClick}
          title="Next Stadium"
        >
          <ChevronRight size={20} />
        </button>

        {/* Hero Content with Smooth Text Fade Transition */}
        <div key={stadium.id} className="hero-content hero-text-transition">
          {/* Top Bar */}
          <div className="hero-top-bar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <h2 className="hero-title">{stadium.heroTitle}</h2>
              <span className="stadium-counter-badge">
                {currentIndex + 1} / {totalCount}
              </span>
            </div>

            <div className="hero-top-actions">
              <button className="icon-circle-btn" title="Layout View">
                <LayoutGrid size={16} />
              </button>
              <button className="icon-circle-btn" title="Focus Mode">
                <Target size={16} />
              </button>
            </div>
          </div>

          {/* Center Teams Matchup */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="match-teams-display">
              {/* Team 1 */}
              <div className="team-box">
                <div className="flag-wrapper">
                  {renderFlag(stadium.team1.flag)}
                </div>
                <span className="team-code">{stadium.team1.code}</span>
                <span className="team-handle">{stadium.team1.handle}</span>
              </div>

              {/* Match Date & Time Center */}
              <div className="match-center-info">
                <span className="match-date-sub">{stadium.matchDate}</span>
                <span className="match-time-big">{stadium.matchTime}</span>
                <span className="match-venue-sub">{stadium.venueSub}</span>
              </div>

              {/* Team 2 */}
              <div className="team-box">
                <div className="flag-wrapper">
                  {renderFlag(stadium.team2.flag)}
                </div>
                <span className="team-code">{stadium.team2.code}</span>
                <span className="team-handle">{stadium.team2.handle}</span>
              </div>
            </div>

            {/* Status Tag & Match ID */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div className="match-status-tag">
                <Clock size={14} />
                <span>{stadium.statusTag}</span>
              </div>
              <div className="match-id-bar">
                ID: {stadium.matchId} • {stadium.stage} • {stadium.matchNumber}
              </div>
            </div>
          </div>

          {/* Bottom Glass Grid Card */}
          <div className="hero-bottom-glass-card">
            <div className="hero-info-item">
              <span className="hero-info-label">Stage</span>
              <span className="hero-info-value">{stadium.stage}</span>
            </div>
            <div className="hero-info-item">
              <span className="hero-info-label">Kick off</span>
              <span className="hero-info-value">{stadium.kickoff}</span>
            </div>
            <div className="hero-info-item">
              <span className="hero-info-label">Venue</span>
              <span className="hero-info-value">{stadium.city}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
