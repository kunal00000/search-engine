import { DATABASE_URL } from '@/lib/config';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const connector = neon(DATABASE_URL);
// @ts-expect-error
export const db = drizzle(connector);
