import React from 'react';

const GoalProgress = () => {
  const progress = 75; // Example progress

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white"> {/* Added container styling */}
      <h3 className="text-xl font-semibold mb-4 text-blue-300">Goal Progress</h3> {/* Added heading */}
      <div className="w-full bg-gray-700 rounded-full h-4"> {/* Changed background color */}
        <div
          className="bg-blue-500 h-4 rounded-full transition-all duration-500 ease-out" // Changed blue shade and added transition
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-right text-sm mt-2 text-gray-400">{progress}% Complete</p> {/* Added percentage text */}
    </div>
  );
};

export default GoalProgress;
