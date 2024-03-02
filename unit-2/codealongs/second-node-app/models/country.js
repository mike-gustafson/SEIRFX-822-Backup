'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  country.init({
    name: DataTypes.STRING,
    continent: DataTypes.STRING,
    area: DataTypes.INTEGER,
    population: DataTypes.BIGINT,
    gdp: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'country',
  });
  return country;
};