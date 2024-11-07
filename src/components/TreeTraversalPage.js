// src/components/TreeTraversalPage.js
import React, { useState } from 'react';
import StaticTree from './StaticTree';
import TraversalAnimation from './TraversalAnimation';

const TreeTraversalPage = () => {
  const [traversalType, setTraversalType] = useState('preorder');
  const [animate, setAnimate] = useState(false);

  const startAnimation = () => {
    setAnimate(false); // Reset animation
    setTimeout(() => setAnimate(true), 100); // Restart animation
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-4 gap-4">
      {/* Static Tree Display */}
      <div className="w-full lg:w-1/2 border border-gray-300 rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4 text-center">Static Tree</h2>
        <StaticTree />
      </div>

      {/* Traversal Animation Display */}
      <div className="w-full lg:w-1/2 border border-gray-300 rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4 text-center">Traversal Animation</h2>
        <TraversalAnimation traversalType={traversalType} animate={animate} />
        
        {/* Controls */}
        <div className="flex justify-center gap-4 mt-4">
          <select
            value={traversalType}
            onChange={(e) => setTraversalType(e.target.value)}
            className="p-2 border border-gray-400 rounded-lg"
          >
            <option value="preorder">Preorder</option>
            <option value="inorder">Inorder</option>
            <option value="postorder">Postorder</option>
          </select>
          <button
            onClick={startAnimation}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Start Animation
          </button>
        </div>
      </div>
    </div>
  );
};

export default TreeTraversalPage;
