(function () {
    'use strict';
	angular
        .module('myApp')
        .controller('mainController', ['$route',function($route){
            this.$route = $route;
        }]);    
})();