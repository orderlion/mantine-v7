'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      placeholder="Pick tag from list"
      data={['React', 'Angular', 'Svelte']}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.TagsInput,
    {
      label: "Press Enter to submit a tag",
      placeholder: "Pick tag from list",
      data: ["React", "Angular", "Svelte"]
    }
  );
}
const data = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true
};

exports.data = data;
//# sourceMappingURL=TagsInput.demo.data.js.map
