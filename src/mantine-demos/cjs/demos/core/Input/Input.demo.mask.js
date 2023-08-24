'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var reactImask = require('react-imask');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Input } from '@mantine/core';
import { IMaskInput } from 'react-imask';

function Demo() {
  return <Input<any> component={IMaskInput} mask="+7 (000) 000-00-00" placeholder="Your phone" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Input, { component: reactImask.IMaskInput, mask: "+7 (000) 000-00-00", placeholder: "Your phone" });
}
const mask = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code
};

exports.mask = mask;
//# sourceMappingURL=Input.demo.mask.js.map
