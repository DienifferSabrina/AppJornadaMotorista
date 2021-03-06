angular.module('starter').config(function($stateProvider,$urlRouterProvider){
	$stateProvider

	// apresentação
	.state('index',{
		url:'/index',
		templateUrl: 'templates/index.html'
	})

	// login
	.state('login',{
		url:'/login',
		templateUrl:'templates/login.html'
	})

	 .state('menu',{
		url:'/menu',
		templateUrl:'templates/menu.html',
	    abstract: true
	})

	.state('menu.home',{
		url:'/home',
		views:{
			'menuConteudo':{
				templateUrl: 'templates/home.html',
			}
		}
	 })

	// chama tela Registros de Jornadas
	.state('menu.cadJornada',{
		url:'/cadJornada',
		views:{
			'menuConteudo': {
				templateUrl: 'templates/cadJornada.html'
			}
		}
	})


	.state('menu.jornada1',{
		url:'/jornada1',
		views:{
			'menuConteudo': {
				templateUrl: 'templates/jornada1.html',
				controller:'ControllerRegistroJornada'
			}
		}
	})

	.state('menu.jornada2',{
		url:'/jornada2',
		views:{
			'menuConteudo': {
				templateUrl: 'templates/jornada2.html',
				controller:'ControllerRegistroJornada'
			}
		}
	})

		.state('menu.rotas',{
		url:'/rotas',
		views:{
			'menuConteudo': {
				templateUrl: 'templates/rotas.html',
				controller: 'AppRotas'
			}
		}
	})

	.state('menu.listaRota',{
		url: '/listaRota',
		views:{
			'menuConteudo':{
				templateUrl: 'templates/listaRota.html',
				controller: 'AppRotas'
			}
		}
	})

	.state('menu.listaJornada',{
		url: '/listaJornada',
		views:{
			'menuConteudo':{
				templateUrl: 'templates/listaJornada.html',
				controller: 'ControllerRegistroJornada'
			}
		}
	})

	.state('menu.sincronizar',{
		url: '/sincronizar',
		views:{
			'menuConteudo':{
				templateUrl: 'templates/sincronizar.html',
				controller: 'ControllerRegistroJornada'
			}
		}
	})

	.state('menu.logout',{
		url: '/logout',
		views:{
			'menuConteudo':{
				templateUrl: 'templates/menu.html'
			}
		}
	})

	$urlRouterProvider.otherwise('/index');
});