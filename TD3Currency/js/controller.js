/**
 * Created by Utilisateur on 03/03/2017.
 */
angular.module("ApplicationCurrency").controller("ControllerCurrency", [ '$http', function($http){
    var self = this;
    var what = 1;
    this.in;
    this.out;

    $http.get('app/data/currencymap.json').
    then(function(response) {
            self.currencies = response.data;
            self.from=self.currencies["EUR"];
            self.to=self.currencies["USD"];
        },
        function(response) {
            console.log("Erreur avec le statut Http : "+response.status);
        });

    self.convertir= function(what) {
        $http.jsonp('https://free.currencyconverterapi.com/api/v3/convert?compact=y&q=' + self.from.code + '_' + self.to.code, {jsonpCallbackParam: 'callback'})
            .then(function (response) {
                self.result = response.data[self.from.code + '_' + self.to.code].val;
                self.out=self.in*self.result;
            });
    }

    self.swap=function(){
        var tmp = self.from;
        self.from=self.to;
        self.to=tmp;
    }

}]);