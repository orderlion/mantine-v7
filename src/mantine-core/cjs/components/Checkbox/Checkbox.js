'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var CheckboxGroup_context = require('./CheckboxGroup.context.js');
var CheckboxGroup = require('./CheckboxGroup/CheckboxGroup.js');
var CheckIcon = require('./CheckIcon.js');
var Checkbox_module = require('./Checkbox.module.css.js');
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
  labelPosition: "right",
  icon: CheckIcon.CheckboxIcon
};
const varsResolver = createVarsResolver.createVarsResolver((theme, { radius, color, size }) => ({
  root: {
    "--checkbox-size": getSize.getSize(size, "checkbox-size"),
    "--checkbox-radius": getSize.getRadius(radius),
    "--checkbox-color": getThemeColor.getThemeColor(color, theme)
  }
}));
const Checkbox = factory.factory((_props, ref) => {
  const props = useProps.useProps("Checkbox", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    color,
    label,
    id,
    size,
    radius,
    wrapperProps,
    children,
    checked,
    labelPosition,
    description,
    error,
    disabled,
    variant,
    indeterminate,
    icon
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "color",
    "label",
    "id",
    "size",
    "radius",
    "wrapperProps",
    "children",
    "checked",
    "labelPosition",
    "description",
    "error",
    "disabled",
    "variant",
    "indeterminate",
    "icon"
  ]);
  const ctx = CheckboxGroup_context.useCheckboxGroupContext();
  const _size = size || (ctx == null ? void 0 : ctx.size);
  const Icon = icon;
  const getStyles = useStyles.useStyles({
    name: "Checkbox",
    props,
    classes: Checkbox_module['default'],
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
  return /* @__PURE__ */ React__default.createElement(
    InlineInput.InlineInput,
    __spreadValues(__spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      __staticSelector: "Checkbox",
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
    /* @__PURE__ */ React__default.createElement(Box.Box, __spreadProps(__spreadValues({}, getStyles("inner")), { mod: { "data-label-position": labelPosition } }), /* @__PURE__ */ React__default.createElement(
      Box.Box,
      __spreadProps(__spreadValues(__spreadValues(__spreadValues({
        component: "input",
        id: uuid,
        ref,
        checked,
        disabled,
        mod: { error: !!error, indeterminate }
      }, getStyles("input", { focusable: true })), rest), contextProps), {
        type: "checkbox"
      })
    ), /* @__PURE__ */ React__default.createElement(Icon, __spreadValues({ indeterminate }, getStyles("icon"))))
  );
});
Checkbox.classes = __spreadValues(__spreadValues({}, Checkbox_module['default']), InlineInput.InlineInputClasses);
Checkbox.displayName = "@mantine/core/Checkbox";
Checkbox.Group = CheckboxGroup.CheckboxGroup;

exports.Checkbox = Checkbox;
//# sourceMappingURL=Checkbox.js.map
