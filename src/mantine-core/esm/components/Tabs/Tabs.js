import React from 'react';
import { useId, useUncontrolled } from '@mantine/hooks';
import { TabsProvider } from './Tabs.context.js';
import { TabsList } from './TabsList/TabsList.js';
import { TabsPanel } from './TabsPanel/TabsPanel.js';
import { TabsTab } from './TabsTab/TabsTab.js';
import classes from './Tabs.module.css.js';
import { factory } from '../../core/factory/factory.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';
import { useStyles } from '../../core/styles-api/use-styles/use-styles.js';
import { getSafeId } from '../../core/utils/get-safe-id/get-safe-id.js';
import { Box } from '../../core/Box/Box.js';
import { createVarsResolver } from '../../core/styles-api/create-vars-resolver/create-vars-resolver.js';
import { getRadius } from '../../core/utils/get-size/get-size.js';
import { getThemeColor } from '../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.js';

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
const varsResolver = createVarsResolver((theme, { radius, color }) => ({
  root: {
    "--tabs-radius": getRadius(radius),
    "--tabs-color": getThemeColor(color, theme)
  }
}));
const Tabs = factory((_props, ref) => {
  const props = useProps("Tabs", defaultProps, _props);
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
  const uid = useId(id);
  const [currentTab, setCurrentTab] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange
  });
  const getStyles = useStyles({
    name: "Tabs",
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ React.createElement(
    TabsProvider,
    {
      value: {
        placement,
        value: currentTab,
        orientation,
        id: uid,
        loop,
        activateTabWithKeyboard,
        getTabId: getSafeId(`${uid}-tab`, VALUE_ERROR),
        getPanelId: getSafeId(`${uid}-panel`, VALUE_ERROR),
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
    /* @__PURE__ */ React.createElement(
      Box,
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
Tabs.classes = classes;
Tabs.displayName = "@mantine/core/Tabs";
Tabs.Tab = TabsTab;
Tabs.Panel = TabsPanel;
Tabs.List = TabsList;

export { Tabs };
//# sourceMappingURL=Tabs.js.map
