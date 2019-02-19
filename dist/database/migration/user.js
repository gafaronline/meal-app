'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// export default {
//     up: (queryInterface, Sequelize) => {
//       queryInterface.createTable('Users', {
//         id: {
//           allowNull: false,
//           autoIncrement: true,
//           primaryKey: true,
//           type: Sequelize.INTEGER
//         },
//         firstName: {
//           type: Sequelize.STRING(30)
//         },
//         lastName: {
//           type: Sequelize.STRING(30)
//         },
//         email: {
//           type: Sequelize.STRING(50)
//         },
//         password: {
//           type: Sequelize.STRING(100)
//         },
//         createdAt: {
//           type: Sequelize.DATE,
//           allowNull: false
//         },
//         updatedAt: {
//           type: Sequelize.DATE,
//           allowNull: false
//         },
//         deletedAt: {
//           type: Sequelize.DATE,
//           allowNull: true
//         }
//       });
//     },
//     down: queryInterface => queryInterface.dropTable('Users')
//   };


exports.default = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING(30)
      },
      lastName: {
        type: Sequelize.STRING(30)
      },
      email: {
        type: Sequelize.STRING(50)
      },
      password: {
        type: Sequelize.STRING(100)
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },
  down: function down(queryInterface) {
    return queryInterface.dropTable('Users');
  }
};