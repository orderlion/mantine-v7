'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var Tabs_context = require('./Tabs.context.js');
var TabsList = require('./TabsList/TabsList.js');
var TabsPanel = require('./TabsPanel/TabsPanel.js');
var TabsTab = require('./TabsTab/TabsTab.js');
var Tabs_module = require('./Tabs.module.css.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
var getSafeId = require('../../core/utils/get-safe-id/get-safe-id.js');
var Box = require('../../core/Box/Box.js');
var createVarsResolver = require('../../core/styles-api/create-vars-resolver/create-vars-resolver.js');
var getSize = require('../../core/utils/get-size/get-size.js');
var getThemeColor = require('../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
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
const VALUE_ERROR = "Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value";
const defaultProps = {
  keepMounted: true,
  orientation: "horizontal",
  loop: true,
  activateTabWithKeyboard: true,
  allowTabDeactivation: false,
  unstyled: false,
  inverted: false,
  variant: "default",
  placement: "left"
};
const varsResolver = createVarsResolver.createVarsResolver((theme, { radius, color }) => ({
  root: {
    "--tabs-radius": getSize.getRadius(radius),
    "--tabs-color": getThemeColor.getThemeColor(color, theme)
  }
}));
const Tabs = factory.factory((_props, ref) => {
  const props = useProps.useProps("Tabs", defaultProps, _props);
  const _a = props, {
    defaultValue,
    value,
    onChange,
    orientation,
    children,
    loop,
    id,
    activateTabWithKeyboard,
    allowTabDeactivation,
    variant,
    color,
    radius,
    inverted,
    placement,
    keepMounted,
    classNames,
    styles,
    unstyled,
    className,
    style,
    vars
  } = _a, others = __objRest(_a, [
    "defaultValue",
    "value",
    "onChange",
    "orientation",
    "children",
    "loop",
    "id",
    "activateTabWithKeyboard",
    "allowTabDeactivation",
    "variant",
    "color",
    "radius",
    "inverted",
    "placement",
    "keepMounted",
    "classNames",
    "styles",
    "unstyled",
    "className",
    "style",
    "vars"
  ]);
  const uid = hooks.useId(id);
  const [currentTab, setCurrentTab] = hooks.useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange
  });
  const getStyles = useStyles.useStyles({
    name: "Tabs",
    props,
    classes: Tabs_module['default'],
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ React__default.createElement(
    Tabs_context.TabsProvider,
    {
      value: {
        placement,
        value: currentTab,
        orientation,
        id: uid,
        loop,
        activateTabWithKeyboard,
        getTabId: getSafeId.getSafeId(`${uid}-tab`, VALUE_ERROR),
        getPanelId: getSafeId.getSafeId(`${uid}-panel`, VALUE_ERROR),
        onChange: setCurrentTab,
        allowTabDeactivation,
        variant,
        color,
        radius,
        inverted,
        keepMounted,
        unstyled,
        getStyles
      }
    },
    /* @__PURE__ */ React__default.createElement(
      Box.Box,
      __spreadValues(__spreadValues({
        ref,
        id: uid,
        variant,
        mod: {
          orientation,
          inverted: orientation === "horizontal" && inverted,
          placement: orientation === "vertical" && placement
        }
      }, getStyles("root")), others),
      children
    )
  );
});
Tabs.classes = Tabs_module['default'];
Tabs.displayName = "@mantine/core/Tabs";
Tabs.Tab = TabsTab.TabsTab;
Tabs.Panel = TabsPanel.TabsPanel;
Tabs.List = TabsList.TabsList;

exports.Tabs = Tabs;
//# sourceMappingURL=Tabs.js.map
