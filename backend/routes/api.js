var express = require('express');
var router = express.Router();
const users_controller = require("../controllers/users_controller")
const posts_controller = require("../controllers/post_controller")


/* USER ROUTES */
router.post('/sign-up', users_controller.sign_up);

router.post("/login", users_controller.login)



/* POSTS ROUTES */
router.get("/get_all_posts", posts_controller.get_all_posts)

router.post("/create_post", posts_controller.create_post)

router.delete("/delete_post/:id", posts_controller.delete_one_post)

router.get("/get_one_post/:id", posts_controller.get_one_post)



module.exports = router;
