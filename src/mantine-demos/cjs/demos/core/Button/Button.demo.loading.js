'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Button loading>Filled button</Button>
      <Button variant="light" loading>
        Light button
      </Button>
      <Button variant="outline" loading>
        Outline button
      </Button>
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, null, /* @__PURE__ */ React__default.createElement(core.Button, { loading: true }, "Filled button"), /* @__PURE__ */ React__default.createElement(core.Button, { variant: "light", loading: true }, "Light button"), /* @__PURE__ */ React__default.createElement(core.Button, { variant: "outline", loading: true }, "Outline button"));
}
const loading = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

exports.loading = loading;
//# sourceMappingURL=Button.demo.loading.js.map
