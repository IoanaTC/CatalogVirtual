'use strict';

/** @type {import('sequelize-cli').Migration} */
const { Student, Subject, Grade } = require('../models');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        try {
            const students = await Student.findAll();
            const subjects = await Subject.findAll();

            if (!students || students.length === 0 || !subjects || subjects.length === 0) {
                console.error('No students or subjects found. Please seed students and subjects first.');
                return;
            }

            const mockGrades = [];

            students.forEach(student => {
                subjects.forEach(subject => {
                    const score = Math.floor(Math.random() * 101);

                    mockGrades.push({
                        studentId: student.id,
                        subjectId: subject.id,
                        score,
                    });
                });
            });

            await queryInterface.bulkInsert('Grades', mockGrades, {});
        } catch (error) {
            console.error('Error seeding grades:', error);
        }
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Grades', null, {});
    }
};
