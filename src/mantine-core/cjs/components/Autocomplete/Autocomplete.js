'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var getParsedComboboxData = require('../Combobox/get-parsed-combobox-data/get-parsed-combobox-data.js');
var getOptionsLockup = require('../Combobox/get-options-lockup/get-options-lockup.js');
var useCombobox = require('../Combobox/use-combobox/use-combobox.js');
var useResolvedStylesApi = require('../../core/styles-api/use-resolved-styles-api/use-resolved-styles-api.js');
var Combobox = require('../Combobox/Combobox.js');
var InputBase = require('../InputBase/InputBase.js');
var OptionsDropdown = require('../Combobox/OptionsDropdown/OptionsDropdown.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');

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
const defaultProps = {};
const Autocomplete = factory.factory((_props, ref) => {
  const props = useProps.useProps("Autocomplete", defaultProps, _props);
  const _a = props, {
    classNames,
    styles,
    unstyled,
    vars,
    dropdownOpened,
    defaultDropdownOpened,
    onDropdownClose,
    onDropdownOpen,
    onFocus,
    onBlur,
    onClick,
    onChange,
    data,
    value,
    defaultValue,
    selectFirstOptionOnChange,
    onOptionSubmit,
    comboboxProps,
    readOnly,
    disabled,
    filter,
    limit,
    withScrollArea,
    maxDropdownHeight,
    size
  } = _a, others = __objRest(_a, [
    "classNames",
    "styles",
    "unstyled",
    "vars",
    "dropdownOpened",
    "defaultDropdownOpened",
    "onDropdownClose",
    "onDropdownOpen",
    "onFocus",
    "onBlur",
    "onClick",
    "onChange",
    "data",
    "value",
    "defaultValue",
    "selectFirstOptionOnChange",
    "onOptionSubmit",
    "comboboxProps",
    "readOnly",
    "disabled",
    "filter",
    "limit",
    "withScrollArea",
    "maxDropdownHeight",
    "size"
  ]);
  const parsedData = getParsedComboboxData.getParsedComboboxData(data);
  const optionsLockup = getOptionsLockup.getOptionsLockup(parsedData);
  const [_value, setValue] = hooks.useUncontrolled({
    value,
    defaultValue,
    finalValue: "",
    onChange
  });
  const combobox = useCombobox.useCombobox({
    opened: dropdownOpened,
    defaultOpened: defaultDropdownOpened,
    onDropdownOpen,
    onDropdownClose: () => {
      onDropdownClose == null ? void 0 : onDropdownClose();
      combobox.resetSelectedOption();
    }
  });
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi.useResolvedStylesApi({
    props,
    styles,
    classNames
  });
  React.useEffect(() => {
    if (selectFirstOptionOnChange) {
      combobox.selectFirstOption();
    }
  }, [selectFirstOptionOnChange, _value]);
  return /* @__PURE__ */ React__default.createElement(
    Combobox.Combobox,
    __spreadValues({
      store: combobox,
      __staticSelector: "Autocomplete",
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      unstyled,
      onOptionSubmit: (val) => {
        onOptionSubmit == null ? void 0 : onOptionSubmit(val);
        setValue(optionsLockup[val].label);
        combobox.closeDropdown();
      },
      size
    }, comboboxProps),
    /* @__PURE__ */ React__default.createElement(Combobox.Combobox.Target, null, /* @__PURE__ */ React__default.createElement(
      InputBase.InputBase,
      __spreadProps(__spreadValues({
        ref
      }, others), {
        size,
        __staticSelector: "Autocomplete",
        disabled,
        readOnly,
        value: _value,
        onChange: (event) => {
          setValue(event.currentTarget.value);
          combobox.openDropdown();
          selectFirstOptionOnChange && combobox.selectFirstOption();
        },
        onFocus: (event) => {
          combobox.openDropdown();
          onFocus == null ? void 0 : onFocus(event);
        },
        onBlur: (event) => {
          combobox.closeDropdown();
          onBlur == null ? void 0 : onBlur(event);
        },
        onClick: (event) => {
          combobox.openDropdown();
          onClick == null ? void 0 : onClick(event);
        },
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        unstyled
      })
    )),
    /* @__PURE__ */ React__default.createElement(
      OptionsDropdown.OptionsDropdown,
      {
        data: parsedData,
        hidden: readOnly || disabled,
        filter,
        search: _value,
        limit,
        hiddenWhenEmpty: true,
        withScrollArea,
        maxDropdownHeight
      }
    )
  );
});
Autocomplete.classes = __spreadValues(__spreadValues({}, InputBase.InputBase.classes), Combobox.Combobox.classes);
Autocomplete.displayName = "@mantine/core/Autocomplete";

exports.Autocomplete = Autocomplete;
//# sourceMappingURL=Autocomplete.js.map
