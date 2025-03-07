'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Tabs_context = require('../Tabs.context.js');
var Tabs_module = require('../Tabs.module.css.js');
var UnstyledButton = require('../../UnstyledButton/UnstyledButton.js');
var factory = require('../../../core/factory/factory.js');
var useProps = require('../../../core/MantineProvider/use-props/use-props.js');
var MantineThemeProvider = require('../../../core/MantineProvider/MantineThemeProvider/MantineThemeProvider.js');
var DirectionProvider = require('../../../core/DirectionProvider/DirectionProvider.js');
var getThemeColor = require('../../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.js');
var createScopedKeydownHandler = require('../../../core/utils/create-scoped-keydown-handler/create-scoped-keydown-handler.js');

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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const defaultProps = {};
const TabsTab = factory.factory((_props, ref) => {
  const props = useProps.useProps("TabsTab", defaultProps, _props);
  const _a = props, {
    className,
    children,
    rightSection,
    leftSection,
    value,
    onClick,
    onKeyDown,
    disabled,
    color,
    style,
    classNames,
    styles,
    vars
  } = _a, others = __objRest(_a, [
    "className",
    "children",
    "rightSection",
    "leftSection",
    "value",
    "onClick",
    "onKeyDown",
    "disabled",
    "color",
    "style",
    "classNames",
    "styles",
    "vars"
  ]);
  const theme = MantineThemeProvider.useMantineTheme();
  const { dir } = DirectionProvider.useDirection();
  const ctx = Tabs_context.useTabsContext();
  const active = value === ctx.value;
  const activateTab = (event) => {
    ctx.onChange(ctx.allowTabDeactivation ? value === ctx.value ? null : value : value);
    onClick == null ? void 0 : onClick(event);
  };
  const stylesApiProps = { classNames, styles, props };
  return /* @__PURE__ */ React__default.createElement(
    UnstyledButton.UnstyledButton,
    __spreadProps(__spreadValues(__spreadValues({}, others), ctx.getStyles("tab", __spreadValues({ className, style, variant: ctx.variant }, stylesApiProps))), {
      disabled,
      unstyled: ctx.unstyled,
      variant: ctx.variant,
      mod: {
        active,
        disabled,
        orientation: ctx.orientation,
        inverted: ctx.inverted,
        placement: ctx.orientation === "vertical" && ctx.placement
      },
      ref,
      role: "tab",
      id: ctx.getTabId(value),
      "aria-selected": active,
      tabIndex: active || ctx.value === null ? 0 : -1,
      "aria-controls": ctx.getPanelId(value),
      onClick: activateTab,
      __vars: { "--tabs-color": color ? getThemeColor.getThemeColor(color, theme) : void 0 },
      onKeyDown: createScopedKeydownHandler.createScopedKeydownHandler({
        siblingSelector: '[role="tab"]',
        parentSelector: '[role="tablist"]',
        activateOnFocus: ctx.activateTabWithKeyboard,
        loop: ctx.loop,
        orientation: ctx.orientation || "horizontal",
        dir,
        onKeyDown
      })
    }),
    leftSection && /* @__PURE__ */ React__default.createElement("span", __spreadProps(__spreadValues({}, ctx.getStyles("tabSection", stylesApiProps)), { "data-position": "left" }), leftSection),
    children && /* @__PURE__ */ React__default.createElement("span", __spreadValues({}, ctx.getStyles("tabLabel", stylesApiProps)), children),
    rightSection && /* @__PURE__ */ React__default.createElement("span", __spreadProps(__spreadValues({}, ctx.getStyles("tabSection", stylesApiProps)), { "data-position": "right" }), rightSection)
  );
});
TabsTab.classes = Tabs_module['default'];
TabsTab.displayName = "@mantine/core/TabsTab";

exports.TabsTab = TabsTab;
//# sourceMappingURL=TabsTab.js.map
