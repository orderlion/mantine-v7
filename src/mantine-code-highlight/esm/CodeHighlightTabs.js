import React from 'react';
import hljs from 'highlight.js';
import cx from 'clsx';
import { useUncontrolled } from '@mantine/hooks';
import { rem, createVarsResolver, factory, useProps, useStyles, UnstyledButton, Box, ScrollArea, Tooltip, ActionIcon, CopyButton } from '@mantine/core';
import { CopyIcon } from './CopyIcon.js';
import { FileIcon } from './FileIcon.js';
import { ExpandIcon } from './ExpandIcon.js';
import _classes from './CodeHighlight.module.css.js';
import themeClasses from './CodeHighlight.theme.module.css.js';

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
const classes = __spreadProps(__spreadValues({}, _classes), { root: cx(_classes.root, themeClasses.theme) });
const defaultProps = {
  withHeader: true,
  copyLabel: "Copy code",
  copiedLabel: "Copied",
  maxCollapsedHeight: rem("8rem"),
  expandCodeLabel: "Expand code",
  collapseCodeLabel: "Collapse code"
};
const varsResolver = createVarsResolver((_, { maxCollapsedHeight }) => ({
  root: { "--ch-max-collapsed-height": rem(maxCollapsedHeight) }
}));
const CodeHighlightTabs = factory((_props, ref) => {
  const props = useProps("CodeHighlightTabs", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    code,
    defaultActiveTab,
    activeTab,
    onTabChange,
    withHeader,
    copiedLabel,
    copyLabel,
    getFileIcon,
    maxCollapsedHeight,
    expanded,
    defaultExpanded,
    onExpandedChange,
    expandCodeLabel,
    collapseCodeLabel,
    withExpandButton
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "children",
    "code",
    "defaultActiveTab",
    "activeTab",
    "onTabChange",
    "withHeader",
    "copiedLabel",
    "copyLabel",
    "getFileIcon",
    "maxCollapsedHeight",
    "expanded",
    "defaultExpanded",
    "onExpandedChange",
    "expandCodeLabel",
    "collapseCodeLabel",
    "withExpandButton"
  ]);
  const getStyles = useStyles({
    name: "CodeHighlightTabs",
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const [value, setValue] = useUncontrolled({
    defaultValue: defaultActiveTab,
    value: activeTab,
    finalValue: 0,
    onChange: onTabChange
  });
  const [_expanded, setExpanded] = useUncontrolled({
    defaultValue: defaultExpanded,
    value: expanded,
    finalValue: true,
    onChange: onExpandedChange
  });
  const nodes = Array.isArray(code) ? code : [code];
  const currentCode = nodes[value];
  const highlighted = hljs.highlight(currentCode.code.trim(), {
    language: currentCode.language
  }).value;
  const files = nodes.map((node, index) => /* @__PURE__ */ React.createElement(
    UnstyledButton,
    __spreadProps(__spreadValues({}, getStyles("file")), {
      key: node.fileName,
      mod: { active: index === value },
      onClick: () => setValue(index)
    }),
    /* @__PURE__ */ React.createElement(
      FileIcon,
      __spreadValues({
        fileIcon: node.icon,
        getFileIcon,
        fileName: node.fileName
      }, getStyles("fileIcon"))
    ),
    /* @__PURE__ */ React.createElement("span", null, node.fileName)
  ));
  return /* @__PURE__ */ React.createElement(Box, __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), { ref }), others), { dir: "ltr" }), withHeader && /* @__PURE__ */ React.createElement("div", __spreadValues({}, getStyles("header")), /* @__PURE__ */ React.createElement(ScrollArea, { type: "never", dir: "ltr", offsetScrollbars: false }, /* @__PURE__ */ React.createElement("div", __spreadValues({}, getStyles("files")), files)), /* @__PURE__ */ React.createElement("div", __spreadValues({}, getStyles("controls")), withExpandButton && /* @__PURE__ */ React.createElement(
    Tooltip,
    {
      label: _expanded ? collapseCodeLabel : expandCodeLabel,
      fz: "sm",
      position: "left"
    },
    /* @__PURE__ */ React.createElement(
      ActionIcon,
      __spreadValues({
        onClick: () => setExpanded(!_expanded),
        variant: "none"
      }, getStyles("control")),
      /* @__PURE__ */ React.createElement(ExpandIcon, { expanded: _expanded })
    )
  ), /* @__PURE__ */ React.createElement(CopyButton, { value: currentCode.code.trim() }, ({ copied, copy }) => /* @__PURE__ */ React.createElement(Tooltip, { label: copied ? copiedLabel : copyLabel, fz: "sm", position: "left" }, /* @__PURE__ */ React.createElement(ActionIcon, __spreadValues({ onClick: copy, variant: "none" }, getStyles("control")), /* @__PURE__ */ React.createElement(CopyIcon, { copied })))))), /* @__PURE__ */ React.createElement(ScrollArea, { type: "auto", dir: "ltr", offsetScrollbars: false }, /* @__PURE__ */ React.createElement(Box, __spreadProps(__spreadValues({}, getStyles("codeWrapper")), { mod: { expanded: _expanded } }), /* @__PURE__ */ React.createElement("pre", __spreadValues({}, getStyles("pre")), /* @__PURE__ */ React.createElement("code", __spreadProps(__spreadValues({}, getStyles("code")), { dangerouslySetInnerHTML: { __html: highlighted } }))))), /* @__PURE__ */ React.createElement(
    UnstyledButton,
    __spreadProps(__spreadValues({}, getStyles("showCodeButton")), {
      mod: { hidden: _expanded },
      onClick: () => setExpanded(true)
    }),
    expandCodeLabel
  ));
});
CodeHighlightTabs.displayName = "@mantine/core/CodeHighlightTabs";

export { CodeHighlightTabs };
//# sourceMappingURL=CodeHighlightTabs.js.map
