var app = angular.module("nikolHouse", ['ngRoute']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/index.html", controller: "PageCtrl"})
    // Pages
    .when("/gallery", {templateUrl: "partials/gallery.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    .when("/accommodation", {templateUrl: "partials/accommodation.html", controller: "PageCtrl"})
    .when("/troyan", {templateUrl: "partials/troyan.html", controller: "PageCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);