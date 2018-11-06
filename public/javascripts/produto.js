 $(function(){
     //Function Eliminar ajax
     $('#tbl-produtos #btn-excluir').click(function(e){
         e.preventDefault();
         var element = $(this);
         var id = element.parent().parent().find('#id_produto').text();
         
         var confirmar = confirm("Deseja Execluir produto ?");


        if (confirmar){
            $.ajax({
                url:'http://localhost:3000/excluirproduto',
                method:'post',
                data : {id:id},
                success:function(res){
                    if(res.res){
                        element.parent().parent().remove();
                        console.log(res);
                    }
                }  
                
            })
        }
    })
    
     
 })