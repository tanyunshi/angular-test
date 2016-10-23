(function () {
'use strict'

angular.module('MenuApp')
.config(RoutesConfig);


RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
	// Default: home
	$urlRouterProvider.otherwise('/');

	// UI states
	$stateProvider

	// Home
	.state('home', {
		url: '/',
		templateUrl: 'src/menu/templates/home.template.html'
	})

	// List
	.state('categories', {
		url: '/categories',
		templateUrl: 'src/menu/templates/categories.template.html',
		controller: 'categoriesController as categoryList',
		resolve: {
			items: ['MenuService', function(MenuService) {
				return MenuService.getMenuCategories();
			}]
		}
	})

	// Menu list
	.state('menuList', {
		url: '/menuList/{category}',
		templateUrl: 'src/menu/templates/menu-list.template.html',
		controller: 'menuListController as menuList',
		resolve: {
			params: ['$stateParams', 'MenuService', 
			 function($stateParams, MenuService) {
			 		return MenuService.getMenuForCategory($stateParams.category);
			 }]
		}
	});
}

})();