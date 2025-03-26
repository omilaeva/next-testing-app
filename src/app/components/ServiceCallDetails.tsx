"use client";
import React from "react";

const ServiceCallDetails = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="grid grid-cols-3 gap-8 w-full max-w-[1440px] mx-auto">
        {/* Left Column */}
        <div className="col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900">Service Call Management</h2>
            <p className="text-gray-600 text-sm mt-1">Service Call #SC-2025-0234</p>
            <div className="flex space-x-2 mt-2">
              <span className="bg-yellow-200 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full">Open</span>
              <span className="bg-red-200 text-red-800 text-xs font-bold px-3 py-1 rounded-full">High Priority</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mt-3">Water Leak in Apartment 302</h3>
            <p className="text-gray-800">Tenant reports water leaking from ceiling in bathroom. Possible pipe burst from unit above.</p>
            <div className="mt-4 border-t pt-4 grid grid-cols-2 gap-x-12 gap-y-2 text-gray-700">
              <div className="flex items-center">🏢 <span className="ml-2 font-semibold">Location:</span></div>
              <p className="text-gray-900">Sunrise Apartments, Building B, Unit 302</p>
              <div className="flex items-center">👤 <span className="ml-2 font-semibold">Reported By:</span></div>
              <p className="text-gray-900">John Smith (Tenant)</p>
              <div className="flex items-center">📅 <span className="ml-2 font-semibold">Reported On:</span></div>
              <p className="text-gray-900">Feb 25, 2025 09:32 AM</p>
              <div className="flex items-center">⏰ <span className="ml-2 font-semibold">Due Date:</span></div>
              <p className="text-gray-900">Feb 28, 2025</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-gray-900">Assign Service Call</h3>
            <select className="mt-2 w-full p-2 border rounded text-gray-900" defaultValue="">
              <option value="">Select service provider</option>
              <option value="Quick Plumbing Services">Quick Plumbing Services</option>
              <option value="City Maintenance Crew">City Maintenance Crew</option>
              <option value="Johnson Plumbing & Repair">Johnson Plumbing & Repair</option>
              <option value="Mike Wilson (On-site Maintenance)">Mike Wilson (On-site Maintenance)</option>
              <option value="Sarah Johnson (Maintenance Staff)">Sarah Johnson (Maintenance Staff)</option>
            </select>
            
            <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg">Assign</button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-gray-900">Add Comment</h3>
            <textarea
              className="mt-2 w-full p-2 border rounded text-gray-900"
              placeholder="Add your comment here..."
              defaultValue=""
            ></textarea>
            <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg">Add Comment</button>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-gray-900">Service Call History</h3>
          <div className="space-y-4 mt-3">
            <div className="border-l-4 border-gray-300 pl-3">
              <p className="text-xs text-gray-500">Feb 25, 2025 09:32 AM</p>
              <p className="font-semibold text-gray-900">John Smith (Tenant)</p>
              <p className="text-sm text-gray-800">Created service call</p>
              <p className="text-xs bg-gray-200 p-2 rounded text-gray-800">
                Water is dripping from the bathroom ceiling.
              </p>
            </div>
            <div className="border-l-4 border-gray-300 pl-3">
              <p className="text-xs text-gray-500">Feb 25, 2025 10:15 AM</p>
              <p className="font-semibold text-gray-900">System</p>
              <p className="text-sm text-gray-800">Priority set to High</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-3">
              <p className="text-xs text-gray-500">Feb 25, 2025 11:20 AM</p>
              <p className="font-semibold text-gray-900">Emily Davis (Property Manager)</p>
              <p className="text-sm text-gray-800">Reviewed</p>
              <p className="text-xs bg-gray-200 p-2 rounded text-gray-800">
                Contacted tenant for more information about the leak.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCallDetails;
