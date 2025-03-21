// src/app/(pages)/service-call-owner-management/page.tsx

"use client";
import React from "react";
import SideBar from "@components/SideBar";
// Import our custom components
import OwnerDashboardStats from "@components/OwnerDashboardStats";
import ServiceCallsTable from "@components/ServiceCallsTable";
import OperatorList from "@components/OperatorList";

export default function OwnerManagement() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-white p-4 h-full">
          <SideBar />
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8 bg-blue-50">
          <main className="w-full p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">
              Service Call Owner Management
            </h1>
            <p className="text-gray-700 mb-8">
              Manage service calls, track statuses, and assign operators.
            </p>

            {/* OwnerDashboardStats component */}
            <OwnerDashboardStats />

            {/* ServiceCallsTable component */}
            <ServiceCallsTable />

            {/* OperatorList component */}
            <OperatorList />
          </main>
        </div>
      </div>
    </div>
  );
}
