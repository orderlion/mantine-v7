'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createSafeContext = require('../../core/utils/create-safe-context/create-safe-context.js');

const [DrawerProvider, useDrawerContext] = createSafeContext.createSafeContext(
  "Drawer component was not found in tree"
);

exports.DrawerProvider = DrawerProvider;
exports.useDrawerContext = useDrawerContext;
//# sourceMappingURL=Drawer.context.js.map
