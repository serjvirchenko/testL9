/**
 * Created by admin on 5/6/2018.
 */

(function () {
    "use strict";

    angular.module("app")
        .service("WeatherService", WeatherService);

    WeatherService.$inject = ["$http"];

    function WeatherService($http) {
        var api_url = "http://api.openweathermap.org/data/2.5/";
        var appid = "3d8b309701a13f65b660fa2c64cdc517";

        this.getWeather = getWeather;
        this.getWeatherForecast = getWeatherForecast;

        function getWeather(city) {
            return $http({
                url: api_url + "weather",
                method: "GET",
                params: {
                    q: city,
                    units: "metric",
                    appid: appid
                }
            });
        }

        function getWeatherForecast(city) {
            return $http({
                url: api_url + "forecast",
                method: "GET",
                params: {
                    q: city,
                    units: "metric",
                    appid: appid
                }
            });
        }
    }
})();