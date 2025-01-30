const express = require("express");
const {
  getProducts,
  getProduct,
  deleteProduct,
  editProduct,
} = require("../controllers/product");
const mapProduct = require("../helpers/mapProduct");
const isAdmin = require("../middlewares/isAdmin");
const authenticated = require("../middlewares/authenticated");
const ROLES = require("../constants/roles");

const router = express.Router({ mergeParams: true });

router.get("/products", async (req, res) => {
  try {
    const products = await getProducts();

    res.send({
      error: null,
      products: products.map(mapProduct),
    });
  } catch (e) {
    res.send({ error: e.message || "Unknown error" });
  }
});

router.get("/product/:id", async (req, res) => {
  try {
    const product = await getProduct(req.params.id);
    res.send({ res: mapProduct(product) });
  } catch (e) {
    res.send({ error: e.message || "Unknown error" });
  }
});

router.delete(
  "/products",
  authenticated,
  isAdmin([ROLES.ADMIN]),
  async (req, res) => {
    await deleteProduct(req.body.id);
    res.send({ error: null });
  }
);

router.patch(
  "/products",
  authenticated,
  isAdmin([ROLES.ADMIN]),
  async (req, res) => {
    await editProduct(req.body.EditingProductId, {
      id: req.body.id,
      title: req.body.title,
      category: req.body.category,
      cost: req.body.cost,
      image: req.body.image,
    });
    res.send({ error: null });
  }
);

module.exports = router;
