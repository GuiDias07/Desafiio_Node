'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Compra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Compra.belongsTo(models.Cartao,
        {foreignKey: 'CartaoId', as: 'cartaos'});
      Compra.belongsTo(models.Promocao,
        {foreignKey: 'PromocaoId', as: 'promocaos'});
    }
  };
  Compra.init({
    date: DataTypes.DATEONLY,
    quantidade: DataTypes.INTEGER,
    valor: DataTypes.FLOAT,
    CartaoId: DataTypes.INTEGER,
    PromocaoId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Compra',
  });
  return Compra;
};