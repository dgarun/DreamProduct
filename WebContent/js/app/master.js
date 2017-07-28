var app = angular.module("dreamApp", []); 
app.controller("masterController", function($scope) {
    $scope.products = ["Milk", "Bread", "Cheese"];
    
   $scope.starter = function(textBox) {
	   	console.log(textBox);
		return $scope.data = "Success";
    };
    
});