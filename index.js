const express = require("express");

const app = express();
const PORT = 3000;

app.get("/home", (req, res) => {
  res.json({
    message: "ok",
  });
});

app.listen(PORT, () => {
  console.log(`App started to listen to port:${PORT}`);
});
