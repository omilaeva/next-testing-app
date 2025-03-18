"use client"; // Marking the file as a client component

import React from "react";
import Header from "@components/Header";  // Import Header component
import './globals.css';  // Import global styles

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* Root HTML and Body tags */}
      <html lang="en">
        <body className="flex flex-col min-h-screen"> {/* Full height layout */}
          {/* Include Header */}
          <Header />  {/* This will be rendered on all pages */}

          {/* Main Content */}
          <main className="flex-1 container mx-auto p-8">  {/* Take available space */}
            {children}  {/* Render the page content here */}
          </main>

          {/* Footer */}
          <footer className="bg-gray-800 text-white p-4 mt-8"> {/* Footer will stick at bottom */}
            <div className="container mx-auto text-center">
              <p>&copy; 2025 Service Call System. All rights reserved.</p>
            </div>
          </footer>
        </body>
      </html>
    </>
  );
};

export default Layout;
