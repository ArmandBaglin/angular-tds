/**
 * Created by Utilisateur on 17/03/2017.
 */
angular.module("MainModule").controller("MainController",["$routeParams",function($routeParams){
    this.contentMain="Template du main";
    this.contentAbout="Application créée par Armand BAGLIN"
    this.param=$routeParams;
}]);