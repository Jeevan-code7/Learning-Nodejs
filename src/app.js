const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
  res.send("Hello Freinds");
});

app.listen(7777, () => {
  console.log("Server started at 7777");
});
