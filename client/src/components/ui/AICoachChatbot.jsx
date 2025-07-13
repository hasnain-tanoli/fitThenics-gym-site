import React from 'react';
import { Button } from './button';
import { MessageSquare } from 'lucide-react';

const AICoachChatbot = () => {
  return (
    <div className="fixed bottom-4 right-4">
      <Button size="icon">
        <MessageSquare />
      </Button>
    </div>
  );
};

export default AICoachChatbot;
