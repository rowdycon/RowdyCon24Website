import { Pool, drizzleWebSocket } from "../";
import * as schema from "../schema";

export function getWebSocketDb(){
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  return  drizzleWebSocket(pool, { schema });
}