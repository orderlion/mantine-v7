'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Select } from '@mantine/core';

const largeData = Array(100_000)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <Select
      label="100 000 options autocomplete"
      placeholder="Use limit to optimize performance"
      limit={5}
      data={largeData}
      searchable
    />
  );
}
`;
const largeData = Array(1e5).fill(0).map((_, index) => `Option ${index}`);
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.Select,
    {
      label: "100 000 options autocomplete",
      placeholder: "Use limit to optimize performance",
      limit: 5,
      data: largeData,
      searchable: true
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
//# sourceMappingURL=Select.demo.limit.js.map
