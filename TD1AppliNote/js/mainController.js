/**
 * Created by Utilisateur on 27/01/2017.
 */
var app=angular.module("ApplicationNote",["ngCookies"]);
app.controller("MainController", ["$cookies", function(cookies){

    var message="";
    this.value=cookies.get('messageCookie')
    var self=this;

    this.count = function(){
        if(self.value!="" && self.value != cookies.get('messageCookie'))
            message="Message modifié";

        return 100-self.value.length;
    }

    this.clear = function(){

        message="";

        self.value="";
    }

    this.save = function(){
        message="Message sauvegardé";
        if(self.value != "")
            cookies.put('messageCookie',self.value);
    }

    this.show = function(){

        return message;
    }
}]);