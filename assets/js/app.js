(function() {
/* 
 * Init angular app
 */
    var app = angular.module('perlCamp', ['ngRoute']);

    /*
     * Handle Routing
     */
    app.config(function($routeProvider) {
	$routeProvider
            .when('/', {
                templateUrl: 'tmpl/welcome.html',
            })

	    .when('/glossary', {
                templateUrl: 'tmpl/glossary.html',
		controller: 'glossaryCtrl',
            })
    })

    /*
     * Main site controller
     */
    app.controller('mainController', function($scope) {

    })

    /*
     * Glossary controller
     * Handles filtering and loading of glossary content
     */
    app.controller('glossaryCtrl', function($scope, $http) {
    	var api_url = 'http://perlcamp.elasticbeanstalk.com/';
	$http({
	    method: 'GET',
            url: api_url
        }).then(function(ret) {
	    console.log(ret)
            $scope.glossary = ret.data;
	}, function(ret) {
	    console.log("Error: Something went wrong");
            console.log(ret)
        });
    })

    /*
     * Below: Directives
     * Used for basic templating and 
     * organization of content
     */
    app.directive('welcomePage', function() {
        return {
            restrict: 'E',
            templateUrl: 'tmpl/welcome.html',
        };
    })

    app.directive('glossaryPage', function() {
        return {
            restrict: 'E',
            templateUrl: 'tmpl/glossary.html',
        };
    })

    app.directive('tableContents', function() {
	return {
	    restrict: 'E',
	    templateUrl: 'tmpl/table-of-contents.html',
        };
    });

})();
