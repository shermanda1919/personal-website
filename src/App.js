import React from 'react';

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Personal Website</h1>
        <p className="text-gray-600 mb-6">This is a brief introduction about me.</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;