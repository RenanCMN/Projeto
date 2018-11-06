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
router.post('/excluirproduto',controllers.produtos.excluirproduto);
router.get('/alterar/:id',controllers.produtos.alterarproduto);
router.post('/editar',controllers.produtos.postalterarproduto);
router.get('/vendas/:id', controllers.produtos.vendaproduto);
router.post('/prees',controllers.produtos.vendaprodpre); // preco e estoque 
router.get('/relatorio',controllers.produtos.relatoriovenda);

module.exports = router;
