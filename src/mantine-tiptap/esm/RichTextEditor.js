import React, { useMemo } from 'react';
import { factory, useProps, useStyles, Box } from '@mantine/core';
import { DEFAULT_LABELS } from './labels.js';
import { RichTextEditorProvider } from './RichTextEditor.context.js';
import { RichTextEditorToolbar } from './RichTextEditorToolbar/RichTextEditorToolbar.js';
import { RichTextEditorControlsGroup } from './RichTextEditorControlsGroup/RichTextEditorControlsGroup.js';
import { RichTextEditorContent } from './RichTextEditorContent/RichTextEditorContent.js';
import { RichTextEditorControl } from './RichTextEditorControl/RichTextEditorControl.js';
import classes from './RichTextEditor.module.css.js';
import { BoldControl, ItalicControl, StrikeThroughControl, UnderlineControl, ClearFormattingControl, H1Control, H2Control, H3Control, H4Control, H5Control, H6Control, BulletListControl, OrderedListControl, UnlinkControl, BlockquoteControl, AlignLeftControl, AlignRightControl, AlignCenterControl, AlignJustifyControl, SuperscriptControl, SubscriptControl, CodeControl, CodeBlockControl, HighlightControl, HrControl, UnsetColorControl } from './RichTextEditorControl/controls.js';
import { RichTextEditorLinkControl } from './RichTextEditorControl/RichTextEditorLinkControl.js';
import { RichTextEditorColorPickerControl } from './RichTextEditorControl/RichTextEditorColorPickerControl.js';
import { RichTextEditorColorControl } from './RichTextEditorControl/RichTextEditorColorControl.js';

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
  withCodeHighlightStyles: true,
  withTypographyStyles: true
};
const RichTextEditor = factory((_props, ref) => {
  const props = useProps("RichTextEditor", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    editor,
    withCodeHighlightStyles,
    withTypographyStyles,
    labels,
    children
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "editor",
    "withCodeHighlightStyles",
    "withTypographyStyles",
    "labels",
    "children"
  ]);
  const getStyles = useStyles({
    name: "RichTextEditor",
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars
  });
  const mergedLabels = useMemo(() => __spreadValues(__spreadValues({}, DEFAULT_LABELS), labels), [labels]);
  return /* @__PURE__ */ React.createElement(
    RichTextEditorProvider,
    {
      value: {
        editor,
        getStyles,
        labels: mergedLabels,
        withCodeHighlightStyles,
        withTypographyStyles
      }
    },
    /* @__PURE__ */ React.createElement(Box, __spreadProps(__spreadValues(__spreadValues({}, getStyles("root")), others), { ref }), children)
  );
});
RichTextEditor.classes = classes;
RichTextEditor.displayName = "@mantine/tiptap/RichTextEditor";
RichTextEditor.Content = RichTextEditorContent;
RichTextEditor.Control = RichTextEditorControl;
RichTextEditor.Toolbar = RichTextEditorToolbar;
RichTextEditor.ControlsGroup = RichTextEditorControlsGroup;
RichTextEditor.Bold = BoldControl;
RichTextEditor.Italic = ItalicControl;
RichTextEditor.Strikethrough = StrikeThroughControl;
RichTextEditor.Underline = UnderlineControl;
RichTextEditor.ClearFormatting = ClearFormattingControl;
RichTextEditor.H1 = H1Control;
RichTextEditor.H2 = H2Control;
RichTextEditor.H3 = H3Control;
RichTextEditor.H4 = H4Control;
RichTextEditor.H5 = H5Control;
RichTextEditor.H6 = H6Control;
RichTextEditor.BulletList = BulletListControl;
RichTextEditor.OrderedList = OrderedListControl;
RichTextEditor.Link = RichTextEditorLinkControl;
RichTextEditor.Unlink = UnlinkControl;
RichTextEditor.Blockquote = BlockquoteControl;
RichTextEditor.AlignLeft = AlignLeftControl;
RichTextEditor.AlignRight = AlignRightControl;
RichTextEditor.AlignCenter = AlignCenterControl;
RichTextEditor.AlignJustify = AlignJustifyControl;
RichTextEditor.Superscript = SuperscriptControl;
RichTextEditor.Subscript = SubscriptControl;
RichTextEditor.Code = CodeControl;
RichTextEditor.CodeBlock = CodeBlockControl;
RichTextEditor.ColorPicker = RichTextEditorColorPickerControl;
RichTextEditor.Color = RichTextEditorColorControl;
RichTextEditor.Highlight = HighlightControl;
RichTextEditor.Hr = HrControl;
RichTextEditor.UnsetColor = UnsetColorControl;

export { RichTextEditor };
//# sourceMappingURL=RichTextEditor.js.map
