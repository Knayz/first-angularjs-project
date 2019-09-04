;(function () {
"use strict";
    angular.module('ngFit.about', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/about', {
                    templateUrl: 'app/components/about/about.html',
                    controller: 'AboutController'
                });
        }])
        .controller('AboutController', ['$scope', function AboutController($scope) {
            $scope.title = 'Это наш AboutCtrl scope title';
        }]);
})();
