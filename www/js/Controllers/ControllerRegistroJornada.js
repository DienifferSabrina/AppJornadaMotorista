angular.module('starter').controller('ControllerRegistroJornada',function($scope, HttpService){

	// inicio Expedição
	  $scope.inseriExpedicaoLocal = function(){

	  	 var retornoConsulta = consultaExpedicaoLocal();

	  	 if (retornoConsulta == true){
	  	 	swal({
		 		  title: "Deseja Iniciar Expedição?",
		 		  showCancelButton: true,
		 		  confirmButtonColor: "#DD6B55",
		 		  confirmButtonText: "Yes",
		 		  cancelButtonText: "No",
		 		  closeOnConfirm: false,
		 		  closeOnCancel: false
		 		},
		 		function(isConfirm){
		 		  if (isConfirm) {
				  		var retorno = HttpService.inseriExpedicaoLocal();
						if(retorno == true)
				    swal("Expedição iniciada com Sucesso!");
				  } else {
				    swal("Expedição Cancelada");
				  };
				});
	  	}else{
				swal({
		 		  title: "Deseja Encerrar a Expedição?",
		 		  showCancelButton: true,
		 		  confirmButtonColor: "#DD6B55",
		 		  confirmButtonText: "Yes",
		 		  cancelButtonText: "No",
		 		  closeOnConfirm: false,
		 		  closeOnCancel: false
		 		},
		 		function(isConfirm){
		 		  if (isConfirm) {
				  		var retorno = HttpService.finalizaExpedicaoLocal();
						if(retorno == true)
				    swal("Expedição finalizada com Sucesso!");
				  };
				});
			};
	  };

	  // consulta do inicio da expedição
	  var consultaExpedicaoLocal = function(){
    	var expedicao = HttpService.getExpedicaoLocal();

    	if  (expedicao == false){
   			return true;
    	}
    	else{
    		return false;
    	};
 	};

 	// inicio direção

 	  $scope.inseriInicioDirecaoLocal = function(){

	  	 var retornoConsulta = consultaInicioDirecaoLocal();

	  	 if (retornoConsulta == true){
	  	 	swal({
		 		  title: "Deseja Iniciar Direção?",
		 		  showCancelButton: true,
		 		  confirmButtonColor: "#DD6B55",
		 		  confirmButtonText: "Yes",
		 		  cancelButtonText: "No",
		 		  closeOnConfirm: false,
		 		  closeOnCancel: false
		 		},
		 		function(isConfirm){
		 		  if (isConfirm) {
				  		var retorno = HttpService.inseriInicioDirecaoLocal();
						if(retorno == true)
				    swal("Direção iniciada com Sucesso!");
				  } else {
				    swal("Direção Cancelada");
				  };
				});
	  	};
	  };

	  // consulta inicio direção
	  var consultaInicioDirecaoLocal = function(){
    	var inicioDirecao = HttpService.getInicioDirecaoLocal();

    	if  (inicioDirecao == 'undefined'){
   			return true;
    	}
    	else{
    		return false;
    	};
 	};

 	// inicio fiscalização


 	  $scope.inseriInicioFiscalizacaoLocal = function(){

	  	 var retornoConsulta = consultaInicioFiscalizacaoLocal();

	  	 if (retornoConsulta == true){
	  	 	swal({
		 		  title: "Deseja Iniciar Direção?",
		 		  showCancelButton: true,
		 		  confirmButtonColor: "#DD6B55",
		 		  confirmButtonText: "Yes",
		 		  cancelButtonText: "No",
		 		  closeOnConfirm: false,
		 		  closeOnCancel: false
		 		},
		 		function(isConfirm){
		 		  if (isConfirm) {
				  		var retorno = HttpService.inseriInicioFiscalizacaoLocal();
						if(retorno == true)
				    swal("Fiscalização iniciada com Sucesso!");
				  } else {
				    swal("Fiscalização Cancelada");
				  };
				});
	  	};
	  };

	  // consulta inicio direção
	  var consultaInicioFiscalizacaoLocal = function(){
    	var inicioFiscalizacao = HttpService.getInicioFiscalizacaoLocal();

    	if  (inicioFiscalizacao == 'undefined'){
   			return true;
    	}
    	else{
    		return false;
    	};
 	};

 	// inicio abastecimento
 	 $scope.inseriInicioFiscalizacaoLocal = function(){

	  	 var retornoConsulta = consultaInicioAbastecimentoLocal();

	  	 if (retornoConsulta == true){
	  	 	swal({
		 		  title: "Deseja Iniciar Direção?",
		 		  showCancelButton: true,
		 		  confirmButtonColor: "#DD6B55",
		 		  confirmButtonText: "Yes",
		 		  cancelButtonText: "No",
		 		  closeOnConfirm: false,
		 		  closeOnCancel: false
		 		},
		 		function(isConfirm){
		 		  if (isConfirm) {
				  		var retorno = HttpService.inseriInicioFiscalizacaoLocal();
						if(retorno == true)
				    swal("Abastecimento iniciado com Sucesso!");
				  } else {
				    swal("Abastecimento Cancelado");
				  };
				});
	  	};
	  };

	  // consulta inicio direção
	  var consultaInicioAbastecimentoLocal = function(){
    	var inicioAbastecimento = HttpService.getInicioAbastecimentoLocal();

    	if  (inicioAbastecimento == 'undefined'){
   			return true;
    	}
    	else{
    		return false;
    	};
 	};


});
