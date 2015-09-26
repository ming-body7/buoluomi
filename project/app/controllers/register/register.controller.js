(function () {
    'use strict';
 
    angular
        .module('myApp')
        .controller('registerController', registerController);
 
    registerController.$inject = ['UserService', '$location', '$rootScope','$scope','FlashService'];
    function registerController(UserService, $location, $rootScope, $scope,FlashService) {
        //var tm = $scope;
        //var vm = this;
        $scope.register = register;
        //$scope.vm = {};
        function register() {
            $scope.dataLoading = true;
            UserService.Create($scope.user)
                .then(function (response) {
                    if (response.success) {
                        FlashService.Success('Registration successful', true);
                        $location.path('/login');
                    } else {
                        FlashService.Error(response.message);
                        $scope.dataLoading = false;
                    }
                });
        }
    }
 
})();