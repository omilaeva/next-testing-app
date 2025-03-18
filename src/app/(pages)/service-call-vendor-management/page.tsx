// src/app/pages/service-call-vendor-management/page.tsx

import Header from '@components/Header';
import SideBar from '@components/SideBar';

export default function VendorManagement() {
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
            {/* Static Service Call Vendor Management Content */}
            <h1>Service Call Vendor Management</h1>
            <p>This page allows property owners to manage vendors (maintenance companies) for their properties.</p>
            <p>Dynamic routes such as <code>/service-call-vendor-management/[vendorId]</code> can be used to display vendor-specific details, such as assigned properties and service requests.</p>
          </main>
        </div>
      </div>
    </div>
  );
}
