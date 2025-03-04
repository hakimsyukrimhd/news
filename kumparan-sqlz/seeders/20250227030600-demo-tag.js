"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    const tags = [
      {
        name: "Jakarta",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jakarta Selatan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ciputat",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jabodetabek",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("Tags", tags, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     */
    await queryInterface.bulkDelete("Tags", null, {});
  },
};
