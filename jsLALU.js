var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
        $routeProvider
            
            .when("/lalu/Cropped Buttondown Jacket", {
                templateUrl: "lalu/productLalu/ari0/Cropped Buttondown Jacket/Cropped Buttondown Jacket.html"
            })
            .when("/lalu/Cropped Utilitarian Leather Vest", {
                templateUrl: "lalu/productLalu/ari0/Cropped Utilitarian Leather Vest/Cropped Utilitarian Leather Vest.html"
            })
            .when("/lalu/Cropped Utilitarian PU Vest", {
                templateUrl: "lalu/productLalu/ari0/Cropped Utilitarian PU Vest/Cropped Utilitarian PU Vest.html"
            })
            .when("/lalu/Cut Out Jersey Top/Cut Out Jersey Top", {
                templateUrl: "lalu/productLalu/ari0/Cut Out Jersey Top/Cut Out Jersey Top.html"
            })
            .when("/lalu/Embroidered High Neck Logo Tee", {
                templateUrl: "lalu/productLalu/ari0/Embroidered High Neck Logo Tee/Embroidered High Neck Logo Tee.html"
            })
            .when("/lalu/Silky Printed Shirt", {
                templateUrl: "lalu/productLalu/ari0/Silky Printed Shirt/Silky Printed Shirt.html"
            })
            .when("/lalu", {
                templateUrl: ""
            })
            .when("/lalu", {
                templateUrl: ""
            })
            .when("/lalu", {
                templateUrl: ""
            })
        });