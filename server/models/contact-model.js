const mongoose=require("mongoose");
const contact_schema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        require:true
    },
})
const Contact=new mongoose.model("Contact",contact_schema);
module.exports=Contact;