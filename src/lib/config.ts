import dotenv from 'dotenv';
dotenv.config();

export const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';

export const DATABASE_URL = process.env.DATABASE_URL || '';

export const UPSTASH_VECTOR_REST_URL =
  process.env.UPSTASH_VECTOR_REST_URL || '';
export const UPSTASH_VECTOR_REST_TOKEN =
  process.env.UPSTASH_VECTOR_REST_TOKEN || '';
