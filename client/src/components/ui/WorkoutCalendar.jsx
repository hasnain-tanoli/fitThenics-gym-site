import React from 'react';
import { Calendar } from './calendar';

const WorkoutCalendar = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
};

export default WorkoutCalendar;
