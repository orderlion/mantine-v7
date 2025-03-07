'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hljs = require('highlight.js');
var cx = require('clsx');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');
var CopyIcon = require('./CopyIcon.js');
var FileIcon = require('./FileIcon.js');
var ExpandIcon = require('./ExpandIcon.js');
var CodeHighlight_module = require('./CodeHighlight.module.css.js');
var CodeHighlight_theme_module = require('./CodeHighlight.theme.module.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var hljs__default = /*#__PURE__*/_interopDefaultLegacy(hljs);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

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
const classes = __spreadProps(__spreadValues({}, CodeHighlight_module['default']), { root: cx__default(CodeHighlight_module['default'].root, CodeHighlight_theme_module['default'].theme) });
const defaultProps = {
  withHeader: true,
  copyLabel: "Copy code",
  copiedLabel: "Copied",
  maxCollapsedHeight: core.rem("8rem"),
  expandCodeLabel: "Expand code",
  collapseCodeLabel: "Collapse code"
};
const varsResolver = core.createVarsResolver((_, { maxCollapsedHeight }) => ({
  root: { "--ch-max-collapsed-height": core.rem(maxCollapsedHeight) }
}));
const CodeHighlightTabs = core.factory((_props, ref) => {
  const props = core.useProps("CodeHighlightTabs", defaultProps, _props);
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
  const getStyles = core.useStyles({
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
  const [value, setValue] = hooks.useUncontrolled({
    defaultValue: defaultActiveTab,
    value: activeTab,
    finalValue: 0,
    onChange: onTabChange
  });
  const [_expanded, setExpanded] = hooks.useUncontrolled({
    defaultValue: defaultExpanded,
    value: expanded,
    finalValue: true,
    onChange: onExpandedChange
  });
  const nodes = Array.isArray(code) ? code : [code];
  const currentCode = nodes[value];
  const highlighted = hljs__default.highlight(currentCode.code.trim(), {
    language: currentCode.language
  }).value;
  const files = nodes.map((node, index) => /* @__PURE__ */ React__default.createElement(
    core.UnstyledButton,
    __spreadProps(__spreadValues({}, getStyles("file")), {
      key: node.fileName,
      mod: { active: index === value },
      onClick: () => setValue(index)
    }),
    /* @__PURE__ */ React__default.createElement(
      FileIcon.FileIcon,
      __spreadValues({
        fileIcon: node.icon,
        getFileIcon,
        fileName: node.fileName
      }, getStyles("fileIcon"))
    ),
    /* @__PURE__ */ React__default.createElement("span", null, node.fileName)
  ));
  return /* @__PURE__ */ React__default.createElement(core.Box, __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), { ref }), others), { dir: "ltr" }), withHeader && /* @__PURE__ */ React__default.createElement("div", __spreadValues({}, getStyles("header")), /* @__PURE__ */ React__default.createElement(core.ScrollArea, { type: "never", dir: "ltr", offsetScrollbars: false }, /* @__PURE__ */ React__default.createElement("div", __spreadValues({}, getStyles("files")), files)), /* @__PURE__ */ React__default.createElement("div", __spreadValues({}, getStyles("controls")), withExpandButton && /* @__PURE__ */ React__default.createElement(
    core.Tooltip,
    {
      label: _expanded ? collapseCodeLabel : expandCodeLabel,
      fz: "sm",
      position: "left"
    },
    /* @__PURE__ */ React__default.createElement(
      core.ActionIcon,
      __spreadValues({
        onClick: () => setExpanded(!_expanded),
        variant: "none"
      }, getStyles("control")),
      /* @__PURE__ */ React__default.createElement(ExpandIcon.ExpandIcon, { expanded: _expanded })
    )
  ), /* @__PURE__ */ React__default.createElement(core.CopyButton, { value: currentCode.code.trim() }, ({ copied, copy }) => /* @__PURE__ */ React__default.createElement(core.Tooltip, { label: copied ? copiedLabel : copyLabel, fz: "sm", position: "left" }, /* @__PURE__ */ React__default.createElement(core.ActionIcon, __spreadValues({ onClick: copy, variant: "none" }, getStyles("control")), /* @__PURE__ */ React__default.createElement(CopyIcon.CopyIcon, { copied })))))), /* @__PURE__ */ React__default.createElement(core.ScrollArea, { type: "auto", dir: "ltr", offsetScrollbars: false }, /* @__PURE__ */ React__default.createElement(core.Box, __spreadProps(__spreadValues({}, getStyles("codeWrapper")), { mod: { expanded: _expanded } }), /* @__PURE__ */ React__default.createElement("pre", __spreadValues({}, getStyles("pre")), /* @__PURE__ */ React__default.createElement("code", __spreadProps(__spreadValues({}, getStyles("code")), { dangerouslySetInnerHTML: { __html: highlighted } }))))), /* @__PURE__ */ React__default.createElement(
    core.UnstyledButton,
    __spreadProps(__spreadValues({}, getStyles("showCodeButton")), {
      mod: { hidden: _expanded },
      onClick: () => setExpanded(true)
    }),
    expandCodeLabel
  ));
});
CodeHighlightTabs.displayName = "@mantine/core/CodeHighlightTabs";

exports.CodeHighlightTabs = CodeHighlightTabs;
//# sourceMappingURL=CodeHighlightTabs.js.map
