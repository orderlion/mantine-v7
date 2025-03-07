'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createSafeContext = require('../../core/utils/create-safe-context/create-safe-context.js');

const [MenuContextProvider, useMenuContext] = createSafeContext.createSafeContext(
  "Menu component was not found in the tree"
);

exports.MenuContextProvider = MenuContextProvider;
exports.useMenuContext = useMenuContext;
//# sourceMappingURL=Menu.context.js.map
