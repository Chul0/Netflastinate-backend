'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('genres', [
    {
      name: 'Children & Family',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Horror',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Romance',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Thriller',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('genres', null, {})
  }
};
