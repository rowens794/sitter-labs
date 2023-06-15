// Import necessary packages
import { Schema, model, Document, Model } from "mongoose";

// Define a TypeScript interface for the User document
interface RecordingStationDocument extends Document {
  id: string;
}

// Define the User schema
const RecordingStationSchema = new Schema<RecordingStationDocument>(
  {
    id: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Create a function to get the User model
const getModel = (): Model<RecordingStationDocument> => {
  try {
    return model("RecordingStation");
  } catch (error) {
    return model<RecordingStationDocument>(
      "RecordingStation",
      RecordingStationSchema
    );
  }
};

// Export the User model
const RecordingStation = getModel();

export default RecordingStation;
