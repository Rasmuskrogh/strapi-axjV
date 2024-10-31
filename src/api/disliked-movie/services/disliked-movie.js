'use strict';

/**
 * disliked-movie service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::disliked-movie.disliked-movie');
