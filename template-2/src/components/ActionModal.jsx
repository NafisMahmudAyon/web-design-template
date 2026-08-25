import React from 'react';
import { X, Check } from 'lucide-react';

export default function ActionModal({ title, onClose }) {
  if (!title) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 className="modal-title">{title}</h3>
          <button className="close-x-btn" onClick={onClose}>
            <X size={16} color="#101010" />
          </button>
        </div>

        <p style={{ fontSize: '13px', color: 'var(--color-text-sub)' }}>
          Manage and configure <strong>{title}</strong> details for Kairos Analytics Dashboard.
        </p>

        <input 
          type="text" 
          placeholder={`Enter details for ${title}...`}
          className="modal-input-field" 
          autoFocus
        />

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
          <button className="pill-action-btn" onClick={onClose}>
            Cancel
          </button>
          <button 
            className="pill-action-btn btn-primary-black"
            onClick={() => {
              alert(`${title} action saved successfully!`);
              onClose();
            }}
          >
            <Check size={16} />
            <span>Save & Proceed</span>
          </button>
        </div>
      </div>
    </div>
  );
}
