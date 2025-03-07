'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createSafeContext = require('../../core/utils/create-safe-context/create-safe-context.js');

const [GridProvider, useGridContext] = createSafeContext.createSafeContext(
  "Grid component was not found in tree"
);

exports.GridProvider = GridProvider;
exports.useGridContext = useGridContext;
//# sourceMappingURL=Grid.context.js.map
