(function () {
    "use strict";

    angular.module('eliteApp').controller("teamDetailController", ["$stateParams", teamDetailController]);

    function teamDetailController(stateParams) {

        var vm = this;

        console.log("$stateParams", stateParams);

    };
})();