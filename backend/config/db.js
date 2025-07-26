// config/db.js
import { MongoClient, ServerApiVersion } from "mongodb";
import { logger } from "../utils/logger.js"; // Use named import

let client = null;
let db = null;

export const connectDB = async () => {
  if (client) return client; // Return existing connection if available

  try {
    client = new MongoClient(process.env.MONGO_URI, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    await client.connect();
    await client.db("admin").command({ ping: 1 });
    logger.info("MongoDB connected successfully");
    return client;
  } catch (err) {
    logger.error(`MongoDB connection failed: ${err.message}`);
    process.exit(1);
  }
};

export const getDB = () => {
  if (!db) throw new Error("Database not initialized");
  return db;
};

export const closeDB = async () => {
  if (client) {
    await client.close();
    client = null;
    db = null;
    logger.info("MongoDB connection closed");
  }
};
