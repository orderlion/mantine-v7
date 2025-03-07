import React, { useState } from 'react';
import { useElementSize } from '@mantine/hooks';
import classes from './Spoiler.module.css.js';
import { Anchor } from '../Anchor/Anchor.js';
import { factory } from '../../core/factory/factory.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';
import { useStyles } from '../../core/styles-api/use-styles/use-styles.js';
import { rem } from '../../core/utils/units-converters/rem.js';
import { Box } from '../../core/Box/Box.js';
import { createVarsResolver } from '../../core/styles-api/create-vars-resolver/create-vars-resolver.js';

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
const defaultProps = {
  maxHeight: 100,
  initialState: false
};
const varsResolver = createVarsResolver((_, { transitionDuration }) => ({
  root: {
    "--spoiler-transition-duration": transitionDuration !== void 0 ? `${transitionDuration}ms` : void 0
  }
}));
const Spoiler = factory((_props, ref) => {
  const props = useProps("Spoiler", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    initialState,
    maxHeight,
    hideLabel,
    showLabel,
    children,
    controlRef
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "initialState",
    "maxHeight",
    "hideLabel",
    "showLabel",
    "children",
    "controlRef"
  ]);
  const getStyles = useStyles({
    name: "Spoiler",
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const [show, setShowState] = useState(initialState);
  const { ref: contentRef, height } = useElementSize();
  const spoiler = maxHeight < height;
  const spoilerMoreContent = show ? hideLabel : showLabel;
  const s = {
    maxHeight: !show ? rem(maxHeight) : height ? rem(height) : void 0
  };
  return /* @__PURE__ */ React.createElement(Box, __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), { ref }), others), /* @__PURE__ */ React.createElement("div", __spreadProps(__spreadValues({}, getStyles("content", { style: s })), { "data-reduce-motion": true }), /* @__PURE__ */ React.createElement("div", { ref: contentRef }, children)), spoiler && /* @__PURE__ */ React.createElement(
    Anchor,
    __spreadValues({
      component: "button",
      ref: controlRef,
      onClick: () => setShowState((opened) => !opened)
    }, getStyles("control")),
    spoilerMoreContent
  ));
});
Spoiler.classes = classes;
Spoiler.displayName = "@mantine/core/Spoiler";

export { Spoiler };
//# sourceMappingURL=Spoiler.js.map
