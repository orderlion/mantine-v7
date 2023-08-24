import React from 'react';
import { factory, useProps, Box, rem } from '@mantine/core';
import { useRichTextEditorContext } from '../RichTextEditor.context.js';
import classes from '../RichTextEditor.module.css.js';

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
const RichTextEditorToolbar = factory((_props, ref) => {
  const props = useProps("RichTextEditorToolbar", defaultProps, _props);
  const _a = props, { classNames, className, style, styles, unstyled, vars, sticky, stickyOffset } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars", "sticky", "stickyOffset"]);
  const ctx = useRichTextEditorContext();
  return /* @__PURE__ */ React.createElement(
    Box,
    __spreadProps(__spreadValues(__spreadValues({
      ref,
      mod: { sticky }
    }, ctx.getStyles("toolbar", { className, style, styles, classNames })), others), {
      __vars: { "--rte-sticky-offset": rem(stickyOffset) }
    })
  );
});
RichTextEditorToolbar.classes = classes;
RichTextEditorToolbar.displayName = "@mantine/tiptap/RichTextEditorToolbar";

export { RichTextEditorToolbar };
//# sourceMappingURL=RichTextEditorToolbar.js.map
