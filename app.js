/// /// <reference path="node_modeules/@types/angular/index.d.ts" />

(function(){
"use strict";

var mainModule = angular.module('main');
mainModule.controller('MainController', ['$scope', MainController]);

function MainController($scope){
   var vm=$scope;
   vm.orderQuantity = 30;
}

})();