'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Container } from '@mantine/core';

function Demo() {
  return (
    <Container fluid h={50} bg="var(--mantine-color-blue-light)">
      Fluid container has 100% max-width
    </Container>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Container, { fluid: true, h: 50, bg: "var(--mantine-color-blue-light)" }, "Fluid container has 100% max-width");
}
const fluid = {
  type: "code",
  component: Demo,
  code
};

exports.fluid = fluid;
//# sourceMappingURL=Container.demo.fluid.js.map
