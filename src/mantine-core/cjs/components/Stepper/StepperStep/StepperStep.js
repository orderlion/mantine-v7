'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Stepper_context = require('../Stepper.context.js');
var Stepper_module = require('../Stepper.module.css.js');
var UnstyledButton = require('../../UnstyledButton/UnstyledButton.js');
var Transition = require('../../Transition/Transition.js');
var Loader = require('../../Loader/Loader.js');
var CheckIcon = require('../../Checkbox/CheckIcon.js');
var factory = require('../../../core/factory/factory.js');
var useProps = require('../../../core/MantineProvider/use-props/use-props.js');
var MantineThemeProvider = require('../../../core/MantineProvider/MantineThemeProvider/MantineThemeProvider.js');
var getThemeColor = require('../../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.js');

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
const getStepFragment = (Fragment, step) => {
  if (typeof Fragment === "function") {
    return /* @__PURE__ */ React__default.createElement(Fragment, { step: step || 0 });
  }
  return Fragment;
};
const defaultProps = {
  withIcon: true,
  allowStepClick: true,
  iconPosition: "left"
};
const StepperStep = factory.factory((props, ref) => {
  const _a = useProps.useProps("StepperStep", defaultProps, props), {
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
  const ctx = Stepper_context.useStepperContext();
  const theme = MantineThemeProvider.useMantineTheme();
  const stylesApi = { classNames, styles };
  const _icon = state === "stepCompleted" ? null : state === "stepProgress" ? progressIcon : icon;
  const dataAttributes = {
    "data-progress": state === "stepProgress" || void 0,
    "data-completed": state === "stepCompleted" || void 0
  };
  return /* @__PURE__ */ React__default.createElement(
    UnstyledButton.UnstyledButton,
    __spreadProps(__spreadValues(__spreadValues(__spreadProps(__spreadValues({}, ctx.getStyles("step", __spreadValues({ className, style, variant: ctx.orientation }, stylesApi))), {
      mod: { "icon-position": iconPosition || ctx.iconPosition, "allow-click": allowStepClick },
      ref
    }), dataAttributes), others), {
      __vars: { "--step-color": color ? getThemeColor.getThemeColor(color, theme) : void 0 },
      tabIndex: allowStepClick ? 0 : -1
    }),
    withIcon && /* @__PURE__ */ React__default.createElement("span", __spreadValues({}, ctx.getStyles("stepWrapper", stylesApi)), /* @__PURE__ */ React__default.createElement("span", __spreadValues(__spreadValues({}, ctx.getStyles("stepIcon", stylesApi)), dataAttributes), /* @__PURE__ */ React__default.createElement(Transition.Transition, { mounted: state === "stepCompleted", transition: "pop", duration: 200 }, (transitionStyles) => /* @__PURE__ */ React__default.createElement(
      "span",
      __spreadValues({}, ctx.getStyles("stepCompletedIcon", __spreadValues({ style: transitionStyles }, stylesApi))),
      loading ? /* @__PURE__ */ React__default.createElement(
        Loader.Loader,
        __spreadValues({
          color: "var(--mantine-color-white)",
          size: "calc(var(--stepper-icon-size) / 2)"
        }, ctx.getStyles("stepLoader", stylesApi))
      ) : getStepFragment(completedIcon, step) || /* @__PURE__ */ React__default.createElement(CheckIcon.CheckIcon, { size: "60%" })
    )), state !== "stepCompleted" ? loading ? /* @__PURE__ */ React__default.createElement(
      Loader.Loader,
      __spreadProps(__spreadValues({}, ctx.getStyles("stepLoader", stylesApi)), {
        size: "calc(var(--stepper-icon-size) / 2)",
        color
      })
    ) : getStepFragment(_icon || icon, step) : null), orientation === "vertical" && /* @__PURE__ */ React__default.createElement(
      "span",
      __spreadProps(__spreadValues({}, ctx.getStyles("verticalSeparator", stylesApi)), {
        "data-active": state === "stepCompleted" || void 0
      })
    )),
    (label || description) && /* @__PURE__ */ React__default.createElement(
      "span",
      __spreadProps(__spreadValues({}, ctx.getStyles("stepBody", stylesApi)), {
        "data-orientation": ctx.orientation,
        "data-icon-position": iconPosition || ctx.iconPosition
      }),
      label && /* @__PURE__ */ React__default.createElement("span", __spreadValues({}, ctx.getStyles("stepLabel", stylesApi)), getStepFragment(label, step)),
      description && /* @__PURE__ */ React__default.createElement("span", __spreadValues({}, ctx.getStyles("stepDescription", stylesApi)), getStepFragment(description, step))
    )
  );
});
StepperStep.classes = Stepper_module['default'];
StepperStep.displayName = "@mantine/core/StepperStep";

exports.StepperStep = StepperStep;
//# sourceMappingURL=StepperStep.js.map
