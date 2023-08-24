'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useHash, randomId } from '@mantine/hooks';
import { Button, Text, Code } from '@mantine/core';

function Demo() {
  const [hash, setHash] = useHash();
  return (
    <>
      <Button onClick={() => setHash(randomId())}>Set hash to random string</Button>
      <Text>Current hash: <Code>{hash}</Code></Text>
    </>
  );
}`;
function Demo() {
  const [hash, setHash] = hooks.useHash();
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(core.Button, { onClick: () => setHash(hooks.randomId()) }, "Set hash to random string")), /* @__PURE__ */ React__default.createElement(core.Text, { ta: "center", mt: "md" }, "Current hash: ", /* @__PURE__ */ React__default.createElement(core.Code, null, hash)));
}
const useHashDemo = {
  type: "code",
  code,
  component: Demo
};

exports.useHashDemo = useHashDemo;
//# sourceMappingURL=use-hash.demo.usage.js.map
