(function () {
	'use strict';

	angular.module('MenuApp')
	.controller('menuListController', MenuListController);

	MenuListController.$inject = ['params'];
	function MenuListController(params) {
		var menuList = this;
		menuList.category = params.category;
		menuList.items = params.menu_items;
	}

})();