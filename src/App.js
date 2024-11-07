// src/App.js
import React, { useState } from 'react';
import StaticTree from './components/StaticTree';
import TraversalAnimation from './components/TraversalAnimation';

function App() {
  const [traversalType, setTraversalType] = useState('preorder');
  const [animate, setAnimate] = useState(false);

  const handleTraversalChange = (e) => {
    setTraversalType(e.target.value);
  };

  const startAnimation = () => {
    setAnimate(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Tree Traversal Visualizer</h1>
      <div className="flex flex-row space-x-10">
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Static Tree</h2>
          <StaticTree />
        </div>
        <div className="p-4 bg-white shadow-lg rounded-lg w-80">
          <h2 className="text-xl font-semibold mb-4">Traversal Animation</h2>
          <div className="mb-4">
            <label htmlFor="traversal" className="block text-gray-700 mb-2">Choose Traversal Type</label>
            <select
              id="traversal"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleTraversalChange}
              value={traversalType}
            >
              <option value="preorder">Preorder</option>
              <option value="inorder">Inorder</option>
              <option value="postorder">Postorder</option>
            </select>
          </div>
          <button
            onClick={startAnimation}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Start Animation
          </button>
          <div className="mt-6">
            <TraversalAnimation traversalType={traversalType} animate={animate} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
