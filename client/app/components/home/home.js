import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import {stepperDirective} from '../stepper/stepper.directive'

let homeModule = angular.module('home', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";
  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})

.component('home', homeComponent)
.directive('stepper', stepperDirective)
  
.name;

export default homeModule;
