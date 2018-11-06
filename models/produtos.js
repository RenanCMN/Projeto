'use strict';
module.exports = (sequelize, DataTypes) => {
  const Produtos = sequelize.define('Produtos', {
    id_produto:{
      type:DataTypes.INTEGER,
      primaryKey:true
    },
    nome: DataTypes.STRING,
    preco: DataTypes.FLOAT,
    estoque:DataTypes.INTEGER,
    createdAt:DataTypes.DATE,
    updateAt:DataTypes.DATE
  }, {});
  Produtos.associate = function(models) {
    
    // associations can be defined here
  };
  return Produtos;
};
