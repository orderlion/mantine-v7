'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var hooks = require('@mantine/hooks');
var PasswordToggleIcon = require('./PasswordToggleIcon.js');
var PasswordInput_module = require('./PasswordInput.module.css.js');
var ActionIcon = require('../ActionIcon/ActionIcon.js');
var Input = require('../Input/Input.js');
var InputBase = require('../InputBase/InputBase.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
var useResolvedStylesApi = require('../../core/styles-api/use-resolved-styles-api/use-resolved-styles-api.js');
var extractStyleProps = require('../../core/Box/style-props/extract-style-props/extract-style-props.js');
var createVarsResolver = require('../../core/styles-api/create-vars-resolver/create-vars-resolver.js');
var getSize = require('../../core/utils/get-size/get-size.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

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
  __staticSelector: "PasswordInput",
  visibilityToggleIcon: PasswordToggleIcon.PasswordToggleIcon,
  size: "sm"
};
const varsResolver = createVarsResolver.createVarsResolver((_, { size }) => ({
  root: {
    "--psi-icon-size": getSize.getSize(size, "psi-icon-size"),
    "--psi-button-size": getSize.getSize(size, "psi-button-size")
  }
}));
const PasswordInput = factory.factory((_props, ref) => {
  const props = useProps.useProps("PasswordInput", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    required,
    error,
    leftSection,
    disabled,
    id,
    variant,
    inputContainer,
    description,
    label,
    size,
    __staticSelector,
    errorProps,
    descriptionProps,
    labelProps,
    withAsterisk,
    inputWrapperOrder,
    wrapperProps,
    radius,
    rightSection,
    rightSectionWidth,
    leftSectionWidth,
    visible,
    defaultVisible,
    onVisibilityChange,
    visibilityToggleIcon,
    visibilityToggleButtonProps,
    rightSectionProps,
    leftSectionProps
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "required",
    "error",
    "leftSection",
    "disabled",
    "id",
    "variant",
    "inputContainer",
    "description",
    "label",
    "size",
    "__staticSelector",
    "errorProps",
    "descriptionProps",
    "labelProps",
    "withAsterisk",
    "inputWrapperOrder",
    "wrapperProps",
    "radius",
    "rightSection",
    "rightSectionWidth",
    "leftSectionWidth",
    "visible",
    "defaultVisible",
    "onVisibilityChange",
    "visibilityToggleIcon",
    "visibilityToggleButtonProps",
    "rightSectionProps",
    "leftSectionProps"
  ]);
  const uuid = hooks.useId(id);
  const [_visible, setVisibility] = hooks.useUncontrolled({
    value: visible,
    defaultValue: defaultVisible,
    finalValue: false,
    onChange: onVisibilityChange
  });
  const toggleVisibility = () => setVisibility(!_visible);
  const getStyles = useStyles.useStyles({
    name: "PasswordInput",
    classes: PasswordInput_module['default'],
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi.useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  const { styleProps, rest } = extractStyleProps.extractStyleProps(others);
  const VisibilityToggleIcon = visibilityToggleIcon;
  const visibilityToggleButton = /* @__PURE__ */ React__default.createElement(
    ActionIcon.ActionIcon,
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, getStyles("visibilityToggle")), {
      radius,
      "aria-hidden": !visibilityToggleButtonProps
    }), visibilityToggleButtonProps), {
      variant: "subtle",
      color: "gray",
      unstyled,
      onMouseDown: (event) => {
        event.preventDefault();
        toggleVisibility();
      },
      onKeyDown: (event) => {
        if (event.key === " ") {
          event.preventDefault();
          toggleVisibility();
        }
      }
    }),
    /* @__PURE__ */ React__default.createElement(VisibilityToggleIcon, { reveal: _visible })
  );
  return /* @__PURE__ */ React__default.createElement(
    Input.Input.Wrapper,
    __spreadValues(__spreadValues(__spreadValues({
      required,
      id: uuid,
      label,
      error,
      description,
      size,
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      __staticSelector,
      errorProps,
      descriptionProps,
      unstyled,
      withAsterisk,
      inputWrapperOrder,
      inputContainer,
      variant,
      labelProps: __spreadProps(__spreadValues({}, labelProps), { htmlFor: uuid })
    }, getStyles("root")), styleProps), wrapperProps),
    /* @__PURE__ */ React__default.createElement(
      Input.Input,
      {
        component: "div",
        error,
        leftSection,
        size,
        classNames: __spreadProps(__spreadValues({}, resolvedClassNames), { input: cx__default(PasswordInput_module['default'].input, resolvedClassNames.input) }),
        styles: resolvedStyles,
        radius,
        disabled,
        __staticSelector,
        rightSectionWidth,
        rightSection: rightSection != null ? rightSection : visibilityToggleButton,
        variant,
        unstyled,
        leftSectionWidth,
        rightSectionPointerEvents: "all",
        rightSectionProps,
        leftSectionProps
      },
      /* @__PURE__ */ React__default.createElement(
        "input",
        __spreadProps(__spreadValues(__spreadProps(__spreadValues({
          required,
          "data-invalid": !!error || void 0,
          "data-with-left-section": !!leftSection || void 0
        }, getStyles("innerInput")), {
          disabled,
          id: uuid,
          ref
        }), rest), {
          type: _visible ? "text" : "password"
        })
      )
    )
  );
});
PasswordInput.classes = __spreadValues(__spreadValues({}, InputBase.InputBase.classes), PasswordInput_module['default']);
PasswordInput.displayName = "@mantine/core/PasswordInput";

exports.PasswordInput = PasswordInput;
//# sourceMappingURL=PasswordInput.js.map
