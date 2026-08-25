import React from 'react';
import { Maximize2 } from 'lucide-react';

export default function TopClientsCard({ onOpenModal }) {
  const clients = [
    { name: 'Client 1', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80' },
    { name: 'Client 2', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80' },
    { name: 'Client 3', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80' },
    { name: 'Client 4', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80' },
    { name: 'Client 5', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80' },
  ];

  return (
    <div className="ui-card">
      <div className="card-header-row">
        <h3 className="card-title-text">Top Clients</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div className="revenue-tag-pill">$32.5K</div>
          <button 
            className="card-expand-btn"
            onClick={() => onOpenModal('Top Clients Portfolio')}
            title="Expand View"
          >
            <Maximize2 size={13} />
          </button>
        </div>
      </div>

      <div className="top-clients-row">
        <div className="clients-avatars-group">
          {clients.map((c, i) => (
            <img
              key={i}
              src={c.img}
              alt={c.name}
              className="client-avatar-circle"
              title={c.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
