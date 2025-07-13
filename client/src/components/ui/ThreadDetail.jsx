import React from 'react';
import Post from './Post';

const thread = {
  id: 1,
  title: 'General Discussion',
  posts: [
    { id: 1, author: 'John Doe', content: 'This is the first post.' },
    { id: 2, author: 'Jane Smith', content: 'This is a reply.' },
  ],
};

const ThreadDetail = ({ threadId }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{thread.title}</h1>
      <div>
        {thread.posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default ThreadDetail;
