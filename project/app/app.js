'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute','ui.bootstrap','ngAnimate'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/login',{
      templateUrl:'controllers/login/login.view.html',
      controller:'loginController',
      controllerAs:'vm'
    })
    .when('/register',{
      templateUrl:'controllers/register/register.view.html',
      controller:'registerController',
      controllerAs:'vm'
    })
    .when('/',{
  	 templateUrl:'controllers/index/index.view.html',
  	 controller:'indexController',
  	 controllerAs:'vm'
  	})
    .when('/main',{
     templateUrl:'controllers/main/main.view.html'//,
     //controller:'mainController',
     //controllerAs:'vm'
    })
    .when('/test',{
      templateUrl:'test.html'
    })
    .otherwise({
        redirectTo: '/login'
    });
    //$locationProvider.html5Mode(true);
}]);
