var express = require('express');
const movie =require("../controllers/movie.controller");
const postValidator=require("../middlewares/validation.js");
const router = express.Router();

// add movie  (/movie)
router.post("/",postValidator, movie.addMovie);
// get all movies (/movie)
router.get("/", movie.getMovies);
// get movie by id (/movie/:id)
router.get("/:id",movie.getMovieById);
// delete movie (/movie/:id)
router.delete("/:id",movie.deleteMovie);

module.exports = router;
