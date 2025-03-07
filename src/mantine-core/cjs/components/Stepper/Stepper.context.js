'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createSafeContext = require('../../core/utils/create-safe-context/create-safe-context.js');

const [StepperProvider, useStepperContext] = createSafeContext.createSafeContext(
  "Stepper component was not found in tree"
);

exports.StepperProvider = StepperProvider;
exports.useStepperContext = useStepperContext;
//# sourceMappingURL=Stepper.context.js.map
