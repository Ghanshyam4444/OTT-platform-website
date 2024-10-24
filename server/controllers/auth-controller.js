const User=require("../models/user");
const bcrypt=require("bcryptjs");
const login = async(req,res) =>{
    try {
        const user_email=req.body.email;
        const userExist=await User.findOne({email:user_email});
        if(!userExist){
            return res.status(400).json({message:"Invalid Credentials"});
        }
        const isauthenticated=await bcrypt.compare(req.body.password,userExist.password);
        if(isauthenticated){
            const token=await userExist.genrateToken();
            console.log(userExist._id.toString());
            res.status(200).json({
                msg:"Login Successful",
                token:token,
                userId:userExist._id.toString(),
            })
        }
        else
        {
            console.log("1");
            res.status(401).json({msg:"invalid login and password"})
        }
    } catch (error) {
        console.log("2");
        res.status(500).json("internal server error");
    }
}
const register = async(req,res) =>{
    try {
        const user_email=req.body.user_email;
        const userExist=await User.findOne({email:user_email});
        if(userExist){
            return res.status(400).json({msg:"user already exist"})
        }
        const userage=parseInt(req.body.userage);
        const userData=await User.create({
            name:req.body.user_name,
            email:req.body.user_email,
            phone:req.body.user_phone_number,
            gender:req.body.gender,
            age:userage,
            password:req.body.user_password,
        })


        console.log(userData);
        res.status(201).json({
            msg:"registration Successful",
            token:await userData.genrateToken(),
            userId:userData._id.toString(),
        });
    } catch (error) {
        res.status(500).json(error); 
    }
}
const home=(req,res)=>{
    try {
        res.status(200).json("hello we are at home page");
    } catch (error) {
        console.log(error);
    }
}
const user=async(req,res)=>{
    try {
        const userData=req.user;
        console.log(userData.name)
        return res.status(200).json({userData});
    } catch (error) {
        console.log("error");
    }
}
const mySpace=async(req,res)=>{
    try {
        const userData=req.user;
        console.log(userData.name);
        return res.status(200).json(userData);
    } catch (error) {
        console.log("error");
    }
}
module.exports={login,home,register,user,mySpace};