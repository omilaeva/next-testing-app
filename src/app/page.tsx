// src/app/page.tsx (Landing Page)

import Link from 'next/link'; // Import the Link component from next/link

export default function LandingPage() {
  return (
    <div>
      <h1>Welcome to the Service Call System! This will be landing/home page, but now it stores links to our pages</h1>
      <p>The dynamic pages are handled in their respective folders, and dynamic routing is used to display content based on unique identifiers (such as ticket IDs, property IDs, and service request IDs).</p>
      <p>Each page's content is rendered based on its dynamic route, and the structure allows easy access to properties, service requests, and more.</p>
      <p>Visit the following pages to explore:</p>
      <ul>
      <li><Link href="/">Home Page</Link></li>
        <li><Link href="/service-call-vendor-management">Vendor Management</Link></li>
        <li><Link href="/service-call-tenant-request">Tenant Request Form</Link></li>
        <li><Link href="/service-call-owner-request">Owner's Request Form Similar to Tenant's</Link></li>
        <li><Link href="/service-call-owner-management">Owner's Dashboard with Statistics and Create Ticket Button</Link></li>
        <li><Link href="/service-call-owner-details">Owner's Service Call Management and History</Link></li>
        <li><Link href="/service-call-superuser-management">Superuser's Dashboard</Link></li>
      </ul>
    </div>
  );
}
