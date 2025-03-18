// src/app/pages/service-call-owner-management/page.tsx

import Header from '@components/Header';
import SideBar from '@components/SideBar';

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
          <main className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
            {/* Static Service Call Owner Management Content */}
            <h1>Service Call Owner Management Dashboard</h1>
            <p>This page is for property owners to manage all their service requests, including tracking service calls and assigning vendors.</p>
            <p>Dynamic routing can be used to fetch and display content based on the property ID. Each URL with a different property ID will show a different owner's service requests and management details.</p>
          </main>
        </div>
      </div>
    </div>
  );
}
