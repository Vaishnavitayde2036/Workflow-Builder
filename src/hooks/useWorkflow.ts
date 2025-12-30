import { useState, useCallback } from 'react';
import { NodeData, NodeType, WorkflowNode } from '../types/workflow.types';
import { generateId } from '../utils/nodeUtils';

const INITIAL_NODES: NodeData = {
  'start': { id: 'start', type: 'start', label: 'Start', children: [] },
};

export const useWorkflow = () => {
  // History stack for Undo/Redo
  const [history, setHistory] = useState<NodeData[]>([INITIAL_NODES]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Current active state
  const nodes = history[currentIndex];

  const updateState = useCallback((newNodes: NodeData) => {
    const newHistory = history.slice(0, currentIndex + 1);
    setHistory([...newHistory, newNodes]);
    setCurrentIndex(newHistory.length);
  }, [currentIndex, history]);

  const undo = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const redo = () => {
    if (currentIndex < history.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const addNode = useCallback((parentId: string, type: NodeType) => {
    const newId = generateId();
    const newNode: WorkflowNode = {
      id: newId,
      type,
      label: type === 'condition' ? 'Condition' : type === 'end' ? 'End' : 'Action',
      children: [],
    };

    const newNodes = {
      ...nodes,
      [newId]: newNode,
      [parentId]: {
        ...nodes[parentId],
        children: [...nodes[parentId].children, newId]
      }
    };
    updateState(newNodes);
  }, [nodes, updateState]);

  const deleteNode = useCallback((id: string) => {
    if (id === 'start') return;
    const parentId = Object.keys(nodes).find(key => nodes[key].children.includes(id));
    if (!parentId) return;

    const newNodes = { ...nodes };
    const nodeToDelete = nodes[id];
    const parent = nodes[parentId];

    // Reconnect parent to grandchildren
    const newChildren = parent.children.filter(childId => childId !== id);
    if (nodeToDelete.children.length > 0) {
      newChildren.push(...nodeToDelete.children);
    }

    newNodes[parentId] = { ...parent, children: newChildren };
    delete newNodes[id];
    updateState(newNodes);
  }, [nodes, updateState]);

  const updateNodeLabel = (id: string, label: string) => {
    updateState({
      ...nodes,
      [id]: { ...nodes[id], label }
    });
  };

  return { nodes, addNode, deleteNode, updateNodeLabel, undo, redo, canUndo: currentIndex > 0, canRedo: currentIndex < history.length - 1 };
};