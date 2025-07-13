import React from 'react';

const WorkoutBuilderPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Workout Builder</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 bg-gray-200 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Exercises</h2>
          {/* Add list of exercises here */}
        </div>
        <div className="col-span-2 bg-gray-200 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Timeline</h2>
          {/* Add timeline here */}
        </div>
      </div>
    </div>
  );
};

export default WorkoutBuilderPage;
