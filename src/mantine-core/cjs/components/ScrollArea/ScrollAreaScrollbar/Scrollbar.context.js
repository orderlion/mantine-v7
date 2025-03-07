'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createSafeContext = require('../../../core/utils/create-safe-context/create-safe-context.js');

const [ScrollbarProvider, useScrollbarContext] = createSafeContext.createSafeContext(
  "ScrollAreaScrollbar was not found in tree"
);

exports.ScrollbarProvider = ScrollbarProvider;
exports.useScrollbarContext = useScrollbarContext;
//# sourceMappingURL=Scrollbar.context.js.map
