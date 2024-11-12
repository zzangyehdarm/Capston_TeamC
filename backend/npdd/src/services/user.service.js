const {User, sequelize} = require('../models/index')

const createUser = async (data) => {
    return await User.create({
        name:data.name,
        email:data.email,
        pnum:data.pnum,
        password:data.password,
        birthday:data.birthday,
    })
}

const getUser = async (userId) => {
    return await User.findOne({
        where:{user_id:userId}
    })
}

const login = async (email,password) => {
    return await User.findOne({
        where:{email:email,password:password}
    })
}

module.exports = {
    createUser,
    getUser,
    login,
}
