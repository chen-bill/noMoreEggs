var groceryApp = angular.module('groceryApp', []);
groceryApp.controller('groceryListController', ['$scope', '$http', function($scope, $http) {
	console.log("Controller works");

	var refresh = function(){
		$http.get('/grocerylist').success(function (response){
			$scope.groceryList = response;
		});
	}

	refresh();

	$scope.addItem = function (){
		console.log('addItem()');
		$http.post('/grocerylist',$scope.item).success(function (response){
			console.log(response);
			$scope.item = '';
		});
		refresh();
	};

	$scope.removeItem = function(id){
		console.log(id);
		$http.delete('/grocerylist/' + id).success(function(response){
			refresh();
		});
	};

}]);