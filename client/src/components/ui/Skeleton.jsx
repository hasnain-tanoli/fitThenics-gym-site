import React from 'react';

const Skeleton = ({ className }) => {
  return (
    <div className={`animate-pulse bg-gray-700 rounded-md ${className}`}></div> // Changed bg-gray-300 to bg-gray-700 and added rounded-md
  );
};

export default Skeleton;
