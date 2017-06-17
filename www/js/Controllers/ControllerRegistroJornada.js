angular.module('starter').controller('ControllerRegistroJornada',function($scope, HttpService){

	// inicio Expedição
	  $scope.inseriExpedicaoLocal = function(){

	  	 var retornoConsulta = consultaExpedicaoLocal();

	  	 if (retornoConsulta == false){
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
	  	}
	  };

		//finalizar expedicao
		$scope.finalizaExpedicaoLocal = function(){
			var retornoConsulta = consultaExpedicaoLocal();
			console.log(retornoConsulta);
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
					swal("Expedição finalizada com Sucesso!");
				};
			});
		}
	}
	  // consulta do inicio da expedição
	  var consultaExpedicaoLocal = function(){
    return HttpService.getExpedicaoLocal();

 	};

 	


	
	


});
