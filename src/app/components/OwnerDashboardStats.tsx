// src/app/components/OwnerDashboardStats.tsx
"use client";
import React from "react";

/** Calculate the percentage difference between current and last. */
function getPercentageChange(current: number, last: number) {
  if (last === 0) return 0;
  return ((current - last) / last) * 100;
}

/** Simple text arrow component: ▲ for positive, ▼ for negative. */
function ArrowIcon({ isPositive }: { isPositive: boolean }) {
  return (
    <span className="mr-1">
      {isPositive ? "↑" : "↓"}
    </span>
  );
}

export default function OwnerDashboardStats() {
  // Mock data for current vs. last month
  const totalActiveCalls = { current: 42, last: 37 };
  const unassignedCalls = { current: 8, last: 12 };
  const urgentCalls = { current: 5, last: 4 };
  const completedThisMonth = { current: 37, last: 30 };

  // Put them into an array for easier rendering
  const stats = [
    {
      label: "Total Active Service Calls",
      current: totalActiveCalls.current,
      last: totalActiveCalls.last,
    },
    {
      label: "Unassigned Calls",
      current: unassignedCalls.current,
      last: unassignedCalls.last,
    },
    {
      label: "Urgent Calls",
      current: urgentCalls.current,
      last: urgentCalls.last,
    },
    {
      label: "Completed This Month",
      current: completedThisMonth.current,
      last: completedThisMonth.last,
    },
  ];

  return (
    <div className="mb-6">
      {/* Top Row: Stat Boxes */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((item) => {
          const change = getPercentageChange(item.current, item.last);
          const isPositive = change >= 0;
          const absChange = Math.abs(change).toFixed(1);
          const changeText = `${absChange}% vs last month`;

          return (
            <div
              key={item.label}
              className="bg-gray-50 border border-gray-200 p-4 rounded-md shadow-sm"
            >
              <h2 className="text-sm text-gray-500 mb-1">{item.label}</h2>
              <p className="text-2xl font-bold">{item.current}</p>
              <div
                className={`text-sm mt-1 flex items-center ${
                  isPositive ? "text-green-600" : "text-red-600"
                }`}
              >
                <ArrowIcon isPositive={isPositive} />
                {changeText}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Row: All Service Calls + Pill Buttons */}
      <div className="flex items-center gap-4 mt-6 text-sm text-gray-700">
        {/* "All Service Calls" with an underline */}
        <div className="cursor-pointer text-blue-600 font-semibold border-b-2 border-blue-600">
          All Service Calls
        </div>

        {/* Unassigned Pill */}
        <div className="cursor-pointer hover:text-blue-600 flex items-center">
          <span>Unassigned</span>
          <span className="font-semibold px-3 py-0.5 rounded-full bg-blue-50 text-blue-700 ml-2">
            {unassignedCalls.current}
          </span>
        </div>

        {/* Urgent Pill */}
        <div className="cursor-pointer hover:text-blue-600 flex items-center">
          <span>Urgent</span>
          <span className="font-semibold px-3 py-0.5 rounded-full bg-blue-50 text-blue-700 ml-2">
            {urgentCalls.current}
          </span>
        </div>

        {/* In Progress Pill */}
        <div className="cursor-pointer hover:text-blue-600 flex items-center">
          <span>In Progress</span>
          <span className="font-semibold px-3 py-0.5 rounded-full bg-blue-50 text-blue-700 ml-2">
            24
          </span>
        </div>

        {/* Completed Pill */}
        <div className="cursor-pointer hover:text-blue-600 flex items-center">
          <span>Completed</span>
          <span className="font-semibold px-3 py-0.5 rounded-full bg-blue-50 text-blue-700 ml-2">
            {completedThisMonth.current}
          </span>
        </div>

      </div>
    </div>
  );
}