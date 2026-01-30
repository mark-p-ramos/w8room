import mongoose from 'mongoose';

async function dbConnect() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MONGODB_URI missing from .env');
  }

  const db = process.env.MONGODB_NAME;
  if (!db) {
    throw new Error('MONGODB_NAME missing from .env');
  }

  await mongoose.connect(uri!, { dbName: db! });
  // mongoose.connection.useDb(process.env.MONGODB_NAME!);
  return mongoose;
}

export default dbConnect;