'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { TagsInput } from '@mantine/core';

const data = Array(100)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <>
      <TagsInput
        label="With scroll area (default)"
        placeholder="Pick value or enter anything"
        data={data}
        maxDropdownHeight={200}
      />

      <TagsInput
        label="With native scroll"
        placeholder="Pick value or enter anything"
        data={data}
        withScrollArea={false}
        styles={{ dropdown: { maxHeight: 200, overflowY: 'auto' } }}
        mt="md"
      />
    </>
  );
}
`;
const data = Array(100).fill(0).map((_, index) => `Option ${index}`);
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(
    core.TagsInput,
    {
      label: "With scroll area (default)",
      placeholder: "Pick value or enter anything",
      data,
      maxDropdownHeight: 200
    }
  ), /* @__PURE__ */ React__default.createElement(
    core.TagsInput,
    {
      label: "With native scroll",
      placeholder: "Pick value or enter anything",
      data,
      withScrollArea: false,
      styles: { dropdown: { maxHeight: 200, overflowY: "auto" } },
      mt: "md"
    }
  ));
}
const scrollArea = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true
};

exports.scrollArea = scrollArea;
//# sourceMappingURL=TagsInput.demo.scrollArea.js.map
