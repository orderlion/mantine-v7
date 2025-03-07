import { clearListState } from './clear-list-state.js';

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
function getIndexFromKeyAfterPath(key, path) {
  const split = key.substring(path.length + 1).split(".")[0];
  return parseInt(split, 10);
}
function changeErrorIndices(path, index, errors, change) {
  if (index === void 0) {
    return errors;
  }
  const pathString = `${String(path)}`;
  let clearedErrors = errors;
  if (change === -1) {
    clearedErrors = clearListState(`${pathString}.${index}`, clearedErrors);
  }
  const cloned = __spreadValues({}, clearedErrors);
  const changedKeys = /* @__PURE__ */ new Set();
  Object.entries(clearedErrors).filter(([key]) => {
    if (!key.startsWith(`${pathString}.`)) {
      return false;
    }
    const currIndex = getIndexFromKeyAfterPath(key, pathString);
    if (Number.isNaN(currIndex)) {
      return false;
    }
    return currIndex >= index;
  }).forEach(([key, value]) => {
    const currIndex = getIndexFromKeyAfterPath(key, pathString);
    const newKey = key.replace(
      `${pathString}.${currIndex}`,
      `${pathString}.${currIndex + change}`
    );
    cloned[newKey] = value;
    changedKeys.add(newKey);
    if (!changedKeys.has(key)) {
      delete cloned[key];
    }
  });
  return cloned;
}

export { changeErrorIndices };
//# sourceMappingURL=change-error-indices.js.map
