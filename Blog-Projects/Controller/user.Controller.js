const BlogModel = require("../Model/UserMOdel");

// Get single user
const getSingleUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await BlogModel.findById(id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user" });
    }
}

// GET ALL BLOG 
const getAllPosts = async (req, res) => {
    try {
        const posts = await BlogModel.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// CRETAE BLOG
const createPost = async (req, res) => {
    const { title,image, author, content, tags } = req.body;
    const newPost = new BlogModel({
        title,
        image,
        author,
        content,
        tags
    });
    try {
        await newPost.save();
        res.status(201).send(newPost);
    } catch (err) {
        res.status(400).send(err);
    }

}

// POST UPDATE 
const updatePost = async (req, res) => {
    try {
        const updatedPost = await BlogModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//DELETE POST

const deletePost = async (req, res) => {
    try {
        await BlogModel.findByIdAndDelete(req.params.id);
        res.json({ message: 'Post deleted Successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


module.exports = {createPost, getAllPosts, updatePost, deletePost,getSingleUser }