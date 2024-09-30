import { drizzle } from "drizzle-orm/neon-http";
import {neon} from "@neondatabase/serverless"
import * as schema from "./schema";

export * from "drizzle-orm";
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });

// await migrate(db, { migrationsFolder: "../../drizzle" });
