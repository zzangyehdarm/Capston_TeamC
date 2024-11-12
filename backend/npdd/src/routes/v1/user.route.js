const express = require('express');
const {userController} = require('../../controllers');

const router = express.Router();

router
    .route('/')
    .post(userController.createUser)

router
    .route('/:userId')
    .get(userController.getUser)
    .post(userController.login)

module.exports = router;
