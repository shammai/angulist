/**
 * Angulist
 * Datalist directive for AngularJS
 * By Shammai Ellman
 * Created: 2014-06-12
 */

angular.module('angulist', [] )
    .directive('angulist', function ($parse, $http, $sce, $timeout) {
    return {
        restrict: 'E',
        scope: {
            "returnObject": "=returnobject",
            "inputId": "@inputid",
            "optionTextField": "@optiontextfield",
            "inputClass": "@inputclass",
            "localData": "=localdata"
        },
        template: '<input class="{{inputClass}}" id="{{inputId}}" list="{{inputId}}-list" ng-model="returnValue"><datalist id="{{inputId}}-list"><option value="{{$index}}" ng-repeat="item in localData"">{{item[optionTextField]}}</option></datalist>',
        link: function($scope, elem, attrs) {
            elem.on('input', function(){
                if (elem.children(0).val() != '' ){
                    $scope.returnObject = $scope.localData[elem.children(0).val()];
                    if ($scope.returnObject != null)
                        $scope.returnValue = $scope.returnObject[$scope.optionTextField];
                    $scope.$apply();
                }
            });
        }
    };
});

