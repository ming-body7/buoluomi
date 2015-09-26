(function () {
    'use strict';
	angular
        .module('myApp')
        .controller('hotController', ['$scope',function($scope){
            this.$scope = $scope;
        }]);    
})();