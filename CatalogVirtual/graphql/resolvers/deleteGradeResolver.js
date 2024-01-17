const models = require("../../models");

module.exports = async (source, { gradeId }) => {
  try {
    const result = await models.Grade.destroy({
      where: {
        id: gradeId
      }
    });

    if (result === 0) {
      return { success: false, message: "Grade not found or already deleted." };
    }

    return { success: true, message: "Grade deleted successfully." };
  } catch (error) {
    throw new Error(`Error deleting grade: ${error.message}`);
  }
};
