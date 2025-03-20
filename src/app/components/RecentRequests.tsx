"use client";

import React from "react";
import { useState, useEffect } from "react";

// Helper function for assigning Aria roles to the status
interface StatusRoleMap {
  [key: string]: string;
}

const getStatusRole = (status: string): string => {
  const statusRoleMap: StatusRoleMap = {
    "In Progress": "status-inprogress bg-blue-100 text-blue-600",
    "Completed": "status-completed bg-green-100 text-green-600",
    "Pending": "status-pending bg-yellow-100 text-yellow-600",
  };

  return statusRoleMap[status] || "";
};

const RecentRequests = () => {
  interface Ticket {
    id: string;
    title: string;
    status: string;
    createdAt: string;
    priority: string;
  }
  
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch("/api/tickets");
        if (!response.ok) {
          throw new Error("Failed to fetch ticket data");
        }
        const data = await response.json();
        setTickets(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTickets();
  }, []);
  
  
  /*const tickets = [
    {
      id: "#SR-2025-0127",
      title: "Leaking faucet in main bathroom",
      status: "In Progress",
      submitted: "Feb 15, 2025",
      priority: "Standard",
    },
    {
      id: "#SR-2025-0093",
      title: "Dishwasher not draining properly",
      status: "Completed",
      submitted: "Jan 28, 2025",
      priority: "Urgent",
    },
    {
      id: "#SR-2025-0146",
      title: "Thermostat not functioning correctly",
      status: "Pending",
      submitted: "Feb 24, 2025",
      priority: "Standard",
    },
  ];*/


  return (
    <div className="tickets mt-10">
      <div className="section-title text-2xl font-semibold mb-6">My Recent Requests</div>
      {tickets.map((ticket, index) => (
        <div
          key={index}
          className="ticket-item bg-white rounded-lg shadow-md p-4 mb-4"
          role="region"
          aria-labelledby={`ticket-title-${index}`}
        >
          <div className="ticket-header flex justify-between items-center">
            {/* Title */}
            <div
              id={`ticket-title-${index}`}
              className="ticket-title text-xl font-semibold"
              tabIndex={0} // Allow keyboard focus for the title
            >
              {ticket.title}
            </div>

            {/* Status */}
            <div
              className={`status ${getStatusRole(ticket.status)} py-1 px-3 rounded-full text-sm`}
              role="status"
            >
              {ticket.status}
            </div>
          </div>

          {/* Ticket Information */}
          <div className="ticket-info mt-4 flex justify-between">
            <div className="info-item text-sm text-gray-600">
              <span>ID: {ticket.id}</span>
            </div>
            <div className="info-item text-sm text-gray-600">
              <span>Submitted: {new Date(ticket.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })}</span>
            </div>
            <div className="info-item text-sm text-gray-600">
              <span>Priority: {ticket.priority}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentRequests;
