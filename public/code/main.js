var app = angular.module("ChatApp", ['ngCookies']);

app.config(['$routeProvider', function ($routeProvider) {

    //lets configure routes
    $routeProvider
        .when("/", {
            controller: "RootController",
            templateUrl: "/public/code/views/index.html",
            data: {isPublic: true, pageTitle: "Home/Recently Scooped"}
        })
        .otherwise({redirectTo: '/'});
}]);
