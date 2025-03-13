import React from 'react';
import arrowright from '../assets/arrowright.png';

export default function AnalyticsCards() {
  const stats = [
    { title: "Total Applications", value: 24, change: "7.1%", isIncrease: true, lastMonth: 20 },
    { title: "In Progress Applications", value: 24, change: "7.1%", isIncrease: true, lastMonth: 20 },
    { title: "Approved Applications", value: 7, change: "10%", isIncrease: true, lastMonth: 6 },
    { title: "Denied Applications", value: 4, change: "33.1%", isIncrease: false, lastMonth: 3 },
  ];

  return (
    <div className="w-full">
     <div className="flex justify-between p-4 items-center">
     <p className="text-[#1F2937] text-sm">Analytics</p>
    
<div className="relative">
  <select
    className="appearance-none bg-white border border-gray-300 text-black text-sm px-4 py-2 rounded-md w-28 cursor-pointer focus:outline-none focus:ring-1 focus:ring-gray-400"
  >
    <option>March</option>
    <option>April</option>
    <option>May</option>
  </select>
  
  <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
    <img src={arrowright} alt="Dropdown Arrow" className="h-4 w-4" />
  </div>
</div>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6">
            <div className="space-y-2">
              <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                  <span 
                    className={`ml-2 text-xs font-medium flex items-center ${
                      stat.isIncrease ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {stat.isIncrease ? (
                      <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 5l7 7-1.41 1.41L13 8.83V19h-2V8.83l-4.59 4.58L5 12l7-7z" />
                      </svg>
                    ) : (
                      <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 19l-7-7 1.41-1.41L11 15.17V5h2v10.17l4.59-4.58L19 12l-7 7z" />
                      </svg>
                    )}
                    {stat.change}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1">Last month: {stat.lastMonth}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}