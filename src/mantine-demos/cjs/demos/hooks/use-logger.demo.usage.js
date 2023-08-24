'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { useLogger } from '@mantine/hooks';
import { Button } from '@mantine/core';

function Demo() {
  const [count, setCount] = useState(0);
  useLogger('Demo', [{ count, hello: 'world' }]);
  return <Button onClick={() => setCount((c) => c + 1)}>Update state ({count})</Button>;
}
`;
function Demo() {
  const [count, setCount] = React.useState(0);
  hooks.useLogger("Demo", [{ count, hello: "world" }]);
  return /* @__PURE__ */ React__default.createElement(core.Button, { onClick: () => setCount((c) => c + 1) }, "Update state (", count, ")");
}
const useLoggerDemo = {
  type: "code",
  code,
  component: Demo,
  centered: true
};

exports.useLoggerDemo = useLoggerDemo;
//# sourceMappingURL=use-logger.demo.usage.js.map
