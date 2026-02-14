const express = require("express");
const app = express();

app.use(express.json());

const connectDB = require("./config/data");
const User = require("./models/userModel");

app.post("/signup", async (req, res) => {
  const userData = new User(req.body);
  try {
    await userData.save();
    res.status(200).send("data added successfully in database");
  } catch (err) {
    console.log("error occured", err);
  }
});

connectDB()
  .then(() => {
    console.log("Connected to mongoose successfully");
    app.listen(2000, () => {
      console.log("Server started in 2000");
    });
  })
  .catch((err) => {
    console.log("monoose connection failed", err);
  });
