'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var codeHighlight = require('@mantine/code-highlight');
var DemoCode_module = require('./DemoCode.module.css.js');
var TypeScriptIcon = require('../Icons/TypeScriptIcon.js');
var CssIcon = require('../Icons/CssIcon.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function getFileIcon(fileName) {
  if (fileName.endsWith(".ts") || fileName.endsWith(".tsx")) {
    return /* @__PURE__ */ React__default.createElement(TypeScriptIcon.TypeScriptIcon, { size: 18 });
  }
  if (fileName.endsWith(".css")) {
    return /* @__PURE__ */ React__default.createElement(CssIcon.CssIcon, { size: 18 });
  }
  return null;
}
function DemoCode({ code, defaultExpanded = true }) {
  const _code = typeof code === "string" ? { code, fileName: "Demo.tsx", language: "tsx" } : code;
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, _code && /* @__PURE__ */ React__default.createElement(
    codeHighlight.CodeHighlightTabs,
    {
      code: _code,
      className: DemoCode_module['default'].code,
      getFileIcon,
      withExpandButton: true,
      defaultExpanded
    }
  ));
}

exports.DemoCode = DemoCode;
exports.getFileIcon = getFileIcon;
//# sourceMappingURL=DemoCode.js.map
