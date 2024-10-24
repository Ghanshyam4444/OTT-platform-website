const mongoose = require("mongoose");
const connectDB = async () => {
  const URI = process.env.mongoDB_URL;
  try {
    await mongoose.connect(URI);
    console.log("connected successfuly");
  } catch (error) {
    console.log("Connection failed:", error.message);
    process.exit(0);
  }
};
module.exports = connectDB;
// mongodb+srv://ghanshyammangla43:mangla@cluster0.728pl.mongodb.net/viewvibe_project?retryWrites=true&w=majority&appName=Cluster0
