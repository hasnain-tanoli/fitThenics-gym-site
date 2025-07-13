import React from 'react';
import WorkoutCalendar from '../components/ui/WorkoutCalendar';

const WorkoutCalendarPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Workout Calendar</h1>
      <WorkoutCalendar />
    </div>
  );
};

export default WorkoutCalendarPage;
