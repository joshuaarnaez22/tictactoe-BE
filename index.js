const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const historyRouter = require("./routes/historyRoutes");

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

// Middleware, routes, and other Express configurations here...
// MongoDB connection function
async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}

// Call the connectToMongoDB function to establish the connection
connectToMongoDB();

app.use(express.json());
app.use("/api", historyRouter);

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
