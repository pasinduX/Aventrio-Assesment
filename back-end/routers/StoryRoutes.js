// storyRoutes.js
const express = require("express");
const {
  createStory,
  getAllStories,
} = require("../controllers/storyController");

const router = express.Router();

router.post("/create", createStory);
router.get("/get", getAllStories);

module.exports = router; 
