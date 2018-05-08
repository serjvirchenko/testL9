(function () {
    "use strict";

    angular.module("app")
        .component("dashboard", {
            controller: dashboardController,
            templateUrl: "components/weatherComponent/components/dashboard/dashboard.tpl.html",
            bindings: {
                city: "<",
                weatherData: "<"
            }
        });

    dashboardController.$inject = [];

    function dashboardController() {
        var $ctrl = this;

        $ctrl.checkDate = checkDate;

        function checkDate(current, prev) {

        }
    }
})();