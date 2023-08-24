'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Button } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';

function Demo() {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Button
      color={clipboard.copied ? 'teal' : 'blue'}
      onClick={() => clipboard.copy('Hello, world!')}
    >
      {clipboard.copied ? 'Copied' : 'Copy'}
    </Button>
  );
}`;
function Demo() {
  const clipboard = hooks.useClipboard({ timeout: 500 });
  return /* @__PURE__ */ React__default.createElement(
    core.Button,
    {
      color: clipboard.copied ? "teal" : "blue",
      onClick: () => clipboard.copy("Hello, world!")
    },
    clipboard.copied ? "Copied" : "Copy"
  );
}
const useClipboardDemo = {
  type: "code",
  code,
  component: Demo,
  centered: true
};

exports.useClipboardDemo = useClipboardDemo;
//# sourceMappingURL=use-clipboard.usage.demo.js.map
