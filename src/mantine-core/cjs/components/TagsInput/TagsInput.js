'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var getSplittedTags = require('./get-splitted-tags.js');
var filterPickedTags = require('./filter-picked-tags.js');
var getParsedComboboxData = require('../Combobox/get-parsed-combobox-data/get-parsed-combobox-data.js');
var getOptionsLockup = require('../Combobox/get-options-lockup/get-options-lockup.js');
var useCombobox = require('../Combobox/use-combobox/use-combobox.js');
var Pill = require('../Pill/Pill.js');
var Combobox = require('../Combobox/Combobox.js');
var PillsInput = require('../PillsInput/PillsInput.js');
var OptionsDropdown = require('../Combobox/OptionsDropdown/OptionsDropdown.js');
var InputBase = require('../InputBase/InputBase.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var extractStyleProps = require('../../core/Box/style-props/extract-style-props/extract-style-props.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
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
  maxTags: Infinity,
  allowDuplicates: false,
  splitChars: [","],
  size: "sm"
};
const TagsInput = factory.factory((_props, ref) => {
  const props = useProps.useProps("TagsInput", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    value,
    defaultValue,
    onChange,
    onKeyDown,
    maxTags,
    allowDuplicates,
    onDuplicate,
    variant,
    data,
    dropdownOpened,
    defaultDropdownOpened,
    onDropdownOpen,
    onDropdownClose,
    selectFirstOptionOnChange,
    onOptionSubmit,
    comboboxProps,
    filter,
    limit,
    withScrollArea,
    maxDropdownHeight,
    searchValue,
    defaultSearchValue,
    onSearchChange,
    readOnly,
    disabled,
    splitChars,
    onFocus,
    onBlur,
    onPaste,
    radius,
    rightSection,
    rightSectionWidth,
    rightSectionPointerEvents,
    rightSectionProps,
    leftSection,
    leftSectionWidth,
    leftSectionPointerEvents,
    leftSectionProps,
    inputContainer,
    inputWrapperOrder,
    withAsterisk,
    labelProps,
    descriptionProps,
    errorProps,
    wrapperProps,
    description,
    label,
    error,
    withErrorStyles,
    name,
    form
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "size",
    "value",
    "defaultValue",
    "onChange",
    "onKeyDown",
    "maxTags",
    "allowDuplicates",
    "onDuplicate",
    "variant",
    "data",
    "dropdownOpened",
    "defaultDropdownOpened",
    "onDropdownOpen",
    "onDropdownClose",
    "selectFirstOptionOnChange",
    "onOptionSubmit",
    "comboboxProps",
    "filter",
    "limit",
    "withScrollArea",
    "maxDropdownHeight",
    "searchValue",
    "defaultSearchValue",
    "onSearchChange",
    "readOnly",
    "disabled",
    "splitChars",
    "onFocus",
    "onBlur",
    "onPaste",
    "radius",
    "rightSection",
    "rightSectionWidth",
    "rightSectionPointerEvents",
    "rightSectionProps",
    "leftSection",
    "leftSectionWidth",
    "leftSectionPointerEvents",
    "leftSectionProps",
    "inputContainer",
    "inputWrapperOrder",
    "withAsterisk",
    "labelProps",
    "descriptionProps",
    "errorProps",
    "wrapperProps",
    "description",
    "label",
    "error",
    "withErrorStyles",
    "name",
    "form"
  ]);
  const parsedData = getParsedComboboxData.getParsedComboboxData(data);
  const optionsLockup = getOptionsLockup.getOptionsLockup(parsedData);
  const combobox = useCombobox.useCombobox({
    opened: dropdownOpened,
    defaultOpened: defaultDropdownOpened,
    onDropdownOpen,
    onDropdownClose: () => {
      onDropdownClose == null ? void 0 : onDropdownClose();
      combobox.resetSelectedOption();
    }
  });
  const {
    styleProps,
    rest: _b
  } = extractStyleProps.extractStyleProps(others), _c = _b, rest = __objRest(_c, ["type"]);
  const [_value, setValue] = hooks.useUncontrolled({
    value,
    defaultValue,
    finalValue: [],
    onChange
  });
  const [_searchValue, setSearchValue] = hooks.useUncontrolled({
    value: searchValue,
    defaultValue: defaultSearchValue,
    finalValue: "",
    onChange: onSearchChange
  });
  const getStyles = useStyles.useStyles({
    name: "TagsInput",
    classes: {},
    props,
    classNames,
    styles,
    unstyled
  });
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi.useResolvedStylesApi({
    props,
    styles,
    classNames
  });
  const handleInputKeydown = (event) => {
    onKeyDown == null ? void 0 : onKeyDown(event);
    const inputValue = _searchValue.trim();
    const { length } = inputValue;
    if (splitChars.includes(event.key) && length > 0) {
      setValue(
        getSplittedTags.getSplittedTags({
          splitChars,
          allowDuplicates,
          maxTags,
          value: _searchValue,
          currentTags: _value
        })
      );
      setSearchValue("");
      event.preventDefault();
    }
    if (event.key === "Enter" && length > 0) {
      event.preventDefault();
      const isDuplicate = _value.some((tag) => tag.toLowerCase() === inputValue.toLowerCase());
      if (isDuplicate) {
        onDuplicate == null ? void 0 : onDuplicate(inputValue);
      }
      if ((!isDuplicate || isDuplicate && allowDuplicates) && _value.length < maxTags) {
        setSearchValue("");
        if (inputValue.length > 0) {
          setValue([..._value, inputValue]);
        }
      }
    }
    if (event.key === "Backspace" && length === 0 && _value.length > 0) {
      setValue(_value.slice(0, _value.length - 1));
    }
  };
  const handlePaste = (event) => {
    onPaste == null ? void 0 : onPaste(event);
    event.preventDefault();
    if (event.clipboardData) {
      const pastedText = event.clipboardData.getData("text/plain");
      setValue(
        getSplittedTags.getSplittedTags({
          splitChars,
          allowDuplicates,
          maxTags,
          value: pastedText,
          currentTags: _value
        })
      );
      setSearchValue("");
    }
  };
  const values = _value.map((item, index) => /* @__PURE__ */ React__default.createElement(
    Pill.Pill,
    __spreadValues({
      key: `${item}-${index}`,
      withRemoveButton: !readOnly,
      onRemove: () => setValue(_value.filter((i) => item !== i))
    }, getStyles("pill")),
    item
  ));
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(
    Combobox.Combobox,
    __spreadValues({
      store: combobox,
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      unstyled,
      size,
      __staticSelector: "TagsInput",
      onOptionSubmit: (val) => {
        onOptionSubmit == null ? void 0 : onOptionSubmit(val);
        setSearchValue("");
        _value.length < maxTags && setValue([..._value, optionsLockup[val].label]);
      }
    }, comboboxProps),
    /* @__PURE__ */ React__default.createElement(Combobox.Combobox.DropdownTarget, null, /* @__PURE__ */ React__default.createElement(
      PillsInput.PillsInput,
      __spreadProps(__spreadValues({}, styleProps), {
        __staticSelector: "TagsInput",
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        unstyled,
        size,
        className,
        style,
        variant,
        disabled,
        radius,
        rightSection,
        rightSectionWidth,
        rightSectionPointerEvents,
        rightSectionProps,
        leftSection,
        leftSectionWidth,
        leftSectionPointerEvents,
        leftSectionProps,
        inputContainer,
        inputWrapperOrder,
        withAsterisk,
        labelProps,
        descriptionProps,
        errorProps,
        wrapperProps,
        description,
        label,
        error,
        multiline: true,
        withErrorStyles,
        __stylesApiProps: __spreadProps(__spreadValues({}, props), { multiline: true })
      }),
      /* @__PURE__ */ React__default.createElement(Pill.Pill.Group, __spreadValues({ disabled }, getStyles("pillsList")), values, /* @__PURE__ */ React__default.createElement(Combobox.Combobox.EventsTarget, null, /* @__PURE__ */ React__default.createElement(
        PillsInput.PillsInput.Field,
        __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, rest), {
          ref
        }), getStyles("inputField")), {
          unstyled,
          onKeyDown: handleInputKeydown,
          onFocus: (event) => {
            onFocus == null ? void 0 : onFocus(event);
            combobox.openDropdown();
          },
          onBlur: (event) => {
            onBlur == null ? void 0 : onBlur(event);
            combobox.closeDropdown();
          },
          onPaste: handlePaste,
          value: _searchValue,
          onChange: (event) => setSearchValue(event.currentTarget.value),
          disabled,
          readOnly
        })
      )))
    )),
    /* @__PURE__ */ React__default.createElement(
      OptionsDropdown.OptionsDropdown,
      {
        data: filterPickedTags.filterPickedTags({ data: parsedData, value: _value }),
        hidden: readOnly || disabled,
        filter,
        search: _searchValue,
        limit,
        hiddenWhenEmpty: true,
        withScrollArea,
        maxDropdownHeight
      }
    )
  ), /* @__PURE__ */ React__default.createElement("input", { type: "hidden", name, form, value: _value.join(","), disabled }));
});
TagsInput.classes = __spreadValues(__spreadValues({}, InputBase.InputBase.classes), Combobox.Combobox.classes);
TagsInput.displayName = "@mantine/core/TagsInput";

exports.TagsInput = TagsInput;
//# sourceMappingURL=TagsInput.js.map
