'use strict';

/**
 * research-area controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::research-area.research-area', ({strapi}) => ({
  async researchAreaByCount(ctx) {
    try {
      const ra = await strapi.db.query('api::research-area.research-area').findMany({
        populate: {
          research_papers: {
            select: ['id'],
            count: true
          },
        },
        /* orderBy: {
          research_papers: 'asc'
        } */
      });

      return ra;
    } catch (err) {
      ctx.body = err;
      return {err}
    }
  }
}));
