import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();
const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://mongo:emYRPEKukPSVgxMHyQgQEkkjQsyaPBDS@viaduct.proxy.rlwy.net:54352');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
console.log("MONGO_URI:", process.env.MONGO_URI);

export default connectDB;
