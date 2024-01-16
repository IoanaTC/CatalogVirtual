'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Subjects', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable('Subjects');
    },
};

