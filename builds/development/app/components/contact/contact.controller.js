;(function () {
    "use strict";
    angular.module('ngFit.contact', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/contact', {
                    templateUrl: 'app/components/contact/contact.html',
                    controller: 'ContactController'
                });
        }])
        .controller('ContactController', ['$scope', function ContactController($scope) {
            $scope.title = 'Это наш ContactCtrl scope title';
        }]);
})();
