"use strict";

const bcrypt = require("bcryptjs");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    const saltRounds = 10; // Jumlah salt rounds untuk hashing
    const users = [
      {
        name: "Hakim Syukri",
        username: "Hakim_re",
        password: await bcrypt.hash("hakim0909", saltRounds), // Hash password
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Syukri Hakim",
        username: "Syukri_po",
        password: await bcrypt.hash("syukri@33", saltRounds), // Hash password
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
