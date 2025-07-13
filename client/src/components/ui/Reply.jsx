import React from 'react';

const Reply = ({ reply }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-3 ml-8 mt-2">
      <div className="font-bold">{reply.author}</div>
      <p>{reply.content}</p>
    </div>
  );
};

export default Reply;
