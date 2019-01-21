'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});

  user.beforeCreate((user, options) => {
    if(user.password){
      return bcrypt.hash(user.password, 10)
      .then(hash => {
        user.password = hash
      })
      .catch(error => {
        throw new Error(error)
      })
    }
  })

  user.associate = function(models) {
    user.hasMany(models.todo, { foreignKey: 'userId', sourceKey: 'id' })
    models.todo.belongsTo(user, { foreignKey: 'userId', targetKey: 'id' })
  };
  return user;
};