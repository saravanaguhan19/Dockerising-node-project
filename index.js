const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.get("/home", (req, res) => {
  res.json({
    message: "ok",
  });
});
app.get("/saravana", (req, res) => {
  res.json({
    message: "saravana route ok",
  });
});

app.listen(PORT, () => {
  console.log(`App started to listen to port:${PORT}`);
});
