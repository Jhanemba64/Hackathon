const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const { browse, read, add } = require("../controllers/itemControllers");

// Route to get a list of items
router.get("/items", browse);

// Route to get a specific item by ID
router.get("/items/:id", read);

// Route to add a new item
router.post("/items", add);

/* ************************************************************************* */

module.exports = router;
