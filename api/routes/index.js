const express = require('express');
const { sendMessage } = require('./guest');
const router = express.Router();

//Routes
router.post('/sendmessage', sendMessage);

module.exports = router;
