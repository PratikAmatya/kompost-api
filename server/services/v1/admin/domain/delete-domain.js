const { Domain } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Delete a Domain
 * It will delete a Domain.
 * @param domainId
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
    throw new ValidationError("Unable to find the domain.", 404);
  }

  domain.active = false;

  await domain.save();

  return domain;
};
