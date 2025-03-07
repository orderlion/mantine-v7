'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createSafeContext = require('../../core/utils/create-safe-context/create-safe-context.js');

const [ProgressProvider, useProgressContext] = createSafeContext.createSafeContext(
  "Progress.Root component was not found in tree"
);

exports.ProgressProvider = ProgressProvider;
exports.useProgressContext = useProgressContext;
//# sourceMappingURL=Progress.context.js.map
