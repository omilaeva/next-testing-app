import { drizzle } from 'drizzle-orm/postgres-js';

//console.log(process.env.DATABASE_URL);
/*
if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined in the environment variables.");
}
const db = drizzle(process.env.DATABASE_URL);*/
const db = drizzle("postgres://username:password@localhost:5432/database");
export { db };