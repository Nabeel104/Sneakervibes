import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./Route/user.route.js";
import contactRoute from "./Route/contact.route.js"; // Import the contact route

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Routes
app.use("/user", userRoute);
app.use("/contact", contactRoute); // Use the contact route

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
