'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vendas = sequelize.define('Vendas', {
    id_vendas:{ 
      type:DataTypes.INTEGER,
      primaryKey:true
    },
    quantidade:DataTypes.INTEGER,
    tipopagamento:DataTypes.INTEGER
    
  },
  
  {});

  Vendas.associate = function(models) {
    // associations can be defined here
    models.Vendas.hasMany(models.Produtos)
   
  };
  return Vendas;
};