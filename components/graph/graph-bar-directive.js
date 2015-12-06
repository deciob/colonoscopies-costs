(function() {
  "use strict";

  angular.module("myApp.graph.graph-bar", [

  ]).directive("bar", function($http, $timeout, $window) {
    return {
      link: function(scope, element) {

        scope.state = {};

        var chart = d3.nightcharts.bar();
        var data;
        var chartContainer = d3.select(element[0]);

        scope.$watch("data", function(_data) {
          if (!_data) { return; }
          data = _data;
          setDimensions(true);
        });
        
        var configuration = {
          devMode: true,
          duration: 900,
          //barBackground: true, //BUG!!!!
          stacked: true,
          invertOrientation: true,
          margin: {top: 20, right: 10, bottom: 50, left: 140},
          yOffset: 2,
          barClassSetter: function(d) {
            if (d[0] == 'Europe') {
              return 'eu';
            }
            return "";
          },
          xAxisLabel: {text: 'US $'},
        };

        d3.entries(
          configuration
        ).forEach(function(c) {
          chart[c.key](c.value);
        });

        var getDimensions = function() {
          var parent = element.parent()[0];
          var width = parent.clientWidth;
          var height = parent.clientHeight - 60;
          return {width: width, height: height};
        };

        var setDimensions = function(callChart) {
          var dim = getDimensions();
          chart.width(dim.width).height(dim.height);
          chart.yAxis(d3.svg.axis().ticks(4).tickSize(-(dim.height-70), 0, 0));
          if (callChart) {
            scope.sort('city');
            chartContainer.data([data]).call(chart);
          }
          return dim;
        };

        var setDimensionsAndCall = setDimensions.bind(null, true);
        angular.element($window).on("resize", setDimensionsAndCall);
        scope.$on("$destroy", function() {
          angular.element($window).off("resize", setDimensionsAndCall);
        });

        scope.sort = function(direction) {
          var d0 = data[0];
          var d1 = data[1];
          d0.map(function (d, i) {
            return {
              value1: d,
              value2: d1[i]
            };
          }).sort(function (a, b) {
            if (direction == 'high') {
              return ((a.value1[1] + a.value2[1] < b.value1[1] + b.value2[1]) ? -1 :
               ((a.value1[1] + a.value2[1] == b.value1[1] + b.value2[1]) ? 0 : 1));
            } else if (direction == 'low') {
              return ((a.value1[1] < b.value1[1]) ? -1 : ((a.value1[1] == b.value1[1]) ? 0 : 1));
            } else if (direction == 'width') {
              return ((a.value2[1] - a.value1[1] < b.value2[1] - b.value1[1]) ? -1 :
               ((a.value2[1] - a.value1[1] == b.value2[1] - b.value1[1]) ? 0 : 1));
            } else if (direction == 'city') {
              return ((a.value1[0] > b.value1[0]) ? -1 : ((a.value1[0] == b.value1[0]) ? 0 : 1));
            }
          }).forEach(function (d, i) {
            d0[i] = d.value1;
            d1[i] = d.value2;
          });

          chartContainer.data([data]).call(chart);
        };

      },
      restrict: "A",
      scope: {
        data: "="
      },
      templateUrl: "components/graph/graph-bar-directive.html"
    };
  })
}());
