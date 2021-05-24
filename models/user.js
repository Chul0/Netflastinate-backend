'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.user.belongsToMany(models.movie, {through:'userMovie'})
      models.user.hasMany(models.comment)
    }
  };
  user.init({
    name: {
      type: DataTypes.TEXT, allowNull:false,
      validate:{
        notNull: true,
        notEmpty: true
      }
    },    
    email: {
      type: DataTypes.TEXT, allowNull:false,
      validate:{
        notNull: true,
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.TEXT, allowNull:false,
      validate:{
        notNull: true,
        notEmpty: true
      }
    },  
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};