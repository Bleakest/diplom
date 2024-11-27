const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const Product = require("./models/Product");
const { getProducts } = require("./controllers/product");

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

// app.use("/", routes);

app.get("/products", async (req, res) => {
  try {
    const products = await getProducts()
    
    res.send({
      error: null,
      products,
    });
    console.log(products);
    
  } catch (e) {
    res.send({ error: e.message || "Unknown error" });
  }
});

app.get("/users", (req, res) => {
  res.send({ res: "helo" });
});
