const { Domain } = require("../../../../models");
const { Op } = require("sequelize");
const { ValidationError } = require("../../../../errors");

/**
 * Update a Domain
 * It will update a Domain.
 * @param queryObj
 * @returns {Promise<Domain>}
 */
module.exports = async (domainId, queryObj) => {
  const domain = await Domain.findOne({
    where: {
      id: domainId,
      active: true,
    },
  });

  if (!domain) {
    throw new ValidationError("Unable to find the domain.", 404);
  }

  const duplicateDomain = await Domain.findOne({
    where: {
      name: queryObj.name,
      active: true,
      id: {
        [Op.ne]: domain.dataValues.id,
      },
    },
  });

  if (duplicateDomain) throw new ValidationError("Duplicate Domain Name", 403);

  domain.name = queryObj.name;
  await domain.save();

  return domain;
};
