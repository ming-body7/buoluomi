(function () {
    'use strict';
	angular
        .module('myApp')
        .controller('mainController', ['$scope',function($scope){
            this.$scope = $scope;
        }]);    
})();