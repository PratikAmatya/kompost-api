const { Domain } = require("../../../../models");

/**
 * List all Domains
 * It will list all Domains.
 * @returns {Promise<Array<Domain>>}
 */
module.exports = async () => {
  const domains = await Domain.findAll({
    where: {
      active: true,
    },
  });

  return domains;
};
