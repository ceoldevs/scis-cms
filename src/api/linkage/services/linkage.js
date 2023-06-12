'use strict';

/**
 * linkage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::linkage.linkage');
