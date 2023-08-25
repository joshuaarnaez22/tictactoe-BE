const express = require("express");
const router = express.Router();
const History = require("../models/history");

//Addd history
router.post("/add-history", async (req, res) => {
  try {
    const { p1, p2, player1, player2, draw } = req.body;
    console.log(req.body);
    const item = {
      p1,
      p2,
      score1: player1,
      score2: player2,
      draw,
    };
    //   const history = await History.find();
    const history = new History(item);
    const response = await history.save();
    console.log(response);
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
// Get a list of history entries
router.get("/get-history", async (req, res) => {
  console.log(123);
  try {
    const history = await History.find();
    console.log(history);
    res.json(history);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
