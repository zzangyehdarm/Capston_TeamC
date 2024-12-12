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
            type: DataTypes.TEXT
        },

        status: {
            type: DataTypes.TINYINT(1)
        },
        date: {
            type: DataTypes.STRING
        },
        title: {
            type: DataTypes.STRING
        }

    };

    const modelOptions = {
        createdAt: true,
        updatedAt: true,
        tableName: "post",
        indexes: []
    };
    return sequelize.define('Post', schema, modelOptions);
});
