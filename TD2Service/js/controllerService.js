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

    this.activer = function(service){
        service.active=!service.active;
        if(service.active==true){
            this.value=this.value+1;
            this.prix=this.prix+service.price;
        }
        else{
            this.value=this.value-1;
            this.prix=this.prix-service.price;
        }
    }

    this.value=1;
    this.prix=300
    this.count=function(service){
        return this.value;
    }

    this.total=function(){
        return this.prix;
    }
}]);