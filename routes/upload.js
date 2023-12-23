const express = require('express');
const router = express.Router();
const { upload, remove } = require('../controllers/upload.js');

router.post('/upload', upload);
router.post('/remove', remove);

module.exports = router;