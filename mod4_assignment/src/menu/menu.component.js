(function () {
'use strict';

angular.module('MenuApp')
.component('menuList', {
	templateUrl: 'src/menu/templates/menu.component.template.html',
	bindings: {
		items: '<'
	}
})

})();