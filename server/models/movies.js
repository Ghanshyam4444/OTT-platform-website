const mongoose=require("mongoose");
const movieSchema=new mongoose.Schema({
    movieName:{
        type:String,
        required:true,
    },
    folderName:{
        type:String,
        required:true
    },
    hori_folderName:{
        type:String,
        required:true
    },
    imageName:{
        type:String,
        required:true,
    },
    hori_imageName:{
        type:String,
        required:true
    },
    tags:{
        type:[String],
        required:true,
    },
    isPremium:{
        type:Boolean,
        required:true,
    },
    duration:{
        type:String,
        required:true,
    },
    language:{
        type:String,
        required:true
    },
    age_limit:{
        type:String,
        required:true,
    },
    rating:{
        type:String,
        required:true
    },
    movieVideoName:{
        type:String,
        required:true
    },
    aboutMovie:{
        type:String,
        required:true,
    },
})
const Movie=new mongoose.model("Movie",movieSchema);
module.exports=Movie;