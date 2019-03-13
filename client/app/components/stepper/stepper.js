import angular from 'angular';
import stepperDirective from './stepper.directive';

let stepperModule = angular.module('stepper', [
])

.directive('stepper', stepperDirective)
.name;

export default stepperModule;
