import React from 'react';
import { useParams } from 'react-router-dom';
import ThreadDetail from '../components/ui/ThreadDetail';

const ThreadPage = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto p-4">
      <ThreadDetail threadId={id} />
    </div>
  );
};

export default ThreadPage;
