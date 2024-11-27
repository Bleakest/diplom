const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const routes = require("./routes");

const port = 5500;
const app = express();

app.use(cookieParser());
app.use(express.json());

// app.use("/", routes);

app.get('/users', (req, res) => {
  res.send('helo from db')
})

mongoose
  .connect(
    "mongodb+srv://user:qwe123@cluster.mdh5r.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  });