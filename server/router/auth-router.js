const express =require("express");
const router = express.Router();
const auth_controller=require("../controllers/auth-controller");
const signupschema=require("../validators/auth-validator");
const validate=require("../middlewares/validate-middleware");
const authMiddleware=require("../middlewares/auth-middleware")
router.use(express.json());

router.get('/',auth_controller.home);
router.post("/login",auth_controller.login);
router.post("/register",validate(signupschema),auth_controller.register);
router.get("/user",authMiddleware,auth_controller.user)
router.get("/myspace",authMiddleware,auth_controller.mySpace);
module.exports=router;