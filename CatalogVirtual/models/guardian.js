'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Guardian extends Model {

        static associate(models) {
            models.Guardian.hasOne(models.Student, {
                foreignKey: 'guardianId',
            });
        }
    }

    Guardian.init({
        parent1: DataTypes.STRING,
        parent2: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Guardian',
        tableName: 'guardians',
        timestamps: false,
    });

    return Guardian;
};

