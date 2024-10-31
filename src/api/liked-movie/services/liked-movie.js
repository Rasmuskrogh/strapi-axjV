'use strict';

/**
 * liked-movie service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::liked-movie.liked-movie');
