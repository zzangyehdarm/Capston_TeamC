const {Post, sequelize} = require('../models/index')


const createPost = async (data) => {
    return await Post.create({
        user_id:data.user_id,
        content:data.content,
    })
}

const getPost = async (postId) => {
    return await Post.findOne({
        where:{post_id:postId}
    })
}

const editPost = async (content,postId) => {
    return await Post.update({
        content:content,
    },{
        where:{post_id:postId}
    })
}


const deletePost = async (postId) => {
    return await Post.destory({
        where:{
            post_id:postId
        }
    })
}


module.exports = {
    createPost,
    getPost,
    editPost,
    deletePost
}
