const mongoose = require("mongoose");
const postSchema = require("../schemas/post.schema");

const Post = mongoose.model("Post", postSchema);

module.exports = Post;