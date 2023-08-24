'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { CopyButton, Button } from '@mantine/core';

function Demo() {
  return (
    <CopyButton value="https://mantine.dev">
      {({ copied, copy }) => (
        <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
          {copied ? 'Copied url' : 'Copy url'}
        </Button>
      )}
    </CopyButton>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.CopyButton, { value: "https://mantine.dev" }, ({ copied, copy }) => /* @__PURE__ */ React__default.createElement(core.Button, { color: copied ? "teal" : "blue", onClick: copy }, copied ? "Copied url" : "Copy url"));
}
const usage = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

exports.usage = usage;
//# sourceMappingURL=CopyButton.demo.usage.js.map
