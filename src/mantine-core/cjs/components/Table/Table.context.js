'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createSafeContext = require('../../core/utils/create-safe-context/create-safe-context.js');

const [TableProvider, useTableContext] = createSafeContext.createSafeContext(
  "Table component was not found in the tree"
);

exports.TableProvider = TableProvider;
exports.useTableContext = useTableContext;
//# sourceMappingURL=Table.context.js.map
