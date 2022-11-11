const { Users } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Create a client
 * It will create a new client
 * @param createObj
 * @returns {Promise<Users>}
 */

module.exports = async (createObj) => {
  const duplicateUser = await Users.findOne({
    where: {
      email: createObj.email,
      status: true,
    },
  });

  if (duplicateUser) {
    throw new ValidationError("Duplicate email.", createObj);
  }

  const user = await Users.create(createObj);

  if (!user) {
    throw new ValidationError("Unable to create new client.", createObj);
  }

  return user;
};
