const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const Product = require("./models/Product");
const { getProduct } = require("./controllers/product");
const mapProduct = require("./helpers/mapProduct");

const port = 3001;
const app = express();

app.use(cookieParser());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://user:qwe123@cluster.gfck5.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  });

app.use("/", routes);

app.get("/product/:id", async (req, res) => {
  const product = await getProduct(req.params.id);

  res.send({ res: mapProduct(product) });
});