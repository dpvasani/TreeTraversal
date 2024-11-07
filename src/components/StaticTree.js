// src/components/StaticTree.js
import React from 'react';

function StaticTree() {
  return (
    <svg width="200" height="200" className="mx-auto">
      {/* Lines for connecting nodes */}
      <line x1="100" y1="20" x2="50" y2="60" stroke="black" />
      <line x1="100" y1="20" x2="150" y2="60" stroke="black" />
      {/* Additional lines to build tree structure */}

      {/* Nodes */}
      <circle cx="100" cy="20" r="15" fill="green" stroke="black" />
      <text x="100" y="25" textAnchor="middle" fill="white" fontSize="12">1</text>

      <circle cx="50" cy="60" r="15" fill="green" stroke="black" />
      <text x="50" y="65" textAnchor="middle" fill="white" fontSize="12">2</text>

      <circle cx="150" cy="60" r="15" fill="green" stroke="black" />
      <text x="150" y="65" textAnchor="middle" fill="white" fontSize="12">3</text>
      
      {/* Continue for remaining nodes in similar fashion */}
    </svg>
  );
}

export default StaticTree;
