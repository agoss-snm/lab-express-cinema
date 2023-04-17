const router = require("express").Router();

const Movie = require("../models/Movie.model.js"); // <== add this line before your routes


// GET route to retrieve and display all the Movies
router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((allTheMoviesFromDB) => {
      // -> allTheBooksFromDB is a placeholder, it can be any word
      console.log("Retrieved books from DB:", allTheMoviesFromDB);

      // we call the render method after we obtain the books data from the database -> allTheBooksFromDB
      res.render("movies/movies.hbs", { movies: allTheMoviesFromDB }); // pass `allTheBooksFromDB` to the view (as a variable books to be used in the HBS)
    })
    .catch((error) => {
      console.log("Error while getting the books from the DB: ", error);

      // Call the error-middleware to display the error page to the user
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
  
        // Call the error-middleware to display the error page to the user
        next(error);
      });
  });
  

module.exports = router;