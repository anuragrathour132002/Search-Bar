import express from "express";
import connectDB from "./db/conn.js";
import web from "./routes/web.js";
import cors from "cors";
const app = express();
app.use(cors());
const port = process.env.PORT || "4000";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

// Database connection
connectDB(DATABASE_URL);

//JSON
app.use(express.json());

// load routes
app.use("/api", web);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});