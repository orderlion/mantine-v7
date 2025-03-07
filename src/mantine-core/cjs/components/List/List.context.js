'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createSafeContext = require('../../core/utils/create-safe-context/create-safe-context.js');

const [ListProvider, useListContext] = createSafeContext.createSafeContext(
  "List component was not found in tree"
);

exports.ListProvider = ListProvider;
exports.useListContext = useListContext;
//# sourceMappingURL=List.context.js.map
