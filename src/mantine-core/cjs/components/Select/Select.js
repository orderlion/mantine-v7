'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var getParsedComboboxData = require('../Combobox/get-parsed-combobox-data/get-parsed-combobox-data.js');
var getOptionsLockup = require('../Combobox/get-options-lockup/get-options-lockup.js');
var useCombobox = require('../Combobox/use-combobox/use-combobox.js');
var Combobox = require('../Combobox/Combobox.js');
var InputBase = require('../InputBase/InputBase.js');
var OptionsDropdown = require('../Combobox/OptionsDropdown/OptionsDropdown.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var useResolvedStylesApi = require('../../core/styles-api/use-resolved-styles-api/use-resolved-styles-api.js');

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
  searchable: false,
  withCheckIcon: true,
  checkIconPosition: "left"
};
const Select = factory.factory((_props, ref) => {
  const props = useProps.useProps("Select", defaultProps, _props);
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
    size,
    searchable,
    rightSection,
    checkIconPosition,
    withCheckIcon,
    nothingFoundMessage,
    name,
    form
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
    "size",
    "searchable",
    "rightSection",
    "checkIconPosition",
    "withCheckIcon",
    "nothingFoundMessage",
    "name",
    "form"
  ]);
  const parsedData = getParsedComboboxData.getParsedComboboxData(data);
  const optionsLockup = getOptionsLockup.getOptionsLockup(parsedData);
  const [_value, setValue] = hooks.useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange
  });
  const selectedOption = _value ? optionsLockup[_value] : void 0;
  const [search, setSearch] = React.useState(selectedOption ? selectedOption.label : "");
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
  React.useEffect(() => {
    if (value === null) {
      setSearch("");
    }
    if (typeof value === "string" && optionsLockup[value]) {
      setSearch(optionsLockup[value].label);
    }
  }, [value]);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(
    Combobox.Combobox,
    __spreadValues({
      store: combobox,
      __staticSelector: "Select",
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      unstyled,
      onOptionSubmit: (val) => {
        onOptionSubmit == null ? void 0 : onOptionSubmit(val);
        const nextValue = optionsLockup[val].value === _value ? null : optionsLockup[val].value;
        setValue(nextValue);
        setSearch(nextValue ? optionsLockup[val].label : "");
        combobox.closeDropdown();
      },
      size
    }, comboboxProps),
    /* @__PURE__ */ React__default.createElement(Combobox.Combobox.Target, { targetType: searchable ? "input" : "button" }, /* @__PURE__ */ React__default.createElement(
      InputBase.InputBase,
      __spreadProps(__spreadValues({
        ref,
        rightSection: rightSection || /* @__PURE__ */ React__default.createElement(Combobox.Combobox.Chevron, { size })
      }, others), {
        size,
        __staticSelector: "Select",
        disabled,
        readOnly: readOnly || !searchable,
        value: search,
        onChange: (event) => {
          setSearch(event.currentTarget.value);
          combobox.openDropdown();
          selectFirstOptionOnChange && combobox.selectFirstOption();
        },
        onFocus: (event) => {
          searchable && combobox.openDropdown();
          onFocus == null ? void 0 : onFocus(event);
        },
        onBlur: (event) => {
          searchable && combobox.closeDropdown();
          setSearch(_value ? optionsLockup[_value].label : "");
          onBlur == null ? void 0 : onBlur(event);
        },
        onClick: (event) => {
          searchable ? combobox.openDropdown() : combobox.toggleDropdown();
          onClick == null ? void 0 : onClick(event);
        },
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        unstyled,
        pointer: !searchable
      })
    )),
    /* @__PURE__ */ React__default.createElement(
      OptionsDropdown.OptionsDropdown,
      {
        data: parsedData,
        hidden: readOnly || disabled,
        filter,
        search,
        limit,
        hiddenWhenEmpty: !searchable && !!nothingFoundMessage && search.trim().length !== 0,
        withScrollArea,
        maxDropdownHeight,
        filterOptions: searchable && (selectedOption == null ? void 0 : selectedOption.label) !== search,
        value: _value,
        checkIconPosition,
        withCheckIcon,
        nothingFoundMessage
      }
    )
  ), /* @__PURE__ */ React__default.createElement("input", { type: "hidden", name, value: _value || "", form, disabled }));
});
Select.classes = __spreadValues(__spreadValues({}, InputBase.InputBase.classes), Combobox.Combobox.classes);
Select.displayName = "@mantine/core/Select";

exports.Select = Select;
//# sourceMappingURL=Select.js.map
