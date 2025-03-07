import React, { useEffect } from 'react';
import { getDefaultZIndex, OptionalPortal, Progress } from '@mantine/core';
import { nprogressStore, useNprogress, resetNavigationProgressAction } from './nprogress.store.js';
import classes from './NavigationProgress.module.css.js';

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
function NavigationProgress(_a) {
  var _b = _a, {
    initialProgress = 0,
    color,
    size = 3,
    stepInterval = 500,
    withinPortal = true,
    portalProps,
    zIndex = getDefaultZIndex("max"),
    store = nprogressStore
  } = _b, others = __objRest(_b, [
    "initialProgress",
    "color",
    "size",
    "stepInterval",
    "withinPortal",
    "portalProps",
    "zIndex",
    "store"
  ]);
  store.initialize({
    mounted: false,
    progress: initialProgress,
    interval: -1,
    step: 1,
    stepInterval,
    timeouts: []
  });
  const state = useNprogress(store);
  useEffect(() => () => resetNavigationProgressAction(store), [store]);
  return /* @__PURE__ */ React.createElement(OptionalPortal, __spreadProps(__spreadValues({}, portalProps), { withinPortal }), /* @__PURE__ */ React.createElement(
    Progress,
    __spreadValues({
      radius: 0,
      value: state.progress,
      size,
      color,
      classNames: classes,
      "data-mounted": state.mounted || void 0,
      __vars: { "--nprogress-z-index": zIndex == null ? void 0 : zIndex.toString() }
    }, others)
  ));
}
NavigationProgress.displayName = "@mantine/nprogress/NavigationProgress";

export { NavigationProgress };
//# sourceMappingURL=NavigationProgress.js.map
