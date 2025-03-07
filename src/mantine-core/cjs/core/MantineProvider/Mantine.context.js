'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const MantineContext = React.createContext(null);
function useMantineContext() {
  const ctx = React.useContext(MantineContext);
  if (!ctx) {
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  }
  return ctx;
}
function useMantineCssVariablesResolver() {
  return useMantineContext().cssVariablesResolver;
}
function useMantineClassNamesPrefix() {
  return useMantineContext().classNamesPrefix;
}
function useMantineStyleNonce() {
  return useMantineContext().getStyleNonce;
}

exports.MantineContext = MantineContext;
exports.useMantineClassNamesPrefix = useMantineClassNamesPrefix;
exports.useMantineContext = useMantineContext;
exports.useMantineCssVariablesResolver = useMantineCssVariablesResolver;
exports.useMantineStyleNonce = useMantineStyleNonce;
//# sourceMappingURL=Mantine.context.js.map
