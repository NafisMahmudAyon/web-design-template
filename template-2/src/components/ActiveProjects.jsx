import React from 'react';
import { Maximize2, Layout, Smartphone, Layers, Component } from 'lucide-react';

export default function ActiveProjects({ onOpenModal }) {
  const projects = [
    {
      id: 1,
      icon: Layout,
      title: 'Website Redesign',
      client: 'Client: James Anderson',
      color: '#3b82f6',
      progress: 75,
    },
    {
      id: 2,
      icon: Smartphone,
      title: 'App Development',
      client: 'Client: Sarah Johnson',
      color: '#10b981',
      progress: 60,
    },
    {
      id: 3,
      icon: Layers,
      title: 'App Development',
      client: 'Client: Michael Clark',
      color: '#ffcb5b',
      progress: 85,
    },
    {
      id: 4,
      icon: Component,
      title: 'Landing Page Design',
      client: 'Client: Abdur Rahman',
      color: '#ef4444',
      progress: 90,
    },
  ];

  return (
    <div className="ui-card">
      <div className="card-header-row">
        <h3 className="card-title-text">Active Projects</h3>
        <button 
          className="card-expand-btn"
          onClick={() => onOpenModal('Active Projects Management')}
          title="Expand View"
        >
          <Maximize2 size={13} />
        </button>
      </div>

      <div className="active-projects-list">
        {projects.map((proj) => {
          const Icon = proj.icon;
          return (
            <div key={proj.id} className="project-item-box">
              <div className="project-icon-square">
                <Icon size={15} color="#101010" />
              </div>
              <div className="project-meta">
                <span className="project-name">{proj.title}</span>
                <span className="project-client">{proj.client}</span>
              </div>
              <div className="project-progress-pill">
                <div
                  className="pill-fill"
                  style={{
                    width: `${proj.progress}%`,
                    backgroundColor: proj.color,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
