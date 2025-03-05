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
  
    const users = [
      {
        name: "Hakim Syukri",
        email: "hackim@gmail.com",
        username: "Hakim_rw",
        password: await bcrypt.hash("hakim0909", 10), // Hash password
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hendrik",
        email: "hendrik@gmail.com",
        username: "hendrik99",
        password: await bcrypt.hash("hakim0909", 10), // Hash password
        role: "reporter",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Frans",
        email: "france@gmail.com",
        username: "france99",
        password: await bcrypt.hash("hakim0909", 10), // Hash password
        role: "subscriber",
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
