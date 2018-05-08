(function () {
    "use strict";

    angular.module("app")
        .component("row", {
            controller: RowController,
            templateUrl: "components/weatherComponent/components/dashboard/components/row/row.tpl.html",
            bindings: {
                inputData: "<",
                prevDate: "<"
            }
        });

    RowController.$inject = [];

    function RowController() {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        function $onInit() {
            var cYear, cMonth, cDate, pYear, pMonth, pDate;
            $ctrl.currentDate = new Date($ctrl.inputData.dt * 1000);
            cYear = $ctrl.currentDate.getFullYear();
            cMonth = $ctrl.currentDate.getMonth();
            cDate = $ctrl.currentDate.getDate();

            $ctrl.prevDate = new Date($ctrl.prevDate * 1000);
            pYear = $ctrl.prevDate.getFullYear();
            pMonth = $ctrl.prevDate.getMonth();
            pDate = $ctrl.prevDate.getDate();

            $ctrl.showDate = cYear !== pYear || cMonth !== pMonth || cDate !== pDate;
        }
    }
})();