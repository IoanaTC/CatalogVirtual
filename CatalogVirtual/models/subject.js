'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Subject extends Model {

        static associate(models) {
            models.Subject.belongsToMany(models.Student, {
                through: 'Grade',
                foreignKey: 'subjectId',
            });

            models.Subject.belongsToMany(models.Teacher, {
                through: 'teachersubject',
                foreignKey: 'subjectId',
            });
        }
    }

    Subject.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Subject',
        tableName: 'subjects',
        timestamps: false,
    });

    return Subject;
};

