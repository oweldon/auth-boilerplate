'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    //add columns facebookId and facebookToken
    return queryInterface.addColumn('users', 'facebookId', Sequelize.STRING).then(function(){
      return queryInterface.addColumn('users', 'facebookToken', Sequelize.STRING);
    });
  },

  down: (queryInterface, Sequelize) => {
    //remove columns facebookId and facebookToken
    return queryInterface.removeColumn('users', 'facebookId').then(function(){
      return queryInterface.removeColumn('users', 'facebookToken');
    });
  }
};
