var mysql = require('mysql');
var mysql2= require('mysql2');
var dateFormat = require('dateformat');
var models= require('.././models');
var Math = require('mathjs');

//produto controller

module.exports={
	//funciones del controlador
	getprodutos : function(_req, res, _next){
        
    models.Produtos.findAll()
        .then((Produtos)=>{
            /*var newArr = [Produtos];
            console.log(newArr);*/
            //res.json(Produtos);
            res.render('produto/produtos',{Produtos:Produtos})
        })
    
    },
    getnovoproduto : function(_req,res,_next){
        res.render('produto/novo')
    },
    postnovoproduto:function(req,res,_next){

       /* var dataatual = new Date();
        var dataF = dateFormat(dataatual,'yyyy-mm-dd h:MM:ss') 
        */
       var numero = Math.floor(Math.random() * 10)
       console.log(numero);
        
       var produtos = {
            id_produto: numero,
            nome:req.body.nome,
            preco:req.body.preco,
            estoque:req.body.estoque
        }

        models.Produtos.create(produtos).then((produtos)=>{
            console.log('success');
        }).catch((err)=>{
            console.log(err);
        })

        /*
        var config = require('.././database/config');
        var db = mysql.createConnection(config);
        db.connect();

        db.query('INSERT INTO Produtos SET ?',produtos,(err,_rows,_fields)=>{
            if (err) throw err;

            db.end();
            
        });*/
        res.render('produto/novo',{info:'Produto criado'})
        //console.log(req.body);
    },

    excluirproduto:function(req, res, _next){
        var id = req.body.id;
        models.Produtos.destroy({
            where:{
                id_produto:id 
            }
        }).then((Produto)=>{
            console.log('Produto Deletado com sucesso');
        }).catch((err)=>{
            console.log(err);
        })

       /* var config = require('.././database/config');
        var db = mysql.createConnection(config);
        db.connect();
        
        var resposta = {res:false};
        db.query('DELETE FROM Produtos WHERE id_produto = ?',id,function(err,_rows,_fields){
            if(err){
                throw err;
            }
            db.end();
            resposta.res = true;

            res.json(resposta)
        })
        */
    },

    alterarproduto:function(req,res,_next){
        var id = req.params.id;

        models.Produtos.findById(id)
        .then((Produto)=>{
            console.log('success')
            res.render('produto/alterar',{produto:Produto})
        }).catch((err)=>{
            console.log(err);
        })
        /*var config = require('.././database/config');
        var db = mysql.createConnection(config);
        db.connect();
        
        var produto = null;

        db.query('SELECT * FROM Produtos WHERE id_produto = ?', id,function(err,rows,_fields){
            if(err) throw err;

            produto = rows;
            db.end();

            res.render('produto/alterar',{produto:produto})
        })
        */
    },

    postalterarproduto:function(req,res,_next){
        var produtos = {
            id_produto:req.body.id_produto,
            nome:req.body.nome,
            preco:req.body.preco,
            estoque:req.body.estoque
        };

        models.Produtos.update(produtos,{where:{
                id_produto:req.body.id_produto
        }})
        .then((produtos)=>{
            console.log('success')
            console.log(produtos);
           res.redirect('/produtos');
        }).catch((err)=>{
            console.log(err)
        });

       /* var config = require('.././database/config');
        var db = mysql.createConnection(config);
        db.connect();
        
        db.query('UPDATE Produtos SET ? WHERE ?' ,[produtos,{id_produto:req.body.id_produto}],function(err,_rows,_fields){
            if(err) throw err;
            db.end();
        })*/

     
    },

    vendaproduto:function(req,res,_next){
        var id = req.params.id;

        models.Produtos.findById(id)
        .then((produtos)=>{
            console.log('sucess')
            res.render('produto/venda',{produto: produtos});
        }).catch((err)=>{
            console.log(err);
        })
       /* var config = require('.././database/config');
        var db = mysql.createConnection(config);
        db.connect();

        db.query('SELECT * FROM Produtos WHERE id_produto = ?',id,function(err,rows,_fields){
            if (err) {
                throw err;
                
            }
            produtos = rows;

            db.end();
            
            res.render('produto/venda',{produto: produtos});
        })*/
    },

    vendaprodpre:function(){
        var config = require('.././database/config');
        var db = mysql.createConnection(config);
        db.connect();

        venda ={
            nome: req.body.nome,
            preco: req.body.preco,
            qtdvenda:req.body.qtvenda,
            valorTotal:valorTotal
        }

       const valorTotal = function calcvenda(preco,qtdvenda){
                                     return preco*qtdvenda;
                            }
                       
      /*  db.query('INSERT INTO Venda SET ?',venda,function(err,_rows,_fields){
            if(err)throw err;
            db.end();
        })*/

        

    },

    relatoriovenda:function(_req,res,_next){
        res.render('produto/relatorio',{title:'Relatorio'}) 
    
    }
}