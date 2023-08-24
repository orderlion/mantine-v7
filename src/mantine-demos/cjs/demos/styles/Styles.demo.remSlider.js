'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Slider } from '@mantine/core';

function Demo() {
  return (
    <Slider
      defaultValue={100}
      min={70}
      max={130}
      onChange={(value) => {
        document.documentElement.style.fontSize = \`\${value}%\`;
      }}
    />
  );
}
`;
function Demo() {
  React.useEffect(
    () => () => {
      document.documentElement.style.fontSize = "100%";
    },
    []
  );
  return /* @__PURE__ */ React__default.createElement(
    core.Slider,
    {
      defaultValue: 100,
      min: 70,
      max: 130,
      onChange: (value) => {
        document.documentElement.style.fontSize = `${value}%`;
      }
    }
  );
}
const remSlider = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code
};

exports.remSlider = remSlider;
//# sourceMappingURL=Styles.demo.remSlider.js.map
