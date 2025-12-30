import React from 'react';
import { RecursiveTree } from '../Node/RecursiveTree';
import { NodeData, NodeType } from '../../types/workflow.types';
import './WorkflowCanvas.css';

interface WorkflowCanvasProps {
  nodes: NodeData;
  addNode: (parentId: string, type: NodeType) => void;
  deleteNode: (id: string) => void;
  updateNodeLabel: (id: string, newLabel: string) => void;
}

export const WorkflowCanvas: React.FC<WorkflowCanvasProps> = ({ 
  nodes, addNode, deleteNode, updateNodeLabel 
}) => {
  return (
    <div className="canvas-wrapper">
      <div className="canvas-content">
        <RecursiveTree 
          nodeId="start"
          nodes={nodes}
          onAdd={addNode}
          onDelete={deleteNode}
          onLabelChange={updateNodeLabel}
        />
      </div>
    </div>
  );
};