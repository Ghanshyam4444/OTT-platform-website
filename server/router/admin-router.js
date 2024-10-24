const express=require("express");
const admin_controller=require("../controllers/admin-controller")
const admin_middleware=require("../middlewares/admin-middleware")
const authMiddleware=require("../middlewares/auth-middleware")
const router=express.Router();

router.use(express.json());
router.route("/adminuser").get(authMiddleware,admin_middleware,admin_controller.getAllUsers);
router.route("/contact").get(authMiddleware,admin_middleware,admin_controller.getAllContacts);
router.route("/adminuser/:id").get(authMiddleware,admin_middleware,admin_controller.getUserById);
router.route("/contact/:id").get(authMiddleware,admin_middleware,admin_controller.getAllMessageDetail);
router.route("/adminuser/delete/:id").delete(authMiddleware,admin_middleware,admin_controller.deleteUserById);
router.route("/contact/delete/:id").delete(authMiddleware,admin_middleware,admin_controller.deleteContactById);
router.route("/adminuser/update/:id").patch(authMiddleware,admin_middleware,admin_controller.updateUserById);



router.route("/movies").post(authMiddleware,admin_middleware,admin_controller.store_movie_data);
router.route("/movies/:id").get(authMiddleware,admin_middleware,admin_controller.get_movie_data);
router.route("/movies/update/:id").patch(authMiddleware,admin_middleware,admin_controller.updateMovieById);
router.route("/movies/delete/:id").delete(authMiddleware,admin_middleware,admin_controller.deleteMovieById);
router.route("/webseries").post(authMiddleware,admin_middleware,admin_controller.store_web_series_data);
router.route("/webseries/delete/:id").delete(authMiddleware,admin_middleware,admin_controller.delete_web_series_data);
router.route("/webseries/:id").get(authMiddleware,admin_middleware,admin_controller.get_web_series_data);
router.route("/webseries/update/:id").patch(authMiddleware,admin_middleware,admin_controller.update_web_series_data);
module.exports=router;