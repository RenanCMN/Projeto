'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vendas = sequelize.define('Vendas', {
    id_vendas: DataTypes.INTEGER,
    primaryKey:true
  },
    
  
  {});
  Vendas.associate = function(models) {
    // associations can be defined here
  };
  return Vendas;
};