"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    const users = [
      {
        name: "Hakim Syukri",
        username: "Hakim_re",
        password: "hakim0909",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Syukri Hakim",
        username: "Syukri_po",
        password: "syukri@33",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("Users", users, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
