import React from 'react';
import Reply from './Reply';

const Post = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="font-bold">{post.author}</div>
      <p>{post.content}</p>
      {/* Add replies here */}
    </div>
  );
};

export default Post;
