const { Domain } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Get a Domain
 * It will get a Domain.
 * @param queryObj
 * @returns {Promise<Domain>}
 */
module.exports = async (domainId) => {
  const domain = await Domain.findOne({
    where: {
      id: domainId,
      active: true,
    },
  });
  if (!domain) {
    throw new ValidationError("Unable to find the domain", 404);
  }

  return domain;
};
