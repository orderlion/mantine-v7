'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var DemoColumns_module = require('./DemoColumns.module.css.js');
var DemoArea = require('../DemoArea/DemoArea.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function DemoColumns({
  children,
  withPadding,
  centered,
  maxWidth,
  minHeight,
  title,
  description,
  controls,
  dimmed,
  striped
}) {
  return /* @__PURE__ */ React__default.createElement("div", { className: DemoColumns_module['default'].columns }, /* @__PURE__ */ React__default.createElement(
    DemoArea.DemoArea,
    {
      withPadding,
      maxWidth,
      minHeight,
      centered,
      dimmed,
      striped
    },
    children
  ), /* @__PURE__ */ React__default.createElement("div", { className: DemoColumns_module['default'].controls }, title && /* @__PURE__ */ React__default.createElement("div", { className: DemoColumns_module['default'].header }, /* @__PURE__ */ React__default.createElement(core.Text, { fw: 500, fz: "sm", mb: 5 }, title), description && /* @__PURE__ */ React__default.createElement(core.Text, { c: "dimmed", fz: 11, lh: 1.45 }, description)), controls));
}

exports.DemoColumns = DemoColumns;
//# sourceMappingURL=DemoColumns.js.map
