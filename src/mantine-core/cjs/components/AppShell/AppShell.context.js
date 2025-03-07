'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createSafeContext = require('../../core/utils/create-safe-context/create-safe-context.js');

const [AppShellProvider, useAppShellContext] = createSafeContext.createSafeContext(
  "AppShell was not found in tree"
);

exports.AppShellProvider = AppShellProvider;
exports.useAppShellContext = useAppShellContext;
//# sourceMappingURL=AppShell.context.js.map
