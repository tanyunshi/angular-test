(function (){
'use strict';

angular.module('public')
.controller('RegisterController', RegisterController);

RegisterController.$inject = ['UserService', 'MenuService'];
function RegisterController(UserService, MenuService) {
	var reg = this;

	reg.submit = function () {
		var promise = MenuService.getMenuItem(reg.user.favorite);

		promise.then(function (response) {
			UserService.setUser(reg.user);
			reg.registered = true;
			reg.favorite_invalid = false;
		})
		.catch(function (error) {
			reg.favorite_invalid = true;
			reg.registered = false;
		});

	};

}

})();