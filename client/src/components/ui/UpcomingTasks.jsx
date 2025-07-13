import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const UpcomingTasks = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          <li>Complete 30 minutes of cardio</li>
          <li>Log your meals for the day</li>
          <li>Drink 8 glasses of water</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default UpcomingTasks;
