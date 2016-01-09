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

    app.controller('mainController', function($scope) {

    })

    app.controller('glossaryCtrl', function($scope) {
        
    })

    app.directive('filterGlossary', function($timeout) {
        return {
            link: function(scope, element, attrs) {
                var li = Array.prototype.slice.call(element[0].children);

                function filterBy(value) {
                    li.forEach(function(el) {
                        el.className = el.textContent.toLowerCase().indexOf(value.toLowerCase()) !== -1 ? '' : 'ng-hide';
			console.log(el.className);
                    });
                }

                scope.$watch(attrs.filterList, function(newVal, oldVal) {
                    if ( newVal !== oldVal ) {
                        filterBy(newVal);
                    }
                });
            }
        };
    })

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
    });

})();
