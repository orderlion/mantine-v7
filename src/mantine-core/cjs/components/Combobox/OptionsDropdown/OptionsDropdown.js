'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ScrollArea = require('../../ScrollArea/ScrollArea.js');
var Combobox = require('../Combobox.js');
var defaultOptionsFilter = require('./default-options-filter.js');
var isEmptyComboboxData = require('./is-empty-combobox-data.js');
var isOptionsGroup = require('./is-options-group.js');
var validateOptions = require('./validate-options.js');
var Combobox_module = require('../Combobox.module.css.js');
var CheckIcon = require('../../Checkbox/CheckIcon.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function isValueChecked(value, optionValue) {
  return Array.isArray(value) ? value.includes(optionValue) : value === optionValue;
}
function Option({ data, withCheckIcon, value, checkIconPosition }) {
  if (!isOptionsGroup.isOptionsGroup(data)) {
    const check = withCheckIcon && isValueChecked(value, data.value) && /* @__PURE__ */ React__default.createElement(CheckIcon.CheckIcon, { className: Combobox_module['default'].optionsDropdownCheckIcon });
    return /* @__PURE__ */ React__default.createElement(
      Combobox.Combobox.Option,
      {
        value: data.value,
        disabled: data.disabled,
        className: Combobox_module['default'].optionsDropdownOption,
        "data-reverse": checkIconPosition === "right" || void 0,
        "data-checked": isValueChecked(value, data.value) || void 0
      },
      checkIconPosition === "left" && check,
      data.label,
      checkIconPosition === "right" && check
    );
  }
  const options = data.items.map((item) => /* @__PURE__ */ React__default.createElement(Option, { data: item, key: item.value }));
  return /* @__PURE__ */ React__default.createElement(Combobox.Combobox.Group, { label: data.group }, options);
}
function OptionsDropdown({
  data,
  hidden,
  hiddenWhenEmpty,
  filter,
  search,
  limit,
  maxDropdownHeight,
  withScrollArea = true,
  filterOptions = true,
  withCheckIcon = false,
  value,
  checkIconPosition,
  nothingFoundMessage
}) {
  validateOptions.validateOptions(data);
  const shouldFilter = typeof search === "string";
  const filteredData = shouldFilter ? (filter || defaultOptionsFilter.defaultOptionsFilter)({
    options: data,
    search: filterOptions ? search : "",
    limit: limit != null ? limit : Infinity
  }) : data;
  const isEmpty = isEmptyComboboxData.isEmptyComboboxData(filteredData);
  const options = filteredData.map((item) => /* @__PURE__ */ React__default.createElement(
    Option,
    {
      data: item,
      key: isOptionsGroup.isOptionsGroup(item) ? item.group : item.value,
      withCheckIcon,
      value,
      checkIconPosition
    }
  ));
  return /* @__PURE__ */ React__default.createElement(Combobox.Combobox.Dropdown, { hidden: hidden || hiddenWhenEmpty && isEmpty }, /* @__PURE__ */ React__default.createElement(Combobox.Combobox.Options, null, withScrollArea ? /* @__PURE__ */ React__default.createElement(
    ScrollArea.ScrollArea.Autosize,
    {
      mah: maxDropdownHeight != null ? maxDropdownHeight : 220,
      type: "scroll",
      scrollbarSize: "var(--combobox-padding)",
      offsetScrollbars: "y",
      className: Combobox_module['default'].optionsDropdownScrollArea
    },
    options
  ) : options, isEmpty && nothingFoundMessage && /* @__PURE__ */ React__default.createElement(Combobox.Combobox.Empty, null, nothingFoundMessage)));
}

exports.OptionsDropdown = OptionsDropdown;
//# sourceMappingURL=OptionsDropdown.js.map
