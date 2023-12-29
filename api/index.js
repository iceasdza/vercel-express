const express = require("express");
const app = express();
const port = 3000;

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/multiplier:number", (req, res) => {
  const number = req.params.number;
  res.send("your number is : ", number*2);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
