'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router','ui.bootstrap','ngAnimate','uiSwitch','ngDroplet'
])
.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/index");
  //
  // Now set up the states
  $stateProvider
    .state('index', {
      url: "/index",
      views:{
        'main':{
          templateUrl: "controllers/index/index.view.html",
          controller:""
        }
      }
      
    })
    .state('login', {
      url: "/login",
      views:{
        'main':{
          templateUrl: "controllers/login/login.view.html",
          controller:""
        }
      }
      
    })
    .state('register', {
      url: "/register",
      views:{
        'main':{
          templateUrl: "controllers/register/register.view.html",
          controller:""
        }
      }
      
    })
    .state('main', {
      url: "/main",
      views:{
        'main':{
          templateUrl: "controllers/main/main.view.html",
          controller:""
        },
        'content@main':{
          templateUrl: "controllers/content/content.view.html",
          controller:""
        }
      }
      
    })
    .state('main.view', {
      url: "/view",
      views:{
        'main':{
          templateUrl: "controllers/main/main.view.html",
          controller:""
        },
        'content@main':{
          templateUrl: "",
          controller:""
        }
      }
      
    })
    .state('main.create_modified', {
      url: "/create",
      views:{
        'main':{
          templateUrl: "controllers/main/main.view.html",
          controller:""
        },
        'content@main':{
          templateUrl: "controllers/create/create.view.html",
          controller:""
        }
      }
      
    });
});
