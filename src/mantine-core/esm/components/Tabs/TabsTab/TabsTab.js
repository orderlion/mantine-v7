import React from 'react';
import { useTabsContext } from '../Tabs.context.js';
import classes from '../Tabs.module.css.js';
import { UnstyledButton } from '../../UnstyledButton/UnstyledButton.js';
import { factory } from '../../../core/factory/factory.js';
import { useProps } from '../../../core/MantineProvider/use-props/use-props.js';
import { useMantineTheme } from '../../../core/MantineProvider/MantineThemeProvider/MantineThemeProvider.js';
import { useDirection } from '../../../core/DirectionProvider/DirectionProvider.js';
import { getThemeColor } from '../../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.js';
import { createScopedKeydownHandler } from '../../../core/utils/create-scoped-keydown-handler/create-scoped-keydown-handler.js';

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
const TabsTab = factory((_props, ref) => {
  const props = useProps("TabsTab", defaultProps, _props);
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
  const theme = useMantineTheme();
  const { dir } = useDirection();
  const ctx = useTabsContext();
  const active = value === ctx.value;
  const activateTab = (event) => {
    ctx.onChange(ctx.allowTabDeactivation ? value === ctx.value ? null : value : value);
    onClick == null ? void 0 : onClick(event);
  };
  const stylesApiProps = { classNames, styles, props };
  return /* @__PURE__ */ React.createElement(
    UnstyledButton,
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
      __vars: { "--tabs-color": color ? getThemeColor(color, theme) : void 0 },
      onKeyDown: createScopedKeydownHandler({
        siblingSelector: '[role="tab"]',
        parentSelector: '[role="tablist"]',
        activateOnFocus: ctx.activateTabWithKeyboard,
        loop: ctx.loop,
        orientation: ctx.orientation || "horizontal",
        dir,
        onKeyDown
      })
    }),
    leftSection && /* @__PURE__ */ React.createElement("span", __spreadProps(__spreadValues({}, ctx.getStyles("tabSection", stylesApiProps)), { "data-position": "left" }), leftSection),
    children && /* @__PURE__ */ React.createElement("span", __spreadValues({}, ctx.getStyles("tabLabel", stylesApiProps)), children),
    rightSection && /* @__PURE__ */ React.createElement("span", __spreadProps(__spreadValues({}, ctx.getStyles("tabSection", stylesApiProps)), { "data-position": "right" }), rightSection)
  );
});
TabsTab.classes = classes;
TabsTab.displayName = "@mantine/core/TabsTab";

export { TabsTab };
//# sourceMappingURL=TabsTab.js.map
