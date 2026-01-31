// Load environment variables (MONGO_URI)
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas (or local if needed)
let dbConnected = false;
if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      dbConnected = true;
      console.log("MongoDB Connected");
    })
    .catch((err) => console.log("MongoDB Error:", err));
} else {
  console.warn("Warning: MONGO_URI not set. Server will run without DB connection.");
}

// Routes
const taskRoutes = require("./routes/taskRoutes");
app.use("/tasks", taskRoutes);

// Base route (optional)
app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

// Health route
app.get("/health", (req, res) => {
  res.json({ status: "ok", dbConnected });
});

// PORT for local + Render
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});