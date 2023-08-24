import React, { forwardRef, useState } from 'react';
import { useProps, ColorSwatch, Popover, SimpleGrid, ColorPicker, Tooltip, Group, ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconX, IconCircleOff, IconColorPicker, IconPalette, IconCheck } from '@tabler/icons-react';
import { RichTextEditorControl } from './RichTextEditorControl.js';
import { useRichTextEditorContext } from '../RichTextEditor.context.js';

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
const RichTextEditorColorPickerControl = forwardRef((props, ref) => {
  const _a = useProps(
    "RichTextEditorColorPickerControl",
    defaultProps,
    props
  ), { popoverProps, colors, colorPickerProps } = _a, others = __objRest(_a, ["popoverProps", "colors", "colorPickerProps"]);
  const { editor, labels, getStyles } = useRichTextEditorContext();
  const [opened, { toggle, close }] = useDisclosure(false);
  const [state, setState] = useState("palette");
  const currentColor = (editor == null ? void 0 : editor.getAttributes("textStyle").color) || "var(--mantine-color-text)";
  const handleChange = (value, shouldClose = true) => {
    (editor == null ? void 0 : editor.chain()).focus().setColor(value).run();
    shouldClose && close();
  };
  const handleClear = () => {
    (editor == null ? void 0 : editor.chain()).focus().unsetColor().run();
    close();
  };
  const controls = colors.map((color, index) => /* @__PURE__ */ React.createElement(
    ColorSwatch,
    {
      key: index,
      component: "button",
      color,
      onClick: () => handleChange(color),
      size: 26,
      radius: "xs",
      style: { cursor: "pointer" },
      title: labels.colorPickerColorLabel(color),
      "aria-label": labels.colorPickerColorLabel(color)
    }
  ));
  return /* @__PURE__ */ React.createElement(Popover, __spreadValues({ opened, withinPortal: true, trapFocus: true, onClose: close }, popoverProps), /* @__PURE__ */ React.createElement(Popover.Target, null, /* @__PURE__ */ React.createElement(
    RichTextEditorControl,
    __spreadProps(__spreadValues({}, others), {
      "aria-label": labels.colorPickerControlLabel,
      title: labels.colorPickerControlLabel,
      ref,
      onClick: toggle
    }),
    /* @__PURE__ */ React.createElement(ColorSwatch, { color: currentColor, size: 14 })
  )), /* @__PURE__ */ React.createElement(Popover.Dropdown, __spreadValues({}, getStyles("linkEditorDropdown")), state === "palette" && /* @__PURE__ */ React.createElement(SimpleGrid, { cols: 7, spacing: 2 }, controls), state === "colorPicker" && /* @__PURE__ */ React.createElement(
    ColorPicker,
    __spreadValues({
      defaultValue: currentColor,
      onChange: (value) => handleChange(value, false)
    }, colorPickerProps)
  ), /* @__PURE__ */ React.createElement(Tooltip.Group, { closeDelay: 200 }, /* @__PURE__ */ React.createElement(Group, { justify: "flex-end", gap: "xs", mt: "sm" }, state === "palette" && /* @__PURE__ */ React.createElement(
    ActionIcon,
    {
      variant: "default",
      onClick: close,
      title: labels.colorPickerCancel,
      "aria-label": labels.colorPickerCancel
    },
    /* @__PURE__ */ React.createElement(IconX, { stroke: 1.5, size: "1rem" })
  ), /* @__PURE__ */ React.createElement(
    ActionIcon,
    {
      variant: "default",
      onClick: handleClear,
      title: labels.colorPickerClear,
      "aria-label": labels.colorPickerClear
    },
    /* @__PURE__ */ React.createElement(IconCircleOff, { stroke: 1.5, size: "1rem" })
  ), state === "palette" ? /* @__PURE__ */ React.createElement(
    ActionIcon,
    {
      variant: "default",
      onClick: () => setState("colorPicker"),
      title: labels.colorPickerColorPicker,
      "aria-label": labels.colorPickerColorPicker
    },
    /* @__PURE__ */ React.createElement(IconColorPicker, { stroke: 1.5, size: "1rem" })
  ) : /* @__PURE__ */ React.createElement(
    ActionIcon,
    {
      variant: "default",
      onClick: () => setState("palette"),
      "aria-label": labels.colorPickerPalette,
      title: labels.colorPickerPalette
    },
    /* @__PURE__ */ React.createElement(IconPalette, { stroke: 1.5, size: "1rem" })
  ), state === "colorPicker" && /* @__PURE__ */ React.createElement(
    ActionIcon,
    {
      variant: "default",
      onClick: close,
      title: labels.colorPickerSave,
      "aria-label": labels.colorPickerSave
    },
    /* @__PURE__ */ React.createElement(IconCheck, { stroke: 1.5, size: "1rem" })
  )))));
});
RichTextEditorColorPickerControl.displayName = "@mantine/tiptap/ColorPickerControl";

export { RichTextEditorColorPickerControl };
//# sourceMappingURL=RichTextEditorColorPickerControl.js.map
