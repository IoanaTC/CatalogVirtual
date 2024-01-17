const models = require("../../models");

module.exports = async (source, args, { tokenPayload }) => {
    if (!tokenPayload) {
        return null;
    }

    const { firstName, lastName, email } = args;

    const user = await models.Student.create({
        firstName, 
        lastName,  
        email      
    });

    const guardian = await user.getGuardian();
    const grades = await user.getGrades();

    return {
        id: user.id,
        name: `${firstName} ${lastName}`,
        email: email,
        guardian: guardian,
        grades: grades
    };
};
