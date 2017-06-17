
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

   inseriInicioDirecaoLocal: function() {

    var InicioDirecao = new Date();
    var data = InicioDirecao.getDate() + "/" + InicioDirecao.getMonth() + "/" + InicioDirecao.getFullYear() ;
    var hora = InicioDirecao.getHours() + ":" + InicioDirecao.getMinutes();

     novo = {
      dataInicio:data, horaInicio:hora
    };

      // guarda os produtos
      var InicioDirecao = [ ];
      // verifica se a chave existe
      if (typeof localStorage.InicioDirecao != 'undefined'){
          // recupera conteúdo da chave e transforma em JSON
          InicioDirecao = JSON.parse(localStorage.InicioDirecao);
      }
      // adiciona produto novo no vetor
     InicioDirecao.push(novo);
     // converte JSON para String
      var paraString = JSON.stringify(InicioDirecao);
      // armazena conteúdo do vetor em localStorate
      localStorage.setItem('InicioDirecao', paraString);

      return true;

   },

    getInicioDirecaoLocal: function() {
     // retorna conteúdo da chave
     return JSON.parse(localStorage.InicioDirecao);
   },

   // inicio fiscalização
    inseriInicioFiscalizacaoLocal: function() {

    var InicioFiscalizacao = new Date();
    var data = InicioFiscalizacao.getDate() + "/" + InicioFiscalizacao.getMonth() + "/" + InicioFiscalizacao.getFullYear() ;
    var hora = InicioFiscalizacao.getHours() + ":" + InicioFiscalizacao.getMinutes();

     novo = {
      dataInicio:data, horaInicio:hora
    };

      // guarda os produtos
      var InicioFiscalizacao = [ ];
      // verifica se a chave existe
      if (typeof localStorage.InicioFiscalizacao != 'undefined'){
          // recupera conteúdo da chave e transforma em JSON
          InicioFiscalizacao = JSON.parse(localStorage.InicioFiscalizacao);
      }
      // adiciona produto novo no vetor
     InicioFiscalizacao.push(novo);
     // converte JSON para String
      var paraString = JSON.stringify(InicioFiscalizacao);
      // armazena conteúdo do vetor em localStorate
      localStorage.setItem('InicioFiscalizacao', paraString);

      return true;

   },

   // consulta fiscalização
    getInicioFiscalizacaoLocal: function() {
     // retorna conteúdo da chave
     return JSON.parse(localStorage.InicioFiscalizacao);
   },

   //
   inseriInicioAbastecimentoLocal: function() {

    var InicioAbastacimento = new Date();
    var data = InicioAbastacimento.getDate() + "/" + InicioAbastacimento.getMonth() + "/" + InicioAbastacimento.getFullYear() ;
    var hora = InicioAbastacimento.getHours() + ":" + InicioAbastacimento.getMinutes();

     novo = {
      dataInicio:data, horaInicio:hora
    };

      // guarda os produtos
      var InicioAbastacimento = [ ];
      // verifica se a chave existe
      if (typeof localStorage.InicioAbastacimento != 'undefined'){
          // recupera conteúdo da chave e transforma em JSON
          InicioAbastacimento = JSON.parse(localStorage.InicioAbastacimento);
      }
      // adiciona produto novo no vetor
     InicioAbastacimento.push(novo);
     // converte JSON para String
      var paraString = JSON.stringify(InicioAbastacimento);
      // armazena conteúdo do vetor em localStorate
      localStorage.setItem('InicioAbastacimento', paraString);

      return true;

   },

    getInicioAbastecimentoLocal: function() {
     // retorna conteúdo da chave
     return JSON.parse(localStorage.InicioAbastacimento);
   },




}
});
