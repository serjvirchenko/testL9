/**
 * Created by admin on 5/6/2018.
 */

(function () {
    "use strict";

    angular.module("app")
        .component("item", {
            bindings: {
                cityData: "<"
            },
            controller: ItemController,
            template: '' +
            '<div>' +
            '   <h3>{{$ctrl.cityData.data.name}}</h3>' +
            '   <span>{{$ctrl.cityData.data.main.temp_min}} - {{$ctrl.cityData.data.main.temp_max}} C</span><br>' +
            '   <span>{{$ctrl.cityData.data.wind.speed}} m/s</span>' +
            '</div>'
        });

    ItemController.$inject = [];

    function ItemController() {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        function $onInit() {

        }
    }
})();