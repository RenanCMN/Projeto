$(function(){
    $('.form-novoproduto form').form({
        nome:{
            identifier:'nome',
            rules:[
                {
                    type:'empty',
                    prompt:'Por Favor digite um nome'
                }
            ]
        },

        preco:{
            identifier:'preco',
            rules:[
                {
                    type:'empty',
                    prompt:'Por Favor Digite um numero'

                },
                {
                    type:'number',
                    prompt:'Preco deve ser numerico'
                }
          ]
        },

        estoque:{
            identifier:'estoque',
            rules:[
                {
                    type:'empty',
                    prompt:'Por Favor Digite um numero'
                },
                {
                    type:'integer',
                    prompt:'Estoque deve ser um numero inteiro'
                }
            ]
        }
    })
})