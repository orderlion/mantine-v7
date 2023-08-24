import { InputBaseStylesApi } from './InputBase.styles-api.js';

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
const MonthStylesApi = {
  selectors: {
    monthThead: "thead element of month table",
    monthRow: "tr element of month table",
    monthTbody: "tbody element of month table",
    monthCell: "td element of month table",
    month: "Month table element",
    weekdaysRow: "Weekdays tr element",
    weekday: "Weekday th element",
    day: "Month day control"
  },
  vars: {},
  modifiers: [
    {
      modifier: "data-with-spacing",
      selector: "monthCell",
      condition: "`withCellSpacing` prop is set"
    },
    { modifier: "data-today", selector: "day", condition: "Date is the same as new Date()" },
    {
      modifier: "data-hidden",
      selector: "day",
      condition: "Day is outside of current month and `hideOutsideDates` is set"
    },
    {
      modifier: "data-disabled",
      selector: "day",
      condition: "Day disabled by one of the props (`excludeDate`, `getDayProps`, etc.)"
    },
    { modifier: "data-weekend", selector: "day", condition: "Day is weekend" },
    { modifier: "data-outside", selector: "day", condition: "Day is outside of the current month" },
    { modifier: "data-selected", selector: "day", condition: "Day is selected" },
    { modifier: "data-in-range", selector: "day", condition: "Day is in range selection" },
    {
      modifier: "data-first-in-range",
      selector: "day",
      condition: "Day is first in range selection"
    },
    {
      modifier: "data-last-in-range",
      selector: "day",
      condition: "Day is last in range selection"
    }
  ]
};
const CalendarHeaderStylesApi = {
  selectors: {
    calendarHeader: "Calendar header root element",
    calendarHeaderControl: "Previous/next calendar header controls",
    calendarHeaderControlIcon: "Icon of previous/next calendar header controls",
    calendarHeaderLevel: "Level control (changes levels when clicked, month -> year -> decade)"
  },
  vars: {
    calendarHeader: {
      "--dch-control-size": "Controls size of the previous/next and level controls",
      "--dch-fz": "Controls font-size of the previous/next and level controls"
    }
  },
  modifiers: [
    {
      modifier: "data-direction",
      selector: "calendarHeaderControl",
      value: '`"previous"` or `"next"` depending on the control type'
    },
    {
      modifier: "data-disabled",
      selector: "calendarHeaderControl",
      condition: "Control is disabled for any reason"
    }
  ]
};
const DecadeLevelGroupStylesApi = {
  selectors: __spreadProps(__spreadValues({}, CalendarHeaderStylesApi.selectors), {
    levelsGroup: "Group of decades levels",
    yearsList: "Years list table element",
    yearsListRow: "Years list row element",
    yearsListCell: "Years list cell element",
    yearsListControl: "Button used to pick months and years"
  }),
  vars: {}
};
const YearLevelGroupStylesApi = {
  selectors: __spreadProps(__spreadValues({}, CalendarHeaderStylesApi.selectors), {
    levelsGroup: "Group of decades levels",
    monthsList: "Years list table element",
    monthsListRow: "Years list row element",
    monthsListCell: "Years list cell element",
    monthsListControl: "Button used to pick months and years"
  }),
  vars: {}
};
const MonthLevelGroupStylesApi = {
  selectors: __spreadValues(__spreadProps(__spreadValues({}, CalendarHeaderStylesApi.selectors), {
    levelsGroup: "Group of decades levels"
  }), MonthStylesApi.selectors),
  vars: {}
};
const CalendarStylesApi = {
  selectors: __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, CalendarHeaderStylesApi.selectors), DecadeLevelGroupStylesApi.selectors), YearLevelGroupStylesApi.selectors), MonthLevelGroupStylesApi.selectors),
  vars: {},
  modifiers: [...CalendarHeaderStylesApi.modifiers, ...MonthStylesApi.modifiers]
};
const YearPickerStylesApi = {
  selectors: __spreadValues(__spreadValues({}, CalendarHeaderStylesApi.selectors), DecadeLevelGroupStylesApi.selectors),
  vars: {},
  modifiers: CalendarHeaderStylesApi.modifiers
};
const MonthPickerStylesApi = {
  selectors: __spreadValues(__spreadValues(__spreadValues({}, CalendarHeaderStylesApi.selectors), DecadeLevelGroupStylesApi.selectors), YearLevelGroupStylesApi.selectors),
  vars: {},
  modifiers: CalendarHeaderStylesApi.modifiers
};
const DatePickerStylesApi = {
  selectors: __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, CalendarHeaderStylesApi.selectors), DecadeLevelGroupStylesApi.selectors), YearLevelGroupStylesApi.selectors), MonthLevelGroupStylesApi.selectors),
  vars: {},
  modifiers: [...CalendarHeaderStylesApi.modifiers, ...MonthStylesApi.modifiers]
};
const YearPickerInputStylesApi = {
  selectors: __spreadValues(__spreadValues({}, InputBaseStylesApi.selectors), YearPickerStylesApi.selectors),
  vars: {},
  modifiers: YearPickerStylesApi.modifiers
};
const MonthPickerInputStylesApi = {
  selectors: __spreadValues(__spreadValues({}, InputBaseStylesApi.selectors), MonthPickerStylesApi.selectors),
  vars: {},
  modifiers: MonthPickerStylesApi.modifiers
};
const DatePickerInputStylesApi = {
  selectors: __spreadValues(__spreadValues({}, InputBaseStylesApi.selectors), DatePickerStylesApi.selectors),
  vars: {},
  modifiers: DatePickerStylesApi.modifiers
};
const DateInputStylesApi = {
  selectors: __spreadValues(__spreadValues({}, InputBaseStylesApi.selectors), DatePickerStylesApi.selectors),
  vars: {},
  modifiers: DatePickerStylesApi.modifiers
};
const DateTimePickerStylesApi = {
  selectors: __spreadProps(__spreadValues(__spreadValues({}, InputBaseStylesApi.selectors), DatePickerStylesApi.selectors), {
    timeWrapper: "Wrapper around time input and submit button",
    timeInput: "TimeInput",
    submitButton: "Submit button"
  }),
  vars: {},
  modifiers: DatePickerStylesApi.modifiers
};
const TimeInputStylesApi = InputBaseStylesApi;

export { CalendarHeaderStylesApi, CalendarStylesApi, DateInputStylesApi, DatePickerInputStylesApi, DatePickerStylesApi, DateTimePickerStylesApi, DecadeLevelGroupStylesApi, MonthLevelGroupStylesApi, MonthPickerInputStylesApi, MonthPickerStylesApi, MonthStylesApi, TimeInputStylesApi, YearLevelGroupStylesApi, YearPickerInputStylesApi, YearPickerStylesApi };
//# sourceMappingURL=Dates.styles-api.js.map
