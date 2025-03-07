var __defProp = Object.defineProperty;
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
function getOptionsLockup(options) {
  return options.reduce((acc, item) => {
    if ("group" in item) {
      return __spreadValues(__spreadValues({}, acc), getOptionsLockup(item.items));
    }
    acc[item.value] = item;
    return acc;
  }, {});
}
function getLabelsLockup(options) {
  return options.reduce((acc, item) => {
    if ("group" in item) {
      return __spreadValues(__spreadValues({}, acc), getLabelsLockup(item.items));
    }
    acc[item.label] = item;
    return acc;
  }, {});
}

export { getLabelsLockup, getOptionsLockup };
//# sourceMappingURL=get-options-lockup.js.map
