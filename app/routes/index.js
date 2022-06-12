const express = require('express');
const movie=require("./movie.js");
const postValidator=require("../middlewares/validation.js");
const router = express.Router();

router.use("/movie",movie);
module.exports = router;
