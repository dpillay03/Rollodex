const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("The API is working!");
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
