'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Student extends Model {
        static associate(models) {
            models.Student.belongsTo(models.Guardian, {
                foreignKey: 'guardianId'
            });

            models.Student.belongsToMany(models.Subject, {
                through: 'Grade',
                foreignKey: 'studentId',
            });
        }
    }

    Student.init({
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Student',
        tableName: 'students',
        timestamps: false,
    });

    return Student;
};

