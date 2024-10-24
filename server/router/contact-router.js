const express=require("express");
const router=express.Router();
router.use(express.json());
const contact_controller =require("../controllers/contact-controller")
router.post("/contact",contact_controller.send_data);
module.exports=router;