'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var SwitchGroup_context = require('./SwitchGroup.context.js');
var SwitchGroup = require('./SwitchGroup/SwitchGroup.js');
var Switch_module = require('./Switch.module.css.js');
var InlineInput = require('../InlineInput/InlineInput.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
var extractStyleProps = require('../../core/Box/style-props/extract-style-props/extract-style-props.js');
var Box = require('../../core/Box/Box.js');
var createVarsResolver = require('../../core/styles-api/create-vars-resolver/create-vars-resolver.js');
var getSize = require('../../core/utils/get-size/get-size.js');
var getThemeColor = require('../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.js');

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
  size: "sm",
  radius: "xl",
  labelPosition: "right"
};
const varsResolver = createVarsResolver.createVarsResolver((theme, { radius, color, size }) => ({
  root: {
    "--switch-radius": getSize.getRadius(radius),
    "--switch-height": getSize.getSize(size, "switch-height"),
    "--switch-width": getSize.getSize(size, "switch-width"),
    "--switch-thumb-size": getSize.getSize(size, "switch-thumb-size"),
    "--switch-label-font-size": getSize.getSize(size, "switch-label-font-size"),
    "--switch-track-label-padding": getSize.getSize(size, "switch-track-label-padding"),
    "--switch-color": getThemeColor.getThemeColor(color, theme)
  }
}));
const Switch = factory.factory((_props, ref) => {
  var _b;
  const props = useProps.useProps("Switch", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    color,
    label,
    offLabel,
    onLabel,
    id,
    size,
    radius,
    wrapperProps,
    children,
    thumbIcon,
    checked,
    defaultChecked,
    onChange,
    labelPosition,
    description,
    error,
    disabled,
    variant
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "color",
    "label",
    "offLabel",
    "onLabel",
    "id",
    "size",
    "radius",
    "wrapperProps",
    "children",
    "thumbIcon",
    "checked",
    "defaultChecked",
    "onChange",
    "labelPosition",
    "description",
    "error",
    "disabled",
    "variant"
  ]);
  const ctx = SwitchGroup_context.useSwitchGroupContext();
  const _size = size || (ctx == null ? void 0 : ctx.size);
  const getStyles = useStyles.useStyles({
    name: "Switch",
    props,
    classes: Switch_module['default'],
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const { styleProps, rest } = extractStyleProps.extractStyleProps(others);
  const uuid = hooks.useId(id);
  const contextProps = ctx ? {
    checked: ctx.value.includes(rest.value),
    onChange: ctx.onChange
  } : {};
  const [_checked, handleChange] = hooks.useUncontrolled({
    value: (_b = contextProps.checked) != null ? _b : checked,
    defaultValue: defaultChecked,
    finalValue: false
  });
  return /* @__PURE__ */ React__default.createElement(
    InlineInput.InlineInput,
    __spreadValues(__spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      __staticSelector: "Switch",
      __stylesApiProps: props,
      id: uuid,
      size: _size,
      labelPosition,
      label,
      description,
      error,
      disabled,
      classNames,
      styles,
      unstyled,
      "data-checked": contextProps.checked || void 0,
      variant
    }), styleProps), wrapperProps),
    /* @__PURE__ */ React__default.createElement(
      "input",
      __spreadValues(__spreadProps(__spreadValues({}, rest), {
        disabled,
        checked: _checked,
        onChange: (event) => {
          var _a2;
          ctx ? (_a2 = contextProps.onChange) == null ? void 0 : _a2.call(contextProps, event) : onChange == null ? void 0 : onChange(event);
          handleChange(event.currentTarget.checked);
        },
        id: uuid,
        ref,
        type: "checkbox"
      }), getStyles("input"))
    ),
    /* @__PURE__ */ React__default.createElement(
      Box.Box,
      __spreadValues({
        component: "label",
        htmlFor: uuid,
        mod: { error, "label-position": labelPosition }
      }, getStyles("track")),
      /* @__PURE__ */ React__default.createElement(Box.Box, __spreadValues({ component: "span", mod: "reduce-motion" }, getStyles("thumb")), thumbIcon),
      /* @__PURE__ */ React__default.createElement("span", __spreadValues({}, getStyles("trackLabel")), _checked ? onLabel : offLabel)
    )
  );
});
Switch.classes = __spreadValues(__spreadValues({}, Switch_module['default']), InlineInput.InlineInputClasses);
Switch.displayName = "@mantine/core/Switch";
Switch.Group = SwitchGroup.SwitchGroup;

exports.Switch = Switch;
//# sourceMappingURL=Switch.js.map
