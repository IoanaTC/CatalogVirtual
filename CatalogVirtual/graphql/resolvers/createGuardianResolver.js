const models = require("../../models");

module.exports.createGuardianResolver = async (source, { parent1, parent2 }) => {
  try {
    const guardian = await models.Guardian.create({
      parent1,
      parent2
    });

    return guardian;
  } catch (error) {
    throw new Error(`Error creating guardian: ${error.message}`);
  }
};
