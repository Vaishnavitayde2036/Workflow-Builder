import React from 'react';

interface ToolbarProps {
  onSave: () => void;
  onUndo: () => void;
  onRedo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

export const Toolbar: React.FC<ToolbarProps> = ({ onSave, onUndo, onRedo, canUndo, canRedo }) => {
  return (
    <div className="toolbar">
      <div className="brand">Workflow Builder Pro</div>
      <div className="toolbar-actions">
        <button onClick={onUndo} disabled={!canUndo} className="icon-btn">↩️ Undo</button>
        <button onClick={onRedo} disabled={!canRedo} className="icon-btn">↪️ Redo</button>
        <div className="divider"></div>
        <button onClick={onSave} className="save-btn">💾 Save & Download</button>
      </div>
    </div>
  );
};