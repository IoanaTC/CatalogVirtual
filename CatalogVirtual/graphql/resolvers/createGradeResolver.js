const models = require("../../models");

module.exports = async (source, { studentId, subjectId, score }) => {
  try {
    const newGrade = await models.Grade.create({
      score,
      studentId,
      subjectId
    });

    return newGrade;
  } catch (error) {
    throw new Error(`Error creating grade: ${error.message}`);
  }
};
