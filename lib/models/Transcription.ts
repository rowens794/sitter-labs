// Import necessary packages
import { Schema, model, Document, Model } from "mongoose";

// Define a TypeScript interface for the User document
interface TranscriptionDocument extends Document {
  stationID: string;
  text: string;
  date: Date;
}

// Define the User schema
const TranscriptionSchema = new Schema<TranscriptionDocument>({
  stationID: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Date, required: true },
});

// Create a function to get the User model
const getModel = (): Model<TranscriptionDocument> => {
  try {
    return model("Transcription");
  } catch (error) {
    return model<TranscriptionDocument>("Transcription", TranscriptionSchema);
  }
};

// Export the User model
const Transcription = getModel();

export default Transcription;
