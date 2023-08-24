'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Group, Button, Text } from '@mantine/core';
import { useCounter } from '@mantine/hooks';

function Demo() {
  const [count, handlers] = useCounter(0, { min: 0, max: 10 });

  return (
    <>
      <Text>Count: {count}</Text>
      <Group justify="center">
        <Button onClick={handlers.increment}>Increment</Button>
        <Button onClick={handlers.decrement}>Decrement</Button>
        <Button onClick={handlers.reset}>Reset</Button>
        <Button onClick={() => handlers.set(5)}>Set 5</Button>
      </Group>
    </>
  );
}
`;
function Demo() {
  const [count, handlers] = hooks.useCounter(0, { min: 0, max: 10 });
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Text, { size: "md", ta: "center", py: "xs" }, "Count: ", count), /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(core.Button, { variant: "outline", size: "xs", onClick: handlers.increment }, "Increment"), /* @__PURE__ */ React__default.createElement(core.Button, { variant: "outline", size: "xs", onClick: handlers.decrement }, "Decrement"), /* @__PURE__ */ React__default.createElement(core.Button, { variant: "outline", size: "xs", onClick: handlers.reset }, "Reset"), /* @__PURE__ */ React__default.createElement(core.Button, { variant: "outline", size: "xs", onClick: () => handlers.set(5) }, "Set 5")));
}
const useCounterDemo = {
  type: "code",
  code,
  component: Demo
};

exports.useCounterDemo = useCounterDemo;
//# sourceMappingURL=use-counter.demo.usage.js.map
