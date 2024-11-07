// src/App.js
import React, { useState } from 'react';
import StaticTree from './components/StaticTree';
import TraversalAnimation from './components/TraversalAnimation';
import { DarkModeSwitch } from 'react-toggle-dark-mode';  // Import the DarkModeSwitch component

function App() {
  const [traversalType, setTraversalType] = useState('preorder');
  const [animate, setAnimate] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);  // Dark mode state

  const handleTraversalChange = (e) => {
    setTraversalType(e.target.value);
  };

  const startAnimation = () => {
    setAnimate(false);
    setTimeout(() => {
      setAnimate(true);
    }, 0);
  };

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);  // Toggle dark mode state
  };

  return (
    <div className={`flex min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-blue-50 to-blue-100'}`}>
      <div className={`w-1/2 p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl`}>
        <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-4 text-center transition-transform hover:text-blue-600`}>
          Binary Tree
        </h2>
        <StaticTree />
      </div>

      <div className={`w-1/2 p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl`}>
        <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-4 text-center transition-transform hover:text-blue-600`}>
          Traversal Animation
        </h2>
        <div className="mb-4">
          <label htmlFor="traversal" className={`block ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2 font-medium`}>
            Choose Traversal Type
          </label>
          <select
            id="traversal"
            className={`w-full p-3 border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
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
          className="w-full bg-blue-500 text-white p-3 rounded-lg shadow-md hover:bg-blue-600 transition transform hover:scale-105"
        >
          Start Animation
        </button>
        <div className="mt-6">
          <TraversalAnimation traversalType={traversalType} animate={animate} />
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <div className="absolute top-4 right-4 p-2">
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={50}  // Adjust the size as needed
        />
      </div>
    </div>
  );
}

export default App;
