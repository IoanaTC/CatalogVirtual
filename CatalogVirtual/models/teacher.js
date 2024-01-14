'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Teacher extends Model {

        static associate(models) {
            models.Teacher.belongsToMany(models.Subject, {
                through: 'teacher_subject',
                foreignKey: 'teacherId',
            });
        }
    }

    Teacher.init({
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'Teacher',
        tableName: 'teachers',
        timestamps: false,
    });

    return Teacher;
};

