import type { Config } from 'drizzle-kit';
import { DATABASE_URL } from '@/lib/config';

export default {
  driver: 'pg',
  schema: './src/db/schema.ts',
  dbCredentials: {
    connectionString: DATABASE_URL,
  },
  out: './drizzle',
} satisfies Config;
