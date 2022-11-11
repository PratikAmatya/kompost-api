const { Domain } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Create a Domain
 * It will create a new Domain
 * @param queryObj
 * @returns {Promise<Domain>}
 */

module.exports = async (queryObj) => {
  const nameExists = await Domain.findOne({
    where: {
      name: queryObj.name,
      active: true,
    },
  });

  if (nameExists) {
    throw new ValidationError("Duplicate Domain Name", 403);
  }

  const domain = await Domain.create({ ...queryObj });

  if (!domain) {
    throw new ValidationError("Unable to create a new domain", 500);
  }

  return domain;
};
