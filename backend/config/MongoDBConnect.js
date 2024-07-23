import mongoose from "mongoose";

// Connect to MongoDB
const DBConnect = () => {
  mongoose.connect(process.env.MONGODB_URL);
  console.log("MongoDB are connected!");
};

export default DBConnect;
