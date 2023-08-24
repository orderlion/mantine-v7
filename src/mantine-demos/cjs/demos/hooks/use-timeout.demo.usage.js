'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Button, Text, Group } from '@mantine/core';
import { randomId, useTimeout } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useState('');
  const { start, clear } = useTimeout(() => setValue(randomId()), 1000);

  return (
    <Group>
      <Button onClick={start}>Start</Button>
      <Button onClick={clear} color="red">
        Clear
      </Button>
      <Text>Random value: {value}</Text>
    </Group>
  );
}
`;
function Demo() {
  const [value, setValue] = React.useState("");
  const { start, clear } = hooks.useTimeout(() => setValue(hooks.randomId()), 1e3);
  return /* @__PURE__ */ React__default.createElement(core.Group, null, /* @__PURE__ */ React__default.createElement(core.Button, { onClick: start }, "Start"), /* @__PURE__ */ React__default.createElement(core.Button, { onClick: clear, color: "red" }, "Clear"), /* @__PURE__ */ React__default.createElement(core.Text, null, "Random value: ", value));
}
const useTimeoutDemo = {
  type: "code",
  code,
  component: Demo
};

exports.useTimeoutDemo = useTimeoutDemo;
//# sourceMappingURL=use-timeout.demo.usage.js.map
