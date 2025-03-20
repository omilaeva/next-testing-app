import postgres from "postgres";

export const sql = postgres({
    host: "localhost",
    database: "database",
    username: "username",
    password: "password",
    port: 5432,
    //max: 2, // use at most 2 concurrent connections
});