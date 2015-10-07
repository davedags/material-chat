'use strict';

angular
    .module('ChatApp')
    .controller('ChatCtrl', function($scope) {
	$scope.messages = [];
	$scope.text = '';

	// connect to the socket server
	$scope.conn = new WebSocket('ws://test.dags.io:8080');
	$scope.conn.onopen = function(e) {
	    console.log('Connected to server:', $scope.conn);
	}
	
	$scope.conn.onerror = function(e) {
	    console.log('Error: Could not connect to server.');
	}
	
	$scope.conn.onclose = function(e) {
	    console.log('Connection closed');
	}
	
	// handle new message received from the socket server
	$scope.conn.onmessage = function(e) {
	    var message = JSON.parse(e.data);
	    $scope.messages.push(message);
	    $scope.$apply();
	}
	
	$scope.sendChat = function(message) {
	    console.log(message);
	    var message = {
		'type': 'message',
		'text': message,
		'username': 'dags'
	    };
	    
	    $scope.messages.push(message);
	    $scope.conn.send(JSON.stringify(message));
	    $scope.text = '';

	    

	}
    })

