angular.module('starter').controller('ControllerRegistroJornada',function($scope, HttpService){

	// inicio Expedição
	  $scope.inseriExpedicaoLocal = function(){

	  	 var retornoConsulta = consultaExpedicaoLocal();

	  	 if (retornoConsulta == false){
	  	 	swal({
		 		  title: "Deseja Iniciar Expedição?",
		 		  showCancelButton: true,
		 		  confirmButtonColor: "#000080",
		 		  confirmButtonText: "Yes",
		 		  cancelButtonText: "No",
		 		  closeOnConfirm: false,
		 		  closeOnCancel: false
		 		},
		 		function(isConfirm){
		 		  if (isConfirm) {
				  		var retorno = HttpService.inseriExpedicaoLocal();
						if(retorno == true)
				    swal("Expedição iniciado com Sucesso!");
				  } else {
				    swal("Expedição Cancelado");
				  };
				});
	  	}
	  };

		//finalizar expedicao
		$scope.finalizaExpedicaoLocal = function(){
			var retornoConsulta = consultaExpedicaoLocal();
			if (retornoConsulta.length == 1){
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
					swal("Expedição finalizado com Sucesso!");
				};
			});
		}
	}
	  // consulta expedicao
	  var consultaExpedicaoLocal = function(){
    return HttpService.getExpedicaoLocal();

 	};


 	// inicio e Fim direção
	  $scope.inseriDirecaoLocal = function(){

	  	 var retornoConsulta = consultaDirecaoLocal();

	  	 if (retornoConsulta == false){
	  	 	swal({
		 		  title: "Deseja Iniciar Direção?",
		 		  showCancelButton: true,
		 		  confirmButtonColor: "#000080",
		 		  confirmButtonText: "Yes",
		 		  cancelButtonText: "No",
		 		  closeOnConfirm: false,
		 		  closeOnCancel: false
		 		},
		 		function(isConfirm){
		 		  if (isConfirm) {
				  		var retorno = HttpService.inseriDirecaoLocal();
						if(retorno == true)
				    swal("Direção iniciado com Sucesso!");
				  } else {
				    swal("Direção Cancelado");
				  };
				});
	  	}
	  	else{
	  		swal({
		 		  title: "Deseja finalizar Direção?",
		 		  showCancelButton: true,
		 		  confirmButtonColor: "#000080",
		 		  confirmButtonText: "Yes",
		 		  cancelButtonText: "No",
		 		  closeOnConfirm: false,
		 		  closeOnCancel: false
		 		},
		 		function(isConfirm){
		 		  if (isConfirm) {
				  		var retorno = HttpService.finalizaDirecaoLocal();
						if(retorno == true)
				    swal("Direção finalizado com Sucesso!");
				  } else {
				    swal("Direção Cancelado");
				  };
				});

	  	}
	  };


	  // consulta direcao
	  var consultaDirecaoLocal = function(){
    	return HttpService.getDirecaoLocal();

 	};

 	// Inicio e Fim Fiscalização
	  $scope.inseriFiscalizacaoLocal = function(){

	  	 var retornoConsulta = consultaFiscalizacaoLocal();

	  	 if (retornoConsulta == false){
	  	 	swal({
		 		  title: "Deseja Iniciar Fiscalização?",
		 		  showCancelButton: true,
		 		  confirmButtonColor: "#000080",
		 		  confirmButtonText: "Yes",
		 		  cancelButtonText: "No",
		 		  closeOnConfirm: false,
		 		  closeOnCancel: false
		 		},
		 		function(isConfirm){
		 		  if (isConfirm) {
				  		var retorno = HttpService.inseriFiscalizacaoLocal();
						if(retorno == true)
				    swal("Fiscalização iniciado com Sucesso!");
				  } else {
				    swal("Fiscalização Cancelado");
				  };
				});
	  	}
	  	else{
	  		swal({
		 		  title: "Deseja finalizar Fiscalização?",
		 		  showCancelButton: true,
		 		  confirmButtonColor: "#000080",
		 		  confirmButtonText: "Yes",
		 		  cancelButtonText: "No",
		 		  closeOnConfirm: false,
		 		  closeOnCancel: false
		 		},
		 		function(isConfirm){
		 		  if (isConfirm) {
				  		var retorno = HttpService.finalizaFiscalizacaoLocal();
						if(retorno == true)
				    swal("Fiscalização finalizado com Sucesso!");
				  } else {
				    swal("Fiscalização Cancelado");
				  };
				});

	  	}
	  };


	  // consulta fiscalizacao
	  var consultaFiscalizacaoLocal = function(){
    	return HttpService.getFiscalizacaoLocal();

 	};


 	// inicio e fim Abastecimento

 	  $scope.inseriAbastecimentoLocal = function(){

	  	 var retornoConsulta = consultaAbastecimentoLocal();

	  	 if (retornoConsulta == false){
	  	 	swal({
		 		  title: "Deseja Iniciar Abastecimento?",
		 		  showCancelButton: true,
		 		  confirmButtonColor: "#000080",
		 		  confirmButtonText: "Yes",
		 		  cancelButtonText: "No",
		 		  closeOnConfirm: false,
		 		  closeOnCancel: false
		 		},
		 		function(isConfirm){
		 		  if (isConfirm) {
				  		var retorno = HttpService.inseriAbastecimentoLocal();
						if(retorno == true)
				    swal("Abastecimento iniciado com Sucesso!");
				  } else {
				    swal("Abastecimento Cancelado");
				  };
				});
	  	}
	  	else{
	  		swal({
		 		  title: "Deseja finalizar Abastecimento?",
		 		  showCancelButton: true,
		 		  confirmButtonColor: "#000080",
		 		  confirmButtonText: "Yes",
		 		  cancelButtonText: "No",
		 		  closeOnConfirm: false,
		 		  closeOnCancel: false
		 		},
		 		function(isConfirm){
		 		  if (isConfirm) {
				  		var retorno = HttpService.finalizaAbastecimentoLocal();
						if(retorno == true)
				    swal("Abastecimento finalizado com Sucesso!");
				  } else {
				    swal("Abastecimento Cancelado");
				  };
				});

	  	}
	  };

	  // consulta abastecimento
	  var consultaAbastecimentoLocal = function(){
    	return HttpService.getAbastecimentoLocal();

 	};

 	// inicio e fim Manutenção

 	$scope.inseriManutencaoLocal = function(){

	  	 var retornoConsulta = consultaManutencaoLocal();

	  	 if (retornoConsulta == false){
	  	 	swal({
		 		  title: "Deseja Iniciar Manutenção?",
		 		  showCancelButton: true,
		 		  confirmButtonColor: "#000080",
		 		  confirmButtonText: "Yes",
		 		  cancelButtonText: "No",
		 		  closeOnConfirm: false,
		 		  closeOnCancel: false
		 		},
		 		function(isConfirm){
		 		  if (isConfirm) {
				  		var retorno = HttpService.inseriManutencaoLocal();
						if(retorno == true)
				    swal("Manutenção iniciado com Sucesso!");
				  } else {
				    swal("Manutenção Cancelado");
				  };
				});
	  	}
	  	else{
	  		swal({
		 		  title: "Deseja finalizar Manutenção?",
		 		  showCancelButton: true,
		 		  confirmButtonColor: "#000080",
		 		  confirmButtonText: "Yes",
		 		  cancelButtonText: "No",
		 		  closeOnConfirm: false,
		 		  closeOnCancel: false
		 		},
		 		function(isConfirm){
		 		  if (isConfirm) {
				  		var retorno = HttpService.finalizaManutencaoLocal();
						if(retorno == true)
				    swal("Manutenção finalizado com Sucesso!");
				  } else {
				    swal("Manutenção Cancelado");
				  };
				});

	  	}
	  };

	  // consulta manutenção
	  var consultaManutencaoLocal = function(){
    	return HttpService.getManutencaoLocal();

 	};

 	// inicio e fim cliente

 	$scope.inseriClienteLocal = function(){

	  	 var retornoConsulta = consultaClienteLocal();

	  	 if (retornoConsulta == false){
	  	 	swal({
		 		  title: "Deseja Iniciar Cliente?",
		 		  showCancelButton: true,
		 		  confirmButtonColor: "#000080",
		 		  confirmButtonText: "Yes",
		 		  cancelButtonText: "No",
		 		  closeOnConfirm: false,
		 		  closeOnCancel: false
		 		},
		 		function(isConfirm){
		 		  if (isConfirm) {
				  		var retorno = HttpService.inseriClienteLocal();
						if(retorno == true)
				    swal("Cliente iniciado com Sucesso!");
				  } else {
				    swal("Cliente Cancelado");
				  };
				});
	  	}
	  	else{
	  		swal({
		 		  title: "Deseja finalizar Cliente?",
		 		  showCancelButton: true,
		 		  confirmButtonColor: "#000080",
		 		  confirmButtonText: "Yes",
		 		  cancelButtonText: "No",
		 		  closeOnConfirm: false,
		 		  closeOnCancel: false
		 		},
		 		function(isConfirm){
		 		  if (isConfirm) {
				  		var retorno = HttpService.finalizaClienteLocal();
						if(retorno == true)
				    swal("Cliente finalizado com Sucesso!");
				  } else {
				    swal("Cliente Cancelado");
				  };
				});

	  	}
	  };

	  // consulta cliente
	  var consultaClienteLocal = function(){
    	return HttpService.getClienteLocal();

 	};

 	// inicio e fim Carga

 	$scope.inseriCargaLocal = function(){

	  	 var retornoConsulta = consultaCargaLocal();

	  	 if (retornoConsulta == false){
	  	 	swal({
		 		  title: "Deseja Iniciar Carga?",
		 		  showCancelButton: true,
		 		  confirmButtonColor: "#000080",
		 		  confirmButtonText: "Yes",
		 		  cancelButtonText: "No",
		 		  closeOnConfirm: false,
		 		  closeOnCancel: false
		 		},
		 		function(isConfirm){
		 		  if (isConfirm) {
				  		var retorno = HttpService.inseriCargaLocal();
						if(retorno == true)
				    swal("Carga iniciada com Sucesso!");
				  } else {
				    swal("Carga Cancelada");
				  };
				});
	  	}
	  	else{
	  		swal({
		 		  title: "Deseja finalizar Carga?",
		 		  showCancelButton: true,
		 		  confirmButtonColor: "#000080",
		 		  confirmButtonText: "Yes",
		 		  cancelButtonText: "No",
		 		  closeOnConfirm: false,
		 		  closeOnCancel: false
		 		},
		 		function(isConfirm){
		 		  if (isConfirm) {
				  		var retorno = HttpService.finalizaCargaLocal();
						if(retorno == true)
				    swal("Carga finalizada com Sucesso!");
				  } else {
				    swal("Carga Cancelada");
				  };
				});

	  	}
	  };

	  // consulta carga
	  var consultaCargaLocal = function(){
    	return HttpService.getCargaLocal();

 	};

 	// inicio e fim descarga

 	$scope.inseriDescargaLocal = function(){

	  	 var retornoConsulta = consultaDescargaLocal();

	  	 if (retornoConsulta == false){
	  	 	swal({
		 		  title: "Deseja Iniciar Descarga?",
		 		  showCancelButton: true,
		 		  confirmButtonColor: "#000080",
		 		  confirmButtonText: "Yes",
		 		  cancelButtonText: "No",
		 		  closeOnConfirm: false,
		 		  closeOnCancel: false
		 		},
		 		function(isConfirm){
		 		  if (isConfirm) {
				  		var retorno = HttpService.inseriDescargaLocal();
						if(retorno == true)
				    swal("Descarga iniciada com Sucesso!");
				  } else {
				    swal("Descarga Cancelada");
				  };
				});
	  	}
	  	else{
	  		swal({
		 		  title: "Deseja finalizar Descarga?",
		 		  showCancelButton: true,
		 		  confirmButtonColor: "#000080",
		 		  confirmButtonText: "Yes",
		 		  cancelButtonText: "No",
		 		  closeOnConfirm: false,
		 		  closeOnCancel: false
		 		},
		 		function(isConfirm){
		 		  if (isConfirm) {
				  		var retorno = HttpService.finalizaDescargaLocal();
						if(retorno == true)
				    swal("Descarga finalizada com Sucesso!");
				  } else {
				    swal("Descarga Cancelada");
				  };
				});

	  	}
	  };

	  // consulta descarga
	  var consultaDescargaLocal = function(){
    	return HttpService.getDescargaLocal();

 	};

 	// inicio e fim alimentação
 	$scope.inseriAlimentacaoLocal = function(){

	  	 var retornoConsulta = consultaAlimentacaoLocal();

	  	 if (retornoConsulta == false){
	  	 	swal({
		 		  title: "Deseja Iniciar Alimentação?",
		 		  showCancelButton: true,
		 		  confirmButtonColor: "#000080",
		 		  confirmButtonText: "Yes",
		 		  cancelButtonText: "No",
		 		  closeOnConfirm: false,
		 		  closeOnCancel: false
		 		},
		 		function(isConfirm){
		 		  if (isConfirm) {
				  		var retorno = HttpService.inseriAlimentacaoLocal();
						if(retorno == true)
				    swal("Alimentação iniciada com Sucesso!");
				  } else {
				    swal("Alimentação Cancelada");
				  };
				});
	  	}
	  	else{
	  		swal({
		 		  title: "Deseja finalizar Alimentação?",
		 		  showCancelButton: true,
		 		  confirmButtonColor: "#000080",
		 		  confirmButtonText: "Yes",
		 		  cancelButtonText: "No",
		 		  closeOnConfirm: false,
		 		  closeOnCancel: false
		 		},
		 		function(isConfirm){
		 		  if (isConfirm) {
				  		var retorno = HttpService.finalizaAlimentacaoLocal();
						if(retorno == true)
				    swal("Alimentação finalizada com Sucesso!");
				  } else {
				    swal("Alimentação Cancelada");
				  };
				});

	  	}
	  };

	  // consulta aliemntação
	  var consultaAlimentacaoLocal = function(){
    	return HttpService.getAliementacaoLocal();

 	};

 	// inicio e fim descanso
 	$scope.inseriDescansoLocal = function(){

	  	 var retornoConsulta = consultaDescansoLocal();

	  	 if (retornoConsulta == false){
	  	 	swal({
		 		  title: "Deseja Iniciar Descanso?",
		 		  showCancelButton: true,
		 		  confirmButtonColor: "#000080",
		 		  confirmButtonText: "Yes",
		 		  cancelButtonText: "No",
		 		  closeOnConfirm: false,
		 		  closeOnCancel: false
		 		},
		 		function(isConfirm){
		 		  if (isConfirm) {
				  		var retorno = HttpService.inseriDescansoLocal();
						if(retorno == true)
				    swal("Descanso iniciado com Sucesso!");
				  } else {
				    swal("Descanso Cancelado");
				  };
				});
	  	}
	  	else{
	  		swal({
		 		  title: "Deseja finalizar Descanso?",
		 		  showCancelButton: true,
		 		  confirmButtonColor: "#000080",
		 		  confirmButtonText: "Yes",
		 		  cancelButtonText: "No",
		 		  closeOnConfirm: false,
		 		  closeOnCancel: false
		 		},
		 		function(isConfirm){
		 		  if (isConfirm) {
				  		var retorno = HttpService.finalizaDescansoLocal();
						if(retorno == true)
				    swal("Descanso finalizado com Sucesso!");
				  } else {
				    swal("Descanso Cancelado");
				  };
				});

	  	}
	  };

	  // consulta descanso
	  var consultaDescansoLocal = function(){
    	return HttpService.getDescansoLocal();

 	};

 	// inicio e fim pernoite
 	$scope.inseriPernoiteLocal = function(){

	  	 var retornoConsulta = consultaPernoiteLocal();

	  	 if (retornoConsulta == false){
	  	 	swal({
		 		  title: "Deseja Iniciar Pernoite?",
		 		  showCancelButton: true,
		 		  confirmButtonColor: "#000080",
		 		  confirmButtonText: "Yes",
		 		  cancelButtonText: "No",
		 		  closeOnConfirm: false,
		 		  closeOnCancel: false
		 		},
		 		function(isConfirm){
		 		  if (isConfirm) {
				  		var retorno = HttpService.inseriPernoiteLocal();
						if(retorno == true)
				    swal("Pernoite iniciada com Sucesso!");
				  } else {
				    swal("Pernoite Cancelada");
				  };
				});
	  	}
	  	else{
	  		swal({
		 		  title: "Deseja finalizar Pernoite?",
		 		  showCancelButton: true,
		 		  confirmButtonColor: "#000080",
		 		  confirmButtonText: "Yes",
		 		  cancelButtonText: "No",
		 		  closeOnConfirm: false,
		 		  closeOnCancel: false
		 		},
		 		function(isConfirm){
		 		  if (isConfirm) {
				  		var retorno = HttpService.finalizaPernoiteLocal();
						if(retorno == true)
				    swal("Pernoite finalizada com Sucesso!");
				  } else {
				    swal("Pernoite Cancelada");
				  };
				});

	  	}
	  };

	  // consulta descarga
	  var consultaPernoiteLocal = function(){
    	return HttpService.getPernoiteLocal();

 	};


 	// controller das minhas jornadas ( consulta jornadas)

 	   $scope.consultaJornadas = function(){
          $scope.expedientes = HttpService.getExpedicaoLocal();
          $scope.direcoes = HttpService.getDirecaoLocal();

  };













});
