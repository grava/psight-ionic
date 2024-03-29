angular.module("eliteApp", ["ionic"])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    /* .config(function ($ionicConfigProvider) {
         $ionicConfigProvider
             .tabs.style("standard")
             .tabs.position("bottom")
             .navBar.alignTitle("center")
     })*/

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state("home", {
                abstract: true,
                url: "/home",
                templateUrl: "app/home/home.html"
            })

            .state("home.leagues", {
                url: "/leagues",
                views: {
                    "tab-leagues": {
                        templateUrl: "app/home/leagues.html"
                    }
                }
            })

            .state("home.myteams", {
                url: "/myteams",
                views: {
                    "tab-myteams": {
                        templateUrl: "app/home/myteams.html"
                    }
                }
            })

            .state("app", {
                abstract: true,
                url: "/app",
                templateUrl: "app/layout/menulayout.html"
            })

            .state("app.rules", {
                url: "/rules",
                views: {
                    'mainContent': {
                        templateUrl: "app/rules/rules.html",
                    }
                }
            })

            .state("app.locations", {
                url: "/locations",
                views: {
                    'mainContent': {
                        templateUrl: "app/locations/locations.html",
                    }
                }
            })

            .state("app.standings", {
                url: "/standings",
                views: {
                    'mainContent': {
                        templateUrl: "app/standings/standings.html",
                    }
                }
            })

            .state("app.game", {
                url: "/game/:id",
                views: {
                    'mainContent': {
                        templateUrl: "app/game/game.html",
                    }
                }
            })

            .state("app.teams", {
                url: "/teams",
                views: {
                    'mainContent': {
                        templateUrl: "app/teams/teams.html",
                    }
                }
            })

            .state("app.team-detail", {
                url: "/teams/:id",
                views: {
                    'mainContent': {
                        templateUrl: "app/teams/team-detail.html",
                        controller: "teamDetailController"
                    }
                }
            })

        $urlRouterProvider.otherwise('/app/teams');
    })