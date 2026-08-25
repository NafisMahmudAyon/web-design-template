import React from 'react';
import { FileText, PieChart, UserPlus, Plus } from 'lucide-react';

export default function DashboardTitleBar({ onOpenModal }) {
  return (
    <div className="title-action-bar">
      {/* Title & Subtitle */}
      <div className="title-text-group">
        <h1 className="dashboard-heading">Dashboard Overview</h1>
        <p className="dashboard-subheading">Here's what's happening with your business today</p>
      </div>

      {/* Right Quick Action Buttons */}
      <div className="title-actions-right">
        <button 
          className="pill-action-btn"
          onClick={() => onOpenModal('Create Invoice')}
        >
          <FileText size={15} />
          <span>Create Invoice</span>
        </button>

        <button 
          className="pill-action-btn"
          onClick={() => onOpenModal('Create A Report')}
        >
          <PieChart size={15} />
          <span>Create A Report</span>
        </button>

        <button 
          className="pill-action-btn"
          onClick={() => onOpenModal('Add Client')}
        >
          <UserPlus size={15} />
          <span>Add Client</span>
        </button>

        <button 
          className="pill-action-btn btn-primary-black"
          onClick={() => onOpenModal('New Project')}
        >
          <Plus size={16} />
          <span>New Project</span>
        </button>
      </div>
    </div>
  );
}
