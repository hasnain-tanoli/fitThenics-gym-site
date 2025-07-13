import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TodaysMealPlan = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Meal Plan</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          <li className="flex justify-between">
            <span>Breakfast</span>
            <span>Oats with Berries</span>
          </li>
          <li className="flex justify-between">
            <span>Lunch</span>
            <span>Grilled Chicken Salad</span>
          </li>
          <li className="flex justify-between">
            <span>Dinner</span>
            <span>Salmon with Quinoa</span>
          </li>
          <li className="flex justify-between">
            <span>Snack</span>
            <span>Greek Yogurt</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default TodaysMealPlan;
