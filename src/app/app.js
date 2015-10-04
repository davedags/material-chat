'use strict'

angular.module('ChatApp', [
    'ngMaterial',
    'ngRoute'
])
    .config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	    .when('/', {
		templateUrl: 'app/chat/chat.view.html',
		controller: 'ChatCtrl'
	    })
	    .otherwise({
		redirectTo: '/'
	    });
    }])
    .controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
	$scope.toggleSidenav = function(menuId) {
	    $mdSidenav(menuId).toggle();
	};
    }]);
