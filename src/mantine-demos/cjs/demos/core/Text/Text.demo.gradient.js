'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var gradientControls = require('../../../shared/gradient-controls.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = (props) => `
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text
      size="xl"
      fw={900}
      variant="gradient"
      gradient={{ from: '${props.gradientFrom}', to: '${props.gradientTo}', deg: ${props.gradientDegree} }}
    >
      Gradient Text
    </Text>
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React__default.createElement(
    core.Text,
    {
      size: "xl",
      fw: 900,
      variant: "gradient",
      gradient: { from: props.gradientFrom, to: props.gradientTo, deg: props.gradientDegree }
    },
    "Gradient Text"
  );
}
const gradient = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: gradientControls.gradientControls
};

exports.gradient = gradient;
//# sourceMappingURL=Text.demo.gradient.js.map
