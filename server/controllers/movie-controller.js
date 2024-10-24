const Movie=require("../models/movies");
const WebSeries=require("../models/web-series-model");
const getAllMovieData=async(req,res,next)=>{
    try {
        const allMovies=await Movie.find();
        res.status(200).json(allMovies);
    } catch (error) {
        next(error)
    }
}
const getMovieDetails=async(req,res,next)=>{
    try {
        const id=req.params.id;
        const movie_detail=await Movie.findOne({_id:id});
        res.status(200).json(movie_detail);
    } catch (error) {
        next(error)
    }
}
// webseries
const getAllWebSeriesData = async (req, res, next) => {
    try {
        const webseriesDetails=await WebSeries.find();
        return res.status(200).send(webseriesDetails);
    } catch (error) {
        next(error);
    }
}

const getWebSeriesById=async(req,res,next)=>{
    try {
        const id=req.params.id;
        const webSeriesDetail=await WebSeries.findOne({_id:id});
        return res.status(200).json(webSeriesDetail);
    } catch (error) {
        next(error)
    }
}

const getmatchedmovies=async(req,res,next)=>{
    try {
        const name=req.params.name;
        const movies = await Movie.find({
            movieName: { $regex: name, $options: 'i' } 
        });
        res.status(200).json(movies);
    } catch (error) {
        next(error)
    }
}
module.exports={getAllMovieData,getMovieDetails,getAllWebSeriesData,getWebSeriesById,getmatchedmovies};