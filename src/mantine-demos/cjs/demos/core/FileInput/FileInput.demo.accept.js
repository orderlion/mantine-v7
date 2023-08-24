'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <FileInput accept="image/png,image/jpeg" label="Upload files" placeholder="Upload files" />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.FileInput, { accept: "image/png,image/jpeg", label: "Upload files", placeholder: "Upload files" });
}
const accept = {
  type: "code",
  code,
  component: Demo,
  centered: true,
  maxWidth: 340
};

exports.accept = accept;
//# sourceMappingURL=FileInput.demo.accept.js.map
