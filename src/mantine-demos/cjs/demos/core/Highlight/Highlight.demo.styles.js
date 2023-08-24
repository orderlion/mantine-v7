'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight
      ta="center"
      highlight={['highlighted', 'default']}
      highlightStyles={{
        backgroundImage:
          'linear-gradient(45deg, var(--mantine-color-cyan-5), var(--mantine-color-indigo-5))',
        fontWeight: 700,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      You can change styles of highlighted part if you do not like default styles
    </Highlight>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.Highlight,
    {
      ta: "center",
      highlight: ["highlighted", "default"],
      highlightStyles: {
        backgroundImage: "linear-gradient(45deg, var(--mantine-color-cyan-5), var(--mantine-color-indigo-5))",
        fontWeight: 700,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }
    },
    "You can change styles of highlighted part if you do not like default styles"
  );
}
const styles = {
  type: "code",
  code,
  component: Demo
};

exports.styles = styles;
//# sourceMappingURL=Highlight.demo.styles.js.map
