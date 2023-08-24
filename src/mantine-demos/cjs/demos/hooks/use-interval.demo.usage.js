'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState, useEffect } from 'react';
import { useInterval } from '@mantine/hooks';
import { Stack, Button, Text } from '@mantine/core';

function Demo() {
  const [seconds, setSeconds] = useState(0);
  const interval = useInterval(() => setSeconds((s) => s + 1), 1000);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, []);

  return (
    <Stack align="center">
      <Text>Page loaded <b>{seconds}</b> seconds ago</Text>
      <Button
        onClick={interval.toggle}
        color={interval.active ? 'red' : 'teal'}
        variant="outline"
      >
        {interval.active ? 'Stop' : 'Start'} counting
      </Button>
    </Stack>
  );
}
`;
function Demo() {
  const [seconds, setSeconds] = React.useState(0);
  const interval = hooks.useInterval(() => setSeconds((s) => s + 1), 1e3);
  React.useEffect(() => {
    interval.start();
    return interval.stop;
  }, []);
  return /* @__PURE__ */ React__default.createElement(core.Stack, { align: "center" }, /* @__PURE__ */ React__default.createElement(core.Text, null, "Page loaded ", /* @__PURE__ */ React__default.createElement("b", null, seconds), " seconds ago"), /* @__PURE__ */ React__default.createElement(core.Button, { onClick: interval.toggle, color: interval.active ? "red" : "teal", variant: "outline" }, interval.active ? "Stop" : "Start", " counting"));
}
const useIntervalDemo = {
  type: "code",
  code,
  component: Demo
};

exports.useIntervalDemo = useIntervalDemo;
//# sourceMappingURL=use-interval.demo.usage.js.map
