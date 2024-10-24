const Contact= require("../models/contact-model");
const send_data=async(req,res)=>{
    try {
        const contact_detail=await Contact.create({
            name:req.body.username,
            email:req.body.email,
            subject:req.body.subject,
            message:req.body.message,
        });  
        res.status(200).json({msg:"successfully send"});
    } catch (error) {
        console.log(error);
    }

}
module.exports={send_data};