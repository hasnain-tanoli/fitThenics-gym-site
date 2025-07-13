import React from 'react';
import ThreadList from '../components/ui/ThreadList';

const ForumPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Forum</h1>
      <ThreadList />
    </div>
  );
};

export default ForumPage;
