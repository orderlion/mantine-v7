import { useContext, useCallback } from 'react';
import { DatesProviderContext } from './DatesProvider.js';

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
function useDatesContext() {
  const ctx = useContext(DatesProviderContext);
  const getLocale = useCallback((input) => input || ctx.locale, [ctx.locale]);
  const getFirstDayOfWeek = useCallback(
    (input) => typeof input === "number" ? input : ctx.firstDayOfWeek,
    [ctx.firstDayOfWeek]
  );
  const getWeekendDays = useCallback(
    (input) => Array.isArray(input) ? input : ctx.weekendDays,
    [ctx.weekendDays]
  );
  const getLabelSeparator = useCallback(
    (input) => typeof input === "string" ? input : ctx.labelSeparator,
    [ctx.labelSeparator]
  );
  return __spreadProps(__spreadValues({}, ctx), {
    getLocale,
    getFirstDayOfWeek,
    getWeekendDays,
    getLabelSeparator
  });
}

export { useDatesContext };
//# sourceMappingURL=use-dates-context.js.map
