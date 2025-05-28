const Post = require("../models/Post");

exports.getAllPosts = async(req, res) => {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
};

exports.createPost = async(req, res) => {
    const { title, body } = req.body;
    const post = new Post({ title, body });
    await post.save();
    res.status(201).json(post);
};

exports.getPostById = async(req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post bulunamadı" });
    res.json(post);
};

exports.updatePost = async(req, res) => {
    const { title, body } = req.body;
    const post = await Post.findByIdAndUpdate(
        req.params.id, { title, body }, { new: true }
    );
    if (!post) return res.status(404).json({ message: "Post bulunamadı" });
    res.json(post);
};

exports.deletePost = async(req, res) => {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: "Post bulunamadı" });
    res.json({ message: "Silme işlemi başarılı" });
};