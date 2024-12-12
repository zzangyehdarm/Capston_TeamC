const { Post } = require('../models/index');

const createPost = async (data) => {
    return await Post.create({
        user_id: data.user_id,
        content: data.content,
        date: data.date,
        status: data.status,
        title: data.title,
    });
};

const getPost = async (postId) => {
    return await Post.findOne({
        where: { post_id: postId }
    });
};

const editPost = async (data, postId) => {
    return await Post.update({
        content: data.content,
        status: data.status,
        title: data.title,
        date: data.date,
    }, {
        where: { post_id: postId }
    });
};

const deletePost = async (postId) => {
    return await Post.destroy({
        where: {
            post_id: postId
        }
    });
};

const getAllPosts = async () => {
    return await Post.findAll();
};

module.exports = {
    createPost,
    getPost,
    editPost,
    deletePost,
    getAllPosts
};
