'use strict';

angular
    .module('ChatApp')
    .controller('ChatCtrl', function($scope) {
	$scope.messages = [];
	$scope.im = {};

	$scope.sendChat = function(msg) {

	    $scope.messages.push(msg);
	    $scope.im = {};

	    var chatBox = document.getElementById('chatBox');
	    chatBox.scrollTop = 300 + 8 + ($scope.messages.length * 240);


	}
    })

