'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button loading loaderProps={{ type: 'dots' }}>
      Loading button
    </Button>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Button, { loading: true, loaderProps: { type: "dots" } }, "Loading button");
}
const loaderProps = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

exports.loaderProps = loaderProps;
//# sourceMappingURL=Button.demo.loaderProps.js.map
