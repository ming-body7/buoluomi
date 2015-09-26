(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('loginController', loginController);

    loginController.$inject = ['$location', 'AuthenticationService','$scope','FlashService'];
    function loginController($location, AuthenticationService,$scope, FlashService) {
        //var $scope = this;

        $scope.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    $location.path('/main');
                } else {
                    FlashService.Error(response.message);
                    $scope.dataLoading = false;
                }
            });
        };
    }

})();
