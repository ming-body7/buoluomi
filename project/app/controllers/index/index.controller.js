(function () {
    'use strict';
	angular
        .module('myApp')
        .controller('indexController', ['$scope',function($scope){
            this.$scope = $scope;
        }]);    
})();