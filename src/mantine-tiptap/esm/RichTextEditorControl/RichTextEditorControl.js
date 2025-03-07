import React, { forwardRef } from 'react';
import { factory, useProps, UnstyledButton, rem } from '@mantine/core';
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
const defaultProps = {
  interactive: true
};
const RichTextEditorControl = factory((_props, ref) => {
  const props = useProps("RichTextEditorControl", defaultProps, _props);
  const _a = props, { classNames, className, style, styles, unstyled, vars, interactive, active } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars", "interactive", "active"]);
  const ctx = useRichTextEditorContext();
  return /* @__PURE__ */ React.createElement(
    UnstyledButton,
    __spreadProps(__spreadValues(__spreadValues({}, others), ctx.getStyles("control", { className, style, classNames, styles })), {
      "data-rich-text-editor-control": true,
      tabIndex: interactive ? 0 : -1,
      "data-interactive": interactive || void 0,
      "data-active": active || void 0,
      "aria-pressed": active && interactive || void 0,
      "aria-hidden": !interactive || void 0,
      ref,
      unstyled
    })
  );
});
RichTextEditorControl.classes = classes;
RichTextEditorControl.displayName = "@mantine/tiptap/RichTextEditorControl";
const RichTextEditorControlBase = forwardRef((_a, ref) => {
  var _b = _a, { className, icon: Icon } = _b, others = __objRest(_b, ["className", "icon"]);
  return /* @__PURE__ */ React.createElement(RichTextEditorControl, __spreadValues({ ref }, others), /* @__PURE__ */ React.createElement(Icon, { style: { width: rem(16), height: rem(16) } }));
});
RichTextEditorControlBase.displayName = "@mantine/tiptap/RichTextEditorControlBase";
function createControl({ label, isActive, operation, icon }) {
  return forwardRef((props, ref) => {
    const { editor, labels } = useRichTextEditorContext();
    const _label = labels[label];
    return /* @__PURE__ */ React.createElement(
      RichTextEditorControlBase,
      __spreadProps(__spreadValues({}, props), {
        "aria-label": _label,
        title: _label,
        active: (isActive == null ? void 0 : isActive.name) ? editor == null ? void 0 : editor.isActive(isActive.name, isActive.attributes) : false,
        ref,
        onClick: () => editor == null ? void 0 : editor.chain().focus()[operation.name](operation.attributes).run(),
        icon: props.icon || icon
      })
    );
  });
}

export { RichTextEditorControl, RichTextEditorControlBase, createControl };
//# sourceMappingURL=RichTextEditorControl.js.map
