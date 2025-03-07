'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var EyeDropperIcon = require('./EyeDropperIcon.js');
var ColorInput_module = require('./ColorInput.module.css.js');
var useInputProps = require('../Input/use-input-props.js');
var ActionIcon = require('../ActionIcon/ActionIcon.js');
var converters = require('../ColorPicker/converters/converters.js');
var parsers = require('../ColorPicker/converters/parsers.js');
var Input = require('../Input/Input.js');
var Popover = require('../Popover/Popover.js');
var ColorSwatch = require('../ColorSwatch/ColorSwatch.js');
var ColorPicker = require('../ColorPicker/ColorPicker.js');
var InputBase = require('../InputBase/InputBase.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
var useResolvedStylesApi = require('../../core/styles-api/use-resolved-styles-api/use-resolved-styles-api.js');
var createVarsResolver = require('../../core/styles-api/create-vars-resolver/create-vars-resolver.js');
var getSize = require('../../core/utils/get-size/get-size.js');

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
  format: "hex",
  fixOnBlur: true,
  withPreview: true,
  swatchesPerRow: 10,
  withPicker: true,
  popoverProps: { transitionProps: { transition: "fade", duration: 0 } },
  withEyeDropper: true
};
const varsResolver = createVarsResolver.createVarsResolver((_, { size }) => ({
  eyeDropperIcon: {
    "--ci-eye-dropper-icon-size": getSize.getSize(size, "ci-eye-dropper-icon-size")
  },
  colorPreview: {
    "--ci-preview-size": getSize.getSize(size, "ci-preview-size")
  }
}));
const ColorInput = factory.factory((_props, ref) => {
  const props = useProps.useProps("ColorInput", defaultProps, _props);
  const _a = useInputProps.useInputProps("ColorInput", defaultProps, _props), {
    classNames,
    styles,
    unstyled,
    disallowInput,
    fixOnBlur,
    popoverProps,
    withPreview,
    withEyeDropper,
    eyeDropperIcon,
    closeOnColorSwatchClick,
    eyeDropperButtonProps,
    value,
    defaultValue,
    onChange,
    onChangeEnd,
    onClick,
    onFocus,
    onBlur,
    inputProps,
    format,
    wrapperProps,
    readOnly,
    withPicker,
    swatches,
    disabled,
    leftSection,
    rightSection,
    swatchesPerRow
  } = _a, others = __objRest(_a, [
    "classNames",
    "styles",
    "unstyled",
    "disallowInput",
    "fixOnBlur",
    "popoverProps",
    "withPreview",
    "withEyeDropper",
    "eyeDropperIcon",
    "closeOnColorSwatchClick",
    "eyeDropperButtonProps",
    "value",
    "defaultValue",
    "onChange",
    "onChangeEnd",
    "onClick",
    "onFocus",
    "onBlur",
    "inputProps",
    "format",
    "wrapperProps",
    "readOnly",
    "withPicker",
    "swatches",
    "disabled",
    "leftSection",
    "rightSection",
    "swatchesPerRow"
  ]);
  const getStyles = useStyles.useStyles({
    name: "ColorInput",
    props,
    classes: ColorInput_module['default'],
    classNames,
    styles,
    unstyled,
    rootSelector: "wrapper",
    vars: props.vars,
    varsResolver
  });
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi.useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  const [dropdownOpened, setDropdownOpened] = React.useState(false);
  const [lastValidValue, setLastValidValue] = React.useState("");
  const [_value, setValue] = hooks.useUncontrolled({
    value,
    defaultValue,
    finalValue: "",
    onChange
  });
  const { supported: eyeDropperSupported, open: openEyeDropper } = hooks.useEyeDropper();
  const eyeDropper = /* @__PURE__ */ React__default.createElement(
    ActionIcon.ActionIcon,
    __spreadProps(__spreadValues(__spreadValues({}, eyeDropperButtonProps), getStyles("eyeDropperButton", {
      className: eyeDropperButtonProps == null ? void 0 : eyeDropperButtonProps.className,
      style: eyeDropperButtonProps == null ? void 0 : eyeDropperButtonProps.style
    })), {
      variant: "subtle",
      color: "gray",
      size: inputProps.size,
      onClick: () => openEyeDropper().then((payload) => {
        if (payload == null ? void 0 : payload.sRGBHex) {
          const color = converters.convertHsvaTo(format, parsers.parseColor(payload.sRGBHex));
          setValue(color);
          onChangeEnd == null ? void 0 : onChangeEnd(color);
        }
      }).catch(() => {
      })
    }),
    eyeDropperIcon || /* @__PURE__ */ React__default.createElement(EyeDropperIcon.EyeDropperIcon, __spreadValues({}, getStyles("eyeDropperIcon")))
  );
  const handleInputFocus = (event) => {
    onFocus == null ? void 0 : onFocus(event);
    setDropdownOpened(true);
  };
  const handleInputBlur = (event) => {
    fixOnBlur && setValue(lastValidValue);
    onBlur == null ? void 0 : onBlur(event);
    setDropdownOpened(false);
  };
  const handleInputClick = (event) => {
    onClick == null ? void 0 : onClick(event);
    setDropdownOpened(true);
  };
  React.useEffect(() => {
    if (parsers.isColorValid(_value) || _value.trim() === "") {
      setLastValidValue(_value);
    }
  }, [_value]);
  hooks.useDidUpdate(() => {
    if (parsers.isColorValid(_value)) {
      setValue(converters.convertHsvaTo(format, parsers.parseColor(_value)));
    }
  }, [format]);
  return /* @__PURE__ */ React__default.createElement(
    Input.Input.Wrapper,
    __spreadProps(__spreadValues({}, wrapperProps), {
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      __staticSelector: "ColorInput"
    }),
    /* @__PURE__ */ React__default.createElement(
      Popover.Popover,
      __spreadProps(__spreadValues({
        __staticSelector: "ColorInput",
        position: "bottom-start",
        offset: 5
      }, popoverProps), {
        opened: dropdownOpened,
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        unstyled,
        withRoles: false,
        disabled: readOnly || withPicker === false && (!Array.isArray(swatches) || swatches.length === 0)
      }),
      /* @__PURE__ */ React__default.createElement(Popover.Popover.Target, null, /* @__PURE__ */ React__default.createElement(
        Input.Input,
        __spreadProps(__spreadValues(__spreadValues({
          autoComplete: "off"
        }, others), inputProps), {
          classNames: resolvedClassNames,
          styles: resolvedStyles,
          disabled,
          ref,
          __staticSelector: "ColorInput",
          onFocus: handleInputFocus,
          onBlur: handleInputBlur,
          onClick: handleInputClick,
          spellCheck: false,
          value: _value,
          onChange: (event) => {
            const inputValue = event.currentTarget.value;
            setValue(inputValue);
            if (parsers.isColorValid(inputValue)) {
              onChangeEnd == null ? void 0 : onChangeEnd(converters.convertHsvaTo(format, parsers.parseColor(inputValue)));
            }
          },
          leftSection: leftSection || (withPreview ? /* @__PURE__ */ React__default.createElement(
            ColorSwatch.ColorSwatch,
            __spreadValues({
              color: parsers.isColorValid(_value) ? _value : "#fff",
              size: "var(--ci-preview-size)"
            }, getStyles("colorPreview"))
          ) : null),
          readOnly: disallowInput || readOnly,
          pointer: disallowInput,
          unstyled,
          rightSection: rightSection || (withEyeDropper && !disabled && !readOnly && eyeDropperSupported ? eyeDropper : null)
        })
      )),
      /* @__PURE__ */ React__default.createElement(Popover.Popover.Dropdown, { onMouseDown: (event) => event.preventDefault(), p: inputProps.size }, /* @__PURE__ */ React__default.createElement(
        ColorPicker.ColorPicker,
        {
          __staticSelector: "ColorInput",
          value: _value,
          onChange: setValue,
          onChangeEnd,
          format,
          swatches,
          swatchesPerRow,
          withPicker,
          size: inputProps.size,
          focusable: false,
          unstyled,
          styles: resolvedStyles,
          classNames: resolvedClassNames,
          onColorSwatchClick: () => closeOnColorSwatchClick && setDropdownOpened(false)
        }
      ))
    )
  );
});
ColorInput.classes = InputBase.InputBase.classes;
ColorInput.displayName = "@mantine/core/ColorInput";

exports.ColorInput = ColorInput;
//# sourceMappingURL=ColorInput.js.map
