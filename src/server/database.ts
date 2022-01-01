import session from 'express-session';
import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';
import { MongoMemoryServer } from 'mongodb-memory-server';
import app from './server';

export const connectDB = async () => {
  let MONGO_URI = process.env.MONGO_URI;
  if (process.env.NODE_ENV === 'test') {
    const testDb = await MongoMemoryServer.create();
    MONGO_URI = testDb.getUri();
  }

  mongoose.Promise = global.Promise;
  mongoose.connect(MONGO_URI);
  mongoose.connection
    .once('open', () => console.log('Connect to MongoDB'))
    .on('error', (error) => console.log('Error connecting to MongoDB:', error));

  app.use(
    session({
      resave: true,
      saveUninitialized: true,
      secret: 'aaabbbccc',
      store: MongoStore.create({
        mongoUrl: MONGO_URI,
      }),
    })
  );
};
