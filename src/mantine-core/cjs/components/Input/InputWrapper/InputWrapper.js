'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var InputLabel = require('../InputLabel/InputLabel.js');
var InputDescription = require('../InputDescription/InputDescription.js');
var InputError = require('../InputError/InputError.js');
var InputWrapper_context = require('../InputWrapper.context.js');
var getInputOffsets = require('./get-input-offsets/get-input-offsets.js');
var Input_module = require('../Input.module.css.js');
var factory = require('../../../core/factory/factory.js');
var useProps = require('../../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../../core/styles-api/use-styles/use-styles.js');
var Box = require('../../../core/Box/Box.js');
var createVarsResolver = require('../../../core/styles-api/create-vars-resolver/create-vars-resolver.js');
var getSize = require('../../../core/utils/get-size/get-size.js');
var rem = require('../../../core/utils/units-converters/rem.js');

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
  labelElement: "label",
  size: "sm",
  inputContainer: (children) => children,
  inputWrapperOrder: ["label", "description", "input", "error"]
};
const varsResolver = createVarsResolver.createVarsResolver((_, { size }) => ({
  label: {
    "--input-label-size": getSize.getFontSize(size),
    "--input-asterisk-color": "var(--mantine-color-red-filled)"
  },
  error: {
    "--input-error-size": `calc(${getSize.getFontSize(size)} - ${rem.rem(2)})`
  },
  description: {
    "--input-description-size": `calc(${getSize.getFontSize(size)} - ${rem.rem(2)})`
  }
}));
const InputWrapper = factory.factory((_props, ref) => {
  const props = useProps.useProps("InputWrapper", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    variant,
    __staticSelector,
    inputContainer,
    inputWrapperOrder,
    label,
    error,
    description,
    labelProps,
    descriptionProps,
    errorProps,
    labelElement,
    children,
    withAsterisk,
    id,
    required,
    __stylesApiProps
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "size",
    "variant",
    "__staticSelector",
    "inputContainer",
    "inputWrapperOrder",
    "label",
    "error",
    "description",
    "labelProps",
    "descriptionProps",
    "errorProps",
    "labelElement",
    "children",
    "withAsterisk",
    "id",
    "required",
    "__stylesApiProps"
  ]);
  const getStyles = useStyles.useStyles({
    name: ["InputWrapper", __staticSelector],
    props: __stylesApiProps || props,
    classes: Input_module['default'],
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const sharedProps = {
    size,
    variant,
    __staticSelector
  };
  const idBase = hooks.useId(id);
  const isRequired = typeof withAsterisk === "boolean" ? withAsterisk : required;
  const errorId = (errorProps == null ? void 0 : errorProps.id) || `${idBase}-error`;
  const descriptionId = (descriptionProps == null ? void 0 : descriptionProps.id) || `${idBase}-description`;
  const inputId = `${idBase}-input`;
  const hasError = !!error && typeof error !== "boolean";
  const hasDescription = !!description;
  const _describedBy = `${hasError ? errorId : ""} ${hasDescription ? descriptionId : ""}`;
  const describedBy = _describedBy.trim().length > 0 ? _describedBy.trim() : void 0;
  const _label = label && /* @__PURE__ */ React__default.createElement(
    InputLabel.InputLabel,
    __spreadValues(__spreadValues({
      key: "label",
      labelElement,
      id: `${idBase}-label`,
      htmlFor: inputId,
      required: isRequired
    }, sharedProps), labelProps),
    label
  );
  const _description = hasDescription && /* @__PURE__ */ React__default.createElement(
    InputDescription.InputDescription,
    __spreadProps(__spreadValues(__spreadValues({
      key: "description"
    }, descriptionProps), sharedProps), {
      size: (descriptionProps == null ? void 0 : descriptionProps.size) || sharedProps.size,
      id: (descriptionProps == null ? void 0 : descriptionProps.id) || descriptionId
    }),
    description
  );
  const _input = /* @__PURE__ */ React__default.createElement(React__default.Fragment, { key: "input" }, inputContainer(children));
  const _error = hasError && /* @__PURE__ */ React__default.createElement(
    InputError.InputError,
    __spreadProps(__spreadValues(__spreadValues({}, errorProps), sharedProps), {
      size: (errorProps == null ? void 0 : errorProps.size) || sharedProps.size,
      key: "error",
      id: (errorProps == null ? void 0 : errorProps.id) || errorId
    }),
    error
  );
  const content = inputWrapperOrder.map((part) => {
    switch (part) {
      case "label":
        return _label;
      case "input":
        return _input;
      case "description":
        return _description;
      case "error":
        return _error;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ React__default.createElement(
    InputWrapper_context.InputWrapperProvider,
    {
      value: __spreadValues({
        getStyles,
        describedBy,
        inputId
      }, getInputOffsets.getInputOffsets(inputWrapperOrder, { hasDescription, hasError }))
    },
    /* @__PURE__ */ React__default.createElement(Box.Box, __spreadValues(__spreadValues({ ref, variant, size }, getStyles("root")), others), content)
  );
});
InputWrapper.classes = Input_module['default'];
InputWrapper.displayName = "@mantine/core/InputWrapper";

exports.InputWrapper = InputWrapper;
//# sourceMappingURL=InputWrapper.js.map
