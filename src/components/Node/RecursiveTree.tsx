import React from 'react';
import { NodeData, NodeType } from '../../types/workflow.types';
import { NodeCard } from './NodeCard';

interface RecursiveTreeProps {
  nodeId: string;
  nodes: NodeData;
  onDelete: (id: string) => void;
  onAdd: (id: string, type: NodeType) => void;
  onLabelChange: (id: string, label: string) => void;
}

export const RecursiveTree: React.FC<RecursiveTreeProps> = ({ 
  nodeId, nodes, onDelete, onAdd, onLabelChange 
}) => {
  const node = nodes[nodeId];
  if (!node) return null;

  return (
    <div className="tree-node">
      {/* 1. Render Current Node */}
      <NodeCard 
        node={node} 
        onDelete={onDelete} 
        onAdd={onAdd}
        onLabelChange={onLabelChange}
      />

      {/* 2. Render Connector Line if children exist */}
      {node.children.length > 0 && <div className="vertical-line"></div>}

      {/* 3. Render Children (Recursion) */}
      {node.children.length > 0 && (
        <div className="children-container">
          {node.children.map((childId, index) => (
            <div key={childId} className="child-branch">
              {/* If parent is Condition, label the branches */}
              {node.type === 'condition' && (
                <div className="branch-label">{index === 0 ? 'True' : 'False'}</div>
              )}
              
              <RecursiveTree 
                nodeId={childId} 
                nodes={nodes} 
                onDelete={onDelete}
                onAdd={onAdd}
                onLabelChange={onLabelChange}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};