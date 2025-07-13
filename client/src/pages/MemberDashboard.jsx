import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import BodyweightChart from '../components/ui/BodyweightChart';
import WeeklyCalories from '../components/ui/WeeklyCalories';
import GoalProgress from '../components/ui/GoalProgress';
import TodaysWorkout from '../components/ui/TodaysWorkout';
import TodaysMealPlan from '../components/ui/TodaysMealPlan';
import UpcomingTasks from '../components/ui/UpcomingTasks';
import TransformationTracker from '../components/ui/TransformationTracker';

const MemberDashboard = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="container mx-auto p-4 bg-background text-foreground min-h-screen">
      <h1 className="text-4xl font-heading font-bold mb-6 text-center text-primary">Welcome, {user?.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="bg-secondary border-border">
          <CardHeader>
            <CardTitle className="text-primary">Bodyweight</CardTitle>
          </CardHeader>
          <CardContent>
            <BodyweightChart />
          </CardContent>
        </Card>
        <Card className="bg-secondary border-border">
          <CardHeader>
            <CardTitle className="text-primary">Weekly Calories</CardTitle>
          </CardHeader>
          <CardContent>
            <WeeklyCalories />
          </CardContent>
        </Card>
        <Card className="bg-secondary border-border">
          <CardHeader>
            <CardTitle className="text-primary">Goal Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <GoalProgress />
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card className="bg-secondary border-border">
          <CardHeader>
            <CardTitle className="text-primary">Today's Workout</CardTitle>
          </CardHeader>
          <CardContent>
            <TodaysWorkout />
          </CardContent>
        </Card>
        <TodaysMealPlan />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <UpcomingTasks />
        </div>
        <div className="flex items-center justify-center">
          <TransformationTracker />
        </div>
      </div>
    </div>
  );
};

export default MemberDashboard;
