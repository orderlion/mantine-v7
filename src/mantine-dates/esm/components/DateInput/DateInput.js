import React, { useEffect, useState } from 'react';
import { factory, useInputProps, CloseButton, Input, Popover } from '@mantine/core';
import { useUncontrolled, useDidUpdate } from '@mantine/hooks';
import dayjs from 'dayjs';
import { isDateValid } from './is-date-valid/is-date-valid.js';
import { dateStringParser } from './date-string-parser/date-string-parser.js';
import { pickCalendarProps } from '../Calendar/pick-calendar-levels-props/pick-calendar-levels-props.js';
import { useDatesContext } from '../DatesProvider/use-dates-context.js';
import { Calendar } from '../Calendar/Calendar.js';
import { HiddenDatesInput } from '../HiddenDatesInput/HiddenDatesInput.js';
import { assignTime } from '../../utils/assign-time/assign-time.js';

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
  valueFormat: "MMMM D, YYYY",
  fixOnBlur: true,
  preserveTime: true,
  size: "sm"
};
const DateInput = factory((_props, ref) => {
  const props = useInputProps("DateInput", defaultProps, _props);
  const _a = props, {
    inputProps,
    wrapperProps,
    value,
    defaultValue,
    onChange,
    clearable,
    clearButtonProps,
    popoverProps,
    getDayProps,
    locale,
    valueFormat,
    dateParser,
    minDate,
    maxDate,
    fixOnBlur,
    onFocus,
    onBlur,
    onClick,
    readOnly,
    name,
    form,
    rightSection,
    unstyled,
    classNames,
    styles,
    allowDeselect,
    preserveTime,
    date,
    defaultDate,
    onDateChange
  } = _a, rest = __objRest(_a, [
    "inputProps",
    "wrapperProps",
    "value",
    "defaultValue",
    "onChange",
    "clearable",
    "clearButtonProps",
    "popoverProps",
    "getDayProps",
    "locale",
    "valueFormat",
    "dateParser",
    "minDate",
    "maxDate",
    "fixOnBlur",
    "onFocus",
    "onBlur",
    "onClick",
    "readOnly",
    "name",
    "form",
    "rightSection",
    "unstyled",
    "classNames",
    "styles",
    "allowDeselect",
    "preserveTime",
    "date",
    "defaultDate",
    "onDateChange"
  ]);
  const { calendarProps, others } = pickCalendarProps(rest);
  const ctx = useDatesContext();
  const defaultDateParser = (val) => {
    const parsedDate = dayjs(val, valueFormat, ctx.getLocale(locale)).toDate();
    return Number.isNaN(parsedDate.getTime()) ? dateStringParser(val) : parsedDate;
  };
  const _dateParser = dateParser || defaultDateParser;
  const _allowDeselect = allowDeselect !== void 0 ? allowDeselect : clearable;
  const formatValue = (val) => val ? dayjs(val).locale(ctx.getLocale(locale)).format(valueFormat) : "";
  const [_value, setValue, controlled] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange
  });
  const [_date, setDate] = useUncontrolled({
    value: date,
    defaultValue: defaultValue || defaultDate,
    finalValue: null,
    onChange: onDateChange
  });
  useEffect(() => {
    if (controlled) {
      setDate(value);
    }
  }, [controlled, value]);
  const [inputValue, setInputValue] = useState(formatValue(_value));
  useEffect(() => {
    setInputValue(formatValue(_value));
  }, [ctx.getLocale(locale)]);
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const handleInputChange = (event) => {
    const val = event.currentTarget.value;
    setInputValue(val);
    if (val.trim() === "" && clearable) {
      setValue(null);
    } else {
      const dateValue = _dateParser(val);
      if (isDateValid({ date: dateValue, minDate, maxDate })) {
        setValue(dateValue);
        setDate(dateValue);
      }
    }
  };
  const handleInputBlur = (event) => {
    onBlur == null ? void 0 : onBlur(event);
    setDropdownOpened(false);
    fixOnBlur && setInputValue(formatValue(_value));
  };
  const handleInputFocus = (event) => {
    onFocus == null ? void 0 : onFocus(event);
    setDropdownOpened(true);
  };
  const handleInputClick = (event) => {
    onClick == null ? void 0 : onClick(event);
    setDropdownOpened(true);
  };
  const _getDayProps = (day) => __spreadProps(__spreadValues({}, getDayProps == null ? void 0 : getDayProps(day)), {
    selected: dayjs(_value).isSame(day, "day"),
    onClick: () => {
      const valueWithTime = preserveTime ? assignTime(_value, day) : day;
      const val = clearable && _allowDeselect ? dayjs(_value).isSame(day, "day") ? null : valueWithTime : valueWithTime;
      setValue(val);
      !controlled && setInputValue(formatValue(val));
      setDropdownOpened(false);
    }
  });
  const _rightSection = rightSection || (clearable && _value && !readOnly ? /* @__PURE__ */ React.createElement(
    CloseButton,
    __spreadValues({
      variant: "transparent",
      onMouseDown: (event) => event.preventDefault(),
      tabIndex: -1,
      onClick: () => {
        setValue(null);
        !controlled && setInputValue("");
        setDropdownOpened(false);
      },
      unstyled
    }, clearButtonProps)
  ) : null);
  useDidUpdate(() => {
    value !== void 0 && !dropdownOpened && setInputValue(formatValue(value));
  }, [value]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Input.Wrapper, __spreadProps(__spreadValues({}, wrapperProps), { __staticSelector: "DateInput" }), /* @__PURE__ */ React.createElement(
    Popover,
    __spreadValues({
      opened: dropdownOpened,
      trapFocus: false,
      position: "bottom-start",
      disabled: readOnly,
      withRoles: false
    }, popoverProps),
    /* @__PURE__ */ React.createElement(Popover.Target, null, /* @__PURE__ */ React.createElement(
      Input,
      __spreadProps(__spreadValues(__spreadValues({
        "data-dates-input": true,
        "data-read-only": readOnly || void 0,
        autoComplete: "off",
        ref,
        value: inputValue,
        onChange: handleInputChange,
        onBlur: handleInputBlur,
        onFocus: handleInputFocus,
        onClick: handleInputClick,
        readOnly,
        rightSection: _rightSection
      }, inputProps), others), {
        __staticSelector: "DateInput"
      })
    )),
    /* @__PURE__ */ React.createElement(Popover.Dropdown, { onMouseDown: (event) => event.preventDefault(), "data-dates-dropdown": true }, /* @__PURE__ */ React.createElement(
      Calendar,
      __spreadProps(__spreadValues({
        __staticSelector: "DateInput"
      }, calendarProps), {
        classNames,
        styles,
        unstyled,
        __preventFocus: true,
        minDate,
        maxDate,
        locale,
        getDayProps: _getDayProps,
        size: inputProps.size,
        date: _date,
        onDateChange: setDate
      })
    ))
  )), /* @__PURE__ */ React.createElement(HiddenDatesInput, { name, form, value: _value, type: "default" }));
});
DateInput.classes = __spreadValues(__spreadValues({}, Input.classes), Calendar.classes);
DateInput.displayName = "@mantine/dates/DateInput";

export { DateInput };
//# sourceMappingURL=DateInput.js.map
