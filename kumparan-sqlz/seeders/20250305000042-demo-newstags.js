"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */

    const newsTags = [
      {
        NewsId: 1,
        TagId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        NewsId: 1,
        TagId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        NewsId: 1,
        TagId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("NewsTags", newsTags, {});  
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     */ Example: await queryInterface.bulkDelete("NewsTags", null, {});
  },
};
