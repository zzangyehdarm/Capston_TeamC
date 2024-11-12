const catchAsync = require('../utils/catchAsync');
const {userService} = require("../services");

const createUser = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.params, ...req.body};
    const result = await userService.createUser(data);
    return res.send(result);
})

const getUser = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.params, ...req.body};
    const result = await userService.getUser(data.userId);
    return res.send(result);
})


const login = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.params, ...req.body};
    const result = await userService.login(data.email,data.password);
    if(!result)
        return res.send({success:true});
    else
        return res.send({success:false})
})



module.exports = {
    createUser,
    getUser,
    login,
}
