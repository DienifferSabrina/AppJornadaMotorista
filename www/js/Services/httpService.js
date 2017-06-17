
   //  controller chama o HttpService
// ele chama o model e dps traz a resposta pro HttpService e retorna para o controller

angular.module('starter').service('HttpService', function($http){
return{

  InseriMapaLocal: function(novo){

    // guarda os mapas
    var mapas = [ ];

    // verifica se a chave existe
    if (typeof localStorage.mapas != 'undefined'){
      // recupera o conteudo da chave e transforma em json
      mapas = JSON.parse(localStorage.mapas);
    }
     // adiciona uma nova rota
     mapas.push(novo);
     // converte JSON para String
      var paraString = JSON.stringify(mapas);
      // armazena conteúdo do vetor em localStorate
      localStorage.setItem('mapas', paraString);

      return true;

  },

   getMapasLocal: function() {
     // retorna conteúdo da chave
     return JSON.parse(localStorage.mapas);
   },


  inseriExpedicaoLocal: function() {

    var Expedicao = new Date();
    var data = Expedicao.getDate() + "/" + Expedicao.getMonth() + "/" + Expedicao.getFullYear() ;
    var hora = Expedicao.getHours() + ":" + Expedicao.getMinutes();

     novo = {
      dataInicio:data, horaInicio:hora
    };

      // guarda os produtos
      var expedicao = [ ];
      // verifica se a chave existe
      if (typeof localStorage.expedicao != 'undefined'){
          // recupera conteúdo da chave e transforma em JSON
          expedicao = JSON.parse(localStorage.expedicao);
      }
      // adiciona produto novo no vetor
     expedicao.push(novo);
     // converte JSON para String
      var paraString = JSON.stringify(expedicao);
      // armazena conteúdo do vetor em localStorate
      localStorage.setItem('expedicao', paraString);

      return true;

   },

   finalizaExpedicaoLocal: function(){
     var Expedicao = new Date();
     var data = Expedicao.getDate() + "/" + Expedicao.getMonth() + "/" + Expedicao.getFullYear() ;
     var hora = Expedicao.getHours() + ":" + Expedicao.getMinutes();

      novo = {
       dataFinal:data, horaFinal:hora
     };

       // guarda os produtos
       var expedicao = [ ];
       // verifica se a chave existe
       if (typeof localStorage.expedicao != 'undefined'){
           // recupera conteúdo da chave e transforma em JSON
           expedicao = JSON.parse(localStorage.expedicao);
       }
       // adiciona produto novo no vetor
      expedicao.push(novo);
      // converte JSON para String
       var paraString = JSON.stringify(expedicao);
       // armazena conteúdo do vetor em localStorate
       localStorage.setItem('expedicao', paraString);

       return true;


   },

    getExpedicaoLocal: function() {
     // retorna conteúdo da chave
     if(typeof localStorage.expedicao == 'undefined')
       return false;
     else
     return JSON.parse(localStorage.expedicao);
   },

   

}
});
