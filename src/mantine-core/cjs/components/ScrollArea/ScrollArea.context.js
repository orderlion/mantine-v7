'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createSafeContext = require('../../core/utils/create-safe-context/create-safe-context.js');

const [ScrollAreaProvider, useScrollAreaContext] = createSafeContext.createSafeContext(
  "ScrollArea.Root component was not found in tree"
);

exports.ScrollAreaProvider = ScrollAreaProvider;
exports.useScrollAreaContext = useScrollAreaContext;
//# sourceMappingURL=ScrollArea.context.js.map
