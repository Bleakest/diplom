const express = require("express");
const {
  addBasketProduct,
  getBasket,
  removeBasketItem,
} = require("../controllers/basket");
const mapBasketProduct = require("../helpers/mapBasketProduct");

const router = express.Router({ mergeParams: true });

router.post("/basket", async (req, res) => {
  const newBasketProduct = await addBasketProduct({
    title: req.body.product.title,
    cost: req.body.product.cost,
    image: req.body.product.image,
    productId: req.body.product.id,
    size: req.body.value,
  });
  res.send({ res: mapBasketProduct(newBasketProduct) });
});

router.get("/basket", async (req, res) => {
  const basket = await getBasket();

  if (basket) {
    res.send({ res: basket.map((product) => mapBasketProduct(product)) });
  } else {
    res.send({ error: null });
  }
});

router.delete("/basket", async (req, res) => {
  try {
    await removeBasketItem(req.body.id);
    res.send({ error: null });
  } catch (error) {
    res.send({ error: error });
  }
});

module.exports = router;
