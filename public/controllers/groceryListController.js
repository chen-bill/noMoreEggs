var groceryApp = angular.module('groceryApp', []);
groceryApp.controller('groceryListController', ['$scope', '$http', function($scope, $http) {
	console.log("Controller is working");

	var refresh = function(){
		$http.get('/grocerylist').success(function (response){
			$scope.groceryList = response;
		});
	}

	refresh();

	$scope.addItem = function (){
		$http.post('/grocerylist',$scope.item).success(function (response){
			console.log(response);
			$scope.item = '';
		});
		refresh();
	};

	$scope.removeItem = function(id){
		$http.delete('/grocerylist/' + id).success(function(response){
			refresh();
		});
	};

}]);