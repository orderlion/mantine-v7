import React from 'react';
import { AvatarGroupProvider } from './AvatarGroup.context.js';
import classes from '../Avatar.module.css.js';
import { factory } from '../../../core/factory/factory.js';
import { useProps } from '../../../core/MantineProvider/use-props/use-props.js';
import { useStyles } from '../../../core/styles-api/use-styles/use-styles.js';
import { Box } from '../../../core/Box/Box.js';
import { createVarsResolver } from '../../../core/styles-api/create-vars-resolver/create-vars-resolver.js';
import { getSpacing } from '../../../core/utils/get-size/get-size.js';

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
const defaultProps = {
  spacing: "sm"
};
const varsResolver = createVarsResolver((_, { spacing }) => ({
  group: {
    "--ag-spacing": getSpacing(spacing)
  }
}));
const AvatarGroup = factory((_props, ref) => {
  const props = useProps("AvatarGroup", defaultProps, _props);
  const _a = props, { classNames, className, style, styles, unstyled, vars, spacing } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars", "spacing"]);
  const getStyles = useStyles({
    name: "AvatarGroup",
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    rootSelector: "group"
  });
  return /* @__PURE__ */ React.createElement(AvatarGroupProvider, { value: true }, /* @__PURE__ */ React.createElement(Box, __spreadValues(__spreadValues({ ref }, getStyles("group")), others)));
});
AvatarGroup.classes = classes;
AvatarGroup.displayName = "@mantine/core/AvatarGroup";

export { AvatarGroup };
//# sourceMappingURL=AvatarGroup.js.map
