var app = angular.module('myApp', []);

//Scopes
app.controller('PlayerController', ['$scope', function($scope) {
	//Create an audio player in the player controller scope, it will be available in the view
	  $scope.playing = false;
	  $scope.audio = document.createElement('audio');
	  $scope.audio.src = '/media/npr.mp4';
	  $scope.play = function() {
	    $scope.audio.play();
	    $scope.playing = true;
	  };
	  $scope.stop = function() {
	    $scope.audio.pause();
	    $scope.playing = false;
	  };
	  $scope.audio.addEventListener('ended', function() {
	    $scope.$apply(function() {
	      $scope.stop()
	    });
	  });
}]);

app.controller('RelatedController', ['$scope', function($scope) {
}]);