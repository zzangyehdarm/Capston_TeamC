module.exports = ((sequelize, DataTypes) => {
    const schema = {
        post_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },

        emotion: {
            type: DataTypes.STRING
        },

    };

    const modelOptions = {
        createdAt: true,
        updatedAt: true,
        tableName: "post_emotion",
        indexes: []
    };
    return sequelize.define('PostEmotion', schema, modelOptions);
});
