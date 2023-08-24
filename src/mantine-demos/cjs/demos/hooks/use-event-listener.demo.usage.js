'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState, useCallback } from 'react';
import { Button } from '@mantine/core';
import { useEventListener } from '@mantine/hooks';

function Demo() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);
  const ref = useEventListener('click', increment);
  return <Button ref={ref}>Button clicks: {count}</Button>;
}
`;
function Demo() {
  const [count, setCount] = React.useState(0);
  const increment = React.useCallback(() => setCount((c) => c + 1), []);
  const ref = hooks.useEventListener("click", increment);
  return /* @__PURE__ */ React__default.createElement(core.Button, { ref }, "Button clicks: ", count);
}
const useEventListenerDemo = {
  type: "code",
  code,
  component: Demo,
  centered: true
};

exports.useEventListenerDemo = useEventListenerDemo;
//# sourceMappingURL=use-event-listener.demo.usage.js.map
