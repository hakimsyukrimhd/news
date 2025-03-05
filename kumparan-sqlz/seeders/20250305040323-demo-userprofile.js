"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    const userProfile = [
      {
        UserId: 1,
        email: "hakim@gmail.com",
        address: "Jalan Merdeka No. 1, Jakarta",
        phone: "081234567890",
        birthdate: "1995-06-15",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 2,
        email: "hendrik@gmail.com",
        address: "Jalan Merdeka No. 1, Jakarta",
        phone: "081234567890",
        birthdate: "1995-06-15",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 3,
        email: "france@gmail.com",
        address: "Jalan Merdeka No. 1, Jakarta",
        phone: "081234567890",
        birthdate: "1995-06-15",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("UserProfiles", userProfile, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     */
    await queryInterface.bulkDelete("PeUserProfilesople", null, {});
  },
};
