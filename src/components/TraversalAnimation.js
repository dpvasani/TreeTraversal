
// src/components/TraversalAnimation.js
import React, { useEffect, useState } from 'react';
import Sketch from 'react-p5';

const TraversalAnimation = ({ traversalType, animate }) => {
  const nodes = [
    { id: 1, x: 200, y: 50, left: 2, right: 3 },
    { id: 2, x: 100, y: 150, left: 4, right: 5 },
    { id: 3, x: 300, y: 150, left: 6, right: 7 },
    { id: 4, x: 50, y: 250, left: null, right: null },
    { id: 5, x: 150, y: 250, left: null, right: null },
    { id: 6, x: 250, y: 250, left: null, right: null },
    { id: 7, x: 350, y: 250, left: null, right: null },
  ];

  const [traversalOrder, setTraversalOrder] = useState([]);
  const [visitedIndex, setVisitedIndex] = useState(0);

  // Traverse the tree and create traversal order based on selected type
  const getTraversalOrder = (type) => {
    const order = [];
    const traverse = (nodeId) => {
      if (nodeId === null) return;
      const node = nodes.find((n) => n.id === nodeId);
      if (type === 'preorder') order.push(node); // Visit node before children
      traverse(node.left);
      if (type === 'inorder') order.push(node); // Visit node between children
      traverse(node.right);
      if (type === 'postorder') order.push(node); // Visit node after children
    };
    traverse(1); // Start from the root node (node with id 1)
    return order;
  };

  useEffect(() => {
    if (animate) {
      setTraversalOrder(getTraversalOrder(traversalType));
      setVisitedIndex(0); // Reset the visited index when animation restarts
    }
  }, [traversalType, animate]);

  // Setup function for p5.js
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef);
  };

  // Draw function for p5.js
  const draw = (p5) => {
    p5.background(255);

    // Draw edges
    nodes.forEach((node) => {
      if (node.left) {
        const leftNode = nodes.find((n) => n.id === node.left);
        p5.stroke(0);
        p5.line(node.x, node.y, leftNode.x, leftNode.y);
      }
      if (node.right) {
        const rightNode = nodes.find((n) => n.id === node.right);
        p5.stroke(0);
        p5.line(node.x, node.y, rightNode.x, rightNode.y);
      }
    });

    // Draw nodes and traversal order numbers
    nodes.forEach((node) => {
      let traversalNumber = traversalOrder
        .slice(0, visitedIndex + 1)
        .findIndex((n) => n.id === node.id) + 1;
        
      if (traversalOrder[visitedIndex] && traversalOrder[visitedIndex].id === node.id) {
        p5.fill('red'); // Highlight the currently visited node in red
      } else if (traversalNumber > 0) {
        p5.fill('red'); // Nodes already visited turn red
      } else {
        p5.fill('green'); // Nodes not visited remain green
      }
      p5.stroke(0);
      p5.ellipse(node.x, node.y, 30, 30);

      // Display node id inside the node
      p5.fill(255);
      p5.textAlign(p5.CENTER, p5.CENTER);
      p5.text(node.id, node.x, node.y);

      // Display traversal order number above the node
      if (traversalNumber > 0) {
        p5.fill(0);
        p5.text(traversalNumber, node.x, node.y - 20); // Display traversal number above the node
      }
    });

    // Animate traversal
    if (animate && visitedIndex < traversalOrder.length) {
      setTimeout(() => {
        setVisitedIndex(visitedIndex + 1);
      }, 1000); // Adjust timing for animation speed
    }
  };

  return <Sketch setup={setup} draw={draw} className="border border-gray-300 rounded-lg" />;
};

export default TraversalAnimation;
