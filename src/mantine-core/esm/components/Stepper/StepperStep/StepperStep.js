import React from 'react';
import { useStepperContext } from '../Stepper.context.js';
import classes from '../Stepper.module.css.js';
import { UnstyledButton } from '../../UnstyledButton/UnstyledButton.js';
import { Transition } from '../../Transition/Transition.js';
import { Loader } from '../../Loader/Loader.js';
import { CheckIcon } from '../../Checkbox/CheckIcon.js';
import { factory } from '../../../core/factory/factory.js';
import { useProps } from '../../../core/MantineProvider/use-props/use-props.js';
import { useMantineTheme } from '../../../core/MantineProvider/MantineThemeProvider/MantineThemeProvider.js';
import { getThemeColor } from '../../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.js';

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
const getStepFragment = (Fragment, step) => {
  if (typeof Fragment === "function") {
    return /* @__PURE__ */ React.createElement(Fragment, { step: step || 0 });
  }
  return Fragment;
};
const defaultProps = {
  withIcon: true,
  allowStepClick: true,
  iconPosition: "left"
};
const StepperStep = factory((props, ref) => {
  const _a = useProps("StepperStep", defaultProps, props), {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    step,
    state,
    color,
    icon,
    completedIcon,
    progressIcon,
    label,
    description,
    withIcon,
    iconSize,
    loading,
    allowStepClick,
    allowStepSelect,
    iconPosition,
    orientation
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "step",
    "state",
    "color",
    "icon",
    "completedIcon",
    "progressIcon",
    "label",
    "description",
    "withIcon",
    "iconSize",
    "loading",
    "allowStepClick",
    "allowStepSelect",
    "iconPosition",
    "orientation"
  ]);
  const ctx = useStepperContext();
  const theme = useMantineTheme();
  const stylesApi = { classNames, styles };
  const _icon = state === "stepCompleted" ? null : state === "stepProgress" ? progressIcon : icon;
  const dataAttributes = {
    "data-progress": state === "stepProgress" || void 0,
    "data-completed": state === "stepCompleted" || void 0
  };
  return /* @__PURE__ */ React.createElement(
    UnstyledButton,
    __spreadProps(__spreadValues(__spreadValues(__spreadProps(__spreadValues({}, ctx.getStyles("step", __spreadValues({ className, style, variant: ctx.orientation }, stylesApi))), {
      mod: { "icon-position": iconPosition || ctx.iconPosition, "allow-click": allowStepClick },
      ref
    }), dataAttributes), others), {
      __vars: { "--step-color": color ? getThemeColor(color, theme) : void 0 },
      tabIndex: allowStepClick ? 0 : -1
    }),
    withIcon && /* @__PURE__ */ React.createElement("span", __spreadValues({}, ctx.getStyles("stepWrapper", stylesApi)), /* @__PURE__ */ React.createElement("span", __spreadValues(__spreadValues({}, ctx.getStyles("stepIcon", stylesApi)), dataAttributes), /* @__PURE__ */ React.createElement(Transition, { mounted: state === "stepCompleted", transition: "pop", duration: 200 }, (transitionStyles) => /* @__PURE__ */ React.createElement(
      "span",
      __spreadValues({}, ctx.getStyles("stepCompletedIcon", __spreadValues({ style: transitionStyles }, stylesApi))),
      loading ? /* @__PURE__ */ React.createElement(
        Loader,
        __spreadValues({
          color: "var(--mantine-color-white)",
          size: "calc(var(--stepper-icon-size) / 2)"
        }, ctx.getStyles("stepLoader", stylesApi))
      ) : getStepFragment(completedIcon, step) || /* @__PURE__ */ React.createElement(CheckIcon, { size: "60%" })
    )), state !== "stepCompleted" ? loading ? /* @__PURE__ */ React.createElement(
      Loader,
      __spreadProps(__spreadValues({}, ctx.getStyles("stepLoader", stylesApi)), {
        size: "calc(var(--stepper-icon-size) / 2)",
        color
      })
    ) : getStepFragment(_icon || icon, step) : null), orientation === "vertical" && /* @__PURE__ */ React.createElement(
      "span",
      __spreadProps(__spreadValues({}, ctx.getStyles("verticalSeparator", stylesApi)), {
        "data-active": state === "stepCompleted" || void 0
      })
    )),
    (label || description) && /* @__PURE__ */ React.createElement(
      "span",
      __spreadProps(__spreadValues({}, ctx.getStyles("stepBody", stylesApi)), {
        "data-orientation": ctx.orientation,
        "data-icon-position": iconPosition || ctx.iconPosition
      }),
      label && /* @__PURE__ */ React.createElement("span", __spreadValues({}, ctx.getStyles("stepLabel", stylesApi)), getStepFragment(label, step)),
      description && /* @__PURE__ */ React.createElement("span", __spreadValues({}, ctx.getStyles("stepDescription", stylesApi)), getStepFragment(description, step))
    )
  );
});
StepperStep.classes = classes;
StepperStep.displayName = "@mantine/core/StepperStep";

export { StepperStep };
//# sourceMappingURL=StepperStep.js.map
