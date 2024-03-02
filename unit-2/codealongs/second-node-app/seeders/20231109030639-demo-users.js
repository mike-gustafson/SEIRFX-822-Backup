'use strict';
const { faker } = require('@faker-js/faker');


async function create1000users() {
  const result = [];

  for (let i = 0; i < 1000; i++) {
    // 1. create each object(user)
    // 2. push object into result array
    let firstName = faker.person.firstName();
    let lastName = faker.person.lastName();
    let user = {
      firstName: firstName,
      lastName: lastName,
      email: `${firstName}.${lastName}@email.com`,
      age: Math.floor(Math.random() * 100),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    result.push(user);

  }

  return result;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const usersCreated = await create1000users();
    await queryInterface.bulkInsert('users', usersCreated, {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
