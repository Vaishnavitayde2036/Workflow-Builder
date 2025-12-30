export type NodeType = 'start' | 'action' | 'condition' | 'end';

export interface WorkflowNode {
  id: string;
  type: NodeType;
  label: string;
  children: string[]; // Array of IDs. Action has 1, Condition has 2, End has 0.
}

export interface NodeData {
  [key: string]: WorkflowNode;
}