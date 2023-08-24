'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useHover } from '@mantine/hooks';

function Demo() {
  const { hovered, ref } = useHover();
  return (
    <div ref={ref}>
      {hovered ? 'I am hovered' : 'Put mouse over me please'}
    </div>
  );
}
`;
function Demo() {
  const { hovered, ref } = hooks.useHover();
  return /* @__PURE__ */ React__default.createElement(
    "div",
    {
      ref,
      style: {
        height: core.rem(60),
        backgroundColor: "var(--mantine-color-blue-light)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    },
    /* @__PURE__ */ React__default.createElement(core.Text, null, hovered ? "I am hovered" : "Put mouse over me please")
  );
}
const useHoverDemo = {
  type: "code",
  component: Demo,
  code
};

exports.useHoverDemo = useHoverDemo;
//# sourceMappingURL=use-hover.demo.usage.js.map
