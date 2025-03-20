import {  pgTable, varchar, pgEnum, timestamp, uuid  } from "drizzle-orm/pg-core";

export const priorityEnum = pgEnum("priority", ["emergency", "urgent", "standard", "low"]);
export const statusEnum = pgEnum("status", ["pending","assigned", "progress", "Completed"]);
export const requestTypeEnum = pgEnum("request_type", ["plumbing", "electrical", "hvac", "appliance", "pest", "structural", "other"]);
export const userEnum = pgEnum("user_role", ["super","admin", "tenant", "vendor"]);


export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  role: userEnum("role").notNull(),
});

export const tickets = pgTable("tickets", {
    id: uuid("id").primaryKey().defaultRandom(),
    title: varchar("title", { length: 255 }).notNull(),
    requestType: requestTypeEnum("request_type").notNull(),
    priority: priorityEnum("priority").notNull(),
    bestTime: varchar("best_time", { length: 255 }),
    accessInstructions: varchar("access_instructions", { length: 255 }),
    description: varchar("description", { length: 500 }).notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    property: varchar("property", { length: 255 }),
    unit: varchar("unit", { length: 255 }),
    assignedTo: uuid("vendor_id").references(() => users.id, { onDelete: "cascade" }),
    status: statusEnum("status").default("pending"),
    createdBy: uuid("user_id").references(() => users.id, { onDelete: "cascade" }),
  });

export const properties = pgTable("properties", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 255 }).notNull(),
    address: varchar("address", { length: 255 }).notNull(),
  });

export const units = pgTable("units", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 255 }).notNull(),
    propertyId: uuid("property_id").references(() => properties.id, { onDelete: "cascade" }),
});

export const adminAccess = pgTable("admin_access", {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }),
    propertyId: uuid("property_id").references(() => properties.id, { onDelete: "cascade" })
  });

export const tenantAccess = pgTable("tenant_access", {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }),
    unitId: uuid("unit_id").references(() => units.id, { onDelete: "cascade" })
  });

export const vendorRating = pgTable("vendor_rating", {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }),
    vendorId: uuid("vendor_id").references(() => users.id, { onDelete: "cascade" }),
    rating: varchar("rating", { length: 255 }).notNull()
});