'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dayjs = require('dayjs');
var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');
var DateTimePicker_module = require('./DateTimePicker.module.css.js');
var pickCalendarLevelsProps = require('../Calendar/pick-calendar-levels-props/pick-calendar-levels-props.js');
var useDatesContext = require('../DatesProvider/use-dates-context.js');
var PickerInputBase = require('../PickerInputBase/PickerInputBase.js');
var DatePicker = require('../DatePicker/DatePicker.js');
var TimeInput = require('../TimeInput/TimeInput.js');
var assignTime = require('../../utils/assign-time/assign-time.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);
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
  dropdownType: "popover"
};
const DateTimePicker = core.factory((_props, ref) => {
  const props = core.useProps("DateTimePicker", defaultProps, _props);
  const _a = props, {
    value,
    defaultValue,
    onChange,
    valueFormat,
    locale,
    classNames,
    styles,
    unstyled,
    timeInputProps,
    submitButtonProps,
    withSeconds,
    level,
    defaultLevel,
    size,
    variant,
    dropdownType,
    vars
  } = _a, rest = __objRest(_a, [
    "value",
    "defaultValue",
    "onChange",
    "valueFormat",
    "locale",
    "classNames",
    "styles",
    "unstyled",
    "timeInputProps",
    "submitButtonProps",
    "withSeconds",
    "level",
    "defaultLevel",
    "size",
    "variant",
    "dropdownType",
    "vars"
  ]);
  const getStyles = core.useStyles({
    name: "DateTimePicker",
    classes: DateTimePicker_module['default'],
    props,
    classNames,
    styles,
    unstyled,
    vars
  });
  const { resolvedClassNames, resolvedStyles } = core.useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  const _valueFormat = valueFormat || (withSeconds ? "DD/MM/YYYY HH:mm:ss" : "DD/MM/YYYY HH:mm");
  const timeInputRef = React.useRef();
  const timeInputRefMerged = hooks.useMergedRef(timeInputRef, timeInputProps == null ? void 0 : timeInputProps.ref);
  const _b = pickCalendarLevelsProps.pickCalendarProps(rest), {
    calendarProps: _c
  } = _b, _d = _c, calendarProps = __objRest(_d, ["allowSingleDateInRange"]), {
    others
  } = _b;
  const ctx = useDatesContext.useDatesContext();
  const [_value, setValue] = hooks.useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange
  });
  const formatTime = (dateValue) => dateValue ? dayjs__default(dateValue).format(withSeconds ? "HH:mm:ss" : "HH:mm") : "";
  const [timeValue, setTimeValue] = React.useState(formatTime(_value));
  const [currentLevel, setCurrentLevel] = React.useState(level || defaultLevel || "month");
  const [dropdownOpened, dropdownHandlers] = hooks.useDisclosure(false);
  const formattedValue = _value ? dayjs__default(_value).locale(ctx.getLocale(locale)).format(_valueFormat) : "";
  const handleTimeChange = (event) => {
    var _a2;
    (_a2 = timeInputProps == null ? void 0 : timeInputProps.onChange) == null ? void 0 : _a2.call(timeInputProps, event);
    const val = event.currentTarget.value;
    setTimeValue(val);
    if (val) {
      const [hours, minutes, seconds] = val.split(":").map(Number);
      const timeDate = /* @__PURE__ */ new Date();
      timeDate.setHours(hours);
      timeDate.setMinutes(minutes);
      seconds !== void 0 && timeDate.setSeconds(seconds);
      setValue(assignTime.assignTime(timeDate, _value || /* @__PURE__ */ new Date()));
    }
  };
  const handleDateChange = (date) => {
    var _a2;
    setValue(assignTime.assignTime(_value, date));
    (_a2 = timeInputRef.current) == null ? void 0 : _a2.focus();
  };
  const handleTimeInputKeyDown = (event) => {
    var _a2;
    (_a2 = timeInputProps == null ? void 0 : timeInputProps.onKeyDown) == null ? void 0 : _a2.call(timeInputProps, event);
    if (event.key === "Enter") {
      event.preventDefault();
      dropdownHandlers.close();
    }
  };
  hooks.useDidUpdate(() => {
    if (!dropdownOpened) {
      setTimeValue(formatTime(_value));
    }
  }, [_value, dropdownOpened]);
  hooks.useDidUpdate(() => {
    if (dropdownOpened) {
      setCurrentLevel("month");
    }
  }, [dropdownOpened]);
  const __stopPropagation = dropdownType === "popover";
  return /* @__PURE__ */ React__default.createElement(
    PickerInputBase.PickerInputBase,
    __spreadProps(__spreadValues({
      formattedValue,
      dropdownOpened,
      dropdownHandlers,
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      unstyled,
      ref,
      onClear: () => setValue(null),
      shouldClear: !!_value,
      value: _value,
      size,
      variant,
      dropdownType
    }, others), {
      type: "default",
      __staticSelector: "DateTimePicker"
    }),
    /* @__PURE__ */ React__default.createElement(
      DatePicker.DatePicker,
      __spreadProps(__spreadValues({}, calendarProps), {
        size,
        variant,
        type: "default",
        value: _value,
        defaultDate: _value,
        onChange: handleDateChange,
        locale,
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        unstyled,
        __staticSelector: "DateTimePicker",
        __stopPropagation,
        level,
        defaultLevel,
        onLevelChange: (_level) => {
          var _a2;
          setCurrentLevel(_level);
          (_a2 = calendarProps.onLevelChange) == null ? void 0 : _a2.call(calendarProps, _level);
        }
      })
    ),
    currentLevel === "month" && /* @__PURE__ */ React__default.createElement("div", __spreadValues({}, getStyles("timeWrapper")), /* @__PURE__ */ React__default.createElement(
      TimeInput.TimeInput,
      __spreadProps(__spreadValues(__spreadValues({
        value: timeValue,
        withSeconds,
        ref: timeInputRefMerged,
        unstyled
      }, timeInputProps), getStyles("timeInput", {
        className: timeInputProps == null ? void 0 : timeInputProps.className,
        style: timeInputProps == null ? void 0 : timeInputProps.style
      })), {
        onChange: handleTimeChange,
        onKeyDown: handleTimeInputKeyDown,
        size,
        "data-mantine-stop-propagation": __stopPropagation || void 0
      })
    ), /* @__PURE__ */ React__default.createElement(
      core.ActionIcon,
      __spreadProps(__spreadValues(__spreadProps(__spreadValues({
        variant: "default",
        size: `input-${size}`
      }, getStyles("submitButton", {
        className: submitButtonProps == null ? void 0 : submitButtonProps.className,
        style: submitButtonProps == null ? void 0 : submitButtonProps.style
      })), {
        unstyled,
        "data-mantine-stop-propagation": __stopPropagation || void 0,
        children: /* @__PURE__ */ React__default.createElement(core.CheckIcon, { size: "30%" })
      }), submitButtonProps), {
        onClick: (event) => {
          var _a2;
          (_a2 = submitButtonProps == null ? void 0 : submitButtonProps.onClick) == null ? void 0 : _a2.call(submitButtonProps, event);
          dropdownHandlers.close();
        }
      })
    ))
  );
});
DateTimePicker.classes = __spreadValues(__spreadValues(__spreadValues({}, DateTimePicker_module['default']), PickerInputBase.PickerInputBase.classes), DatePicker.DatePicker.classes);
DateTimePicker.displayName = "@mantine/dates/DateTimePicker";

exports.DateTimePicker = DateTimePicker;
//# sourceMappingURL=DateTimePicker.js.map
