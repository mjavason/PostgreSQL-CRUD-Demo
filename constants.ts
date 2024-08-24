import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

// Postgresql setup
export const POSTGRES_DB_URL = process.env.POSTGRES_DB_URL || 'xxxx';

export const DATABASES = {
  USER: 'user',
};
