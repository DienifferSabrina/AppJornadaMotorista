
angular.module('starter')
.controller('userController', function($scope, $state){
  $scope.logar = function(){
      $state.go('menuConteudo'); //enviar para rota home
  };
});
