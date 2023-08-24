'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Text, Code, rem } from '@mantine/core';
import { useResizeObserver } from '@mantine/hooks';

function Demo() {
  const [ref, rect] = useResizeObserver();

  return (
    <>
      <textarea ref={ref} style={{ width: rem(400), height: rem(120) }} />
      <Text ta="center">Rect: <Code>{JSON.stringify(rect)}</Code></Text>
    </>
  );
}`;
function Demo() {
  const theme = core.useMantineTheme();
  const [ref, rect] = hooks.useResizeObserver();
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Text, { ta: "center", size: "sm", mb: "xs" }, "Resize textarea by dragging its right bottom corner"), /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(
    "textarea",
    {
      ref,
      style: {
        width: core.rem(400),
        height: core.rem(120),
        border: "none",
        backgroundColor: "var(--mantine-color-blue-light)",
        position: "relative"
      }
    }
  )), /* @__PURE__ */ React__default.createElement(core.Text, { ta: "center", style: { marginTop: theme.spacing.sm } }, "Rect: ", /* @__PURE__ */ React__default.createElement(core.Code, null, JSON.stringify(rect, null, 2))));
}
const useResizeObserverDemo = {
  type: "code",
  code,
  component: Demo
};

exports.useResizeObserverDemo = useResizeObserverDemo;
//# sourceMappingURL=use-resize-observer.demo.usage.js.map
