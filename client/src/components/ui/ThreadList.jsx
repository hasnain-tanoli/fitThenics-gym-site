import React from 'react';
import { Link } from 'react-router-dom';

const threads = [
  { id: 1, title: 'General Discussion', lastPost: '5 minutes ago' },
  { id: 2, title: 'Workout Plans', lastPost: '2 hours ago' },
  { id: 3, title: 'Nutrition Advice', lastPost: '1 day ago' },
];

const ThreadList = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <ul>
        {threads.map((thread) => (
          <li key={thread.id} className="border-b last:border-b-0">
            <Link to={`/forum/thread/${thread.id}`} className="flex justify-between items-center p-4 hover:bg-gray-50">
              <span className="font-semibold">{thread.title}</span>
              <span className="text-sm text-gray-500">{thread.lastPost}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThreadList;
