"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    const category = [
      {
        name: "News",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Business",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sports",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("Categories", category, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
