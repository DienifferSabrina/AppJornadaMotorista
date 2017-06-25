angular.module('starter').controller('AppRotas', function($scope, HttpService) {
  $scope.rota = {};

  $scope.CalculaDistancia = function(){

     $('#litResultado').html('Aguarde...');
                //Instanciar o DistanceMatrixService
                var service = new google.maps.DistanceMatrixService();
                //executar o DistanceMatrixService
                service.getDistanceMatrix(
                  {
                      //Origem
                      origins: [$scope.rota.txtOrigem],
                      //Destino
                      destinations: [$scope.rota.txtDestino],
                      //Modo (DRIVING | WALKING | BICYCLING)
                      travelMode: google.maps.TravelMode.DRIVING,
                      //Sistema de medida (METRIC | IMPERIAL)
                      unitSystem: google.maps.UnitSystem.METRIC
                      //Vai chamar o callback
                  }, callback);

  }
            //Tratar o retorno do DistanceMatrixService
            function callback(response, status) {

               console.log(response);
                //Verificar o Status
                if (status != google.maps.DistanceMatrixStatus.OK)
                    //Se o status não for "OK"
                    $('#litResultado').html(status);
                else {
                    //Se o status for OK
                    //Endereço de origem = response.originAddresses
                    //Endereço de destino = response.destinationAddresses
                    //Distância = response.rows[0].elements[0].distance.text
                   //Duração = response.rows[0].elements[0].duration.text
                    $('#litResultado').html("<strong>Origem</strong>: " + response.originAddresses +
                        "<br /><strong>Destino:</strong> " + response.destinationAddresses +
                        "<br /><strong>Distância</strong>: " + response.rows[0].elements[0].distance.text +
                        " <br /><strong>Duração</strong>: " + response.rows[0].elements[0].duration.text
                        );

                    // salvar os dados de distancia e tempo em variaveis
                    var rota = new Object();
                    rota.origem = response.originAddresses;
                    rota.destino = response.destinationAddresses
                    rota.duracao = response.rows[0].elements[0].distance.text;
                    rota.tempo =  response.rows[0].elements[0].duration.text;

                    //Atualizar o mapa
                    $("#map").attr("src", "https://maps.google.com/maps?saddr=" + response.originAddresses + "&daddr=" + response.destinationAddresses + "&output=embed");

                    // puxar hora do inicio
                    var data = new Date();
                    var hora = data.getHours();
                    var minuto = data.getMinutes();
                    var segundo = data.getSeconds();
                    var dia = data.getDate();
                    var mes = data.getMonth()+1;
                    var ano = data.getFullYear();
                    rota.hora = dia + '/' + mes + '/' + ano + '-' + hora + ':' + minuto + ':' + segundo;
                    console.log(rota);

                  swal({
                    title: "Deseja Salvar Rota Pesquisada?",
                    showCancelButton: true,
                    confirmButtonColor: "#000080",
                    confirmButtonText: "Yes",
                    cancelButtonText: "No",
                    closeOnConfirm: false,
                    closeOnCancel: false
                  },
                  function(isConfirm){
                    if (isConfirm) {
                        var retorno = HttpService.InseriMapaLocal(rota);
                      if(retorno == true)
                      swal("Rota salvo com Sucesso!");

                    } else {
                      swal("Rota Cancelada");
                    };
                  });
                };
              };

              

            // consulta mapas

          $scope.consultaRotas= function(){
        
            $scope.rotas = HttpService.getMapasLocal();
             console.log($scope.rotas);
         };

       
     

  

   
});
