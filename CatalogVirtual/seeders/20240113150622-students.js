'use strict';
const { randFirstName, randLastName, randEmail, randPassword } = require('@ngneat/falso');
const { Guardian, Student } = require('../models'); // Adjust the path based on your project structure

module.exports = {
    up: async (queryInterface, Sequelize) => {
        try {
            const guardians = await Guardian.findAll();

            if (!guardians || guardians.length === 0) {
                console.error('No guardians found. Please seed guardians first.');
                return;
            }

            const mockStudents = [];

            for (let i = 0; i < guardians.length; i++) {
                mockStudents.push({
                    name: randFirstName() + " " + randLastName(),
                    email: randEmail(),
                    password: randPassword(),
                    guardianId: guardians[i].id,
                });
            }

            await queryInterface.bulkInsert('Students', mockStudents, {});
        } catch (error) {
            console.error('Error querying guardians:', error);
        }
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Students', null, {});
    }
};

