(function (){
'user strict;'

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	this.items = ShoppingListCheckOffService.getToBuyItems();
	this.buy = function (index) {
		ShoppingListCheckOffService.buy(index);
	}
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
	this.items = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {

	var toBuyList = [
		{
		  name: "Milk",
		  quantity: 2
		},
		{
		  name: "Rice",
		  quantity: 1
		},
		{
		  name: "Chou",
		  quantity: 5
		},
		{
		  name: "Apple",
		  quantity: 2
		},	
		{
		  name: "Coffee",
		  quantity: 5
		},
		{
		  name: "Chicken",
		  quantity: 1
		},	
	];
	var boughtList = [];

	this.buy = function(index) {
		item = toBuyList[index];
		boughtList.push(item);
		toBuyList.splice(index, 1);
	};

	this.getToBuyItems = function () {
		return toBuyList;
	}

	this.getBoughtItems = function () {
		return boughtList;
	}
}

})();