// src/app/components/ServiceCallsTable.tsx
"use client";
import React, { useState } from "react";

function Badge({ text, type }: { text: string; type: "status" | "priority" }) {
  let bg = "bg-gray-100";
  let textColor = "text-gray-800";
  let rounded = "";

  // For status
if (type === "status") {
  switch (text) {
    case "Unassigned":
      bg = "bg-yellow-100";
      textColor = "text-yellow-800";
      rounded = "rounded-full px-3 py-1";
      break;
    case "In Progress":
      bg = "bg-blue-200";
      textColor = "text-blue-600";
      rounded = "rounded-full px-3 py-1";
      break;
    case "Assigned":
      bg = "bg-blue-100";
      textColor = "text-green-700";
      rounded = "rounded-full px-3 py-1";
      break;
    case "Completed":
      bg = "bg-green-200";
      textColor = "text-gray-700";
      rounded = "rounded-full px-3 py-1";
      break;
  }
}

// For priority
if (type === "priority") {
  switch (text) {
    case "Urgent":
      bg = "bg-red-100";
      textColor = "text-red-700";
      rounded = "rounded-full px-3 py-1"; 
      break;
    case "Standard":
      bg = "";
      textColor = "text-gray-700";
      rounded = "";
      break;
    case "Low":
      bg = "bg-green-100";
      textColor = "text-gray-700";
      rounded = "rounded-full px-3 py-1";
      break;
  }
}

  return (
    <span className={`px-2 py-1 text-sm ${bg} ${textColor} ${rounded}`}>
      {text}
    </span>
  );
}

