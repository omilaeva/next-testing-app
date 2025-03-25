// src/app/pages/service-call-superuser-management/page.tsx
import HeaderSuperUser from '@components/HeaderSuperUser';
import SideBarSuperUser from '@components/SideBarSuperUser';
import CustomerFilter from '@components/CustomerFilter';
import CustomerDashboard from '@components/CustomerDashboard';



const customers = [
  {
    initials: "HC",
    name: "Horizon Construction",
    status: "Active",
    accountId: "HZN-2025-001",
    plan: "Enterprise",
    admin: "Jennifer Wilson",
    created: "Mar 12, 2022",
    nextBilling: "Mar 12, 2025",
    modules: ["Maintenance", "Billing", "Tenant Portal", "Owner Portal", "Reporting"],
    properties: 47,
    users: 125,
    serviceCalls: 386,
  },
  {
    initials: "EP",
    name: "Evergreen Properties",
    status: "Active",
    accountId: "EVG-2024-156",
    plan: "Professional",
    admin: "Marcus Greene",
    created: "Jun 15, 2024",
    nextBilling: "Mar 15, 2025",
    modules: ["Maintenance", "Tenant Portal", "Owner Portal", "Reporting"],
    properties: 23,
    users: 84,
    serviceCalls: 212,
  },
  {
    initials: "MP",
    name: "Metro Property Management",
    status: "Trial",
    accountId: "MPM-2025-014",
    plan: "Trial (Standard)",
    admin: "Sarah Johnson",
    created: "Feb 05, 2025",
    trialEnds: "Mar 07, 2025",
    modules: ["Maintenance", "Tenant Portal", "Reporting"],
    properties: 12,
    users: 65,
    serviceCalls: 120,
  },
];

export default function SuperuserManagement() {
  return (
    <div className="w-full text-white">
  <HeaderSuperUser />
      <div className="flex flex-1">
        <div className="w-64 bg-white p-4 h-full">
          <SideBarSuperUser />
        </div>

        <div className="flex-1 p-8 bg-blue-50">
          <main className="w-full  p-6 bg-white ">
       
            <h1 className="text-2xl font-bold mb-4">Superuser's Dashboard</h1>
            <p className="mb-4">Manage all customer accounts, track service usage, and monitor service calls.</p>
        <div className="w-full bg-white p-4 h-full">
          <CustomerDashboard />
        </div>
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-lg shadow">
              {customers.map((customer, index) => (
            <div key={customer.id ?? `customer-${index}`} className="p-4  rounded-lg shadow">
                  <h2 className="text-gray-600 font-semibold">{customer.name}</h2>
                  <p className="text-sm text-gray-600">Plan: {customer.plan}</p>
                  <p className="text-sm text-gray-600">Admin: {customer.admin}</p>
                  <p className="text-sm text-gray-600">Created: {customer.created}</p>
                  <p className="text-sm text-gray-600">Next Billing: {customer.nextBilling}</p>
                  <p className="text-sm text-gray-600">Status: <span className={customer.status === 'Active' ? 'text-green-500' : 'text-red-500'}
                  >
                  {customer.status}</span></p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {customer.modules.map((module) => (
                      <span key={module} className="px-2 py-1 text-gray-600 text-xs bg-blue-200 rounded-md">{module}</span>
                    ))}
                  </div>
                  <div className="mt-3 text-sm text-gray-600">
                    <p>Properties: {customer.properties}</p>
                    <p>Users: {customer.users}</p>
                    <p>Service Calls: {customer.serviceCalls}</p>
                  </div>
                 {/* Buttons */}
      <div className="mt-4 flex justify-between">
        <button className="text-blue-600 border border-blue-600 px-3 py-1 rounded-lg text-sm hover:bg-blue-800">
          View Details
        </button>
        <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-800">
          Login as Admin
        </button>
      </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
