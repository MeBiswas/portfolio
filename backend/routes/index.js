const express = require("express");

// Router
const router = express.Router();

// Base API Route
router.get("/", (req, res) => res.send("Welcome to API Routes"));

// Exporting Module
module.exports = router;
