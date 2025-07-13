import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const MealPlanPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Meal Plan</h1>
      <Tabs defaultValue="breakfast">
        <TabsList>
          <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
          <TabsTrigger value="lunch">Lunch</TabsTrigger>
          <TabsTrigger value="dinner">Dinner</TabsTrigger>
          <TabsTrigger value="snacks">Snacks</TabsTrigger>
        </TabsList>
        <TabsContent value="breakfast">
          <Card>
            <CardHeader>
              <CardTitle>Breakfast</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Add breakfast meal cards here */}
              <Button>Replace Meal</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="lunch">
          <Card>
            <CardHeader>
              <CardTitle>Lunch</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Add lunch meal cards here */}
              <Button>Replace Meal</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="dinner">
          <Card>
            <CardHeader>
              <CardTitle>Dinner</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Add dinner meal cards here */}
              <Button>Replace Meal</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="snacks">
          <Card>
            <CardHeader>
              <CardTitle>Snacks</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Add snacks meal cards here */}
              <Button>Replace Meal</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MealPlanPage;
