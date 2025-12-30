// src/utils/storage.ts

/**
 * Handles saving the workflow by logging the JSON structure to the console
 * and triggering a browser download of the workflow file.
 */
export const saveWorkflow = (nodes: Record<string, any>) => {
  // 1. Log to console as explicitly required by the assignment bonus points
  console.log('Workflow Structure Saved:', nodes);

  // 2. Bonus: Create a download link for the JSON file
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(nodes, null, 2));
  const downloadAnchorNode = document.createElement('a');
  
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", "workflow.json");
  
  // Temporarily add to DOM to trigger the click
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
};