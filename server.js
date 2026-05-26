const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");

const Quote = require("./models/Quote");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/quoteDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


// Fetch Random Quote
app.get("/quote", async (req, res) => {

  try {

    const response = await axios.get("https://api.quotable.io/random");

    const data = response.data;

    const newQuote = new Quote({
      content: data.content,
      author: data.author
    });

    await newQuote.save();

    res.json(newQuote);

  } catch (error) {
    res.status(500).json({ message: "Error fetching quote" });
  }
});


// Get Quote History
app.get("/history", async (req, res) => {

  const quotes = await Quote.find().sort({ createdAt: -1 });

  res.json(quotes);
});


app.listen(5000, () => {
  console.log("Server running on port 5000");
});
