"use strict";
// initialize material design js
$.material.init();

(function () {
    angular.module('ngFit', [
        'ngRoute',
        'ngFit.main',
        'ngFit.about',
        'ngFit.contact'
    ])
        .config(['$routeProvider', ngFitConfig]);

    function ngFitConfig($routeProvider) {
        $routeProvider
            .otherwise({templateUrl: 'app/404.html'});
    }

})();
