(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('registerController', ['$route',function($route){
            this.$route = $route;
        }]);    
})();