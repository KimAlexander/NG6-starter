import template from './template.html';
import {StepperController} from './stepper.controller';
import './stepper.scss';

export function stepperDirective() {
  'ngInject';
  return {
    template: template,
    controller: StepperController,
    controllerAs: 'stepper',
    scope: {
      state: '@'
    },
    link: (scope, elem, attrs, ctrl) => {
      scope.$watch('state', (v) => {
        if (v) {
          const binding = JSON.parse(v);
          if (binding.name && binding.age && binding.gender) {
            ctrl.updateFirstPath();
          }
          if (binding.name && binding.age && binding.gender
              && binding.phone && binding.email) {
            ctrl.updateToSecondPath();
          }
        } 
      });
    } 
  }
}
