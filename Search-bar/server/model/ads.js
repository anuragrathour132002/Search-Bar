import mongoose from "mongoose";

// Defining Schema
const adscollectionsSchema = new mongoose.Schema({
  companyId: { type: Number },
  primaryText: { type: String },
  headline: { type: String },
  description: { type: String },
  CTA: { type: String },
  imageUrl: { type: String },
});

const adscompanycollectionSchema = new mongoose.Schema({
  name: { type: String },
  url: { type: String },
  compId: { type: Number },
});

// Model
const adscollectionsModel = mongoose.model(
  "adscollections",
  adscollectionsSchema
);

const adscompanyModel = mongoose.model(
  "companycollections",
  adscompanycollectionSchema
);

export default adscollectionsModel;
export const adsCompanyModel = adscompanyModel;