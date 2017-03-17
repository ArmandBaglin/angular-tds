/**
 * Created by Utilisateur on 17/03/2017.
 */
angular.module("AppRoute").controller("RouteController",["$routeParams","code",function($routeParams,code){
    this.content1="Contenu du template de route1";
    this.params=$routeParams;
    this.code=code;
}]);

angular.module("AppRoute").factory("code", function() {
    return {
        value:"noCode"
    }
});