import React from "react";

const StatisticsCard = ({title,amount,img}) => {
  return (
    <div className="card-item rounded-lg bg-gray-800">
      <div className="p-8 flex items-center">
        <div className="p-3 rounded-full mr-4 w-16 h-16 bg-white">
          <img src={img} alt="" />
        </div>
        <div>
          <p class="mb-2 text-lg font-medium text-gray-600 dark:text-gray-400">
            {title}
          </p>
          <p class="text-xl font-semibold text-gray-700 dark:text-gray-200">
            {amount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
