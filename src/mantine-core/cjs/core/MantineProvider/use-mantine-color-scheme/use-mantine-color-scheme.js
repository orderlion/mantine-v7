'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var Mantine_context = require('../Mantine.context.js');

function disableTransition() {
  const style = document.createElement("style");
  style.innerHTML = "*, *::before, *::after {transition: none !important;}";
  style.setAttribute("data-mantine-disable-transition", "true");
  document.head.appendChild(style);
  const clear = () => document.querySelectorAll("[data-mantine-disable-transition]").forEach((element) => element.remove());
  return clear;
}
function useMantineColorScheme() {
  const clearStylesRef = React.useRef();
  const timeoutRef = React.useRef();
  const ctx = React.useContext(Mantine_context.MantineContext);
  if (!ctx) {
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  }
  const setColorScheme = (value) => {
    ctx.setColorScheme(value);
    clearStylesRef.current = disableTransition();
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      var _a;
      (_a = clearStylesRef.current) == null ? void 0 : _a.call(clearStylesRef);
    }, 10);
  };
  const clearColorScheme = () => {
    ctx.clearColorScheme();
    clearStylesRef.current = disableTransition();
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      var _a;
      (_a = clearStylesRef.current) == null ? void 0 : _a.call(clearStylesRef);
    }, 10);
  };
  const osColorScheme = hooks.useColorScheme("light", { getInitialValueInEffect: false });
  const computedColorScheme = ctx.colorScheme === "auto" ? osColorScheme : ctx.colorScheme;
  const toggleColorScheme = React.useCallback(
    () => setColorScheme(computedColorScheme === "light" ? "dark" : "light"),
    [setColorScheme, computedColorScheme]
  );
  React.useEffect(
    () => () => {
      var _a;
      (_a = clearStylesRef.current) == null ? void 0 : _a.call(clearStylesRef);
      window.clearTimeout(timeoutRef.current);
    },
    []
  );
  return {
    colorScheme: ctx.colorScheme,
    setColorScheme,
    clearColorScheme,
    toggleColorScheme
  };
}

exports.useMantineColorScheme = useMantineColorScheme;
//# sourceMappingURL=use-mantine-color-scheme.js.map
