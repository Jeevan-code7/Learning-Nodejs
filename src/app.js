const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
  res.send("Hello Freinds");
});

app.use("/broo", (req, res) => {
  res.send("Hello Freinds");
});

app.use("/test", (req, res) => {
  res.send("test started");
});

app.use("/route", (req, res) => {
  res.send("Hello route");
});

app.use("/", (req, res) => {
  res.send("Hello route 1");
});

app.listen(7777, () => {
  console.log("Server started at 7777");
});
