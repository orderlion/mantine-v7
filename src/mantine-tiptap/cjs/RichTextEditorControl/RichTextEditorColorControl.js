'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var RichTextEditorControl = require('./RichTextEditorControl.js');
var RichTextEditor_context = require('../RichTextEditor.context.js');

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
const RichTextEditorColorControl = React.forwardRef((props, ref) => {
  const _a = core.useProps("RichTextEditorColorControl", defaultProps, props), { color } = _a, others = __objRest(_a, ["color"]);
  const { editor, labels } = RichTextEditor_context.useRichTextEditorContext();
  const currentColor = (editor == null ? void 0 : editor.getAttributes("textStyle").color) || null;
  const label = labels.colorControlLabel(color);
  return /* @__PURE__ */ React__default.createElement(
    RichTextEditorControl.RichTextEditorControl,
    __spreadProps(__spreadValues({}, others), {
      active: currentColor === color,
      "aria-label": label,
      title: label,
      onClick: () => (editor == null ? void 0 : editor.chain()).focus().setColor(color).run(),
      ref
    }),
    /* @__PURE__ */ React__default.createElement(core.ColorSwatch, { color, size: 14 })
  );
});

exports.RichTextEditorColorControl = RichTextEditorColorControl;
//# sourceMappingURL=RichTextEditorColorControl.js.map
