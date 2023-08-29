const express = require("express");
const router = express.Router();
const categoryController = require("./Controller");

router.post("/createCategory", categoryController.createCategory);
router.get("/allCategories", categoryController.getAllCategories);
router.get("/categoryByName", categoryController.getCategoryByName);
router.get("/categoryById", categoryController.getCategoryById);
router.put("/updateCategory/:_id", categoryController.updateCategory);
router.delete("/deleteCategory/:_id", categoryController.deleteCategory);

module.exports = router;
