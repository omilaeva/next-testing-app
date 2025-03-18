// src/app/pages/service-call-owner-details/page.tsx

import Header from '@components/Header'; 
import SideBar from '@components/SideBar';

export default function ServiceCallDetails() {
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
            {/* Static Service Call Details Content */}
            <h1>Service Call Management and History</h1>
            <p>This page displays service call management and history for owners. You can view status, history, and other details of the service calls here.</p>
            <p>Dynamic routing can be used to fetch and display content based on the ticket ID. Each URL with a different ticket ID will show a different service call's details.</p>
          </main>
        </div>
      </div>
    </div>
  );
}





