'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var StepperStep = require('./StepperStep/StepperStep.js');
var StepperCompleted = require('./StepperCompleted/StepperCompleted.js');
var Stepper_context = require('./Stepper.context.js');
var Stepper_module = require('./Stepper.module.css.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
var Box = require('../../core/Box/Box.js');
var createVarsResolver = require('../../core/styles-api/create-vars-resolver/create-vars-resolver.js');
var getThemeColor = require('../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.js');
var getSize = require('../../core/utils/get-size/get-size.js');
var rem = require('../../core/utils/units-converters/rem.js');

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
const defaultProps = {
  contentPadding: "md",
  size: "md",
  radius: "xl",
  orientation: "horizontal",
  iconPosition: "left",
  allowNextStepsSelect: true,
  wrap: true
};
const varsResolver = createVarsResolver.createVarsResolver(
  (theme, { color, iconSize, size, contentPadding, radius }) => ({
    root: {
      "--stepper-color": getThemeColor.getThemeColor(color, theme),
      "--stepper-icon-size": iconSize === void 0 ? getSize.getSize(size, "stepper-icon-size") : rem.rem(iconSize),
      "--stepper-content-padding": getSize.getSpacing(contentPadding),
      "--stepper-radius": getSize.getRadius(radius),
      "--stepper-fz": getSize.getFontSize(size),
      "--stepper-spacing": getSize.getSpacing(size)
    }
  })
);
const Stepper = factory.factory((_props, ref) => {
  var _b, _c, _d;
  const props = useProps.useProps("Stepper", defaultProps, _props);
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
  const getStyles = useStyles.useStyles({
    name: "Stepper",
    classes: Stepper_module['default'],
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const convertedChildren = React.Children.toArray(children);
  const _children = convertedChildren.filter((child) => child.type !== StepperCompleted.StepperCompleted);
  const completedStep = convertedChildren.find((item) => item.type === StepperCompleted.StepperCompleted);
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
      React.cloneElement(item, {
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
        /* @__PURE__ */ React__default.createElement(
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
  return /* @__PURE__ */ React__default.createElement(Stepper_context.StepperProvider, { value: { getStyles, orientation, iconPosition } }, /* @__PURE__ */ React__default.createElement(Box.Box, __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), { ref, size }), others), /* @__PURE__ */ React__default.createElement(
    Box.Box,
    __spreadProps(__spreadValues({}, getStyles("steps")), {
      mod: {
        orientation,
        "icon-position": iconPosition,
        wrap: wrap && orientation !== "vertical"
      }
    }),
    items
  ), content && /* @__PURE__ */ React__default.createElement("div", __spreadValues({}, getStyles("content")), content)));
});
Stepper.classes = Stepper_module['default'];
Stepper.displayName = "@mantine/core/Stepper";
Stepper.Completed = StepperCompleted.StepperCompleted;
Stepper.Step = StepperStep.StepperStep;

exports.Stepper = Stepper;
//# sourceMappingURL=Stepper.js.map
