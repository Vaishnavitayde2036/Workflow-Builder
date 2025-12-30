import React, { useState } from 'react';
import { WorkflowNode, NodeType } from '../../types/workflow.types';
import './Node.css';

interface NodeCardProps {
  node: WorkflowNode;
  onDelete: (id: string) => void;
  onAdd: (id: string, type: NodeType) => void;
  onLabelChange: (id: string, label: string) => void;
}

export const NodeCard: React.FC<NodeCardProps> = ({ node, onDelete, onAdd, onLabelChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Pop-over state

  return (
    <div className={`node-card-wrapper ${node.type}`}>
      <div className="node-content">
        <div className="node-header">
          <span className="node-type-label">{node.type.toUpperCase()}</span>
          {node.type !== 'start' && (
             <button className="delete-btn" onClick={() => onDelete(node.id)}>×</button>
          )}
        </div>
        <input 
          className="node-input"
          value={node.label}
          onChange={(e) => onLabelChange(node.id, e.target.value)}
        />
      </div>

      {/* Interactive Node Creation Pop-over */}
      {node.type !== 'end' && (
        <div className="connection-container">
          <button 
            className="interactive-add-trigger" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            +
          </button>

          {isMenuOpen && (
            <div className="context-menu popover">
              <div className="menu-header">Add Step</div>
              <button onClick={() => { onAdd(node.id, 'action'); setIsMenuOpen(false); }}>⚡ Action</button>
              <button onClick={() => { onAdd(node.id, 'condition'); setIsMenuOpen(false); }}>🔀 Branch</button>
              <button onClick={() => { onAdd(node.id, 'end'); setIsMenuOpen(false); }}>🛑 End</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};