import { FC } from "react";

export const Loading:FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white-200 dark:bg-dark-blue-200">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div className="
          absolute top-0 left-0 h-16 w-16 rounded-full border-t-8 border-b-8
          border-dark-blue-300 dark:border-white-300 animate-spin"
        >
        </div>
      </div>
    </div>
  )
};
