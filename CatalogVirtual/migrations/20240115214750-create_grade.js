'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('grades', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            studentId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Students',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
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
            score: {
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
        await queryInterface.dropTable('grades');
    },
};

