import React from 'react';
import { useUncontrolled } from '@mantine/hooks';
import { filterPickedValues } from './filter-picked-values.js';
import { getParsedComboboxData } from '../Combobox/get-parsed-combobox-data/get-parsed-combobox-data.js';
import { getOptionsLockup } from '../Combobox/get-options-lockup/get-options-lockup.js';
import { useCombobox } from '../Combobox/use-combobox/use-combobox.js';
import { Pill } from '../Pill/Pill.js';
import { Combobox } from '../Combobox/Combobox.js';
import { PillsInput } from '../PillsInput/PillsInput.js';
import { OptionsDropdown } from '../Combobox/OptionsDropdown/OptionsDropdown.js';
import { InputBase } from '../InputBase/InputBase.js';
import { factory } from '../../core/factory/factory.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';
import { extractStyleProps } from '../../core/Box/style-props/extract-style-props/extract-style-props.js';
import { useStyles } from '../../core/styles-api/use-styles/use-styles.js';
import { useResolvedStylesApi } from '../../core/styles-api/use-resolved-styles-api/use-resolved-styles-api.js';

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
  maxValues: Infinity,
  size: "sm",
  withCheckIcon: true,
  checkIconPosition: "left"
};
const MultiSelect = factory((_props, ref) => {
  const props = useProps("MultiSelect", defaultProps, _props);
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
    maxValues,
    searchable,
    nothingFoundMessage,
    withCheckIcon,
    checkIconPosition,
    hidePickedOptions,
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
    "maxValues",
    "searchable",
    "nothingFoundMessage",
    "withCheckIcon",
    "checkIconPosition",
    "hidePickedOptions",
    "withErrorStyles",
    "name",
    "form"
  ]);
  const parsedData = getParsedComboboxData(data);
  const optionsLockup = getOptionsLockup(parsedData);
  const combobox = useCombobox({
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
  } = extractStyleProps(others), _c = _b, rest = __objRest(_c, ["type"]);
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: [],
    onChange
  });
  const [_searchValue, setSearchValue] = useUncontrolled({
    value: searchValue,
    defaultValue: defaultSearchValue,
    finalValue: "",
    onChange: onSearchChange
  });
  const getStyles = useStyles({
    name: "MultiSelect",
    classes: {},
    props,
    classNames,
    styles,
    unstyled
  });
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    props,
    styles,
    classNames
  });
  const handleInputKeydown = (event) => {
    onKeyDown == null ? void 0 : onKeyDown(event);
    if (event.key === "Backspace" && _searchValue.length === 0 && _value.length > 0) {
      setValue(_value.slice(0, _value.length - 1));
    }
  };
  const values = _value.map((item, index) => /* @__PURE__ */ React.createElement(
    Pill,
    __spreadValues({
      key: `${item}-${index}`,
      withRemoveButton: !readOnly,
      onRemove: () => setValue(_value.filter((i) => item !== i))
    }, getStyles("pill")),
    item
  ));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    Combobox,
    __spreadValues({
      store: combobox,
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      unstyled,
      size,
      __staticSelector: "MultiSelect",
      onOptionSubmit: (val) => {
        onOptionSubmit == null ? void 0 : onOptionSubmit(val);
        setSearchValue("");
        combobox.updateSelectedOptionIndex("selected");
        if (_value.includes(optionsLockup[val].value)) {
          setValue(_value.filter((v) => v !== optionsLockup[val].value));
        } else if (_value.length < maxValues) {
          setValue([..._value, optionsLockup[val].value]);
        }
      }
    }, comboboxProps),
    /* @__PURE__ */ React.createElement(Combobox.DropdownTarget, null, /* @__PURE__ */ React.createElement(
      PillsInput,
      __spreadProps(__spreadValues({}, styleProps), {
        __staticSelector: "MultiSelect",
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
        __stylesApiProps: __spreadProps(__spreadValues({}, props), { multiline: true }),
        pointer: !searchable,
        onClick: () => searchable ? combobox.openDropdown() : combobox.toggleDropdown()
      }),
      /* @__PURE__ */ React.createElement(Pill.Group, __spreadValues({ disabled }, getStyles("pillsList")), values, /* @__PURE__ */ React.createElement(Combobox.EventsTarget, null, /* @__PURE__ */ React.createElement(
        PillsInput.Field,
        __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, rest), {
          ref
        }), getStyles("inputField")), {
          unstyled,
          onFocus: (event) => {
            onFocus == null ? void 0 : onFocus(event);
            searchable && combobox.openDropdown();
          },
          onBlur: (event) => {
            onBlur == null ? void 0 : onBlur(event);
            combobox.closeDropdown();
            searchable && combobox.closeDropdown();
            setSearchValue("");
          },
          onKeyDown: handleInputKeydown,
          value: _searchValue,
          onChange: (event) => {
            setSearchValue(event.currentTarget.value);
            searchable && combobox.openDropdown();
          },
          disabled,
          readOnly: readOnly || !searchable,
          pointer: !searchable
        })
      )))
    )),
    /* @__PURE__ */ React.createElement(
      OptionsDropdown,
      {
        data: hidePickedOptions ? filterPickedValues({ data: parsedData, value: _value }) : parsedData,
        hidden: readOnly || disabled,
        filter,
        search: _searchValue,
        limit,
        hiddenWhenEmpty: hidePickedOptions || !nothingFoundMessage || !searchable && _searchValue.trim().length !== 0,
        withScrollArea,
        maxDropdownHeight,
        filterOptions: searchable,
        value: _value,
        checkIconPosition,
        withCheckIcon,
        nothingFoundMessage
      }
    )
  ), /* @__PURE__ */ React.createElement("input", { type: "hidden", name, value: _value.join(","), form, disabled }));
});
MultiSelect.classes = __spreadValues(__spreadValues({}, InputBase.classes), Combobox.classes);
MultiSelect.displayName = "@mantine/core/MultiSelect";

export { MultiSelect };
//# sourceMappingURL=MultiSelect.js.map
