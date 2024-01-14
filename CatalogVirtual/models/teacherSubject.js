'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class TeacherSubject extends Model {

        static associate(models) {
            models.Grade.belongsTo(models.Subject, {
                foreignKey: 'subjectId',
            });

            models.Grade.belongsTo(models.Subject, {
                foreignKey: 'subjectId',
            });}
    }

    TeacherSubject.init({
        years: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'TeacherSubject',
        tableName: 'teacher_subject',
        timestamps: false,
    });

    return TeacherSubject;
};

