import React from 'react';
import Skeleton from './Skeleton';

const DashboardSkeleton = () => {
  return (
    <div className="p-6 bg-gray-900 min-h-screen rounded-lg"> {/* Added dark mode background and padding */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"> {/* Enhanced grid and spacing */}
        <Skeleton className="h-40 rounded-lg" /> {/* Increased height and rounded corners */}
        <Skeleton className="h-40 rounded-lg" />
        <Skeleton className="h-40 rounded-lg" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"> {/* Enhanced grid and spacing */}
        <Skeleton className="h-80 rounded-lg" /> {/* Increased height and rounded corners */}
        <Skeleton className="h-80 rounded-lg" />
      </div>
    </div>
  );
};

export default DashboardSkeleton;
