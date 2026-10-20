const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getHome);
router.get('/health', controller.getHealth);

module.exports = router;
