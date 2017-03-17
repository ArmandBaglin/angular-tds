/**
 * Created by Utilisateur on 17/03/2017.
 */
angular.module("MainModule").config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'templates/main.html',
        controller: 'MainController',
        controllerAs:'mCtrl'
    }).
    when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'MainController',
        controllerAs: 'mCtrl'
    }).
    when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'MainController',
        controllerAs: 'mCtrl'
    }).
    when('/in/', {
        templateUrl: 'templates/main.html',
        controller: 'InController',
        controllerAs: 'inCtrl'
    }).
    when('/in/exit', {
        templateUrl: 'templates/in/exit.html',
        controller: 'InController',
        controllerAs: 'inCtrl'
    }).
    when('/in/products', {
        templateUrl: 'templates/in/list.html',
        controller: 'ProductsController',
        controllerAs: 'pCtrl'
    }).
    when('/in/clients', {
        templateUrl: 'templates/in/list.html',
        controller: 'ClientsController',
        controllerAs: 'clCtrl'
    }).otherwise({
        redirectTo: '/'
    });
    if(window.history && window.history.pushState){
        $locationProvider.html5Mode(true);
    }
}]);