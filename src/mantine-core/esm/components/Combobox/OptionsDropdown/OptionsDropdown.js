import React from 'react';
import { ScrollArea } from '../../ScrollArea/ScrollArea.js';
import { Combobox } from '../Combobox.js';
import { defaultOptionsFilter } from './default-options-filter.js';
import { isEmptyComboboxData } from './is-empty-combobox-data.js';
import { isOptionsGroup } from './is-options-group.js';
import { validateOptions } from './validate-options.js';
import classes from '../Combobox.module.css.js';
import { CheckIcon } from '../../Checkbox/CheckIcon.js';

function isValueChecked(value, optionValue) {
  return Array.isArray(value) ? value.includes(optionValue) : value === optionValue;
}
function Option({ data, withCheckIcon, value, checkIconPosition }) {
  if (!isOptionsGroup(data)) {
    const check = withCheckIcon && isValueChecked(value, data.value) && /* @__PURE__ */ React.createElement(CheckIcon, { className: classes.optionsDropdownCheckIcon });
    return /* @__PURE__ */ React.createElement(
      Combobox.Option,
      {
        value: data.value,
        disabled: data.disabled,
        className: classes.optionsDropdownOption,
        "data-reverse": checkIconPosition === "right" || void 0,
        "data-checked": isValueChecked(value, data.value) || void 0
      },
      checkIconPosition === "left" && check,
      data.label,
      checkIconPosition === "right" && check
    );
  }
  const options = data.items.map((item) => /* @__PURE__ */ React.createElement(Option, { data: item, key: item.value }));
  return /* @__PURE__ */ React.createElement(Combobox.Group, { label: data.group }, options);
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
  validateOptions(data);
  const shouldFilter = typeof search === "string";
  const filteredData = shouldFilter ? (filter || defaultOptionsFilter)({
    options: data,
    search: filterOptions ? search : "",
    limit: limit != null ? limit : Infinity
  }) : data;
  const isEmpty = isEmptyComboboxData(filteredData);
  const options = filteredData.map((item) => /* @__PURE__ */ React.createElement(
    Option,
    {
      data: item,
      key: isOptionsGroup(item) ? item.group : item.value,
      withCheckIcon,
      value,
      checkIconPosition
    }
  ));
  return /* @__PURE__ */ React.createElement(Combobox.Dropdown, { hidden: hidden || hiddenWhenEmpty && isEmpty }, /* @__PURE__ */ React.createElement(Combobox.Options, null, withScrollArea ? /* @__PURE__ */ React.createElement(
    ScrollArea.Autosize,
    {
      mah: maxDropdownHeight != null ? maxDropdownHeight : 220,
      type: "scroll",
      scrollbarSize: "var(--combobox-padding)",
      offsetScrollbars: "y",
      className: classes.optionsDropdownScrollArea
    },
    options
  ) : options, isEmpty && nothingFoundMessage && /* @__PURE__ */ React.createElement(Combobox.Empty, null, nothingFoundMessage)));
}

export { OptionsDropdown };
//# sourceMappingURL=OptionsDropdown.js.map
