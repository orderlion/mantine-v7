'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var labels = require('./labels.js');
var RichTextEditor_context = require('./RichTextEditor.context.js');
var RichTextEditorToolbar = require('./RichTextEditorToolbar/RichTextEditorToolbar.js');
var RichTextEditorControlsGroup = require('./RichTextEditorControlsGroup/RichTextEditorControlsGroup.js');
var RichTextEditorContent = require('./RichTextEditorContent/RichTextEditorContent.js');
var RichTextEditorControl = require('./RichTextEditorControl/RichTextEditorControl.js');
var RichTextEditor_module = require('./RichTextEditor.module.css.js');
var controls = require('./RichTextEditorControl/controls.js');
var RichTextEditorLinkControl = require('./RichTextEditorControl/RichTextEditorLinkControl.js');
var RichTextEditorColorPickerControl = require('./RichTextEditorControl/RichTextEditorColorPickerControl.js');
var RichTextEditorColorControl = require('./RichTextEditorControl/RichTextEditorColorControl.js');

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
const defaultProps = {
  withCodeHighlightStyles: true,
  withTypographyStyles: true
};
const RichTextEditor = core.factory((_props, ref) => {
  const props = core.useProps("RichTextEditor", defaultProps, _props);
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
    labels: labels$1,
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
  const getStyles = core.useStyles({
    name: "RichTextEditor",
    classes: RichTextEditor_module['default'],
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars
  });
  const mergedLabels = React.useMemo(() => __spreadValues(__spreadValues({}, labels.DEFAULT_LABELS), labels$1), [labels$1]);
  return /* @__PURE__ */ React__default.createElement(
    RichTextEditor_context.RichTextEditorProvider,
    {
      value: {
        editor,
        getStyles,
        labels: mergedLabels,
        withCodeHighlightStyles,
        withTypographyStyles
      }
    },
    /* @__PURE__ */ React__default.createElement(core.Box, __spreadProps(__spreadValues(__spreadValues({}, getStyles("root")), others), { ref }), children)
  );
});
RichTextEditor.classes = RichTextEditor_module['default'];
RichTextEditor.displayName = "@mantine/tiptap/RichTextEditor";
RichTextEditor.Content = RichTextEditorContent.RichTextEditorContent;
RichTextEditor.Control = RichTextEditorControl.RichTextEditorControl;
RichTextEditor.Toolbar = RichTextEditorToolbar.RichTextEditorToolbar;
RichTextEditor.ControlsGroup = RichTextEditorControlsGroup.RichTextEditorControlsGroup;
RichTextEditor.Bold = controls.BoldControl;
RichTextEditor.Italic = controls.ItalicControl;
RichTextEditor.Strikethrough = controls.StrikeThroughControl;
RichTextEditor.Underline = controls.UnderlineControl;
RichTextEditor.ClearFormatting = controls.ClearFormattingControl;
RichTextEditor.H1 = controls.H1Control;
RichTextEditor.H2 = controls.H2Control;
RichTextEditor.H3 = controls.H3Control;
RichTextEditor.H4 = controls.H4Control;
RichTextEditor.H5 = controls.H5Control;
RichTextEditor.H6 = controls.H6Control;
RichTextEditor.BulletList = controls.BulletListControl;
RichTextEditor.OrderedList = controls.OrderedListControl;
RichTextEditor.Link = RichTextEditorLinkControl.RichTextEditorLinkControl;
RichTextEditor.Unlink = controls.UnlinkControl;
RichTextEditor.Blockquote = controls.BlockquoteControl;
RichTextEditor.AlignLeft = controls.AlignLeftControl;
RichTextEditor.AlignRight = controls.AlignRightControl;
RichTextEditor.AlignCenter = controls.AlignCenterControl;
RichTextEditor.AlignJustify = controls.AlignJustifyControl;
RichTextEditor.Superscript = controls.SuperscriptControl;
RichTextEditor.Subscript = controls.SubscriptControl;
RichTextEditor.Code = controls.CodeControl;
RichTextEditor.CodeBlock = controls.CodeBlockControl;
RichTextEditor.ColorPicker = RichTextEditorColorPickerControl.RichTextEditorColorPickerControl;
RichTextEditor.Color = RichTextEditorColorControl.RichTextEditorColorControl;
RichTextEditor.Highlight = controls.HighlightControl;
RichTextEditor.Hr = controls.HrControl;
RichTextEditor.UnsetColor = controls.UnsetColorControl;

exports.RichTextEditor = RichTextEditor;
//# sourceMappingURL=RichTextEditor.js.map
