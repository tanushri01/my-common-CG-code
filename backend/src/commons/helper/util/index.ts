import mongoose from 'mongoose';
import logger from '@mindpath/logger';

export async function dbConnection(): Promise<void> {
  try {
    mongoose.set('debug', true);
    await mongoose.connect(process.env.DB_URL || 'default');
    logger.info('database connected successfully ');
  } catch (error) {
    logger.error('database error', error);
    throw new Error(error as string);
  }
}

module.exports.close = async (): Promise<void> => {
  await mongoose.disconnect();
  console.log('Database disconnected');
};
