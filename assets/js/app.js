(function() {
/* 
 * Init angular app
 */
    var app = angular.module('perlCamp', []);

    app.controller('mainController', function($scope) {

    })

    app.directive('welcomePage', function() {
      return {
        restrict: 'E',
        templateUrl: 'tmpl/welcome.html',
      };
    });

})();
