(function () {
    'use strict';
	angular
        .module('myApp')
        .controller('indexController', ['$route',function($route){
            this.$route = $route;
        }]);    
})();