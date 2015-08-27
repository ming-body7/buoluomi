(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('headerController', ['$route',function($route){
            this.$route = $route;
        }]);    
})();
