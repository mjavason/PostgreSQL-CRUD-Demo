// sequelize.ts
import { Sequelize } from 'sequelize-typescript';
import { POSTGRES_DB_URL } from './constants';
import { Profile, User } from './user.model';

export const sequelize = new Sequelize(POSTGRES_DB_URL, {
  dialect: 'postgres', // Choose your database dialect
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  models: [User, Profile],
});

// Test the connection
export async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error: any) {
    console.error('Unable to connect to the database:', error.message);
  }
}

// Initialize Database
export async function initDB() {
  try {
    await sequelize.sync({ force: false, alter: true }); // `force: true` will drop tables
    console.log('Database synced successfully');
  } catch (err) {
    console.error('Unable to sync database:', err);
  }
}
