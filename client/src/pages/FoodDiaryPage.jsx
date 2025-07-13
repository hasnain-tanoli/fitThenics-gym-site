import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const FoodDiaryPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-foreground">Food Diary</h1>
      <div className="flex mb-4">
        <Input type="search" placeholder="Search for food..." className="mr-2" />
        <Button>Search</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-2 text-foreground">Today's Meals</h2>
          {/* Add meal list here */}
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2 text-foreground">Daily Macros</h2>
          {/* Add macro progress ring here */}
        </div>
      </div>
    </div>
  );
};

export default FoodDiaryPage;
