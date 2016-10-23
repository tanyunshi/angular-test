(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
	templateUrl: 'src/menu/templates/category.component.template.html',
	bindings: {
		items: '<'
	}
})

})();