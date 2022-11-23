'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [
    {
      fullName: 'Tercio',
      email: 'walthercioab@gmail.com',
      phoneNum: '84996779222',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      fullName: 'Valtercio',
      email: 'valter@gmail.com',
      phoneNum: '9232039423',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  ], {}),

   down: async (queryInterface, Sequelize)  => queryInterface.bulkDelete('Users', null, {}),
};
