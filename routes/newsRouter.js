const express = require('express');
const { getAllnews } = require('../controllers/newsController');
const router = express.Router();


router.post('/', getAllnews);



 module.exports = router