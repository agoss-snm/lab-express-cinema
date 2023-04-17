const router = require("express").Router();
const Movie = require("../models/Movie.model.js");


// GET route to retrieve and display all the Movies
router.get("/movies", (req, res, next) => {
    Movie.find()
        .then((allTheMoviesFromDB) => {
            console.log("Retrieved books from DB:", allTheMoviesFromDB);
            res.render("movies/movies.hbs", { movies: allTheMoviesFromDB });
        })
        .catch((error) => {
            console.log("Error while getting the books from the DB: ", error);
            next(error);
        });
});

// for a especific movie search

router.get("/movies/:movieId", (req, res, next) => {
    const { movieId } = req.params;

    Movie.findById(movieId)
        .then((theMovie) => res.render("movies/movies-details.hbs", { movie: theMovie }))
        .catch((error) => {
            console.log("Error while retrieving book details: ", error);
            next(error);
        });
});
module.exports = router;