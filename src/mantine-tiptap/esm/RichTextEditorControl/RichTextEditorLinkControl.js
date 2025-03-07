import React, { useState } from 'react';
import { factory, useProps, useResolvedStylesApi, Popover, TextInput, Tooltip, UnstyledButton, rem, Button } from '@mantine/core';
import { useInputState, useDisclosure, useWindowEvent } from '@mantine/hooks';
import { IconExternalLink, IconLink } from '@tabler/icons-react';
import { useRichTextEditorContext } from '../RichTextEditor.context.js';
import { RichTextEditorControlBase } from './RichTextEditorControl.js';
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
const LinkIcon = (props) => /* @__PURE__ */ React.createElement(IconLink, __spreadValues({ stroke: 1.5 }, props));
const defaultProps = {};
const RichTextEditorLinkControl = factory(
  (_props, ref) => {
    var _b;
    const props = useProps("RichTextEditorLinkControl", defaultProps, _props);
    const _a = props, {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      icon,
      popoverProps,
      disableTooltips,
      initialExternal
    } = _a, others = __objRest(_a, [
      "classNames",
      "className",
      "style",
      "styles",
      "unstyled",
      "vars",
      "icon",
      "popoverProps",
      "disableTooltips",
      "initialExternal"
    ]);
    const ctx = useRichTextEditorContext();
    const stylesApiProps = { classNames, styles };
    const [url, setUrl] = useInputState("");
    const [external, setExternal] = useState(initialExternal);
    const [opened, { open, close }] = useDisclosure(false);
    const handleOpen = () => {
      var _a2;
      open();
      const linkData = (_a2 = ctx.editor) == null ? void 0 : _a2.getAttributes("link");
      setUrl((linkData == null ? void 0 : linkData.href) || "");
      setExternal((linkData == null ? void 0 : linkData.target) === "_blank");
    };
    const handleClose = () => {
      close();
      setUrl("");
      setExternal(initialExternal);
    };
    const setLink = () => {
      var _a2, _b2;
      handleClose();
      url === "" ? (_a2 = ctx.editor) == null ? void 0 : _a2.chain().focus().extendMarkRange("link").unsetLink().run() : (_b2 = ctx.editor) == null ? void 0 : _b2.chain().focus().extendMarkRange("link").setLink({ href: url, target: external ? "_blank" : null }).run();
    };
    const handleInputKeydown = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        setLink();
      }
    };
    useWindowEvent("edit-link", handleOpen, false);
    const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({ classNames, styles, props });
    return /* @__PURE__ */ React.createElement(
      Popover,
      __spreadValues({
        trapFocus: true,
        shadow: "md",
        withinPortal: true,
        opened,
        onClose: handleClose,
        offset: -44,
        zIndex: 1e4,
        unstyled
      }, popoverProps),
      /* @__PURE__ */ React.createElement(Popover.Target, null, /* @__PURE__ */ React.createElement(
        RichTextEditorControlBase,
        __spreadProps(__spreadValues({
          icon: icon || LinkIcon
        }, others), {
          "aria-label": ctx.labels.linkControlLabel,
          title: ctx.labels.linkControlLabel,
          onClick: handleOpen,
          active: (_b = ctx.editor) == null ? void 0 : _b.isActive("link"),
          unstyled,
          ref,
          classNames: resolvedClassNames,
          styles: resolvedStyles,
          className,
          style
        })
      )),
      /* @__PURE__ */ React.createElement(Popover.Dropdown, __spreadValues({}, ctx.getStyles("linkEditorDropdown", stylesApiProps)), /* @__PURE__ */ React.createElement("div", __spreadValues({}, ctx.getStyles("linkEditor", stylesApiProps)), /* @__PURE__ */ React.createElement(
        TextInput,
        {
          placeholder: ctx.labels.linkEditorInputPlaceholder,
          "aria-label": ctx.labels.linkEditorInputLabel,
          type: "url",
          value: url,
          onChange: setUrl,
          classNames: { input: ctx.getStyles("linkEditorInput", stylesApiProps).className },
          onKeyDown: handleInputKeydown,
          unstyled,
          rightSection: /* @__PURE__ */ React.createElement(
            Tooltip,
            {
              label: external ? ctx.labels.linkEditorExternalLink : ctx.labels.linkEditorInternalLink,
              events: { hover: true, focus: true, touch: true },
              withinPortal: true,
              withArrow: true,
              disabled: disableTooltips,
              unstyled,
              zIndex: 1e4
            },
            /* @__PURE__ */ React.createElement(
              UnstyledButton,
              __spreadProps(__spreadValues({
                onClick: () => setExternal((e) => !e),
                "data-active": external || void 0
              }, ctx.getStyles("linkEditorExternalControl", stylesApiProps)), {
                unstyled
              }),
              /* @__PURE__ */ React.createElement(IconExternalLink, { style: { width: rem(14), height: rem(14) }, stroke: 1.5 })
            )
          )
        }
      ), /* @__PURE__ */ React.createElement(
        Button,
        __spreadProps(__spreadValues({
          variant: "default",
          onClick: setLink
        }, ctx.getStyles("linkEditorSave", stylesApiProps)), {
          unstyled
        }),
        ctx.labels.linkEditorSave
      )))
    );
  }
);
RichTextEditorLinkControl.classes = classes;
RichTextEditorLinkControl.displayName = "@mantine/tiptap/RichTextEditorLinkControl";

export { RichTextEditorLinkControl };
//# sourceMappingURL=RichTextEditorLinkControl.js.map
