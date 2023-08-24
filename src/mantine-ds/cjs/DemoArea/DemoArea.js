'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var DemoArea_module = require('./DemoArea.module.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function DemoArea({
  withPadding = true,
  centered,
  maxWidth,
  minHeight,
  children,
  dimmed,
  striped
}) {
  return /* @__PURE__ */ React__default.createElement(
    core.Box,
    {
      className: DemoArea_module['default'].demo,
      mod: { "with-padding": withPadding, centered, dimmed, striped },
      __vars: {
        "--demo-flex": maxWidth ? "1" : void 0,
        "--demo-max-width": maxWidth ? core.rem(maxWidth) : void 0,
        "--demo-min-height": minHeight ? core.rem(minHeight) : void 0,
        "--demo-margin-y": maxWidth && centered ? "auto" : void 0
      }
    },
    /* @__PURE__ */ React__default.createElement("div", { className: DemoArea_module['default'].demoInner }, children)
  );
}

exports.DemoArea = DemoArea;
//# sourceMappingURL=DemoArea.js.map
