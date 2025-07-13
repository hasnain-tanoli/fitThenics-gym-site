import React from 'react';

const CalorieCalculatorPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-foreground">Calorie Calculator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2 text-card-foreground">Calculator Form</h2>
          {/* Add form inputs here */}
        </div>
        <div className="bg-card p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2 text-card-foreground">Macros Breakdown</h2>
          {/* Add macros breakdown here */}
        </div>
      </div>
    </div>
  );
};

export default CalorieCalculatorPage;
