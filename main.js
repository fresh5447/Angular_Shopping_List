var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope){

	$scope.list = [
		{name: "apple", value: "$7.00", quantity: "4"},
		{name: "orange", value: "$5.00", quantity: "4"},
		{name: "banana", value: "$3.00", quantity: "4"},
		{name: "strawberry", value: "$9.00", quantity: "4"}
	];

	$scope.addItem = function(itemName, itemValue, itemQuantity){
		$scope.list.push({name:itemName, value:itemValue, quantity:itemQuantity});	
		return $scope.list;
	};

});