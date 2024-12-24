const express = require("express");
const { addProduct } = require("../controllers/product");
const mapProduct = require("../helpers/mapProduct");
const isAdmin = require("../middlewares/isAdmin");
const ROLES = require("../constants/roles");
const authenticated = require("../middlewares/authenticated");

const router = express.Router({ mergeParams: true });

router.post(
  "/panel",
  authenticated,
  isAdmin([ROLES.ADMIN]),
  async (req, res) => {
    const newProduct = await addProduct({
      title: req.body.title,
      image: req.body.image,
      cost: req.body.cost,
      category: req.body.category,
      id: req.body.id,
    });
    res.send({ res: mapProduct(newProduct) });
  }
);

module.exports = router;
