'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Button, Text, Group } from '@mantine/core';
import { useForceUpdate, randomId } from '@mantine/hooks';

function Demo() {
  const forceUpdate = useForceUpdate();

  return (
    <Group justify="center">
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </Group>
  );
}
`;
function Demo() {
  const forceUpdate = hooks.useForceUpdate();
  return /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(core.Text, null, hooks.randomId()), /* @__PURE__ */ React__default.createElement(core.Button, { onClick: forceUpdate }, "Force update"));
}
const useForceUpdateDemo = {
  type: "code",
  code,
  component: Demo
};

exports.useForceUpdateDemo = useForceUpdateDemo;
//# sourceMappingURL=use-force-update.demo.usage.js.map
