const User = require("../models/user");
const Contact = require("../models/contact-model");
const Movie = require("../models/movies");
const bcrypt = require("bcryptjs")
const WebSeries=require("../models/web-series-model");;
const getAllUsers = async (req, res, next) => {
    try {
        const user_details = await User.find({}, { password: 0 });
        if (!user_details || user_details.length === 0) {
            return res.status(404).json({ message: "No Users Found" });
        }
        return res.status(200).send(user_details);
    } catch (error) {
        next(error)
    }
}


const deleteUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const deleteUser = await User.deleteOne({ _id: id });
        res.status(201).send("successfully deleted");
    } catch (error) {
        next(error);
    }
}


const updateUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        if (updatedData.user_password) {
            const saltRound = await bcrypt.genSalt(10);
            const hash_password = await bcrypt.hash(updatedData.user_password, saltRound);
            updatedData.user_password = hash_password; // Replace the password with the hashed version
        }
        const updatedUser = await User.updateOne({ _id: id }, {
            name: updatedData.user_name,
            email: updatedData.user_email,
            phone: updatedData.user_phone_number,
            gender: updatedData.gender,
            age: updatedData.userage,
            password: updatedData.user_password,
            isAdmin: updatedData.isAdmin,
            isSubscriber: updatedData.isSubscriber,
        })
        return res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
}
const getUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const userData = await User.findOne({ _id: id });
        res.status(200).json(userData);
    } catch (error) {
        next(error)
    }
}
const getAllContacts = async (req, res, next) => {
    try {
        console.log("hello");
        const contactData = await Contact.find({});
        if (!contactData || contactData.length === 0) {
            return res.status(404).json({ message: "No Contacts Found" });
        }
        return res.status(200).json(contactData);
    } catch (error) {
        next(error)
    }
}

const getAllMessageDetail = async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log("hello");
        const contactDetail = await Contact.findOne({ _id: id });
        res.status(200).json(contactDetail);
    } catch (error) {
        next(error)
    }
}



const deleteContactById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const delete_contact = await Contact.deleteOne({ _id: id })
        res.status(200).json(delete_contact);
    } catch (error) {
        next(error);
    }
}




// movies section

const store_movie_data = async (req, res, next) => {
    try {
        const movie_Detail = req.body;
        const storeMovie = await Movie.create({
            movieName: movie_Detail.movieName,
            folderName: movie_Detail.folderName,
            hori_folderName: movie_Detail.hori_folderName,
            imageName: movie_Detail.imageName,
            hori_imageName: movie_Detail.hori_imageName,
            tags: movie_Detail.tags,
            isPremium: movie_Detail.isPremium,
            duration: movie_Detail.duration,
            language: movie_Detail.language,
            age_limit: movie_Detail.age_limit,
            rating: movie_Detail.rating,
            aboutMovie: movie_Detail.aboutMovie,
            movieVideoName: movie_Detail.movieVideoName,
        })
        res.status(200).json(storeMovie);
    } catch (error) {
        next(error)
    }
}

const get_movie_data=async(req,res,next)=>{
    try {
        const id=req.params.id;
        const movie_Detail=await Movie.findOne({_id:id});
        res.status(200).json(movie_Detail);
    } catch (error) {
        next(error);
    }
}


const updateMovieById=async(req,res,next)=>{
    try {
        const id=req.params.id;
        const movie_details=req.body;
        const updateData=await Movie.updateOne({_id:id},{
            $set:movie_details
        })
        return res.status(200).json(updateData);
    } catch (error) {
        next(error);
    }
}


const deleteMovieById=async(req,res,next)=>{
    try {
        const id=req.params.id;
        const deletedMovie=await Movie.deleteOne({_id:id});
        return res.status(200).json(deletedMovie);
    } catch (error) {
        console.log(error);
    }
}


// web series section

const store_web_series_data=async(req,res,next)=>{
    try {
        // Access the body of the request
        const webSeriesData = req.body;

        // Create a new WebSeries document
        const newWebSeries = new WebSeries(webSeriesData);
        
        // Save it to the database
        await newWebSeries.save();
        
        res.status(200).json(newWebSeries);
    } catch (error) {
        next(error)
    }
}


const delete_web_series_data=async(req,res,next)=>{
    try {
        const id=req.params.id;
        const deletedWebSeries=await WebSeries.deleteOne({_id:id});
        return res.status(200).json(deletedWebSeries);
    } catch (error) {
        next(error);
    }
}



const get_web_series_data=async(req,res,next)=>{
    try {
        const id=req.params.id;
        const getWebSeriesDetail=await WebSeries.findOne({_id:id});
        return res.status(200).json(getWebSeriesDetail);
    } catch (error) {
        next(error);
    }
}


const update_web_series_data=async(req,res,next)=>{
    try {
        const id=req.params.id;
        const updatedData=req.body;
        const updatedWebSeriesData=await WebSeries.updateOne({_id:id},{
            $set:updatedData,
        })
        return res.status(200).json(updatedWebSeriesData);
    } catch (error) {
        next(error);
    }
}


module.exports = { getAllUsers, deleteUserById, updateUserById, getUserById, getAllContacts, getAllMessageDetail, deleteContactById, store_movie_data ,store_web_series_data,get_movie_data,updateMovieById,deleteMovieById,delete_web_series_data,get_web_series_data,update_web_series_data};