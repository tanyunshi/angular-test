(function () {
'use strict';

angular.module('MenuApp')
.service('MenuService', MenuService);

MenuService.$inject = ['$http', 'ApiBasePath'];
function MenuService ($http, ApiBasePath) {
	var service = this;

	service.getMenuCategories = function () {
		return $http({
			method: "GET",
			url: (ApiBasePath + "/categories.json")
		})
		.then(function (response){
			return response.data;
		});
	};

	service.getMenuForCategory = function (shortname) {
		return $http({
			method: "GET",
			url: (ApiBasePath + "/menu_items.json"),
			params: {category: shortname}
		})
		.then(function (response){
			return response.data;
		});
	}
}

})();