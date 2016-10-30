(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['MenuService', 'UserService'];
function InfoController(MenuService, UserService) {
	var info = this;
	info.user = UserService.getUser();

	if (typeof info.user !== "undefined") {
			MenuService.getMenuItem(info.user.favorite)
			.then(function (response) {
		    info.favorite_menu = response.data;
		  });
	}



}

})();
