'use client'
// src/app/pages/service-call-owner-management/page.tsx
import {useAsyncList} from 'react-stately';
import {Cell, Column, Row, Table, TableBody, TableHeader} from 'react-aria-components';
import Header from '@components/Header';

import {MyColumn} from "@components/MyColumn";
import {Properties} from '../../services/definitions';
import PropertiesTable from "@components/PropertiesTable";
import SideBar from '@components/SideBar';
import PokemonTable from "@components/PokemonTable";
import PropertiesAddForm from '@components/PropertiesAddForm';


export default function OwnerManagement() {

  //const data = await fetch('http://localhost:3000/api/properties/');
  //const properties: Properties[] = await data.json();


// @ts-ignore
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

            <h2>Properties</h2>

            <PropertiesAddForm />

            <PropertiesTable />

            <PokemonTable selectionMode="single" />


          </main>
        </div>
      </div>
    </div>
  );
}
