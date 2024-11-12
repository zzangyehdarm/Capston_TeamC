const {PostEmotion, sequelize} = require('../models/index')

const createPostEmotion = async (postId,emotion) => {
    return await PostEmotion.create({
        post_id:postId,
        emotion:emotion,
    })
}

const getPostEmotions = async (postId) => {
    return await PostEmotion.findAll({
        where:{post_id:postId}
    })
}

const deletePostEmotions = async (postId)=>{
    return await PostEmotion.destory({
        where:{
            post_id:postId
        }
    })
}



module.exports = {
    createPostEmotion,
    getPostEmotions,
    deletePostEmotions
}
