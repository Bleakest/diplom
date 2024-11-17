const express = require("express");
const mongoose = require("mongoose");
const port = 5500;

const app = express();
app.use(express.json());

mongoose.connect("").then(() => {
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
});
