// src/app/components/OperatorList.tsx
"use client";
import React, { useState } from "react";

export default function OperatorList() {
  const [operators] = useState([
    {
      name: "Robert Garcia",
      initials: "RG",
      skills: ["Plumbing", "HVAC"],
      activeCalls: 7,
      completedToday: 3,
      satisfaction: 92,
    },
    {
      name: "Elena Davis",
      initials: "ED",
      skills: ["Plumbing"],
      activeCalls: 3,
      completedToday: 1,
      satisfaction: 95,
    },
  ]);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Available Service Operators</h2>
      <div className="space-y-2">
        {operators.map((op) => (
          <div
            key={op.name}
            className="flex justify-between items-center bg-gray-100 p-3 rounded shadow"
          >
            {/* Left side: Operator initials + name/skills */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-semibold">
                {op.initials}
              </div>
              <div>
                <div className="font-semibold text-gray-800">{op.name}</div>
                <div className="text-sm text-gray-500">
                  {op.skills.join(", ")}
                </div>
              </div>
            </div>

            {/* Middle: Stats */}
            <div className="flex items-center gap-4 text-sm text-gray-700">
              <div>
                <span className="font-semibold">{op.activeCalls}</span> Active
              </div>
              <div>
                <span className="font-semibold">{op.completedToday}</span>{" "}
                Completed Today
              </div>
              <div>
                <span className="font-semibold">{op.satisfaction}%</span>{" "}
                Satisfaction
              </div>
            </div>

            {/* Right side: Assign button */}
            <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
              Assign
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}