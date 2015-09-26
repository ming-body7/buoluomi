(function () {
'use strict';

// Declare app level module which depends on views, and components
angular
  .module('myApp', ['ui.router','ui.bootstrap','ngAnimate','uiSwitch','ngDroplet','ngCookies'])
  .config(config)
  .run(run);


config.$inject = ["$stateProvider", "$urlRouterProvider"];

function config($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/index");
  //
  // Now set up the states
  $stateProvider
    .state('index', {
      url: "/index",
      views:{
        'main':{
          templateUrl: "controllers/index/index.view.html",
          controller:"indexController"
        }
      }
      
    })
    .state('login', {
      url: "/login",
      views:{
        'main':{
          templateUrl: "controllers/login/login.view.html",
          controller:"loginController"
        }
      }
      
    })
    .state('register', {
      url: "/register",
      views:{
        'main':{
          templateUrl: "controllers/register/register.view.html",
          controller:"registerController",
        }
      }
      
    })
    .state('main', {
      url: "/main",
      views:{
        'main':{
          templateUrl: "controllers/main/main.view.html",
          controller:"mainController"
        },
        'content@main':{
          templateUrl: "controllers/content/content.view.html",
          controller:"contentController"
        }
      }
      
    })
    .state('main.create', {
      url: "/create",
      views:{
        'main':{
          templateUrl: "controllers/main/main.view.html",
          controller:"mainController"
        },
        'content@main':{
          templateUrl: "controllers/create_modified/create_modified.view.html",
          controller:"createController"
        }
      }
      
    })
    .state('main.modified', {
      url: "/modified",
      views:{
        'main':{
          templateUrl: "controllers/main/main.view.html",
          controller:"mainController"
        },
        'content@main':{
          templateUrl: "controllers/create_modified/create_modified.view.html",
          controller:"createController"
        }
      }
      
    })
    .state('main.set_hot', {
      url: "/set_hot",
      views:{
        'main':{
          templateUrl: "controllers/main/main.view.html",
          controller:"mainController"
        },
        'content@main':{
          templateUrl: "controllers/hot/hot.view.html",
          controller:"hotController"
        }
      }
      
    })
    .state('main.information', {
      url: "/information",
      views:{
        'main':{
          templateUrl: "controllers/main/main.view.html",
          controller:""
        },
        'content@main':{
          templateUrl: "controllers/forms/information.view.html",
          controller:""
        }
      }
      
    })
    .state('main.password', {
      url: "/password",
      views:{
        'main':{
          templateUrl: "controllers/main/main.view.html",
          controller:""
        },
        'content@main':{
          templateUrl: "controllers/forms/password.view.html",
          controller:""
        }
      }
      
    })
    .state('main.account', {
      url: "/account",
      views:{
        'main':{
          templateUrl: "controllers/main/main.view.html",
          controller:""
        },
        'content@main':{
          templateUrl: "controllers/forms/account.view.html",
          controller:""
        }
      }
      
    });
}

run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];

function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page

            //$.inArray( 5 + 5, [ "8", "9", "10", 10 + "" ] );

            //var restrictedPage = true;// = ($.inArray($location.path(), ['/login', '/register']) === -1);
            var restrictedPage = (["/index","/login", "/register","/"].indexOf($location.path()) === -1)

            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

})();
