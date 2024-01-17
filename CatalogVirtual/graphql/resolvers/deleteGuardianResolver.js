const models = require("../../models");

module.exports.deleteGuardianResolver = async (source, { guardianId }) => {
  try {
    const result = await models.Guardian.destroy({
      where: { id: guardianId }
   
    });
    if (result === 0) {
        throw new Error("Guardian not found or already deleted.");
      }
      
      return true;
    } catch (error) {
        throw new Error(`Error deleting guardian: ${error.message}`);
        }
};      