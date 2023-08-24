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
      description="Add up to 3 tags"
      placeholder="Enter tag"
      maxTags={3}
      defaultValue={['first', 'second']}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.TagsInput,
    {
      label: "Press Enter to submit a tag",
      description: "Add up to 3 tags",
      placeholder: "Enter tag",
      maxTags: 3,
      defaultValue: ["first", "second"]
    }
  );
}
const maxTags = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true
};

exports.maxTags = maxTags;
//# sourceMappingURL=TagsInput.demo.maxTags.js.map
