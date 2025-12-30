# 🚀 Workflow Builder

A high-performance, interactive application built to visualize and manage complex workflow hierarchies. This project features a custom-built tree rendering engine and a normalized state management system.

---

## ✨ Features

### Core Functionality
* **Dynamic Node Types**: Full support for **Start**, **Action** (sequential), **Branch/Condition** (multi-path), and **End** nodes.
* **Interactive Node Creation**: A context-sensitive pop-over menu allows users to inject steps at any connection point in the flow.
* **Tree Healing Logic**: Advanced deletion logic that automatically reconnects parent nodes to grandchildren to maintain a continuous workflow.
* **Live Editing**: Real-time label and property updates for every node in the workspace.

### Bonus Features (Advanced)
* **Undo/Redo System**: A complete structural history stack allowing users to revert or re-apply any structural change.
* **Persistence & Export**: A "Save" feature that logs the workflow's JSON architecture to the console and downloads a `.json` file for local storage.
* **Modern UI/UX**: Custom CSS-only interface with smooth transitions, floating menus, and responsive branching layouts.

---

## 🛠️ Technical Implementation

### 1. Data Modeling: Normalized Adjacency List
Instead of a deeply nested JSON object, this project uses a **normalized flat object** for state management.
* **Why?**: Nested structures require expensive deep-cloning and complex recursion for simple updates.
* **Performance**: Provides $O(1)$ time complexity for accessing or updating any node and simplifies the "Tree Healing" logic during deletions.



### 2. Recursive Rendering Engine
The UI utilizes a recursive component strategy. The `RecursiveTree` component dynamically traverses the adjacency list, rendering children based on the parent’s `children` array. 
* This approach effortlessly handles deep branching and infinite nesting without the need for a third-party diagramming library.

### 3. Stacking Context & Pop-over UI
To ensure a professional user experience, the interactive menus utilize `absolute` positioning and manual stacking context management (`z-index`). This ensures that floating menus always appear above connection lines and neighboring nodes.



---

## 🚀 Getting Started

1. **Clone the repo**
   ```bash
   git clone [https://github.com/Vaishnavitayde2036/Workflow-Builder.git](https://github.com/Vaishnavitayde2036/Workflow-Builder.git)

2. **Install dependencies**
   ```bash
   npm install

3. **Run the development server**
   ```bash
   npm run dev

## 🏗️Tech Stack

* React 18 (Hooks, Functional Components)
* TypeScript (Strict Typing for Node Data)
* Vite (Fast Build Tooling)
* CSS3 (Custom Flexbox Grid & Transitions)
* No External UI Libraries (100% Custom Components)

