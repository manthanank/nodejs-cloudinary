const express = require('express');
const router = express.Router();
const { upload } = require('../controllers/upload.js');

router.post('/upload', upload);

module.exports = router;