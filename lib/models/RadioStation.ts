// Import necessary packages
import { Schema, model, Document, Model } from "mongoose";

// Define a TypeScript interface for the User document
interface RadioStationDocument extends Document {
  changeId: string;
  id: string;
  name: string;
  url: string;
  urlResolved: string;
  homepage: string;
  favicon: string;
  country: string;
  countryCode: string;
  state: string;
  votes: number;
  codec: string;
  bitrate: number;
  clickCount: number;
  clickTrend: number;
  hls: boolean;
  lastCheckOk: boolean;
  lastChangeTime: string;
  lastCheckOkTime: string;
  clickTimestamp: string;
  lastLocalCheckTime: string;
  language: string[];
  lastCheckTime: string;
  geoLat: number | null;
  geoLong: number | null;
  tags: string[];
}

// Define the User schema
const RadioStationSchema = new Schema<RadioStationDocument>(
  {
    changeId: { type: String, required: false },
    id: { type: String, required: true },
    name: { type: String, required: false },
    url: { type: String, required: false },
    urlResolved: { type: String, required: false },
    homepage: { type: String, required: false },
    favicon: { type: String, required: false },
    country: { type: String, required: false },
    countryCode: { type: String, required: false },
    state: { type: String, required: false },
    votes: { type: Number, required: false },
    codec: { type: String, required: false },
    bitrate: { type: Number, required: false },
    clickCount: { type: Number, required: false },
    clickTrend: { type: Number, required: false },
    hls: { type: Boolean, required: false },
    lastCheckOk: { type: Boolean, required: false },
    lastChangeTime: { type: String, required: false },
    lastCheckOkTime: { type: String, required: false },
    clickTimestamp: { type: String, required: false },
    lastLocalCheckTime: { type: String, required: false },
    language: { type: [String], required: false },
    lastCheckTime: { type: String, required: false },
    geoLat: { type: Number, required: false },
    geoLong: { type: Number, required: false },
    tags: { type: [String], required: false },
  },
  { timestamps: true }
);

// Create a function to get the User model
const getModel = (): Model<RadioStationDocument> => {
  try {
    return model("RadioStation");
  } catch (error) {
    return model<RadioStationDocument>("RadioStation", RadioStationSchema);
  }
};

// Export the User model
const RadioStation = getModel();

export default RadioStation;
