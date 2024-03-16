const asyncHandler = require("express-async-handler");
const posts = require("../models/post_model");

exports.get_all_posts = asyncHandler(async (req, res, next) => {
  const all_posts = await posts.find({});
  res.json(all_posts);
});

exports.get_one_post = asyncHandler(async (req, res, next) => {
  const post_id = req.params.id;
  const single_post = await posts.findById(post_id);
  res.json(single_post)
});

exports.delete_one_post = asyncHandler(async (req, res, next) => {
    const post_id = req.params.id;
    const delete_post = await posts.findByIdAndDelete(post_id)
})

exports.create_post = asyncHandler(async (req, res, next) => { 
    const new_post = new posts({
        author: req.user.id,
        title: req.body.title,
        content: req.body.content
    })
    await new_post.save()

    res.redirect("/");
})
