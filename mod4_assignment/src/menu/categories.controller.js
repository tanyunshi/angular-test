(function (){
	'use strict';

	angular.module('MenuApp')
	.controller('categoriesController', CategoriesController);

	CategoriesController.$inject = ['MenuService', 'items']
	function CategoriesController(MenuService, items) {
		var categoryList = this;
		categoryList.items = items;
	}

})();