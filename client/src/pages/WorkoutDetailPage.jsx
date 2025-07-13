import React from 'react';

const WorkoutDetailPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Workout Detail</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="bg-gray-200 h-64 rounded-lg mb-4">
            {/* Video player will go here */}
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Exercise Name</h2>
            <p>3 sets of 12 reps</p>
          </div>
        </div>
        <div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Tracker</h2>
            {/* Add tracker components here */}
          </div>
          <div className="bg-gray-200 p-4 rounded-lg mt-4">
            <h2 className="text-xl font-bold mb-2">Notes</h2>
            <textarea className="w-full p-2 border border-gray-300 rounded-md"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailPage;
