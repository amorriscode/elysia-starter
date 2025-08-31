import "dotenv/config";
import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "~/db/schema";

if (!process.env.DATABASE_URL) {
	throw new Error("DATABASE_URL is not set");
}

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
});

export const db: NodePgDatabase<typeof schema> = drizzle(pool, { schema });
export * from "./schema";
