const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const historyRouter = require("./routes/historyRoutes");

const app = express();
app.use(cors());
const port = 3000;

// Middleware, routes, and other Express configurations here...
const uri =
  "mongodb+srv://tictactoe:tictactoe123@interviewtictactoe.b9do21h.mongodb.net/?retryWrites=true&w=majority";
// MongoDB connection function
async function connectToMongoDB() {
  try {
    await mongoose.connect(uri, {
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
