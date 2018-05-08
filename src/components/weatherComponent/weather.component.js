/**
 * Created by admin on 5/6/2018.
 */

(function () {
    "use strict";

    angular.module("app")
        .component("weatherComponent", {
            controller: WeatherComponentController,
            templateUrl: "components/weatherComponent/weather.tpl.html"
        });

    WeatherComponentController.$inject = ["WeatherService", "$q"];

    function WeatherComponentController(WeatherService, $q) {
        var $ctrl = this;

        $ctrl.WeatherService = WeatherService;

        $ctrl.cities = ["Kyiv", "Warsaw", "Munich", "Paris", "London"];
        $ctrl.result = null;
        $ctrl.selectedCity = null;

        $ctrl.$onInit = $onInit;
        $ctrl.getWeatherForecast = getWeatherForecast;

        function $onInit() {
            var qArr = [];

            angular.forEach($ctrl.cities, function (city) {
                qArr.push($ctrl.WeatherService.getWeather(city));
            });
            $q.all(qArr).then(function (data) {
                $ctrl.citiesData = data;
            })
        }

        function getWeatherForecast(city) {
            $ctrl.selectedCity = city;

            WeatherService.getWeatherForecast(city)
                .then(function(data) {
                    $ctrl.result = data.data;
                })
        }
    }
})();