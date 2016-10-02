(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', lunchCheckController);

lunchCheckController.$inject = ['$scope'];
function lunchCheckController($scope) {
	$scope.foodList = "";
	$scope.message = "";
	$scope.check = function () {
		var re = /\s*,\s*/;
		var foodListArr = $scope.foodlist.split(re);
		
		// Count not empty arrays
		var nbFood = notEmptyArrayListLength(foodListArr);
		$scope.message = getMessage(nbFood);
	};
}

function notEmptyArrayListLength (arr) {
	var count = 0;
	for (var i=0; i<arr.length; i++) {
		if (arr[i] !== "") {
			count ++;
		}
	}
	return count;
}

function getMessage (nbFood) {
	if (nbFood == 0) {
		return "Please enter data first";
	} else if (nbFood <= 3) {
		return "Enjoy";
	} else {
		return "Too much :)";
	}

}

})();