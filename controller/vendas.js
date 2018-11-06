var models= require('.././models');


module.exports = {

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
