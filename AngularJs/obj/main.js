var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.firstName= "Joseph";
    $scope.lastName= "Stu";
});

var person = {
	firstName : "Tonio",
	lastName : "Manel"
};

app.controller('structCtrl', function($scope){
	
	$scope.person = person;
	
});