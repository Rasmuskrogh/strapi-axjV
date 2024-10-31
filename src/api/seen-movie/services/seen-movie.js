'use strict';

/**
 * seen-movie service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::seen-movie.seen-movie');
