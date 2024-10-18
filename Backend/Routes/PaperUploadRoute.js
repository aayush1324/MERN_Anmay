const express = require('express');
const router = express.Router();
const paperController = require('../Controllers/PaperController.js');

// Route for uploading a paper
router.post('/upload-paper', paperController.uploadPaper);

module.exports = router;
