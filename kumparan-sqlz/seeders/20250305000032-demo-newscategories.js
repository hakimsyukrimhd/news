"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     */

    const newsCategories = [
      {
        NewsId: 1,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        NewsId: 1,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        NewsId: 1,
        CategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("NewsCategories", newsCategories, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     */ Example: await queryInterface.bulkDelete("NewsCategories", null, {});
  },
};
