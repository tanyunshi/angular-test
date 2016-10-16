(function (){
'user strict;'

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('MenuApiUrl', "https://davids-restaurant.herokuapp.com/menu_items.json")
.directive('foundItems', FoundItemsDirective);


function FoundItemsDirective() {
	var ddo = {
		templateUrl: 'foundItems.html',
		scope: {
			found: '<',
			onRemove: '&',
		},
		controller: NarrowItDownController,
		controllerAs: 'ctl',
		bindToController: true,
		link: FoundItemsDirectiveLink
	};
	return ddo;
}


function FoundItemsDirectiveLink(scope, element, attrs, controller) {
	scope.$watch('ctl.menuNotFound()', function (newvalue, oldvalue){
		if (newvalue == true){
			displayWarning();
		}else {
			hideWarning();
		}
	});

	function displayWarning () {
		var warningElm = element.find('div');
		warningElm.css('display', 'block');
	}

	function hideWarning () {
		var warningElm = element.find('div');
		warningElm.css('display', 'none');
	}
}

NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
function NarrowItDownController($scope, MenuSearchService) {
	var ctl = this;
	$scope.val = "";

	ctl.menuNotFound = function () {
		return typeof ctl.found !== "undefined" && ctl.found.length === 0;
	}

	ctl.search = function() {
		if ($scope.val === "") {
			ctl.found = [];
			return;
		}
		MenuSearchService.getMatchedMenuItems($scope.val).then(function (result) {
			ctl.found = result;
		});
	};

	ctl.removeFound = function (itemIndex) {
		ctl.found.splice(itemIndex, 1);
	};
}

MenuSearchService.$inject = ['$http', '$filter', 'MenuApiUrl'];
function MenuSearchService($http, $filter, MenuApiUrl) {
	var service = this;
	var upCase = $filter('uppercase');

	service.getMatchedMenuItems = function (searchItem) {
		var found = [];

		// Nothing found if no search string
		if (searchItem === "") {
			return found;
		}

    return $http.get(MenuApiUrl)
    .then(function (response) {
      response.data.menu_items.forEach(function(elm) {
      	if (upCase(elm.description + " " + elm.name).indexOf(upCase(searchItem)) != -1) {
      		found.push(elm);
      	}
      });
      return found;
    })
    .catch(function (error){
    	console.log("Something went wrong. :(");
    });
  };
}


})();