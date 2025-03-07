'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createSafeContext = require('../../core/utils/create-safe-context/create-safe-context.js');

const [PopoverContextProvider, usePopoverContext] = createSafeContext.createSafeContext(
  "Popover component was not found in the tree"
);

exports.PopoverContextProvider = PopoverContextProvider;
exports.usePopoverContext = usePopoverContext;
//# sourceMappingURL=Popover.context.js.map
