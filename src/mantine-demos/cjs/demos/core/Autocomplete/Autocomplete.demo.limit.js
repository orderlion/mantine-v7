'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Autocomplete } from '@mantine/core';

const largeData = Array(100_000)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <Autocomplete
      label="100 000 options autocomplete"
      placeholder="Use limit to optimize performance"
      limit={5}
      data={largeData}
    />
  );
}
`;
const largeData = Array(1e5).fill(0).map((_, index) => `Option ${index}`);
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.Autocomplete,
    {
      label: "100 000 options autocomplete",
      placeholder: "Use limit to optimize performance",
      limit: 5,
      data: largeData
    }
  );
}
const limit = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true
};

exports.limit = limit;
//# sourceMappingURL=Autocomplete.demo.limit.js.map
