import React from 'react';

const TodaysWorkout = () => {
  const progress = 60; // Example progress
  const strokeWidth = 12; // Increased stroke width
  const radius = 70; // Adjusted radius
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-white"> {/* Added container styling */}
      <h3 className="text-xl font-semibold mb-4 text-blue-300">Today's Workout</h3> {/* Added heading */}
      <div className="relative w-40 h-40"> {/* Adjusted size */}
        <svg className="w-full h-full">
          <circle
            className="text-gray-700" // Darker gray for background circle
            strokeWidth={strokeWidth}
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="80" // Adjusted center
            cy="80" // Adjusted center
          />
          <circle
            className="text-blue-500" // Changed blue shade
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="80" // Adjusted center
            cy="80" // Adjusted center
            transform="rotate(-90 80 80)" // Adjusted center
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-blue-400">{progress}%</span> {/* Enhanced text styling */}
        </div>
      </div>
      <p className="text-gray-400 mt-4">Workout Completed</p> {/* Changed text */}
    </div>
  );
};

export default TodaysWorkout;
