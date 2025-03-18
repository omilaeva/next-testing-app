// src/app/pages/service-call-owner-request/page.tsx

import Header from '@components/Header';
import SideBar from '@components/SideBar';

export default function OwnerRequest() {
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
            {/* Static Service Call Owner Request Content */}
            <h1>Owner's Service Call Request Form</h1>
            <p>This page is for property owners to submit new service call requests for maintenance or repairs.</p>
            <p>Dynamic routing can be used to fetch and display content based on specific property details. Each URL could display a different property request form or previous requests.</p>
          </main>
        </div>
      </div>
    </div>
  );
}
