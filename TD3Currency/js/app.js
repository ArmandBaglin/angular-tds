/**
 * Created by Utilisateur on 03/03/2017.
 */
angular.module("ApplicationCurrency",[]).config(['$sceDelegateProvider', function($sceDelegateProvider) {
    // We must whitelist the JSONP endpoint that we are using to show that we trust it
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://free.currencyconverterapi.com/**'
    ]);
}]);