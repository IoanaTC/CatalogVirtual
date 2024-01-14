'use strict';

/** @type {import('sequelize-cli').Migration} */
const { randFirstName, randLastName, randEmail, randPassword } = require('@ngneat/falso');
const { Teacher } = require('../models');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        try {
            const mockTeachers = [];

            for (let i = 0; i < 50; i++) {
                mockTeachers.push({
                    name: randFirstName() + " " + randLastName(),
                    email: randEmail(),
                    password: randPassword(),
                });
            }

            await queryInterface.bulkInsert('Teachers', mockTeachers, {});
        } catch (error) {
            console.error('Error seeding teachers:', error);
        }
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Teachers', null, {});
    }
};

