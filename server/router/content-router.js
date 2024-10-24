const express=require("express");
const router=express.Router();
const content_controller=require("../controllers/movie-controller");
router.use(express.json());
router.get("/movies",content_controller.getAllMovieData);
router.get("/show_movie/:id",content_controller.getMovieDetails);
router.get("/webseries",content_controller.getAllWebSeriesData);
router.get("/show_webseries/:id",content_controller.getWebSeriesById);


router.get("/searchmovie/:name",content_controller.getmatchedmovies);
module.exports=router;