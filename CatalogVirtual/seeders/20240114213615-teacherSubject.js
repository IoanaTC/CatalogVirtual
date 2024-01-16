'use strict';

/** @type {import('sequelize-cli').Migration} */
const { Teacher, Subject } = require('../models');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        try {
            const teachers = await Teacher.findAll();
            const subjects = await Subject.findAll();

            if (!teachers || teachers.length === 0 || !subjects || subjects.length === 0) {
                console.error('No teachers or subjects found. Please seed teachers and subjects first.');
                return;
            }

            const mockTeacherSubjects = [];

            teachers.forEach(teacher => {
                subjects.forEach(subject => {
                    const years = Math.floor(Math.random() * 6) + 1; 

                    mockTeacherSubjects.push({
                        teacherId: teacher.id,
                        subjectId: subject.id,
                        years,
                    });
                });
            });

            await queryInterface.bulkInsert('TeacherSubject', mockTeacherSubjects, {});
        } catch (error) {
            console.error('Error seeding TeacherSubject:', error);
        }
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TeacherSubject', null, {});
    }
};

