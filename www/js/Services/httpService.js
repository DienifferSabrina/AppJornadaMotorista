
   //  controller chama o HttpService
// ele chama o model e dps traz a resposta pro HttpService e retorna para o controller

angular.module('starter').service('HttpService', function($http){
return{

  InseriMapaLocal: function(novo){

    // guarda os mapas
    var rota = [ ];

    // verifica se a chave existe
    if (typeof localStorage.rota != 'undefined'){
      // recupera o conteudo da chave e transforma em json
      rota = JSON.parse(localStorage.rota);
    }
     // adiciona uma nova rota
     rota.push(novo);
     // converte JSON para String
      var paraString = JSON.stringify(rota);
      // armazena conteúdo do vetor em localStorate
      localStorage.setItem('rota', paraString);

      return true;

  },

   getMapasLocal: function() {
     // retorna conteúdo da chave
     return JSON.parse(localStorage.rota);
   },


  inseriExpedicaoLocal: function() {

    var Expedicao = new Date();
    var data = Expedicao.getDate() + "/" + Expedicao.getMonth() + "/" + Expedicao.getFullYear() ;
    var hora = Expedicao.getHours() + ":" + Expedicao.getMinutes() + ":" + Expedicao.getSeconds();

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
     var hora = Expedicao.getHours() + ":" + Expedicao.getMinutes() + ":" + Expedicao.getSeconds();

      novo = {
       dataFinal:data, horaFinal:hora
     };


       var expedicao = [ ];

       //pega inicio de uma atividade
       expedicaoAntiga = JSON.parse(localStorage.getItem('expedicao'));

       //concatena os antigo com o final
       angular.extend(novo,expedicaoAntiga[0]);

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

    // -------------------------------------------------- //


   // Inicia Direção
   inseriDirecaoLocal: function(){
     var Direcao = new Date();
     var data = Direcao.getDate() + "/" + Direcao.getMonth() + "/" + Direcao.getFullYear() ;
     var hora = Direcao.getHours() + ":" + Direcao.getMinutes() + ":" + Direcao.getSeconds();

      novo = {
        dataInicio:data, horaInicio:hora
     };

       // guarda os produtos
       var direcao = [ ];
       // verifica se a chave existe
       if (typeof localStorage.direcao != 'undefined'){
           // recupera conteúdo da chave e transforma em JSON
           direcao = JSON.parse(localStorage.direcao);
       }
       // adiciona produto novo no vetor
      direcao.push(novo);
      // converte JSON para String
       var paraString = JSON.stringify(direcao);
       // armazena conteúdo do vetor em localStorate
       localStorage.setItem('direcao', paraString);

       return true;


   },

   finalizaDirecaoLocal: function(){
     var Direcao = new Date();
     var data = Direcao.getDate() + "/" + Direcao.getMonth() + "/" + Direcao.getFullYear() ;
     var hora = Direcao.getHours() + ":" + Direcao.getMinutes()+ ":" + Direcao.getSeconds();

      novo = {
         dataFinal:data, horaFinal:hora
     };

       // guarda os produtos
       var direcao = [ ];
       // verifica se a chave existe
       //pega inicio de uma atividade
       direcaoAntiga = JSON.parse(localStorage.getItem('direcao'));

       //concatena os antigo com o final
       angular.extend(novo,direcaoAntiga[0]);

       // adiciona produto novo no vetor
      direcao.push(novo);
      // converte JSON para String
       var paraString = JSON.stringify(direcao);
       // armazena conteúdo do vetor em localStorate
       localStorage.setItem('direcao', paraString);

       return true;


   },

    getDirecaoLocal: function() {
     // retorna conteúdo da chave
     if(typeof localStorage.direcao == 'undefined')
       return false;
     else
     return JSON.parse(localStorage.direcao);
   },

 // -------------------------------------------------- //

   // Inicia Fiscalização

   inseriFiscalizacaoLocal: function(){
     var Fiscalizacao = new Date();
     var data = Fiscalizacao.getDate() + "/" + Fiscalizacao.getMonth() + "/" + Fiscalizacao.getFullYear() ;
     var hora = Fiscalizacao.getHours() + ":" + Fiscalizacao.getMinutes() + ":" + Fiscalizacao.getSeconds();

      novo = {
        dataInicio:data, horaInicio:hora
     };

       // guarda a fiscalização
       var fiscalizacao = [ ];
       // verifica se a chave existe
       if (typeof localStorage.fiscalizacao != 'undefined'){
           // recupera conteúdo da chave e transforma em JSON
           fiscalizacao = JSON.parse(localStorage.fiscalizacao);
       }
       // adiciona produto novo no vetor
      fiscalizacao.push(novo);
      // converte JSON para String
       var paraString = JSON.stringify(fiscalizacao);
       // armazena conteúdo do vetor em localStorate
       localStorage.setItem('fiscalizacao', paraString);

       return true;


   },

   finalizaFiscalizacaoLocal: function(){
    var Fiscalizacao = new Date();
     var data = Fiscalizacao.getDate() + "/" + Fiscalizacao.getMonth() + "/" + Fiscalizacao.getFullYear() ;
     var hora = Fiscalizacao.getHours() + ":" + Fiscalizacao.getMinutes() + ":" + Fiscalizacao.getSeconds();


      novo = {
         dataFinal:data, horaFinal:hora
     };

      // guarda a fiscalização
       var fiscalizacao = [ ];

        //pega inicio de uma atividade
       fiscalizacaoAntiga = JSON.parse(localStorage.getItem('fiscalizacao'));

       //concatena os antigo com o final
       angular.extend(novo,fiscalizacaoAntiga[0]);

       // adiciona produto novo no vetor
      fiscalizacao.push(novo);
      // converte JSON para String
       var paraString = JSON.stringify(fiscalizacao);
       // armazena conteúdo do vetor em localStorate
       localStorage.setItem('fiscalizacao', paraString);

       return true;


   },

    getFiscalizacaoLocal: function() {
     // retorna conteúdo da chave
     if(typeof localStorage.fiscalizacao == 'undefined')
       return false;
     else
     return JSON.parse(localStorage.fiscalizacao);
   },

 // -------------------------------------------------- //

   // Inicia Abastecimento
   inseriAbastecimentoLocal: function(){
     var Abastecimento = new Date();
     var data = Abastecimento.getDate() + "/" + Abastecimento.getMonth() + "/" + Abastecimento.getFullYear() ;
     var hora = Abastecimento.getHours() + ":" + Abastecimento.getMinutes() + ":" + Abastecimento.getSeconds();

      novo = {
        dataInicio:data, horaInicio:hora
     };

       // guarda os produtos
       var abastecimento = [ ];
       // verifica se a chave existe
       if (typeof localStorage.abastecimento != 'undefined'){
           // recupera conteúdo da chave e transforma em JSON
           abastecimento = JSON.parse(localStorage.abastecimento);
       }
       // adiciona produto novo no vetor
      abastecimento.push(novo);
      // converte JSON para String
       var paraString = JSON.stringify(abastecimento);
       // armazena conteúdo do vetor em localStorate
       localStorage.setItem('abastecimento', paraString);

       return true;


   },

   finalizaAbastecimentoLocal: function(){
     var Abastecimento = new Date();
     var data = Abastecimento.getDate() + "/" + Abastecimento.getMonth() + "/" + Abastecimento.getFullYear() ;
     var hora = Abastecimento.getHours() + ":" + Abastecimento.getMinutes() + ":" + Abastecimento.getSeconds();

      novo = {
         dataFinal:data, horaFinal:hora
     };

       // guarda os produtos
       var abastecimento = [ ];

        //pega inicio de uma atividade
       abastecimentoAntiga = JSON.parse(localStorage.getItem('abastecimento'));

       //concatena os antigo com o final
       angular.extend(novo,abastecimentoAntiga[0]);

       // adiciona produto novo no vetor
      abastecimento.push(novo);
      // converte JSON para String
       var paraString = JSON.stringify(abastecimento);
       // armazena conteúdo do vetor em localStorate
       localStorage.setItem('abastecimento', paraString);

       return true;


   },

    getAbastecimentoLocal: function() {
     // retorna conteúdo da chave
     if(typeof localStorage.abastecimento == 'undefined')
       return false;
     else
     return JSON.parse(localStorage.abastecimento);
   },

    // -------------------------------------------------- //


   // Manutenção
    inseriManutencaoLocal: function(){
     var Manutencao = new Date();
     var data = Manutencao.getDate() + "/" + Manutencao.getMonth() + "/" + Manutencao.getFullYear() ;
     var hora = Manutencao.getHours() + ":" + Manutencao.getMinutes() + ":" + Manutencao.getSeconds();

      novo = {
        dataInicio:data, horaInicio:hora
     };

       // guarda os produtos
       var manutencao = [ ];
       // verifica se a chave existe
       if (typeof localStorage.manutencao != 'undefined'){
           // recupera conteúdo da chave e transforma em JSON
           manutencao = JSON.parse(localStorage.manutencao);
       }
       // adiciona produto novo no vetor
      manutencao.push(novo);
      // converte JSON para String
       var paraString = JSON.stringify(manutencao);
       // armazena conteúdo do vetor em localStorate
       localStorage.setItem('manutencao', paraString);

       return true;
   },

    finalizaManutencaoLocal: function(){
     var Manutencao = new Date();
     var data = Manutencao.getDate() + "/" + Manutencao.getMonth() + "/" + Manutencao.getFullYear() ;
     var hora = Manutencao.getHours() + ":" + Manutencao.getMinutes() + ":" + Manutencao.getSeconds();

     novo = {
         dataFinal:data, horaFinal:hora
     };
       // guarda os produtos
       var manutencao = [ ];
        //pega inicio de uma atividade
       manutencaoAntiga = JSON.parse(localStorage.getItem('manutencao'));

       //concatena os antigo com o final
       angular.extend(novo,manutencaoAntiga[0]);
       // adiciona produto novo no vetor
      manutencao.push(novo);
      // converte JSON para String
       var paraString = JSON.stringify(manutencao);
       // armazena conteúdo do vetor em localStorate
       localStorage.setItem('manutencao', paraString);

       return true;
   },

    getManutencaoLocal: function() {
     // retorna conteúdo da chave
     if(typeof localStorage.manutencao == 'undefined')
       return false;
     else
     return JSON.parse(localStorage.manutencao);
   },

    // -------------------------------------------------- //


   // Cliente
    inseriClienteLocal: function(){
     var Cliente = new Date();
     var data = Cliente.getDate() + "/" + Cliente.getMonth() + "/" + Cliente.getFullYear() ;
     var hora = Cliente.getHours() + ":" + Cliente.getMinutes() + ":" + Cliente.getSeconds();

      novo = {
        dataInicio:data, horaInicio:hora
     };

       // guarda os produtos
       var cliente = [ ];
       // verifica se a chave existe
       if (typeof localStorage.cliente != 'undefined'){
           // recupera conteúdo da chave e transforma em JSON
           cliente = JSON.parse(localStorage.cliente);
       }
       // adiciona produto novo no vetor
      cliente.push(novo);
      // converte JSON para String
       var paraString = JSON.stringify(cliente);
       // armazena conteúdo do vetor em localStorate
       localStorage.setItem('cliente', paraString);

       return true;
   },

    finalizaClienteLocal: function(){
     var Cliente = new Date();
     var data = Cliente.getDate() + "/" + Cliente.getMonth() + "/" + Cliente.getFullYear() ;
     var hora = Cliente.getHours() + ":" + Cliente.getMinutes() + ":" + Cliente.getSeconds();

     novo = {
         dataFinal:data, horaFinal:hora
     };

       // guarda os produtos
       var cliente = [ ];
      //pega inicio de uma atividade
       clienteAntiga = JSON.parse(localStorage.getItem('cliente'));

       //concatena os antigo com o final
       angular.extend(novo,clienteAntiga[0]);

       // adiciona produto novo no vetor
      cliente.push(novo);
      // converte JSON para String
       var paraString = JSON.stringify(cliente);
       // armazena conteúdo do vetor em localStorate
       localStorage.setItem('cliente', paraString);

       return true;
   },

    getClienteLocal: function() {
     // retorna conteúdo da chave
     if(typeof localStorage.cliente == 'undefined')
       return false;
     else
     return JSON.parse(localStorage.cliente);
   },

    // -------------------------------------------------- //


   // Carga
    inseriCargaLocal: function() {

    var Carga = new Date();
    var data = Carga.getDate() + "/" + Carga.getMonth() + "/" + Carga.getFullYear() ;
    var hora = Carga.getHours() + ":" + Carga.getMinutes() + ":" + Carga.getSeconds();

     novo = {
      dataInicio:data, horaInicio:hora
    };

      // guarda os produtos
      var carga = [ ];
      // verifica se a chave existe
      if (typeof localStorage.carga != 'undefined'){
          // recupera conteúdo da chave e transforma em JSON
          carga = JSON.parse(localStorage.carga);
      }
      // adiciona produto novo no vetor
     carga.push(novo);
     // converte JSON para String
      var paraString = JSON.stringify(carga);
      // armazena conteúdo do vetor em localStorate
      localStorage.setItem('carga', paraString);

      return true;

   },

   finalizaCargaLocal: function(){
    var Carga = new Date();
    var data = Carga.getDate() + "/" + Carga.getMonth() + "/" + Carga.getFullYear() ;
    var hora = Carga.getHours() + ":" + Carga.getMinutes() + ":" + Carga.getSeconds();

      novo = {
       dataFinal:data, horaFinal:hora
     };

       // guarda os produtos
       var carga = [ ];

        //pega inicio de uma atividade
       cargaAntiga = JSON.parse(localStorage.getItem('carga'));

       //concatena os antigo com o final
       angular.extend(novo,cargaAntiga[0]);

       // adiciona produto novo no vetor
      carga.push(novo);
      // converte JSON para String
       var paraString = JSON.stringify(carga);
       // armazena conteúdo do vetor em localStorate
       localStorage.setItem('carga', paraString);

       return true;


   },

    getCargaLocal: function() {
     // retorna conteúdo da chave
     if(typeof localStorage.carga == 'undefined')
       return false;
     else
     return JSON.parse(localStorage.carga);
   },

    // -------------------------------------------------- //


   // Descarga

     inseriDescargaLocal: function() {

    var Descarga = new Date();
    var data = Descarga.getDate() + "/" + Descarga.getMonth() + "/" + Descarga.getFullYear() ;
    var hora = Descarga.getHours() + ":" + Descarga.getMinutes() + ":" + Descarga.getSeconds();

     novo = {
      dataInicio:data, horaInicio:hora
    };


      var descarga = [ ];
      // verifica se a chave existe
      if (typeof localStorage.descarga != 'undefined'){
          // recupera conteúdo da chave e transforma em JSON
          descarga = JSON.parse(localStorage.descarga);
      }
      // adiciona produto novo no vetor
     descarga.push(novo);
     // converte JSON para String
      var paraString = JSON.stringify(descarga);
      // armazena conteúdo do vetor em localStorate
      localStorage.setItem('descarga', paraString);

      return true;

   },

   finalizaDescargaLocal: function(){
    var Descarga = new Date();
    var data = Descarga.getDate() + "/" + Descarga.getMonth() + "/" + Descarga.getFullYear() ;
    var hora = Descarga.getHours() + ":" + Descarga.getMinutes() + ":" + Descarga.getSeconds();

      novo = {
       dataFinal:data, horaFinal:hora
     };

      var descarga = [ ];
      //pega inicio de uma atividade
       descargaAntiga = JSON.parse(localStorage.getItem('descarga'));

       //concatena os antigo com o final
       angular.extend(novo,descargaAntiga[0]);

      // adiciona produto novo no vetor
     descarga.push(novo);
     // converte JSON para String
      var paraString = JSON.stringify(descarga);
      // armazena conteúdo do vetor em localStorate
      localStorage.setItem('descarga', paraString);

      return true;

   },



    getDescargaLocal: function() {
     // retorna conteúdo da chave
     if(typeof localStorage.descarga == 'undefined')
       return false;
     else
     return JSON.parse(localStorage.descarga);
   },

 // -------------------------------------------------- //

   // alimentação
     inseriAlimentacaoLocal: function() {

    var Alimentacao = new Date();
    var data = Alimentacao.getDate() + "/" + Alimentacao.getMonth() + "/" + Alimentacao.getFullYear() ;
    var hora = Alimentacao.getHours() + ":" + Alimentacao.getMinutes() + ":" + Alimentacao.getSeconds();

     novo = {
      dataInicio:data, horaInicio:hora
    };


      var alimentacao = [ ];
      // verifica se a chave existe
      if (typeof localStorage.alimentacao != 'undefined'){
          // recupera conteúdo da chave e transforma em JSON
          alimentacao = JSON.parse(localStorage.alimentacao);
      }
      // adiciona produto novo no vetor
     alimentacao.push(novo);
     // converte JSON para String
      var paraString = JSON.stringify(alimentacao);
      // armazena conteúdo do vetor em localStorate
      localStorage.setItem('alimentacao', paraString);

      return true;

   },

   finalizaAlimentacaoLocal: function(){

    var Alimentacao = new Date();
    var data = Alimentacao.getDate() + "/" + Alimentacao.getMonth() + "/" + Alimentacao.getFullYear() ;
    var hora = Alimentacao.getHours() + ":" + Alimentacao.getMinutes() + ":" + Alimentacao.getSeconds();

       novo = {
       dataFinal:data, horaFinal:hora
     };



      var alimentacao = [ ];
      //pega inicio de uma atividade
       alimentacaoAntiga = JSON.parse(localStorage.getItem('alimentacao'));

       //concatena os antigo com o final
       angular.extend(novo,alimentacaoAntiga[0]);

      // adiciona produto novo no vetor
     alimentacao.push(novo);
     // converte JSON para String
      var paraString = JSON.stringify(alimentacao);
      // armazena conteúdo do vetor em localStorate
      localStorage.setItem('alimentacao', paraString);

      return true;

   },

    getAliementacaoLocal: function() {
     // retorna conteúdo da chave
     if(typeof localStorage.alimentacao == 'undefined')
       return false;
     else
     return JSON.parse(localStorage.alimentacao);
   },

 // -------------------------------------------------- //

   // descanso
     inseriDescansoLocal: function() {

    var Descanso = new Date();
    var data = Descanso.getDate() + "/" + Descanso.getMonth() + "/" + Descanso.getFullYear() ;
    var hora = Descanso.getHours() + ":" + Descanso.getMinutes() + ":" + Descanso.getSeconds();

     novo = {
      dataInicio:data, horaInicio:hora
    };


      var descanso = [ ];
      // verifica se a chave existe
      if (typeof localStorage.descanso != 'undefined'){
          // recupera conteúdo da chave e transforma em JSON
          descanso = JSON.parse(localStorage.descanso);
      }
      // adiciona produto novo no vetor
     descanso.push(novo);
     // converte JSON para String
      var paraString = JSON.stringify(descanso);
      // armazena conteúdo do vetor em localStorate
      localStorage.setItem('descanso', paraString);

      return true;

   },

   finalizaDescansoLocal: function(){
    var Descanso = new Date();
    var data = Descanso.getDate() + "/" + Descanso.getMonth() + "/" + Descanso.getFullYear() ;
    var hora = Descanso.getHours() + ":" + Descanso.getMinutes() + ":" + Descanso.getSeconds();

      novo = {
       dataFinal:data, horaFinal:hora
     };

    var descanso = [ ];
      //pega inicio de uma atividade
       descansoAntiga = JSON.parse(localStorage.getItem('descanso'));

       //concatena os antigo com o final
       angular.extend(novo,descansoAntiga[0]);

      // adiciona produto novo no vetor
     descanso.push(novo);
     // converte JSON para String
      var paraString = JSON.stringify(descanso);
      // armazena conteúdo do vetor em localStorate
      localStorage.setItem('descanso', paraString);

      return true;
   },



    getDescansoLocal: function() {
     // retorna conteúdo da chave
     if(typeof localStorage.descanso == 'undefined')
       return false;
     else
     return JSON.parse(localStorage.descanso);
   },

   // -------------------------------------------------- //

   // pernoite
     inseriPernoiteLocal: function() {

    var Pernoite = new Date();
    var data = Pernoite.getDate() + "/" + Pernoite.getMonth() + "/" + Pernoite.getFullYear() ;
    var hora = Pernoite.getHours() + ":" + Pernoite.getMinutes() + ":" + Pernoite.getSeconds();

     novo = {
      dataInicio:data, horaInicio:hora
    };


      var pernoite = [ ];
      // verifica se a chave existe
      if (typeof localStorage.pernoite != 'undefined'){
          // recupera conteúdo da chave e transforma em JSON
          pernoite = JSON.parse(localStorage.pernoite);
      }
      // adiciona produto novo no vetor
     pernoite.push(novo);
     // converte JSON para String
      var paraString = JSON.stringify(pernoite);
      // armazena conteúdo do vetor em localStorate
      localStorage.setItem('pernoite', paraString);

      return true;

   },

   finalizaPernoiteLocal: function(){
    var Pernoite = new Date();
    var data = Pernoite.getDate() + "/" + Pernoite.getMonth() + "/" + Pernoite.getFullYear() ;
    var hora = Pernoite.getHours() + ":" + Pernoite.getMinutes() + ":" + Pernoite.getSeconds();

      novo = {
       dataFinal:data, horaFinal:hora
     };

     var pernoite = [ ];
      //pega inicio de uma atividade
       pernoiteAntiga = JSON.parse(localStorage.getItem('pernoite'));

       //concatena os antigo com o final
       angular.extend(novo,pernoiteAntiga[0]);

      // adiciona produto novo no vetor
     pernoite.push(novo);
     // converte JSON para String
      var paraString = JSON.stringify(pernoite);
      // armazena conteúdo do vetor em localStorate
      localStorage.setItem('pernoite', paraString);

      return true;

   },



    getPernoiteLocal: function() {
     // retorna conteúdo da chave
     if(typeof localStorage.pernoite == 'undefined')
       return false;
     else
     return JSON.parse(localStorage.pernoite);
   },


   // Parte de Sincronização



  insereRotas: function(uga) {
     // $http returns a promise, which has a then function, which also returns a promise.
     return $http.post('http://localhost:3000/insereRota', uga)
       .then(function(response) {
         // In the response, resp.data contains the result. Check the console to see all of the data returned.
        // console.log('Inseriu Mapa', response);
        console.log(uga);
         return response.data;
      });
     },

      insereExpedicao: function(uga) {
     // $http returns a promise, which has a then function, which also returns a promise.
     return $http.post('http://localhost:3000/insere/expedicao', uga)
       .then(function(response) {
         // In the response, resp.data contains the result. Check the console to see all of the data returned.
         console.log('Inseriu Expedição', response);

         return response.data;
      });
     },

     insereFiscalizacao: function(uga) {
     // $http returns a promise, which has a then function, which also returns a promise.
     return $http.post('http://localhost:3000/insere/fiscalizacao', uga)
       .then(function(response) {
         // In the response, resp.data contains the result. Check the console to see all of the data returned.
         console.log('Inseriu Fiscalização', response);

         return response.data;
      });
     },

     insereDirecao: function(uga) {
     // $http returns a promise, which has a then function, which also returns a promise.
     return $http.post('http://localhost:3000/insere/direcao', uga)
       .then(function(response) {
         // In the response, resp.data contains the result. Check the console to see all of the data returned.
         console.log('Inseriu Direcao', response);

         return response.data;
      });
     },

      insereAbastecimento: function(uga) {
     // $http returns a promise, which has a then function, which also returns a promise.
     return $http.post('http://localhost:3000/insere/abastecimento', uga)
       .then(function(response) {
         // In the response, resp.data contains the result. Check the console to see all of the data returned.
         console.log('Inseriu Abastecimento', response);

         return response.data;
      });
     },

     insereManutencao: function(uga) {
     // $http returns a promise, which has a then function, which also returns a promise.
     return $http.post('http://localhost:3000/insere/manutencao', uga)
       .then(function(response) {
         // In the response, resp.data contains the result. Check the console to see all of the data returned.
         console.log('Inseriu Manutencao', response);

         return response.data;
      });
     },

       insereCliente: function(uga) {
     // $http returns a promise, which has a then function, which also returns a promise.
     return $http.post('http://localhost:3000/insere/cliente', uga)
       .then(function(response) {
         // In the response, resp.data contains the result. Check the console to see all of the data returned.
         console.log('Inseriu Cliente', response);

         return response.data;
      });
     },

     insereCarga: function(uga) {
     // $http returns a promise, which has a then function, which also returns a promise.
     return $http.post('http://localhost:3000/insere/carga', uga)
       .then(function(response) {
         // In the response, resp.data contains the result. Check the console to see all of the data returned.
         console.log('Inseriu Carga', response);

         return response.data;
      });
     },

     insereDescarga: function(uga) {
     // $http returns a promise, which has a then function, which also returns a promise.
     return $http.post('http://localhost:3000/insere/descarga', uga)
       .then(function(response) {
         // In the response, resp.data contains the result. Check the console to see all of the data returned.
         console.log('Inseriu Descarga', response);

         return response.data;
      });
     },

      insereAlimentacao: function(uga) {
     // $http returns a promise, which has a then function, which also returns a promise.
     return $http.post('http://localhost:3000/insere/alimentacao', uga)
       .then(function(response) {
         // In the response, resp.data contains the result. Check the console to see all of the data returned.
         console.log('Inseriu Descanso', response);

         return response.data;
      });
     },

     insereDescanso: function(uga) {
     // $http returns a promise, which has a then function, which also returns a promise.
     return $http.post('http://localhost:3000/insere/descanso', uga)
       .then(function(response) {
         // In the response, resp.data contains the result. Check the console to see all of the data returned.
         console.log('Inseriu Descanso', response);

         return response.data;
      });
     },



     inserePernoite: function(uga) {
     // $http returns a promise, which has a then function, which also returns a promise.
     return $http.post('http://localhost:3000/insere/pernoite', uga)
       .then(function(response) {
         // In the response, resp.data contains the result. Check the console to see all of the data returned.
         console.log('Inseriu Pernoite', response);

         return response.data;
      });
     }








}
});
