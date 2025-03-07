import React, { useId, useEffect } from 'react';
import { factory, useProps, ScrollArea } from '@mantine/core';
import classes from './Spotlight.module.css.js';
import { useSpotlightContext } from './Spotlight.context.js';
import { spotlightActions } from './spotlight.store.js';

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
const SpotlightActionsList = factory((props, ref) => {
  const _a = useProps(
    "SpotlightActionsList",
    defaultProps,
    props
  ), { className, style, id, children, vars, classNames, styles } = _a, others = __objRest(_a, ["className", "style", "id", "children", "vars", "classNames", "styles"]);
  const ctx = useSpotlightContext();
  const generatedId = `mantine-${useId().replaceAll(":", "")}`;
  const listId = id || generatedId;
  useEffect(() => {
    spotlightActions.setListId(listId, ctx.store);
    return () => spotlightActions.setListId("", ctx.store);
  }, []);
  return /* @__PURE__ */ React.createElement(
    ScrollArea.Autosize,
    __spreadValues(__spreadProps(__spreadValues({}, ctx.getStyles("actionsList", { className, style, classNames, styles })), {
      ref,
      type: "scroll",
      scrollbarSize: "var(--spotlight-actions-list-padding)",
      offsetScrollbars: "y",
      id: listId
    }), others),
    children
  );
});
SpotlightActionsList.classes = classes;
SpotlightActionsList.displayName = "@mantine/spotlight/SpotlightActionsList";

export { SpotlightActionsList };
//# sourceMappingURL=SpotlightActionsList.js.map
