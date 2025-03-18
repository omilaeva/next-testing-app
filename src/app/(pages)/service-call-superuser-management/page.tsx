// src/app/pages/service-call-superuser-management/page.tsx

import Header from '@components/Header';
import SideBar from '@components/SideBar';

export default function SuperuserManagement() {
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
            {/* Static Service Call Superuser Management Content */}
            <h1>Superuser's Dashboard</h1>
            <p>This page is for system administrators to manage all customer accounts, track service usage, and monitor service calls.</p>
            <p>Dynamic routing can be used to fetch and display customer-specific details, accounts, or service data.</p>
          </main>
        </div>
      </div>
    </div>
  );
}
