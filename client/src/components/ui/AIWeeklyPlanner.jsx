import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';
import { Button } from './button';

const AIWeeklyPlanner = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>AI Weekly Planner</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>AI Weekly Planner</DialogTitle>
        </DialogHeader>
        <div>
          {/* Add progress analysis chart and suggested workouts/meals here */}
        </div>
        <Button>Accept Plan</Button>
      </DialogContent>
    </Dialog>
  );
};

export default AIWeeklyPlanner;
