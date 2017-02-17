/**
 * Created by Utilisateur on 17/02/2017.
 */
angular.module("ApplicationContacts").controller("ControllerContacts", [ function(){

    this.contacts=[
        {
            nom:"ZUCKENBERG",
            prenom:"Mark",
            email:"mark@facebook.com"
        },{
            nom:"GATES",
            prenom:"Bill",
            email:"bill@microsoft.com"
        },{
            nom:"JOBS",
            prenom:"Steve",
            email:"steve@apple.com"
        }
    ];
}]);