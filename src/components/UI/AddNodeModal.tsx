import React from 'react';
import { NodeType } from '../../types/workflow.types';

interface AddNodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectType: (type: NodeType) => void;
}

export const AddNodeModal: React.FC<AddNodeModalProps> = ({ isOpen, onClose, onSelectType }) => {
  if (!isOpen) return null;

  const handleSelect = (type: NodeType) => {
    onSelectType(type);
    onClose();
  };

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.container}>
        <div style={modalStyles.header}>
          <h3>Add Next Step</h3>
          <button onClick={onClose} style={modalStyles.closeBtn}>&times;</button>
        </div>
        
        <div style={modalStyles.body}>
          <p style={modalStyles.instruction}>Select the type of node to add:</p>
          
          <button 
            style={{...modalStyles.optionBtn, borderColor: '#3b82f6', color: '#3b82f6'}}
            onClick={() => handleSelect('action')}
          >
            <span style={modalStyles.icon}>⚡</span>
            <strong>Action</strong>
            <small>Perform a task or execute code</small>
          </button>

          <button 
            style={{...modalStyles.optionBtn, borderColor: '#f59e0b', color: '#f59e0b'}}
            onClick={() => handleSelect('condition')}
          >
            <span style={modalStyles.icon}>🔀</span>
            <strong>Condition</strong>
            <small>Branch flow based on logic</small>
          </button>

          <button 
            style={{...modalStyles.optionBtn, borderColor: '#ef4444', color: '#ef4444'}}
            onClick={() => handleSelect('end')}
          >
            <span style={modalStyles.icon}>🛑</span>
            <strong>End</strong>
            <small>Terminate the workflow</small>
          </button>
        </div>
      </div>
    </div>
  );
};

// Inline CSS-in-JS for isolation (since we aren't using Tailwind)
const modalStyles: Record<string, React.CSSProperties> = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    backdropFilter: 'blur(2px)'
  },
  container: {
    background: 'white',
    padding: '20px',
    borderRadius: '12px',
    width: '320px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    animation: 'fadeIn 0.2s ease-out'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
    borderBottom: '1px solid #eee',
    paddingBottom: '10px'
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: '#999'
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  instruction: {
    margin: '0 0 10px 0',
    color: '#666',
    fontSize: '14px'
  },
  optionBtn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    background: '#fff',
    border: '1px solid #ddd',
    padding: '12px',
    borderRadius: '8px',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'all 0.2s'
  },
  icon: {
    fontSize: '20px',
    marginBottom: '5px'
  }
};