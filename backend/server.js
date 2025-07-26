import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

import { securityMiddleware } from "./config/security.js";
import { connectDB } from "./config/db.js";

import apiRoutes from "./routes/api.js";
import errorHandler from "./utils/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(morgan("combined"));

// Security
securityMiddleware(app);

// Database
connectDB();

// Routes
app.use("/api", apiRoutes);

// Error handling
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
