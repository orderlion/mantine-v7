import React from 'react';
import { useCombobox } from './use-combobox/use-combobox.js';
import { ComboboxProvider } from './Combobox.context.js';
import { ComboboxTarget } from './ComboboxTarget/ComboboxTarget.js';
import { ComboboxDropdown } from './ComboboxDropdown/ComboboxDropdown.js';
import { ComboboxOptions } from './ComboboxOptions/ComboboxOptions.js';
import { ComboboxOption } from './ComboboxOption/ComboboxOption.js';
import { ComboboxSearch } from './ComboboxSearch/ComboboxSearch.js';
import { ComboboxEmpty } from './ComboboxEmpty/ComboboxEmpty.js';
import { ComboboxChevron } from './ComboboxChevron/ComboboxChevron.js';
import { ComboboxFooter } from './ComboboxFooter/ComboboxFooter.js';
import { ComboboxHeader } from './ComboboxHeader/ComboboxHeader.js';
import { ComboboxEventsTarget } from './ComboboxEventsTarget/ComboboxEventsTarget.js';
import { ComboboxDropdownTarget } from './ComboboxDropdownTarget/ComboboxDropdownTarget.js';
import { ComboboxGroup } from './ComboboxGroup/ComboboxGroup.js';
import classes from './Combobox.module.css.js';
import { Popover } from '../Popover/Popover.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';
import { useStyles } from '../../core/styles-api/use-styles/use-styles.js';
import { createVarsResolver } from '../../core/styles-api/create-vars-resolver/create-vars-resolver.js';
import { getFontSize, getSize } from '../../core/utils/get-size/get-size.js';
import { rem } from '../../core/utils/units-converters/rem.js';

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
  keepMounted: true,
  withinPortal: true,
  resetSelectionOnOptionHover: false,
  width: "target",
  transitionProps: { transition: "fade", duration: 0 },
  size: "sm",
  dropdownPadding: 4
};
const varsResolver = createVarsResolver((_, { size, dropdownPadding }) => ({
  options: {
    "--combobox-option-fz": getFontSize(size),
    "--combobox-option-padding": getSize(size, "combobox-option-padding")
  },
  dropdown: {
    "--combobox-padding": rem(dropdownPadding),
    "--combobox-option-fz": getFontSize(size),
    "--combobox-option-padding": getSize(size, "combobox-option-padding")
  }
}));
function Combobox(_props) {
  const props = useProps("Combobox", defaultProps, _props);
  const _a = props, {
    classNames,
    styles,
    unstyled,
    children,
    store: controlledStore,
    vars,
    onOptionSubmit,
    size,
    dropdownPadding,
    resetSelectionOnOptionHover,
    __staticSelector
  } = _a, others = __objRest(_a, [
    "classNames",
    "styles",
    "unstyled",
    "children",
    "store",
    "vars",
    "onOptionSubmit",
    "size",
    "dropdownPadding",
    "resetSelectionOnOptionHover",
    "__staticSelector"
  ]);
  const uncontrolledStore = useCombobox();
  const store = controlledStore || uncontrolledStore;
  const getStyles = useStyles({
    name: __staticSelector || "Combobox",
    classes,
    props,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ React.createElement(
    ComboboxProvider,
    {
      value: { getStyles, store, onOptionSubmit, size, resetSelectionOnOptionHover }
    },
    /* @__PURE__ */ React.createElement(
      Popover,
      __spreadProps(__spreadValues({
        opened: store.dropdownOpened
      }, others), {
        onClose: store.closeDropdown,
        withRoles: false
      }),
      children
    )
  );
}
Combobox.classes = classes;
Combobox.displayName = "@mantine/core/Combobox";
Combobox.Target = ComboboxTarget;
Combobox.Dropdown = ComboboxDropdown;
Combobox.Options = ComboboxOptions;
Combobox.Option = ComboboxOption;
Combobox.Search = ComboboxSearch;
Combobox.Empty = ComboboxEmpty;
Combobox.Chevron = ComboboxChevron;
Combobox.Footer = ComboboxFooter;
Combobox.Header = ComboboxHeader;
Combobox.EventsTarget = ComboboxEventsTarget;
Combobox.DropdownTarget = ComboboxDropdownTarget;
Combobox.Group = ComboboxGroup;

export { Combobox };
//# sourceMappingURL=Combobox.js.map
