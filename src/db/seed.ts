//run the command npx tsx src/db/seed.ts

import "dotenv/config";
import { db } from "./db"; // Adjust path if needed
import {
  users,
  tickets,
  properties,
  units,
  adminAccess,
  tenantAccess,
  vendorRating,
} from "./schema";

async function seed() {
  try {
    console.log("Seeding database...");

    // Clear existing data (Optional: Use with caution in production)
    await db.delete(tickets);
    await db.delete(users);
    await db.delete(properties);
    await db.delete(units);
    await db.delete(adminAccess);
    await db.delete(tenantAccess);
    await db.delete(vendorRating);

    // Insert multiple users
    const insertedUsers = await db.insert(users).values([
      { email: "superadmin@example.com", password: "password123", role: "super" },
      { email: "admin1@example.com", password: "password123", role: "admin" },
      { email: "admin2@example.com", password: "password123", role: "admin" },
      { email: "tenant1@example.com", password: "password123", role: "tenant" },
      { email: "tenant2@example.com", password: "password123", role: "tenant" },
      { email: "tenant3@example.com", password: "password123", role: "tenant" },
      { email: "vendor1@example.com", password: "password123", role: "vendor" },
      { email: "vendor2@example.com", password: "password123", role: "vendor" },
    ]).returning({ id: users.id });

    const [superAdmin, admin1, admin2, tenant1, tenant2, tenant3, vendor1, vendor2] = insertedUsers;

    // Insert multiple properties
    const insertedProperties = await db.insert(properties).values([
      { name: "Mall of America", address: "Bloomington, MN" },
      { name: "Downtown Retail Plaza", address: "New York, NY" },
      { name: "Sunset Shopping Center", address: "Los Angeles, CA" },
    ]).returning({ id: properties.id });

    const [property1, property2, property3] = insertedProperties;

    // Insert multiple units (store spaces)
    const insertedUnits = await db.insert(units).values([
      { name: "Store 101", propertyId: property1.id },
      { name: "Store 202", propertyId: property1.id },
      { name: "Store 303", propertyId: property2.id },
      { name: "Store 404", propertyId: property2.id },
      { name: "Store 505", propertyId: property3.id },
    ]).returning({ id: units.id });

    const [unit1, unit2, unit3, unit4, unit5] = insertedUnits;

    // Insert multiple tickets with varied issues
    await db.insert(tickets).values([
      {
        title: "Water Leak in Ceiling",
        requestType: "plumbing",
        priority: "urgent",
        bestTime: "Morning",
        accessInstructions: "Enter through backdoor",
        description: "Water is dripping from the ceiling near the restroom.",
        property: "Mall of America",
        unit: "Store 101",
        assignedTo: vendor1.id,
        createdBy: tenant1.id,
        status: "assigned",
      },
      {
        title: "HVAC Not Working",
        requestType: "hvac",
        priority: "emergency",
        bestTime: "Afternoon",
        accessInstructions: "Call before entering",
        description: "The air conditioning is completely broken.",
        property: "Downtown Retail Plaza",
        unit: "Store 303",
        assignedTo: vendor2.id,
        createdBy: tenant2.id,
        status: "pending",
      },
      {
        title: "Pest Infestation",
        requestType: "pest",
        priority: "standard",
        bestTime: "Evening",
        accessInstructions: "Check storage room",
        description: "We found rats inside the stock room.",
        property: "Sunset Shopping Center",
        unit: "Store 505",
        assignedTo: vendor1.id,
        createdBy: tenant3.id,
        status: "progress",
      },
      {
        title: "Lights Flickering",
        requestType: "electrical",
        priority: "low",
        bestTime: "Morning",
        accessInstructions: "Enter from main entrance",
        description: "Lights are flickering in the dressing rooms.",
        property: "Mall of America",
        unit: "Store 202",
        assignedTo: vendor2.id,
        createdBy: tenant1.id,
        status: "completed",
      },
    ]);

    // Assign admin access to properties
    await db.insert(adminAccess).values([
      { userId: admin1.id, propertyId: property1.id },
      { userId: admin2.id, propertyId: property2.id },
      { userId: admin1.id, propertyId: property3.id },
    ]);

    // Assign tenant access to units
    await db.insert(tenantAccess).values([
      { userId: tenant1.id, unitId: unit1.id },
      { userId: tenant2.id, unitId: unit3.id },
      { userId: tenant3.id, unitId: unit5.id },
    ]);

    // Insert vendor ratings
    await db.insert(vendorRating).values([
      { userId: tenant1.id, vendorId: vendor1.id, rating: "5 stars" },
      { userId: tenant2.id, vendorId: vendor2.id, rating: "4 stars" },
      { userId: tenant3.id, vendorId: vendor1.id, rating: "3 stars" },
    ]);

    console.log("Seeding completed with expanded data!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    process.exit();
  }
}

seed();
