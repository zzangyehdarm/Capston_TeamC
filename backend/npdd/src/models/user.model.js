module.exports = ((sequelize, DataTypes) => {
    const schema = {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING
        },

        email: {
            type: DataTypes.STRING
        },

        pnum: {
            type: DataTypes.STRING
        },

        password: {
            type: DataTypes.STRING
        },

        birthday: {
            type: DataTypes.DATE
        },
    };
    
    const modelOptions = {
        createdAt: true,
        updatedAt: true,
        tableName: "user",
        indexes: []
    };
    return sequelize.define('User', schema, modelOptions);
});
