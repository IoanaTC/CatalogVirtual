'use strict';

/** @type {import('sequelize-cli').Migration} */
const casual = require('casual');
const { Subject } = require('../models');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const mockSubjects = Array.from({ length: 10 }, () => ({
            name: casual.word,
            description: casual.sentence,
        }));

        await Subject.bulkCreate(mockSubjects, {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Subjects', null, {});
    }
};
