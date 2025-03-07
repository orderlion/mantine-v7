'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createSafeContext = require('../../core/utils/create-safe-context/create-safe-context.js');

const [PaginationProvider, usePaginationContext] = createSafeContext.createSafeContext(
  "Pagination.Root component was not found in tree"
);

exports.PaginationProvider = PaginationProvider;
exports.usePaginationContext = usePaginationContext;
//# sourceMappingURL=Pagination.context.js.map
