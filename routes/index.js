const express = require("express");
const router = express.Router();
const customerController = require("../controller/customer");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* CRUD customer. */
router.get("/api/customers", customerController.findAll);
router.post("/api/customer", customerController.create);
router.get("/api/customer/:no", customerController.findByNo);
router.put("/api/customer/:no", customerController.update);
router.delete("/api/customer/:no", customerController.delete);

module.exports = router;
