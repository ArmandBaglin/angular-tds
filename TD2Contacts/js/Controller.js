/**
 * Created by Utilisateur on 17/02/2017.
 */
angular.module("ApplicationContacts").controller("ControllerContacts", [ function(){

    this.contacts=[
        {
            nom:"ZUCKENBERG",
            prenom:"Mark",
            email:"mark@facebook.com",
            visible:true
        },{
            nom:"GATES",
            prenom:"Bill",
            email:"bill@microsoft.com",
            visible:true
        },{
            nom:"JOBS",
            prenom:"Steve",
            email:"steve@apple.com",
            visible:true
        }
    ];
    this.ajout=false;
    this.modif=false;
    this.ajoutVisible= function(){
        return this.ajout;
    }

    this.ajoutClick= function(){
        this.ajout=true;
        return this.ajout;
    }

    this.modifVisible= function(){
        return this.modif;
    }

    this.modifClick= function(){
        this.modif=true;
        return this.modif;
    }

    this.annulerModif=function(){
        this.modif=false;
        return this.modif;
    }

    this.annulerAjout = function(){
        this.ajout=false;
        return this.ajout;
    }

    this.voirContact= function(visible){
        return visible;
    }

    this.delete= function(contact){
        contact.visible=false;
        return contact.visible;
    }

}]);

angular.module("ApplicationContacts").filter('visible',function(){
    return function(contacts){
        var results=[];
        for(var i=0;i<contacts.length;i++){
            if(contacts[i].visible==true){
                results.push(contacts[i]);
            }
        }
        return results;
    }
});



