'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Checkbox, Anchor } from '@mantine/core';

function Demo() {
  return (
    <Checkbox
      label={
        <>
          I accept{' '}
          <Anchor href="https://mantine.dev" target="_blank" inherit>
            terms and conditions
          </Anchor>
        </>
      }
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.Checkbox,
    {
      label: /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, "I accept", " ", /* @__PURE__ */ React__default.createElement(core.Anchor, { href: "https://mantine.dev", target: "_blank", inherit: true }, "terms and conditions"))
    }
  );
}
const anchor = {
  type: "code",
  component: Demo,
  code
};

exports.anchor = anchor;
//# sourceMappingURL=Checkbox.demo.anchor.js.map
