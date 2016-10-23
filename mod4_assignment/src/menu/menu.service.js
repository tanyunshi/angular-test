(function () {
'use strict';

angular.module('MenuApp')
.service('MenuService', MenuService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuService.$inject = ['$http', 'ApiBasePath'];
function MenuService ($http, ApiBasePath) {
	var service = this;

	service.getMenuCategories = function () {
		return $http({
			method: "GET",
			url: (ApiBasePath + "/categories.json")
		});
	};

	service.getMenuForCategory = function (shortname) {
		return $http({
			method: "GET",
			url: (ApiBasePath + "/menu_items.json"),
			params: {category: shortname}
		});
	}
}

})();