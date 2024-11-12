module.exports = ((sequelize, DataTypes) => {
    const schema = {
        post_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        user_id: {
            type: DataTypes.INTEGER
        },

        content: {
            type: DataTypes.STRING
        },

        status: {
            type: DataTypes.TINYINT(1)
        },

    };

    const modelOptions = {
        createdAt: true,
        updatedAt: true,
        tableName: "post",
        indexes: []
    };
    return sequelize.define('Post', schema, modelOptions);
});
