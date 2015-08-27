(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('loginController', ['$route',function($route){
            this.$route = $route;
        }]);    
})();
