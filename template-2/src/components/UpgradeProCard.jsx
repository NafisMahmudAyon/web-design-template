import React from 'react';
import { X, Crown, HelpCircle, ArrowRight } from 'lucide-react';
import prismImg from '../assets/prism.png';

export default function UpgradeProCard({ onOpenModal }) {
  return (
    <div className="ui-card upgrade-pro-card">
      {/* Top Header */}
      <div className="upgrade-top-header">
        <div>
          <h3 className="upgrade-title">Upgrade to Pro</h3>
          <p className="upgrade-desc">Get advanced analytics and powerful features.</p>
        </div>
        <button 
          className="close-x-btn" 
          title="Dismiss"
          onClick={() => alert('Banner dismissed')}
        >
          <X size={14} color="#101010" />
        </button>
      </div>

      {/* 3D Holographic Prism Artwork with Radial Vignette Mask */}
      <div className="prism-image-wrapper">
        <img src={prismImg} alt="3D Crystal Prism" className="prism-img" />
      </div>

      {/* Free Trial Row */}
      <div className="trial-row">
        <span className="free-trial-label">Free Trial</span>
        <div className="trial-tag-pill">
          <Crown size={12} fill="#101010" color="#101010" />
          <span>7 Days</span>
        </div>
      </div>

      {/* Need Help Deciding Glass Box */}
      <div className="help-box">
        <div className="help-icon-circle">
          <HelpCircle size={16} color="#101010" />
        </div>
        <div>
          <div className="help-title">Need Help Deciding?</div>
          <div className="help-sub">Compare Plans or Contact sales</div>
        </div>
      </div>

      {/* CTA Button */}
      <button 
        className="btn-upgrade-black"
        onClick={() => onOpenModal('Upgrade Now')}
      >
        <span>Upgrade Now</span>
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
