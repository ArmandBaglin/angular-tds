/**
 * Created by Utilisateur on 27/01/2017.
 */
angular.module("FirstApp").controller("MainController",function(){
    var self=this;
    this.message="Hello World !"; //public
    var message2 =" Hello World 2 !" //privée
    this.getMsg=function(){ //accès à une variable privée
        return self.message;
    }
    this.getMsg2=function(){
        return message2;
    };
});
//pas de [] car ce n'est pas un constructeur mais comme un getter, on accède à l'application "FirstApp"