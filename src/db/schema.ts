import {  pgTable, varchar,  timestamp, uuid  } from "drizzle-orm/pg-core";



export const tickets = pgTable("tickets", {
    id: uuid("id").primaryKey().defaultRandom(),
    title: varchar("title", { length: 255 }).notNull(),
    requestType: varchar("request_type", { length: 255 }).notNull(),
    priority: varchar("priority", { length: 255 }).notNull(),
    bestTime: varchar("best_time", { length: 255 }),
    accessInstructions: varchar("access_instructions", { length: 255 }),
    description: varchar("description", { length: 500 }).notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    //userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }),
  });