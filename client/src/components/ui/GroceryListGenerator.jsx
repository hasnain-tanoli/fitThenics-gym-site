import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';
import { Button } from './button';

const GroceryListGenerator = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Generate Grocery List</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Grocery List</DialogTitle>
        </DialogHeader>
        <div>
          {/* Add grocery list items here */}
        </div>
        <Button>Download/Print/Export</Button>
      </DialogContent>
    </Dialog>
  );
};

export default GroceryListGenerator;
