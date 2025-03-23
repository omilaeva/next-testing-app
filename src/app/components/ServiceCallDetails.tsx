"use client";
import React, { useState } from "react";

interface HistoryItem {
  datetime: string;
  user: string;
  action: string;
  comment?: string;
}

const ServiceCallDetails: React.FC = () => {
  const [assignedProvider, setAssignedProvider] = useState<string | null>(null);
  const [comment, setComment] = useState<string>("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      datetime: "Feb 25, 2025 09:32 AM",
      user: "John Smith (Tenant)",
      action: "Created service call",
      comment: "Water is dripping from the bathroom ceiling.",
    },
    {
      datetime: "Feb 25, 2025 10:15 AM",
      user: "System",
      action: "Priority set to High",
    },
    {
      datetime: "Feb 25, 2025 11:20 AM",
      user: "Emily Davis (Property Manager)",
      action: "Reviewed",
      comment: "Contacted tenant for more information about the leak.",
    },
  ]);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* ✅ Increase Full Width of the Section */}
      <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* ✅ Left Column - Service Call Management */}
        <div className="col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900">Service Call Management</h2>
            <p className="text-gray-600 text-sm mt-1">Service Call #SC-2025-0234</p>

            <div className="flex space-x-2 mt-2">
              <span className="bg-yellow-200 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full">
                Open
              </span>
              <span className="bg-red-200 text-red-800 text-xs font-bold px-3 py-1 rounded-full">
                High Priority
              </span>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mt-3">Water Leak in Apartment 302</h3>
            <p className="text-gray-800">
              Tenant reports water leaking from ceiling in bathroom. Possible pipe burst from unit above.
            </p>

            {/* ✅ Fix alignment issues using grid-cols-2 */}
            <div className="mt-4 border-t pt-4 grid grid-cols-2 gap-x-12 gap-y-2 text-gray-700">
              <div className="flex items-center">
                🏢 <span className="ml-2 font-semibold">Location:</span>
              </div>
              <p className="text-gray-900">Sunrise Apartments, Building B, Unit 302</p>

              <div className="flex items-center">
                👤 <span className="ml-2 font-semibold">Reported By:</span>
              </div>
              <p className="text-gray-900">John Smith (Tenant)</p>

              <div className="flex items-center">
                📅 <span className="ml-2 font-semibold">Reported On:</span>
              </div>
              <p className="text-gray-900">Feb 25, 2025 09:32 AM</p>

              <div className="flex items-center">
                ⏰ <span className="ml-2 font-semibold">Due Date:</span>
              </div>
              <p className="text-gray-900">Feb 28, 2025</p>
            </div>
          </div>

          {/* ✅ Assign Service Call */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-gray-900">Assign Service Call</h3>
            <select
              onChange={(e) => setAssignedProvider(e.target.value)}
              className="mt-2 w-full p-2 border rounded text-gray-900"
              defaultValue=""
            >
              <option value="">Select service provider</option>
              <option value="Quick Plumbing Services">Quick Plumbing Services</option>
              <option value="City Maintenance Crew">City Maintenance Crew</option>
              <option value="Johnson Plumbing & Repair">Johnson Plumbing & Repair</option>
              <option value="Mike Wilson (On-site Maintenance)">Mike Wilson (On-site Maintenance)</option>
              <option value="Sarah Johnson (Maintenance Staff)">Sarah Johnson (Maintenance Staff)</option>
            </select>
            {assignedProvider && (
              <div className="mt-2 p-2 bg-blue-100 text-blue-800 rounded">
                Assigned to {assignedProvider}
              </div>
            )}
            <button
            className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg "
            disabled={!assignedProvider}
          
            >
              Assign
            </button>
          </div>

          {/* ✅ Add Comment */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-gray-900">Add Comment</h3>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="mt-2 w-full p-2 border rounded text-gray-900"
              placeholder="Add your comment here..."
            ></textarea>
            <button
              className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg"
              onClick={() => {
                if (!comment.trim()) return;
                setHistory([
                  {
                    datetime: new Date().toLocaleString(),
                    user: "You (Owner)",
                    action: "Added comment",
                    comment,
                  },
                  ...history,
                ]);
                setComment("");
              }}
            >
              Add Comment
            </button>
          </div>
        </div>

        {/* ✅ Right Column - Service Call History with Increased Width */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-gray-900">Service Call History</h3>
          <div className="space-y-4 mt-3">
            {history.map((entry, index) => (
              <div key={index} className="border-l-4 border-gray-300 pl-3">
                <p className="text-xs text-gray-500">{entry.datetime}</p>
                <p className="font-semibold text-gray-900">{entry.user}</p>
                <p className="text-sm text-gray-800">{entry.action}</p>
                {entry.comment && (
                  <p className="text-xs bg-gray-200 p-2 rounded text-gray-800">
                    {entry.comment}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCallDetails;
