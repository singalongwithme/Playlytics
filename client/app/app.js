(function(){
	'use strict';

	angular.module('Playlytics', [
		'ngMaterial',
		'ui.router',
		'ui.sortable',
		'ui.bootstrap'
	])

	.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];

	function config($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('/', {
				url: '/',
				templateUrl: 'client/app/views/main.html',
				controller: 'MainController',
				controllerAs: 'vm'
			})
	}
})();