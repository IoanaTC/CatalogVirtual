const models = require("../../models");

module.exports = async (source, { id }) => {
  try {
    // Delete associated grades
    await models.Grade.destroy({
      where: {
        studentId: id,
      },
    });

    // Delete the student
    const result = await models.Student.destroy({
      where: {
        id,
      },
    });

    if (result === 0) {
      return {
        success: false,
        message: "Student not found or already deleted.",
      };
    }

    return {
      success: true,
      message: "Student deleted successfully.",
    };
  } catch (error) {
    return {
      success: false,
      message: `Error deleting student: ${error.message}`,
    };
  }
};
