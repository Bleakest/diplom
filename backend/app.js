const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const Product = require("./models/Product");
const {
  getProduct,
  addProduct,
  deleteProduct,
  editProduct,
} = require("./controllers/product");
const { addBasketProduct, getBasket } = require("./controllers/basket");
const mapProduct = require("./helpers/mapProduct");
const mapBasketProduct = require("./helpers/mapBasketProduct");

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

app.post("/panel", async (req, res) => {
  const newProduct = await addProduct({
    title: req.body.title,
    image: req.body.image,
    cost: req.body.cost,
    category: req.body.category,
    id: req.body.id,
  });
  res.send({ res: mapProduct(newProduct) });
});

app.delete("/products", async (req, res) => {
  await deleteProduct(req.body.id);
  res.send({ error: null });
});
app.patch("/products", async (req, res) => {
  await editProduct(req.body.productId, {
    id: req.body.id,
    title: req.body.title,
    category: req.body.category,
    cost: req.body.cost,
    image: req.body.image,
  });
  res.send({ error: null });
});

app.post("/basket", async (req, res) => {
  const newBasketProduct = await addBasketProduct({
    title: req.body.product.title,
    cost: req.body.product.cost,
    size: req.body.value,
  });
  res.send({ res: mapBasketProduct(newBasketProduct) });
});
app.get("/basket", async (req, res) => {
  const basket = await getBasket();
  if (basket) {
    res.send({ res: basket.map((product) => mapBasketProduct(product)) });
  } else {
    res.send({ error: null });
  }
});