export default function ServiceCallsTable() {
  // Mock data
  const [serviceCalls] = useState([
    {
      id: "#SR-2025-0146",
      issue: "Thermostat not functioning",
      property: "Parkview Apt 304",
      tenant: "Sarah Johnson",
      category: "HVAC",
      status: "Unassigned",
      priority: "Urgent",
      submitted: "Feb 24, 2025",
      assignedTo: "",
    },
    {
      id: "#SR-2025-0145",
      issue: "Water leak under kitchen sink",
      property: "Riverside Condo 12B",
      tenant: "James Wilson",
      category: "Plumbing",
      status: "In Progress",
      priority: "Urgent",
      submitted: "Feb 24, 2025",
      assignedTo: "Elena Davis",
    },
    {
      id: "#SR-2025-0143",
      issue: "Broken window in living room",
      property: "Maple Street Home 7",
      tenant: "Lisa Chen",
      category: "Structural",
      status: "Assigned",
      priority: "Standard",
      submitted: "Feb 23, 2025",
      assignedTo: "Robert Garcia",
    },
    {
      id: "#SR-2025-0142",
      issue: "Dishwasher not draining",
      property: "Parkview Apt 202",
      tenant: "David Lee",
      category: "Appliance",
      status: "In Progress",
      priority: "Standard",
      submitted: "Feb 22, 2025",
      assignedTo: "",
    },
    {
      id: "#SR-2025-0141",
      issue: "AC unit making noise",
      property: "Maple Street Home 9",
      tenant: "Robert Brown",
      category: "HVAC",
      status: "Assigned",
      priority: "Urgent",
      submitted: "Feb 20, 2025",
      assignedTo: "Elena Davis",
    },
    {
      id: "#SR-2025-0140",
      issue: "Front door lock issue",
      property: "Riverside Condo 12A",
      tenant: "Mia Wong",
      category: "Structural",
      status: "Completed",
      priority: "Low",
      submitted: "Feb 19, 2025",
      assignedTo: "Robert Garcia",
    },
  ]);

  // Filter/search states
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  return (
    <div className="mb-6">
      {/* Filter Row */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {/* Search Box */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search service calls..."
            className="p-2 border border-gray-300 rounded-l"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="p-2 bg-gray-200 border border-gray-300 rounded-r hover:bg-gray-300">
            <svg
              className="w-4 h-4 inline-block mr-1"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M505 442.7l-99.7-99.7c28.4-35.3 45.7-80 45.7-128.7 0-114.9-93.1-208-208-208S35 99.4 35 214.3s93.1 
              208 208 208c48.7 0 93.4-17.3 128.7-45.7l99.7 99.7c4.5 4.5 10.6 6.7 16.7 6.7s12.2-2.2 16.7-6.7c9-9.2 
              9-24.3-.1-33.3zM243 362.3c-81.6 0-148-66.4-148-148s66.4-148 148-148 148 66.4 148 148-66.4 148-148 148z" />
            </svg>
            Search
          </button>
        </div>

        {/* All Properties Dropdown */}
        <select className="p-2 border border-gray-300 rounded">
          <option>All Properties</option>
          <option>Parkview Apt</option>
          <option>Riverside Condo</option>
          <option>Maple Street Home</option>
        </select>

        {/* All Categories Dropdown */}
        <select className="p-2 border border-gray-300 rounded">
          <option>All Categories</option>
          <option>HVAC</option>
          <option>Plumbing</option>
          <option>Structural</option>
          <option>Appliance</option>
        </select>

        {/* Date Range - on hover reveals from/to */}
        <div className="relative group">
          <button className="p-2 border border-gray-300 rounded hover:bg-gray-200 flex items-center gap-1">
            {/* Calendar icon */}
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5C3.35 4 2 5.35 2 7v12c0 1.65 1.35 3 3 3h14c1.65 
              0 3-1.35 3-3V7c0-1.65-1.35-3-3-3zm0 15H5V10h14v9z" />
            </svg>
            <span>Date Range</span>
          </button>
          {/* Hidden panel shown on hover */}
          <div className="absolute hidden group-hover:block top-full mt-1 left-0 bg-white border border-gray-200 p-2 rounded shadow z-10">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-1">
                <label className="text-sm text-gray-600">From:</label>
                <input
                  type="date"
                  className="p-1 border border-gray-300 rounded"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-1">
                <label className="text-sm text-gray-600">To:</label>
                <input
                  type="date"
                  className="p-1 border border-gray-300 rounded"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Calls Table */}
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Issue</th>
            <th className="p-3 text-left">Property</th>
            <th className="p-3 text-left">Tenant</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Priority</th>
            <th className="p-3 text-left">Submitted</th>
            <th className="p-3 text-left">Assigned To</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {serviceCalls.map((call) => (
            <tr key={call.id} className="border-b">
              <td className="p-3">{call.id}</td>
              <td className="p-3">{call.issue}</td>
              <td className="p-3">{call.property}</td>
              <td className="p-3">{call.tenant}</td>
              <td className="p-3">{call.category}</td>
              <td className="p-3">
                <Badge text={call.status} type="status" />
              </td>
              <td className="p-3">
                <Badge text={call.priority} type="priority" />
              </td>
              <td className="p-3">{call.submitted}</td>
              <td className="p-3">{call.assignedTo || "—"}</td>
              <td className="p-3 relative group">
                {/* 3-dot icon in a rounded box */}
                <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-4 h-4"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 9.5A1.5 1.5 0 1 1 3 
                    6.5a1.5 1.5 0 0 1 0 3zm5 
                    0A1.5 1.5 0 1 1 8 
                    6.5a1.5 1.5 0 0 1 0 
                    3zm5 0a1.5 1.5 0 1 1 
                    0-3 1.5 1.5 0 0 1 
                    0 3z" />
                  </svg>
                </div>
                {/* Actions dropdown: opens on hover */}
                <div className="absolute right-0 mt-1 w-44 bg-white border border-gray-200 rounded shadow z-10 hidden group-hover:block">
                  <ul className="text-sm text-gray-700">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Assign Operator
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      View Details
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Change Priority
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Message Tenant
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Close Ticket
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}