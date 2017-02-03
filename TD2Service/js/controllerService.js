/**
 * Created by Utilisateur on 03/02/2017.
 */
var app=angular.module("ApplicationService").controller("ControllerService", [ function(){

    this.services=[
        {
            "name": "Web Development",
            "price": 300,
            "active":true
        },{
            "name": "Design",
            "price": 400,
            "active":false
        },{
            "name": "Integration",
            "price": 250,
            "active":false
        },{
            "name": "Formation",
            "price": 220,
            "active":false
        }
    ]

    this.count = function(){

    }
}]);