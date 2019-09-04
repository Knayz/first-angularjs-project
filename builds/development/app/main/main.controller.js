;(function () {
    "use strict";
    angular.module('ngFit.main', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/main/main.html',
                    controller: 'MainController'
                });
        }])
        .controller('MainController', ['$scope', function MainController($scope) {
            $scope.title = 'I can see you';
            $scope.name = 'Vintizer';
            $scope.clickFunction = function (name) {
                alert('Hello, ' + name);
            };
        }]);
})();
