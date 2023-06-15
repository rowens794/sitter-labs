import mongoose from "mongoose";

const uri = process.env.MONGODB_URI || "";
const options: any = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let isConnected: boolean = false;

async function dbConnect(): Promise<void> {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(uri, options);
    isConnected = mongoose.connection.readyState === 1;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

export default dbConnect;
