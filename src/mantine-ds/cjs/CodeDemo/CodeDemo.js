'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var DemoRoot = require('../DemoRoot/DemoRoot.js');
var DemoArea = require('../DemoArea/DemoArea.js');
var DemoCode = require('../DemoCode/DemoCode.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function CodeDemo({
  code,
  children,
  withPadding,
  centered,
  defaultExpanded = true,
  maxWidth,
  minHeight,
  dimmed,
  striped
}) {
  return /* @__PURE__ */ React__default.createElement(DemoRoot.DemoRoot, null, /* @__PURE__ */ React__default.createElement(
    DemoArea.DemoArea,
    {
      withPadding,
      centered,
      maxWidth,
      minHeight,
      dimmed,
      striped
    },
    children
  ), /* @__PURE__ */ React__default.createElement(DemoCode.DemoCode, { code, defaultExpanded }));
}

exports.CodeDemo = CodeDemo;
//# sourceMappingURL=CodeDemo.js.map
