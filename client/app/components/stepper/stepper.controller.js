export class StepperController {
  constructor() {
    'ngInject'
    this.name = 'home';
    this.isFirstStep = false;
    this.isSecondStep = false;
    this.updateFirstPath = () => {
      history.pushState(null, null, '/form/step/one')
      this.isFirstStep = true;
    }
    this.updateToSecondPath = () => {
      history.pushState(null, null, '/form/step/two')
      this.isSecondStep = true;
    }
  }
}
