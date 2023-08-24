'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const code = `
import {
  Button,
  Group,
  MantineProvider,
  defaultVariantColorsResolver,
  VariantColorsResolver,
  parseThemeColor,
  rem,
  rgba,
  darken,
} from '@mantine/core';

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  });

  // Override some properties for variant
  if (parsedColor.isThemeColor && parsedColor.color === 'lime' && input.variant === 'filled') {
    return { ...defaultResolvedColors, color: 'var(--mantine-color-black)' };
  }

  // Completely override variant
  if (input.variant === 'light') {
    return {
      background: rgba(parsedColor.value, 0.1),
      hover: rgba(parsedColor.value, 0.15),
      border: \`\${rem(1)} solid \${parsedColor.value}\`,
      color: darken(parsedColor.value, 0.1),
    };
  }

  // Add new variants support
  if (input.variant === 'danger') {
    return {
      background: 'var(--mantine-color-red-9)',
      hover: 'var(--mantine-color-red-8)',
      color: 'var(--mantine-color-white)',
      border: 'none',
    };
  }

  return defaultResolvedColors;
};

function Demo() {
  return (
    <MantineProvider theme={{ variantColorResolver }}>
      <Group>
        <Button color="lime.4" variant="filled">
          Lime filled button
        </Button>

        <Button color="orange" variant="light">
          Orange light button
        </Button>

        <Button variant="danger">Danger button</Button>
      </Group>
    </MantineProvider>
  );
}
`;
const variantColorResolver = (input) => {
  const defaultResolvedColors = core.defaultVariantColorsResolver(input);
  const parsedColor = core.parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme
  });
  if (parsedColor.isThemeColor && parsedColor.color === "lime" && input.variant === "filled") {
    return __spreadProps(__spreadValues({}, defaultResolvedColors), { color: "var(--mantine-color-black)" });
  }
  if (input.variant === "light") {
    return {
      background: core.rgba(parsedColor.value, 0.1),
      hover: core.rgba(parsedColor.value, 0.15),
      border: `${core.rem(1)} solid ${parsedColor.value}`,
      color: core.darken(parsedColor.value, 0.1)
    };
  }
  if (input.variant === "danger") {
    return {
      background: "var(--mantine-color-red-9)",
      hover: "var(--mantine-color-red-8)",
      color: "var(--mantine-color-white)",
      border: "none"
    };
  }
  return defaultResolvedColors;
};
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.MantineThemeProvider, { theme: { variantColorResolver } }, /* @__PURE__ */ React__default.createElement(core.Group, null, /* @__PURE__ */ React__default.createElement(core.Button, { color: "lime.4", variant: "filled" }, "Lime filled button"), /* @__PURE__ */ React__default.createElement(core.Button, { color: "orange", variant: "light" }, "Orange light button"), /* @__PURE__ */ React__default.createElement(core.Button, { variant: "danger" }, "Danger button")));
}
const variantColorsResolver = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

exports.variantColorsResolver = variantColorsResolver;
//# sourceMappingURL=Theming.demo.variantColorsResolver.js.map
