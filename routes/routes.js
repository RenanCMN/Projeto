var express = require('express');
var router = express.Router();

/* GET home page. */
var controllers =require('.././controller');
/* GET home page. */
router.get('/', controllers.home.index);
//router.get('/venda', controllers.home.index1);

//rotas para produtos
router.get('/produtos',controllers.produtos.getprodutos );
router.get('/novo',controllers.produtos.getnovoproduto);
router.post('/criandoproduto',controllers.produtos.postnovoproduto);
router.delete('/excluirproduto',controllers.produtos.excluirproduto);
router.get('/alterar/:id',controllers.produtos.alterarproduto);
router.put('/editar',controllers.produtos.postalterarproduto);
//vendas
router.get('/vendas/:id', controllers.vendas.vendaproduto);
router.post('/prees',controllers.vendas.vendaprodpre); // preco e estoque 
router.get('/relatorio',controllers.vendas.relatoriovenda);

module.exports = router;
