const catchAsync = require('../utils/catchAsync');
const {postService} = require("../services");
const {postEmotionService} = require("../services");
const kobertServer = require('../utils/server/kobertServer')

const getPostList = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.params, ...req.body};
    let result=[];
    for(let i=0;i<data.postIdList.length;i++){
        result.push({
            post:await postService.getPost(data.postIdList[i]),
            emotions:await postEmotionService.getPostEmotions(data.postIdList[i])
        })
    }
    return res.send(result);
})

const createPost = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.params, ...req.body};
    const result = await postService.createPost(data);
    return res.send(result);
})


const getPost = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.params, ...req.body};
    const post = await postService.getPost(data.postId);
    const emotions = await postEmotionService.getPostEmotions(data.postId)
    return res.send({post,emotions});
})


const editPost = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.params, ...req.body};
    const result = await postService.editPost(data.content,data.postId);
    return res.send({success: true});
})


const deletePost = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.params, ...req.body};
    await postService.deletePost(data.postId);
    await postService.deletePostEmotions(data.postId);
    return res.send({success: true});
})

const diagnosisEmotions= catchAsync(async (req, res) => {
    const data = {...req.query, ...req.params, ...req.body};
    const post = await postService.getPost(data.postId);
    const emotions = kobertServer.post(`/v1/diagnosis`,post)
    for(let i=0;i<emotions.length;i++){
        await postEmotionService.createPostEmotion(data.postId,emotions[i]);
    }
    return res.send({post,emotions});
})


module.exports = {
    getPostList,
    createPost,
    getPost,
    editPost,
    deletePost,
    diagnosisEmotions
}
