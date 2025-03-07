'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var useCombobox = require('./use-combobox/use-combobox.js');
var Combobox_context = require('./Combobox.context.js');
var ComboboxTarget = require('./ComboboxTarget/ComboboxTarget.js');
var ComboboxDropdown = require('./ComboboxDropdown/ComboboxDropdown.js');
var ComboboxOptions = require('./ComboboxOptions/ComboboxOptions.js');
var ComboboxOption = require('./ComboboxOption/ComboboxOption.js');
var ComboboxSearch = require('./ComboboxSearch/ComboboxSearch.js');
var ComboboxEmpty = require('./ComboboxEmpty/ComboboxEmpty.js');
var ComboboxChevron = require('./ComboboxChevron/ComboboxChevron.js');
var ComboboxFooter = require('./ComboboxFooter/ComboboxFooter.js');
var ComboboxHeader = require('./ComboboxHeader/ComboboxHeader.js');
var ComboboxEventsTarget = require('./ComboboxEventsTarget/ComboboxEventsTarget.js');
var ComboboxDropdownTarget = require('./ComboboxDropdownTarget/ComboboxDropdownTarget.js');
var ComboboxGroup = require('./ComboboxGroup/ComboboxGroup.js');
var Combobox_module = require('./Combobox.module.css.js');
var Popover = require('../Popover/Popover.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
var createVarsResolver = require('../../core/styles-api/create-vars-resolver/create-vars-resolver.js');
var getSize = require('../../core/utils/get-size/get-size.js');
var rem = require('../../core/utils/units-converters/rem.js');

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
  keepMounted: true,
  withinPortal: true,
  resetSelectionOnOptionHover: false,
  width: "target",
  transitionProps: { transition: "fade", duration: 0 },
  size: "sm",
  dropdownPadding: 4
};
const varsResolver = createVarsResolver.createVarsResolver((_, { size, dropdownPadding }) => ({
  options: {
    "--combobox-option-fz": getSize.getFontSize(size),
    "--combobox-option-padding": getSize.getSize(size, "combobox-option-padding")
  },
  dropdown: {
    "--combobox-padding": rem.rem(dropdownPadding),
    "--combobox-option-fz": getSize.getFontSize(size),
    "--combobox-option-padding": getSize.getSize(size, "combobox-option-padding")
  }
}));
function Combobox(_props) {
  const props = useProps.useProps("Combobox", defaultProps, _props);
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
  const uncontrolledStore = useCombobox.useCombobox();
  const store = controlledStore || uncontrolledStore;
  const getStyles = useStyles.useStyles({
    name: __staticSelector || "Combobox",
    classes: Combobox_module['default'],
    props,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ React__default.createElement(
    Combobox_context.ComboboxProvider,
    {
      value: { getStyles, store, onOptionSubmit, size, resetSelectionOnOptionHover }
    },
    /* @__PURE__ */ React__default.createElement(
      Popover.Popover,
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
Combobox.classes = Combobox_module['default'];
Combobox.displayName = "@mantine/core/Combobox";
Combobox.Target = ComboboxTarget.ComboboxTarget;
Combobox.Dropdown = ComboboxDropdown.ComboboxDropdown;
Combobox.Options = ComboboxOptions.ComboboxOptions;
Combobox.Option = ComboboxOption.ComboboxOption;
Combobox.Search = ComboboxSearch.ComboboxSearch;
Combobox.Empty = ComboboxEmpty.ComboboxEmpty;
Combobox.Chevron = ComboboxChevron.ComboboxChevron;
Combobox.Footer = ComboboxFooter.ComboboxFooter;
Combobox.Header = ComboboxHeader.ComboboxHeader;
Combobox.EventsTarget = ComboboxEventsTarget.ComboboxEventsTarget;
Combobox.DropdownTarget = ComboboxDropdownTarget.ComboboxDropdownTarget;
Combobox.Group = ComboboxGroup.ComboboxGroup;

exports.Combobox = Combobox;
//# sourceMappingURL=Combobox.js.map
