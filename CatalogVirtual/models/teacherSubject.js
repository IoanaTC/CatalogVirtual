'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class TeacherSubject extends Model {

        static associate(models) {
            // Define association with Teacher
            models.TeacherSubject.belongsTo(models.Teacher, {
                foreignKey: 'teacherId',
            });

            // Define association with Subject
            models.TeacherSubject.belongsTo(models.Subject, {
                foreignKey: 'subjectId',
            });
        }
    }

    TeacherSubject.init({
        years: DataTypes.INTEGER,
        // Assuming you have teacherId and subjectId fields
        teacherId: DataTypes.INTEGER,
        subjectId: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'TeacherSubject',
        tableName: 'teachersubject',
        timestamps: false,
    });

    return TeacherSubject;
};