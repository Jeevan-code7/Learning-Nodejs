const express = require("express");

const app = express();

app.get("/user", [
  (req, res, next) => {
    console.log("!! responce");
    next();
  },
  (req, res, next) => {
    console.log("Responce 2");
    next();
  },
  (req, res, next) => {
    console.log("responce 3");
    res.send("BYeeeeeeeeeeeeeeeeee");
    next();
  },
]);

app.listen(2000, () => {
  console.log("Server started in 2000");
});
