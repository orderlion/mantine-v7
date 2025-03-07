'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var Spotlight_module = require('./Spotlight.module.css.js');
var Spotlight_context = require('./Spotlight.context.js');
var spotlight_store = require('./spotlight.store.js');

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
const defaultProps = {};
const SpotlightActionsList = core.factory((props, ref) => {
  const _a = core.useProps(
    "SpotlightActionsList",
    defaultProps,
    props
  ), { className, style, id, children, vars, classNames, styles } = _a, others = __objRest(_a, ["className", "style", "id", "children", "vars", "classNames", "styles"]);
  const ctx = Spotlight_context.useSpotlightContext();
  const generatedId = `mantine-${React.useId().replaceAll(":", "")}`;
  const listId = id || generatedId;
  React.useEffect(() => {
    spotlight_store.spotlightActions.setListId(listId, ctx.store);
    return () => spotlight_store.spotlightActions.setListId("", ctx.store);
  }, []);
  return /* @__PURE__ */ React__default.createElement(
    core.ScrollArea.Autosize,
    __spreadValues(__spreadProps(__spreadValues({}, ctx.getStyles("actionsList", { className, style, classNames, styles })), {
      ref,
      type: "scroll",
      scrollbarSize: "var(--spotlight-actions-list-padding)",
      offsetScrollbars: "y",
      id: listId
    }), others),
    children
  );
});
SpotlightActionsList.classes = Spotlight_module['default'];
SpotlightActionsList.displayName = "@mantine/spotlight/SpotlightActionsList";

exports.SpotlightActionsList = SpotlightActionsList;
//# sourceMappingURL=SpotlightActionsList.js.map
