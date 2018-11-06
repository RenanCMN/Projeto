'use strict';
//const Produtos = require('./produtos');
/*const Produtos = this.sequelize.define('Produtos',{
    id_produto:{
      type:DataTypes.id_produto,
      primaryKey:true
    }
})*/

module.exports = (sequelize, DataTypes) => {
  const Vendas = sequelize.define('Vendas', {
    id_vendas:{ 
      type:DataTypes.INTEGER,
      primaryKey:true
    },
    quantidade:DataTypes.INTEGER,
    tipopagamento:DataTypes.INTEGER,
    /*id_produto:{type:DataTypes.INTEGER,
                foreignKey:true}
*/
  },
  
  {});
  Vendas.associate = function(models) {
    // associations can be defined here
  /*  Vendas.belongsTo(models.produtos,{
      foreignKey:'id_produto'
    })*/
  };
  return Vendas;
};