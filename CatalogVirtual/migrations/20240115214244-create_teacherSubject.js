'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('TeacherSubject', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            subjectId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Subjects',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            teacherId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Teachers',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            years: {
                type: Sequelize.INTEGER,
            },
            createdAt: {                                             
                allowNull: true,                                    
                type: Sequelize.DATE                                 
            },                                                       
            updatedAt: {                                             
                allowNull: true,                                    
                type: Sequelize.DATE                                 
            }                                                        
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('TeacherSubject');
    },
};

