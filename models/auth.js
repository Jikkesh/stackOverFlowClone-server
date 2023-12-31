import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    about: { type: String },
    tags: { type: [String] },
    joinedOn: { type: Date, default: Date.now },
    browserType: { type: String },
    browserVersion: { type:String },
    osType: { type: String },
    deviceType: { type: String },
    ipAddress: { type: String },
    city: {type:String},
    latitude: {type:Number},
    longitude: {type: Number}
});

export default mongoose.model("User", userSchema)