import React from "react";
import { Skeleton } from "react-content-loader";

const LoadingSkeleton = () => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
    <div className="h-40 bg-gray-300 dark:bg-gray-700 rounded"></div>
    <div className="mt-4 h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
    <div className="mt-2 h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
  </div>
);

export default LoadingSkeleton;
