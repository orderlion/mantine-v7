import React, { Children, cloneElement } from 'react';
import { StepperStep } from './StepperStep/StepperStep.js';
import { StepperCompleted } from './StepperCompleted/StepperCompleted.js';
import { StepperProvider } from './Stepper.context.js';
import classes from './Stepper.module.css.js';
import { factory } from '../../core/factory/factory.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';
import { useStyles } from '../../core/styles-api/use-styles/use-styles.js';
import { Box } from '../../core/Box/Box.js';
import { createVarsResolver } from '../../core/styles-api/create-vars-resolver/create-vars-resolver.js';
import { getThemeColor } from '../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.js';
import { getSize, getSpacing, getRadius, getFontSize } from '../../core/utils/get-size/get-size.js';
import { rem } from '../../core/utils/units-converters/rem.js';

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
  contentPadding: "md",
  size: "md",
  radius: "xl",
  orientation: "horizontal",
  iconPosition: "left",
  allowNextStepsSelect: true,
  wrap: true
};
const varsResolver = createVarsResolver(
  (theme, { color, iconSize, size, contentPadding, radius }) => ({
    root: {
      "--stepper-color": getThemeColor(color, theme),
      "--stepper-icon-size": iconSize === void 0 ? getSize(size, "stepper-icon-size") : rem(iconSize),
      "--stepper-content-padding": getSpacing(contentPadding),
      "--stepper-radius": getRadius(radius),
      "--stepper-fz": getFontSize(size),
      "--stepper-spacing": getSpacing(size)
    }
  })
);
const Stepper = factory((_props, ref) => {
  var _b, _c, _d;
  const props = useProps("Stepper", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    onStepClick,
    active,
    icon,
    completedIcon,
    progressIcon,
    color,
    iconSize,
    contentPadding,
    orientation,
    iconPosition,
    size,
    radius,
    allowNextStepsSelect,
    wrap
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "children",
    "onStepClick",
    "active",
    "icon",
    "completedIcon",
    "progressIcon",
    "color",
    "iconSize",
    "contentPadding",
    "orientation",
    "iconPosition",
    "size",
    "radius",
    "allowNextStepsSelect",
    "wrap"
  ]);
  const getStyles = useStyles({
    name: "Stepper",
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
  const convertedChildren = Children.toArray(children);
  const _children = convertedChildren.filter((child) => child.type !== StepperCompleted);
  const completedStep = convertedChildren.find((item) => item.type === StepperCompleted);
  const items = _children.reduce((acc, item, index) => {
    const state = active === index ? "stepProgress" : active > index ? "stepCompleted" : "stepInactive";
    const shouldAllowSelect = () => {
      if (typeof onStepClick !== "function") {
        return false;
      }
      if (typeof item.props.allowStepSelect === "boolean") {
        return item.props.allowStepSelect;
      }
      return state === "stepCompleted" || allowNextStepsSelect;
    };
    const isStepSelectionEnabled = shouldAllowSelect();
    acc.push(
      cloneElement(item, {
        icon: item.props.icon || icon || index + 1,
        key: index,
        step: index,
        state,
        onClick: () => isStepSelectionEnabled && (onStepClick == null ? void 0 : onStepClick(index)),
        allowStepClick: isStepSelectionEnabled,
        completedIcon: item.props.completedIcon || completedIcon,
        progressIcon: item.props.progressIcon || progressIcon,
        color: item.props.color || color,
        iconSize,
        radius,
        iconPosition: item.props.iconPosition || iconPosition,
        orientation,
        unstyled
      })
    );
    if (orientation === "horizontal" && index !== _children.length - 1) {
      acc.push(
        /* @__PURE__ */ React.createElement(
          "div",
          __spreadProps(__spreadValues({}, getStyles("separator")), {
            "data-active": index < active || void 0,
            "data-orientation": orientation,
            key: `separator-${index}`
          })
        )
      );
    }
    return acc;
  }, []);
  const stepContent = (_c = (_b = _children[active]) == null ? void 0 : _b.props) == null ? void 0 : _c.children;
  const completedContent = (_d = completedStep == null ? void 0 : completedStep.props) == null ? void 0 : _d.children;
  const content = active > _children.length - 1 ? completedContent : stepContent;
  return /* @__PURE__ */ React.createElement(StepperProvider, { value: { getStyles, orientation, iconPosition } }, /* @__PURE__ */ React.createElement(Box, __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), { ref, size }), others), /* @__PURE__ */ React.createElement(
    Box,
    __spreadProps(__spreadValues({}, getStyles("steps")), {
      mod: {
        orientation,
        "icon-position": iconPosition,
        wrap: wrap && orientation !== "vertical"
      }
    }),
    items
  ), content && /* @__PURE__ */ React.createElement("div", __spreadValues({}, getStyles("content")), content)));
});
Stepper.classes = classes;
Stepper.displayName = "@mantine/core/Stepper";
Stepper.Completed = StepperCompleted;
Stepper.Step = StepperStep;

export { Stepper };
//# sourceMappingURL=Stepper.js.map
