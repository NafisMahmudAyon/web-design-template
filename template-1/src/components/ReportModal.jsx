import React from 'react';
import { X, Award, BarChart3, Users, ShieldAlert } from 'lucide-react';

export default function ReportModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '20px' }}>
            Tournament Full Analytical Report
          </h2>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <p style={{ color: 'var(--text-sub)', fontSize: '13px', lineHeight: 1.5 }}>
          Comprehensive match telemetry, VAR decisions, spectator distribution, and team qualification probabilities for World Cup 2026.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '10px' }}>
          <div className="glass-card" style={{ padding: '14px', background: 'rgba(255, 255, 255, 0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00d2ff', marginBottom: '6px' }}>
              <Award size={18} />
              <strong style={{ fontSize: '14px' }}>Top Scoring Group</strong>
            </div>
            <div style={{ color: '#fff', fontSize: '18px', fontWeight: 700 }}>Group C (24 Goals)</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '11px' }}>Avg 3.0 goals / match</div>
          </div>

          <div className="glass-card" style={{ padding: '14px', background: 'rgba(255, 255, 255, 0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', marginBottom: '6px' }}>
              <Users size={18} />
              <strong style={{ fontSize: '14px' }}>Highest Attendance</strong>
            </div>
            <div style={{ color: '#fff', fontSize: '18px', fontWeight: 700 }}>88,432 Spectators</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '11px' }}>Dallas AT&T Stadium</div>
          </div>

          <div className="glass-card" style={{ padding: '14px', background: 'rgba(255, 255, 255, 0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f59e0b', marginBottom: '6px' }}>
              <BarChart3 size={18} />
              <strong style={{ fontSize: '14px' }}>Pass Accuracy</strong>
            </div>
            <div style={{ color: '#fff', fontSize: '18px', fontWeight: 700 }}>88.4% Average</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '11px' }}>34,210 Passes Completed</div>
          </div>

          <div className="glass-card" style={{ padding: '14px', background: 'rgba(255, 255, 255, 0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ef4444', marginBottom: '6px' }}>
              <ShieldAlert size={18} />
              <strong style={{ fontSize: '14px' }}>VAR Reviews</strong>
            </div>
            <div style={{ color: '#fff', fontSize: '18px', fontWeight: 700 }}>18 Incidents</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '11px' }}>8 Overturned Decisions</div>
          </div>
        </div>

        <button
          className="action-btn-primary"
          style={{ marginTop: '12px' }}
          onClick={onClose}
        >
          Close Report
        </button>
      </div>
    </div>
  );
}
