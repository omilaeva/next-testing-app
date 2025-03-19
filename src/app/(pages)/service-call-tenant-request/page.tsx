
//import Header from '@components/Header'; 
import RecentRequests from '@components/RecentRequests';
import ServiceCallForm from '@components/ServiceCallForm';
import SideBar from '@components/SideBar';


export default function TenantRequestPage() {
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
            <ServiceCallForm />
          </main>

          {/* My Recent Requests */}
          <RecentRequests /> 


        </div>
      </div>
    </div>
  );
}
