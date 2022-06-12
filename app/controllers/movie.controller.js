const db = require("../models/index.js");
const movie = db.movie;
const controller = {};
controller.addMovie = async (req, res, next) => {
  try {
    const { name, description,genreId ,rating,duration,releaseDate} = req.body;
    await movie.create({
      name: name,
      description: description,
      genreId:genreId,
      rating:rating,
      duration:duration,
      releaseDate:releaseDate
    });
    res.status(200).send();
  } catch (error) {
    next(error);
  }
};

controller.getMovies = async (req, res, next) => {
  try {
    const getAllMovies = await movie.findAll({
        where:{IsDeleted:0}
    });
    res.status(200).send(getAllMovies);
  } catch (error) {
    next(error);
  }
};

controller.getMovieById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new Error("Id is mandatory");
    }
    const getMovie = await movie.findOne({
      where: { id: id, IsDeleted:0},
    });
    res.status(200).send(getMovie);
  } catch (error) {
    next(error);
  }
};

controller.deleteMovie = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      if (!id) {
        throw new Error("Id is mandatory");
      }
      const isDelete = await movie.update({IsDeleted:1},{
        where: { id: id },
      });
      res.status(200).send({message:"successfully deleted"});
    } catch (error) {
      next(error);
    }
  };
  

module.exports = controller;
