import React from 'react';

const WorkoutHistoryPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Workout History</h1>
      <div className="flex justify-between mb-4">
        <input type="date" className="p-2 border border-gray-300 rounded-md" />
        <select className="p-2 border border-gray-300 rounded-md">
          <option>All Types</option>
          <option>Cardio</option>
          <option>Strength</option>
        </select>
        <select className="p-2 border border-gray-300 rounded-md">
          <option>All Trainers</option>
          {/* Add trainer options here */}
        </select>
      </div>
      <div>
        {/* Add workout logs here */}
      </div>
    </div>
  );
};

export default WorkoutHistoryPage;
