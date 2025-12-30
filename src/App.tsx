
import { useWorkflow } from './hooks/useWorkflow';
import { WorkflowCanvas } from './components/Canvas/WorkflowCanvas';
import { Toolbar } from './components/UI/Toolbar';
import { saveWorkflow } from './utils/storage';

function App() {
  // These must match exactly what your useWorkflow hook returns
  const { 
    nodes, 
    addNode, 
    deleteNode, 
    updateNodeLabel, 
    undo, 
    redo, 
    canUndo, 
    canRedo 
  } = useWorkflow();

  return (
    <div className="app-layout">
      <Toolbar 
        onSave={() => saveWorkflow(nodes)} 
        onUndo={undo} 
        onRedo={redo} 
        canUndo={canUndo} 
        canRedo={canRedo} 
      />
      <WorkflowCanvas 
        nodes={nodes} 
        addNode={addNode} 
        deleteNode={deleteNode} 
        updateNodeLabel={updateNodeLabel} 
      />
    </div>
  );
}

export default App;