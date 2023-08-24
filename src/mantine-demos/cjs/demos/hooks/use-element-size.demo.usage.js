'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useElementSize } from '@mantine/hooks';
import { rem } from '@mantine/core';

function Demo() {
  const { ref, width, height } = useElementSize();

  return (
    <>
      <textarea ref={ref} style={{ width: rem(400), height: rem(120) }} />
      <div>Width: {width}, height: {height}</div>
    </>
  );
}`;
function Demo() {
  const theme = core.useMantineTheme();
  const { ref, width, height } = hooks.useElementSize();
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Text, { ta: "center", size: "sm", style: { marginBottom: theme.spacing.xs } }, "Resize textarea by dragging its right bottom corner"), /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(
    "textarea",
    {
      ref,
      style: {
        width: core.rem(400),
        height: core.rem(120),
        border: "none",
        backgroundColor: "var(--mantine-color-body)",
        position: "relative"
      }
    }
  )), /* @__PURE__ */ React__default.createElement(core.Text, { ta: "center", mt: "sm" }, "Width: ", width, ", height: ", height));
}
const useElementSizeDemo = {
  type: "code",
  code,
  component: Demo,
  dimmed: true
};

exports.useElementSizeDemo = useElementSizeDemo;
//# sourceMappingURL=use-element-size.demo.usage.js.map
