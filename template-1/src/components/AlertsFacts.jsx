import React, { useState } from 'react';
import { Cloud, Monitor, Ticket, ShieldAlert } from 'lucide-react';

export default function AlertsFacts() {
  const [activeAlerts, setActiveAlerts] = useState([1, 2, 3, 4]);

  const alerts = [
    {
      id: 1,
      icon: Cloud,
      title: 'Pitch conditions — Venue 3',
      subtitle: 'Weather advisory Issued',
      badge: 'Weather',
    },
    {
      id: 2,
      icon: Monitor,
      title: 'VAR system — Maintenance',
      subtitle: 'Offline 02:00 - 04:00 UTC',
      badge: 'VAR System',
    },
    {
      id: 3,
      icon: Ticket,
      title: 'Ticket sales — Special',
      subtitle: 'Ends 10th July 2026',
      badge: 'Promo',
    },
    {
      id: 4,
      icon: ShieldAlert,
      title: 'Security measures — Updates',
      subtitle: 'Additional checks from 18:00 local time',
      badge: 'Security',
    },
  ];

  return (
    <div className="glass-card element-stagger-1">
      <div className="card-header">
        <h3 className="card-title">
          <span className="live-status-dot" />
          Alerts & Facts
        </h3>
        <span className="badge-pill badge-green">
          {activeAlerts.length} Active
        </span>
      </div>

      <div className="alerts-list">
        {alerts.map((item, idx) => {
          const IconComponent = item.icon;
          const isDismissed = !activeAlerts.includes(item.id);

          if (isDismissed) return null;

          return (
            <div 
              key={item.id} 
              className={`alert-item alert-entry-anim-${idx + 1}`}
            >
              <div className="alert-icon-box">
                <IconComponent size={16} className="alert-svg-icon" />
              </div>
              <div className="alert-content">
                <span className="alert-title">{item.title}</span>
                <span className="alert-subtitle">{item.subtitle}</span>
              </div>
              <div className="alert-hover-indicator" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
