'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.movie.belongsToMany(models.user, {through:'userMovie'})
      models.movie.hasMany(models.comment)
      models.movie.belongsTo(models.genre)
    }
  };
  movie.init({
    title: DataTypes.TEXT,
    image: DataTypes.TEXT,
    plot: DataTypes.TEXT,
    videoUrl: DataTypes.TEXT,
    genreId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'movie',
  });
  return movie;
};