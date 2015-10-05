'use strict';

angular
    .module('ChatApp')
    .controller('ChatCtrl', function($scope) {
	$scope.messages = [];
	$scope.im = {};

	$scope.sendChat = function(msg) {

	    $scope.messages.push(msg);
	    $scope.im = {};

	}
    })

