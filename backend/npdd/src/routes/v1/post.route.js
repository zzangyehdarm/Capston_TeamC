const express = require('express');
const {postController} = require('../../controllers');

const router = express.Router();

router
    .route('/')
    .get(postController.getPostList)
    .post(postController.createPost)


router
    .route('/:postId')
    .get(postController.getPost)
    .put(postController.editPost)
    .delete(postController.deletePost)

router
    .route('/:postId/diagnosis')
    .post(postController.diagnosisEmotions)

module.exports = router;
