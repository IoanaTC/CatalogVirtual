'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Grade extends Model {
        static associate(models) {
            models.Grade.belongsTo(models.Student, {
                foreignKey: 'studentId',
            });

            models.Grade.belongsTo(models.Subject, {
                foreignKey: 'subjectId',
            });
        }
    }

    Grade.init({
        score: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Grade',
        tableName: 'grades',
        timestamps: false,
    });

    return Grade;
};

