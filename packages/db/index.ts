import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

export * from "drizzle-orm";
export {drizzle as drizzleWebSocket} from "drizzle-orm/neon-serverless";
export {Pool,neonConfig} from "@neondatabase/serverless";


const sql = neon(process.env.DATABASE_URL!);

export const db = drizzle(sql, { schema });

