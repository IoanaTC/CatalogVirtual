'use strict';

/** @type {import('sequelize-cli').Migration} */
const { randFirstName, randLastName } = require('@ngneat/falso');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const mockGuardians = [];

        for (let i = 0; i < 50; i++) {
            mockGuardians.push({
                parent1: randFirstName() + " " + randLastName(),
                parent2: randLastName() + " " + randLastName(),
            });
        }

        await queryInterface.bulkInsert('Guardians', mockGuardians, {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Guardians', null, {});
    }
};
